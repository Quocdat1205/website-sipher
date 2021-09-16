import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import WhySipherUI from "@components/UI/WhySipherPage"
import Blockchain from "@components/UI/WhySipherPage/Blockchain"

const WhySipherPage: NextPageWithLayout = () => {
    return <Blockchain />
}

WhySipherPage.getLayout = (page: ReactElement) => {
    return <WhySipherUI>{page}</WhySipherUI>
}

export default WhySipherPage
