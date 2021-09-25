import { Grid } from "@chakra-ui/react"
import ProgressBar from "@components/shared/ProgressBar"
import type { NextPage } from "next"

const TestPage: NextPage = () => {
    return (
        <Grid w="full" h="100vh" placeItems="center" bg="gray.900">
            <ProgressBar />
        </Grid>
    )
}

export default TestPage
