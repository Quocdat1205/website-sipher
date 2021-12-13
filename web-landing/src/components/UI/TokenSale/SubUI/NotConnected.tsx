import { Grid } from "@chakra-ui/react"
import { BackgroundContainer, WalletButton } from "@components/shared"

const NotConnected = () => {
    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            h="100vh"
            bgColor="#090909"
        >
            <Grid pt={24} pb={16} h="100vh" maxH="1080px" placeItems="center">
                <WalletButton />
            </Grid>
        </BackgroundContainer>
    )
}

export default NotConnected
