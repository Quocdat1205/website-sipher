import { Grid } from "@chakra-ui/layout"
import { BackgroundContainer } from "@components/shared"

interface EndedProps {}

const Ended = ({}: EndedProps) => {
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
                Sale is ended.
            </Grid>
        </BackgroundContainer>
    )
}

export default Ended
