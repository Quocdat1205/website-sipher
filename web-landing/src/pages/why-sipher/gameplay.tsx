import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import WhySipherUI from "@components/UI/WhySipherPage"
import Gameplay from "@components/UI/WhySipherPage/Gameplay"
const WhySipherPage: NextPageWithLayout = () => {
    return <Gameplay />
}

WhySipherPage.getLayout = (page: ReactElement) => {
    return <WhySipherUI>{page}</WhySipherUI>
}

export default WhySipherPage
