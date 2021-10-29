import { checkSmartContract } from "@api/smartContract";
import { PUBLIC_CAP, PUBLIC_MINTING_LIMIT } from "@constant/index";
import { getMetamaskBalance } from "@helper/metamask";
import { getPublicCurrentPrice, sendSmartContract } from "@helper/smartContract";
import useSaleConfig from "@hooks/useSaleConfig";
import useTimeAndPrice from "@components/UI/PublicSale/useTimeAndPrice";
import useWalletContext from "@hooks/useWalletContext";
import { useState } from "react";
import { useQueryClient } from "react-query";
import useSaleRecord from "@hooks/useSaleRecord";
import { useTimer } from "react-timer-hook";

const usePublicSale = () => {
  const { states, toast, userRecord, isLoadingUserRecord } = useWalletContext();
  const { saleConfig, salePhaseName, salePhase } = useSaleConfig();
  const queryClient = useQueryClient();
  const [isMinting, setIsMinting] = useState(false);
  const [slot, setSlot] = useState(0);
  const [pendingSlot, setPendingSlot] = useState(0);
  const [maxSlot, setMaxSlot] = useState(PUBLIC_CAP - ((userRecord ? userRecord.publicBought : 0) + pendingSlot));
  const isOnSale = salePhaseName === "PUBLIC_SALE";
  const timeAndPrice = useTimeAndPrice({
    publicTime: saleConfig!.publicTime,
    publicEndTime: saleConfig!.publicEndTime,
  });
  const isPriceDecreasing = timeAndPrice.currentPublicPrice > 0.1 && isOnSale;
  const { publicSale: publicSaleRecord } = useSaleRecord();
  const currentPhase: "NOT_STARTED" | "ENDED" | "ON_GOING" =
    salePhase < 2 ? "NOT_STARTED" : salePhase > 2 ? "ENDED" : "ON_GOING";
  console.log("phase", currentPhase);
  const endSaleTimer = useTimer({ expiryTimestamp: new Date(saleConfig.publicEndTime) });
  const startSaleTimer = useTimer({ expiryTimestamp: new Date(saleConfig.publicTime) });
  const timer = currentPhase === "NOT_STARTED" ? startSaleTimer : endSaleTimer;
  const isOnTier = timeAndPrice.currentPublicPrice >= 0.55;

  const mint = async (currentPrice: number) => {
    let slotPrice = parseFloat((slot * currentPrice).toFixed(2));
    const {
      accountLogin: address,
      whitelistInfo: { freeMintCap, privateCap, proof },
    } = states;
    await sendSmartContract({ address, slot, slotPrice, proof, privateCap, freeMintCap });
    toast({ status: "success", title: "Transaction created successfully!", duration: 6000 });
    setSlot(0);
  };
  const handleMint = async () => {
    const currentPrice = await getPublicCurrentPrice();
    setMaxSlot(PUBLIC_CAP - ((userRecord ? userRecord.publicBought : 0) + slot+pendingSlot));
    setPendingSlot(pendingSlot +slot);
    /** Check for balance */
    const balance = await getMetamaskBalance(states.accountLogin);
    if (balance < currentPrice) {
      toast({ status: "error", title: "Insufficient balance!" });
      return;
    }

    /** Check Smart Contract */
    let checkSC = await checkSmartContract(states.accountLogin);
    if (!checkSC) {
      toast({ status: "error", title: "Failed to check smart contract!" });
      return;
    }

    /** Check public cap overflow */
    if (publicSaleRecord + slot > PUBLIC_MINTING_LIMIT) {
      toast({ status: "error", title: "Failed to mint!", message: "Public sale capacity overflow." });
    }

    /** Start minting if there's nothing wrong */
    try {
      setSlot(0);
      await mint(currentPrice);
      queryClient.invalidateQueries("total-supply");
      queryClient.invalidateQueries("user-record");
      setMaxSlot(PUBLIC_CAP - ((userRecord ? userRecord.publicBought : 0) + slot));
      setPendingSlot(pendingSlot - slot);
      setIsMinting(false);
    } catch (error) {
      console.log(error);
      setMaxSlot(PUBLIC_CAP - (userRecord ? userRecord.publicBought : 0));
      setSlot(0);
      setPendingSlot(pendingSlot - slot);
      toast({ status: "error", title: "Something went wrong!", message: "Try again later." });
      setIsMinting(false);
    }
  };

  const handleRefresh = () => {
    queryClient.invalidateQueries("user-record");
    setPendingSlot(0);
    setMaxSlot(PUBLIC_CAP - (userRecord ? userRecord.publicBought : 0));
  };

  return {
    slot,
    setSlot,
    maxSlot,
    userRecord,
    isMinting,
    handleMint,
    handleRefresh,
    pendingSlot,
    isOnSale,
    isLoadingUserRecord,
    timeAndPrice,
    currentPhase,
    timer,
    isPriceDecreasing,
    isOnTier,
  };
};

export default usePublicSale;
