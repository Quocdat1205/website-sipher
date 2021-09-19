import { Box, Flex } from "@chakra-ui/react"
import { BsExclamationTriangle } from "react-icons/bs"
import { MyHeading, MyButton } from "@sipher/web-components"
import DesciptionLogin from "./DesciptionLogin"

const FirstForm = ({ handleRedirect }) => {
    return (
        <Flex flexDir="column" p="4">
            <Box>
                <MyHeading>Step-by-step to create & connect wallet</MyHeading>
            </Box>
            <Box mt="4">
                <DesciptionLogin color="yellow.400">
                    1. Select a wallet provider{" "}
                    <span style={{ color: "gold" }}>
                        <u>
                            <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer">
                                Metamask
                            </a>
                        </u>
                    </span>
                </DesciptionLogin>
                <DesciptionLogin color="yellow.400">2. Download a wallet extension</DesciptionLogin>
                <DesciptionLogin color="yellow.400">
                    3. Follow the instruction to set up your wallet account
                </DesciptionLogin>
                <DesciptionLogin color="yellow.400">
                    4. Reload Sipher page and connect wallet via extension
                </DesciptionLogin>
            </Box>
            <Flex flexDir="row" mt="4">
                <BsExclamationTriangle size="1.4rem" color="red" />
                <DesciptionLogin flex="1" ml="4">
                    While creating your wallet, be sure to keep your private key safe. It’s presented as a random
                    12-word phrase. Keep it in a secure location. If you lose or forget this 12-word phrase you might
                    lose your wallet and all asset within.
                </DesciptionLogin>
            </Flex>
            <Flex justify="center" mt="6">
                <MyButton
                    colorScheme="red"
                    borderColor="whiteAlpha.800"
                    border="1px"
                    borderTopLeftRadius="0"
                    borderBottomRightRadius="0"
                    borderTopRightRadius="xl"
                    borderBottomLeftRadius="xl"
                    px="6"
                    color="whiteAlpha.800"
                    bgGradient="linear(to-r, #580e19, #880e21, #be112b, #880e21 , #580e19)"
                    onClick={() => handleRedirect()}
                >
                    CONNECT NOW
                </MyButton>
            </Flex>
        </Flex>
    )
}

export default FirstForm
