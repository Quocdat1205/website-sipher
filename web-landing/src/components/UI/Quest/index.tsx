// * DESCRIPTION:

import { Flex, Box, Stack, Button } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import React from "react"
import axios from "axios"
import { useRouter } from "next/router"

const Quest = () => {
    const client_id = "922334113774592032"
    const code = "htHpUrQhUFh5nh4q32lZjzal8kuU6R"
    const client_secret = "Wmw_CMKXL4p01SsK_nby7Vb0Wj8qE8R4"
    const router = useRouter()

    const handlePost = async () => {
        const token = await axios.post(`https://discord.com/api/oauth2/token`, {
            client_id,
            client_secret,
            grant_type: "authorization_code",
            code,
            redirect_uri: "http%3A%2F%2Flocalhost%3A3000%2F",
        })
        console.log(token)
    }

    const getData = () => {
        axios.get(
            `https://discord.com/oauth2/authorize?client_id=${client_id}&scope=email&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F`,
            {
                headers: "Bearer: ",
            }
        )
    }

    return (
        <Flex direction="column" align="center" w="full">
            <Box w="full" maxW="64rem" px={4}>
                <Typo.Heading mb={2}>Quest</Typo.Heading>
                <Typo.BoldText mb={6} zIndex={1} textAlign="center">
                    DONEC VIVERIA MESUAS
                </Typo.BoldText>
                <Stack w="full" h="full" spacing={4}>
                    <Button
                        color="black"
                        onClick={() =>
                            router.push(
                                `https://discord.com/api/oauth2/authorize?client_id=${client_id}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify`
                            )
                        }
                    >
                        Test Login
                    </Button>
                    <Button color="black" onClick={handlePost}>
                        Test get Token
                    </Button>
                    <Button color="black" onClick={getData}>
                        Test get data
                    </Button>
                </Stack>
            </Box>
        </Flex>
    )
}

export default Quest
