// * DESCRIPTION:

import React from "react"
import useSaleTime from "./useSaleTime"
import NotConnected from "./SubUI/NotConnected"
import Loading from "./SubUI/Loading"
import NotfoundPage from "@pages/404"
import Ended from "./SubUI/Ended"

const TokenSale = () => {
    const { status } = useSaleTime()

    if (status === "NOT_CONNECTED") return <NotConnected />

    if (status === "LOADING") return <Loading />

    if (status === "ENDED") return <Ended />

    if (status === "ERROR") return <NotfoundPage />

    return <Ended />
}

export default TokenSale
