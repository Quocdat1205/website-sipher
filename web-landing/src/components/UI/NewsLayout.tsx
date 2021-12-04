// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { NavBar, Footer } from "@components/shared"
import { useStoreActions } from "@store"
import axios from "axios"
import { useEffect } from "react"

interface NewsLayoutProps {
    children: React.ReactNode
}

const NewsLayout = ({ children }: NewsLayoutProps) => {
    const setLocation = useStoreActions(_ => _.setLocation)

    useEffect(() => {
        const handleGetLocation = async () => {
            const location = await axios.get("https://geolocation-db.com/json/")
            setLocation({ name: location.data.country_name, code: location.data.country_code })
        }
        handleGetLocation()
    }, [])

    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
            <NavBar />
            <Flex flex={1} overflow="overlay" direction="column" id="body" bgImage="/images/pc/home/homenew2.png">
                <Flex direction="column" flex={1}>
                    {children}
                </Flex>
                <Footer />
            </Flex>
        </Flex>
    )
}

export default NewsLayout
