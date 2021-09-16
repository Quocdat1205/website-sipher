import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import WhySipherUI from "@components/UI/WhySipherPage"
import Factions from "@components/UI/WhySipherPage/Factions"

const WhySipherPage: NextPageWithLayout = () => {
    return <Factions />
}

WhySipherPage.getLayout = (page: ReactElement) => {
    return <WhySipherUI>{page}</WhySipherUI>
}

export default WhySipherPage
