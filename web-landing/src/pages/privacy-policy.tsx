import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import PrivacyPolicyUI from "@components/UI/PrivacyPolicy"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const NFTPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Privacy Policy | Sipher" description="Read about Sipher's privacy policy" />
            <PrivacyPolicyUI />
        </>
    )
}
NFTPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default NFTPage
