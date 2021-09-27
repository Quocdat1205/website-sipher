// * DESCRIPTION:

import { Img } from "@chakra-ui/image"
import { Box, Flex, Grid } from "@chakra-ui/layout"
import { MyText, GradientButton } from "@sipher/web-components"
import { useRouter } from "next/router"

interface NotFoundUIProps {}

const NotFoundUI = ({}: NotFoundUIProps) => {
    const router = useRouter()
    return (
        <Grid
            bg="black"
            w="full"
            placeItems="center"
            h="100vh"
            bgImage="/images/pc/home/homenew2.png"
            bgSize="contain"
            align="center"
        >
            <Flex direction="column" align="center">
                <Box h="8rem" mb={4} overflow="hidden" cursor="pointer" onClick={() => router.push("/")}>
                    <Img src="/images/general/logo512.png" h="full" />
                </Box>
                <MyText fontSize={["xl", "2xl"]} textTransform="uppercase" color="main.yellow" fontWeight="bold" mb={4}>
                    {`Look like you've lost!`}
                </MyText>
                <GradientButton text="Home" onClick={() => router.push("/")} />
            </Flex>
        </Grid>
    )
}

export default NotFoundUI
