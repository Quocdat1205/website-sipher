// * DESCRIPTION:

import { Flex, Box, Heading, Button } from "@chakra-ui/react"
import { useMutation, useQuery, useQueryClient } from "react-query"
import React from "react"
import axios from "axios"
import { useRouter } from "next/router"

const Quest = () => {
    const router = useRouter()

    const authorize = () => {
        const credentials = {
            client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
            scope: "identify",
            response_type: "code",
            redirect_uri: `${window.location.origin}/api/discord`,
        }

        router.push(
            `https://discord.com/api/oauth2/authorize?${Object.entries(credentials)
                .map(([key, value]) => `${key}=${value}`)
                .join("&")}`,
            "_blank"
        )
    }

    const qc = useQueryClient()

    const { data } = useQuery("info", () => axios.get("/api/discord/info").then(res => res.data))

    const { mutate: logout } = useMutation(() => axios.delete("/api/discord").then(res => res.data), {
        onSuccess: () => qc.invalidateQueries("info"),
    })

    return (
        <Flex direction="column" align="center" w="full">
            <Box w="full" maxW="64rem" px={4}>
                {data ? (
                    <Box>
                        <Flex flexDir="column" align="center">
                            <Heading>Hello {data.user.username}</Heading>
                            <Heading>ID: {data.user.id}</Heading>
                            {/* <Img
                                boxSize={"2rem"}
                                rounded="full"
                                ml={2}
                                src={`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`}
                            /> */}
                        </Flex>
                        <Button variant="ghost" colorScheme={"red"} onClick={() => logout()} isFullWidth>
                            Log Out
                        </Button>
                    </Box>
                ) : (
                    <Button colorScheme={"yellow"} onClick={authorize}>
                        Login by discord
                    </Button>
                )}
            </Box>
        </Flex>
    )
}

export default Quest
