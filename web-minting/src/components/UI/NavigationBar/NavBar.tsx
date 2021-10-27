// * DESCRIPTION:
import { BaseNavigationBar } from "@sipher/web-components";
import AccountAddress from "./AccountAddress";
import useWalletContext from "@hooks/useWalletContext";

interface NavBarProps {}

export const navMenus = [
  { id: "Public Sale", path: "/public-sale" },
  { id: "Private Sale", path: "/private-sale" },
  { id: "Free Minting", path: "/free-minting" },
  { id: "Inventory", path: "/inventory" },
];

export const NavBar = ({}: NavBarProps) => {
  const { states } = useWalletContext();

  return (
    <BaseNavigationBar
      logoPath="/images/logonew.svg"
      menus={navMenus.filter(
        (item) => (item.id !== "Private Sale" && item.id !== "Free Minting") || states.whitelistInfo.proof.length > 0
      )}
    >
      <AccountAddress />
    </BaseNavigationBar>
  );
};
