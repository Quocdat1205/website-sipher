import { Grid } from "@chakra-ui/layout"
import { BackgroundContainer, WalletButton } from "@components/shared"

interface NotConnectedProps {}

const NotConnected = ({}: NotConnectedProps) => {
    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            h="100vh"
            pt={24}
            pb={16}
            bgColor="#090909"
        >
            <Grid h="full" placeItems="center">
                <WalletButton />
            </Grid>
        </BackgroundContainer>
    )
}

export default NotConnected
