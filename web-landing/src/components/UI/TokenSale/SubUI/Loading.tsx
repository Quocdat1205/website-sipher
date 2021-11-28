import { Grid } from "@chakra-ui/layout"
import { BackgroundContainer } from "@components/shared"

interface LoadingProps {}

const Loading = ({}: LoadingProps) => {
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
                Loading
            </Grid>
        </BackgroundContainer>
    )
}

export default Loading
