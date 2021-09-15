import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import WhySipherUI from "@components/UI/WhySipherPage"
import TheWorld from "@components/UI/WhySipherPage/TheWorld"

const WhySipherPage: NextPageWithLayout = () => {
    return <TheWorld />
}

WhySipherPage.getLayout = (page: ReactElement) => {
    return <WhySipherUI>{page}</WhySipherUI>
}

export default WhySipherPage
