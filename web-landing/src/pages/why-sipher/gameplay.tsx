import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import WhySipherUI from "@components/UI/WhySipherPage"

const WhySipherPage: NextPageWithLayout = () => {
    return <div>Gameplay</div>
}

WhySipherPage.getLayout = (page: ReactElement) => {
    return <WhySipherUI>{page}</WhySipherUI>
}

export default WhySipherPage
