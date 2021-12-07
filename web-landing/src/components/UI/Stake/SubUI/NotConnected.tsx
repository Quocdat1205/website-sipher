import { Flex, Grid, useDisclosure } from "@chakra-ui/react"
import { BackgroundContainer, WalletButton } from "@components/shared"

interface NotConnectedProps {}

const NotConnected = ({}: NotConnectedProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            h="100vh"
            bgColor="#090909"
        >
            <Grid pt={8} pb={8} h="100vh" maxH="1080px" placeItems="center">
                <Flex>
                    <WalletButton />
                </Flex>
            </Grid>
        </BackgroundContainer>
    )
}

export default NotConnected
