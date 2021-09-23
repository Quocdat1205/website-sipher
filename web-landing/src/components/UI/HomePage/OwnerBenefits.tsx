import { Wrap } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { TextContainer } from "@components/shared"
import React from "react"
import IconBenefit from "./IconBenefit"

interface Props {}

const OwnerBenefits = (props: Props) => {
    return (
        <TextContainer headline={<chakra.span color="white">Owner Benefits</chakra.span>}>
            <Wrap spacing={8} mt="8">
                <IconBenefit
                    imgSrc="./images/pc/home/iconbenefits/sipher.png"
                    title="World of sipheria as a comic series (Bi-Weekly release)"
                />
                <IconBenefit
                    imgSrc="./images/pc/home/iconbenefits/umbrella.png"
                    title="Free Spaceship loots' NFT drop to make your in-game!"
                />
                <IconBenefit imgSrc="./images/pc/home/iconbenefits/github.png" title="Exclusive channel & news" />
                <IconBenefit imgSrc="./images/pc/home/iconbenefits/thor.png" title="Next race's whitelist fast track" />
                <IconBenefit imgSrc="./images/pc/home/iconbenefits/tick.png" title="Collector Program" />
            </Wrap>
        </TextContainer>
    )
}

export default OwnerBenefits
