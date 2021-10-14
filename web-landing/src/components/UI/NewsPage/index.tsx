// * DESCRIPTION:

import { Flex, Box } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import HeaderBackground from "@components/shared/HeaderBackground"
import React from "react"
import NewsBody from "./NewsBody"

interface NewsUIProps {}

const NewsUI = ({}: NewsUIProps) => {
    return (
        <BackgroundContainer px={0}>
            <HeaderBackground
                isCoatedBg
                title="NEWS"
                srcImg="/images/pc/bg-title1.png"
                description="Sipheria worlds news at your fingertips!"
            />
            <NewsBody />
        </BackgroundContainer>
    )
}

export default NewsUI
