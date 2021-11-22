import { HStack } from "@chakra-ui/layout"
import React from "react"
import UrlCopier from "./UrlCopier"
import ButtonLinkTo from "./ButtonLinkTo"
import { DetailsNewsProps } from "./PopupCard"

interface Props {
    details: DetailsNewsProps
}

const FooterPopupCard = ({ details }: Props) => {
    return (
        <HStack spacing={8} px={8} py={4} borderTop="1px" borderColor="about.textGray">
            <UrlCopier url={window.location.href} />
            <ButtonLinkTo url={details.link} typeSocial={details.type} />
        </HStack>
    )
}

export default FooterPopupCard
