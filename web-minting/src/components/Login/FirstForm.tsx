import { HStack, Button, Box, Flex, Text } from "@chakra-ui/react";
import { IoWarningOutline } from "react-icons/io5";

const FirstForm = ({ handleRedirect }) => {
	return (
		<Flex flexDir="column" p="4">
			<Box>
				<Text fontSize="1.2rem">Step-by-step to create & connect wallet</Text>
			</Box>
			<Box mt="4">
				<Text color="yellow.400" fontSize="1rem">
					1. Select a wallet provider{" "}
					<span style={{ color: "gold" }}>
						<u>
							<a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer">
								Metamask
							</a>
						</u>
					</span>
				</Text>
				<Text color="yellow.400" fontSize="1rem">
					2. Download a wallet extension
				</Text>
				<Text color="yellow.400" fontSize="1rem">
					3. Follow the instruction to set up your wallet account
				</Text>
				<Text color="yellow.400" fontSize="1rem">
					4. Reload Sipher page and connect wallet via extension
				</Text>
			</Box>
			<Flex flexDir="row" mt="4">
				<IoWarningOutline size="1rem" color="red" />
				<Text flex="1" ml="4" fontSize="1rem">
					While creating your wallet, be sure to keep your private key safe. It’s presented as a random
					12-word phrase. Keep it in a secure location. If you lose or forget this 12-word phrase you might
					lose your wallet and all asset within.
				</Text>
			</Flex>
			<Flex justify="center" mt="6">
				<Button
					colorScheme="red"
					borderColor="whiteAplha.800"
					border="1px"
					borderTopLeftRadius="0"
					borderBottomRightRadius="0"
					borderTopRightRadius="1rem"
					borderBottomLeftRadius="1rem"
					px="6"
					color="whiteAlpha.800"
					bgGradient="linear(to-r, #580e19, #880e21, #be112b, #880e21 , #580e19)"
					onClick={() => handleRedirect()}
				>
					CONNECT NOW
				</Button>
			</Flex>
		</Flex>
	);
};

export default FirstForm;
