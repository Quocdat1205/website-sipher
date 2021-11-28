import { Grid } from "@chakra-ui/layout"
import { BackgroundContainer } from "@components/shared"

interface NotStartedProps {}

const NotStarted = ({}: NotStartedProps) => {
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
                Sale is not started
            </Grid>
        </BackgroundContainer>
    )
}

export default NotStarted
