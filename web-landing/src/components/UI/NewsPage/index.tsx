// * DESCRIPTION:

import { Flex, Box } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import HeaderBackground from "@components/shared/HeaderBackground"
import React from "react"
import NewsBody from "./NewsBody"

interface NewsUIProps {}

const NewsUI = ({}: NewsUIProps) => {
    return (
        <BackgroundContainer px={0} className="news-ui" backgroundColor="blue.400">
            <HeaderBackground
                isChangeBG
                title="NEWS"
                srcImg="/images/pc/bg-title1.png"
                description="DONEC VIVERRA, METUS EU CONDIMENTUM"
            />
            <NewsBody />
        </BackgroundContainer>
    )
}

export default NewsUI
