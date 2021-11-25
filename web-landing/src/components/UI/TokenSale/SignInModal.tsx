import { Box, Image, Flex, HStack } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typography"
import { setSignIn } from "@hooks/web3/utils"
import { GradientButton } from "@sipher/web-components"
import router, { useRouter } from "next/router"
import React from "react"

interface Props {
    onClose: () => void
}

const SignInModal = ({ onClose }: Props) => {
    const router = useRouter()
    const handleSign = () => {
        setSignIn("true")
        onClose()
    }

    return (
        <Flex
            border="1px"
            borderColor="border.gray"
            rounded="lg"
            py={10}
            px={20}
            flexDir="column"
            align="center"
            justify="center"
        >
            <Typo.Text py={4} textAlign="left" size="large" fontWeight={600}>
                JUST A SEC!
            </Typo.Text>
            <Image h="14rem" src="/images/pc/token_sale/modal-sign.png" alt="" />
            <Box>
                <Typo.Text py={4} textAlign="center" size="medium">
                    Please confirm you are not American, Chinese, North Korean or Iranian before performing KYC!
                </Typo.Text>
                <Typo.Text py={4} textAlign="center" size="small" color="#9B9E9D">
                    Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam quia accusamus cumque
                    animi natus dolor? Iusto odit fugiat libero, est veritatis harum iure maxime aut iste odio, unde
                    corrupti.
                </Typo.Text>
            </Box>
            <Flex flexDir="row" mt={4} px={4} justify="space-between" w="full">
                <GradientButton
                    flex={1}
                    px={8}
                    rounded="full"
                    bg="border.gray"
                    textTransform="none"
                    text="NEVERMIND"
                    onClick={() => router.push("/")}
                />
                <GradientButton
                    ml={10}
                    flex={1}
                    px={8}
                    rounded="full"
                    textTransform="none"
                    text="CONFIRM"
                    onClick={handleSign}
                />
            </Flex>
        </Flex>
    )
}

export default SignInModal
