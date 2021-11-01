import { Box } from "@chakra-ui/react";
import React, { Fragment } from "react";
import useTotalSupply from "@hooks/useTotalSupply";
import { numberWithCommas } from "@utils/index";
import { MyText } from "@sipher/web-components";
import useSaleConfig from "@hooks/useSaleConfig";

interface Props {}

const TotalSupply = ({}: Props) => {
    const { totalSupply, isLoading } = useTotalSupply();
    const { salePhase } = useSaleConfig();

    return (
        <Fragment>
            {salePhase >= 4 ? (
                <Box>
                    <MyText
                        bgGradient="linear(to-b, bgGradient.orange)"
                        backgroundClip="text"
                        fontWeight="bold"
                        fontFamily="Brandon"
                    >
                        {!isLoading && totalSupply ? numberWithCommas(totalSupply) : "..."} / 10000 NFTs
                    </MyText>
                </Box>
            ) : null}
        </Fragment>
    );
};

export default TotalSupply;
