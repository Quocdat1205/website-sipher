import { Box, Flex, chakra } from "@chakra-ui/react"
import { BsInfoCircleFill } from "react-icons/bs"
import { GradientButton, MyHeading, MyText } from "@sipher/web-components"

const MetaMaskTutorial = ({ onConnectClick }) => {
    return (
        <Flex
            sx={{
                "@media (max-width: 960px)": {
                    display: "none",
                },
            }}
            flexDir="column"
            p="4"
        >
            <MyHeading>Step-by-step to create & connect wallet</MyHeading>
            <Box mt="4">
                <MyText>
                    1. Install Metamask extension{" "}
                    <chakra.span
                        as="a"
                        href="https://metamask.io/download.html"
                        target="_blank"
                        rel="noreferrer"
                        fontWeight="bold"
                        textDecor="underline"
                    >
                        HERE
                    </chakra.span>
                </MyText>
                <MyText>2. Follow the instruction to set up your wallet account</MyText>
                <MyText>3. Reload this page and connect to your wallet</MyText>
                {/* <DesciptionLogin color="yellow.400">
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
				</DesciptionLogin> */}
            </Box>
            <Flex flexDir="row" mt="4">
                <Box color="main.yellow">
                    <BsInfoCircleFill size="1.4rem" />
                </Box>
                <MyText flex={1} ml={4}>
                    When you created your first ethereum wallet, be sure to keep your mnemonic (presented as a random
                    12-word phrase) at someplace safe. If you lose or forget the mnemonic, you might lose your wallet
                    and all asset within.
                </MyText>
                {/* <MyText flex="1" ml="4">
                    While creating your wallet, be sure to keep your private key safe. It’s presented as a random
                    12-word phrase. Keep it in a secure location. If you lose or forget this 12-word phrase you might
                    lose your wallet and all asset within.
                </MyText> */}
            </Flex>
            <Flex justify="center" mt="6">
                <GradientButton onClick={onConnectClick} text="Connect Now" w="fit-content" px={8} />
            </Flex>
        </Flex>
    )
}

export default MetaMaskTutorial
