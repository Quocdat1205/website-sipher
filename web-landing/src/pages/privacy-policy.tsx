import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"
import dynamic from "next/dynamic"

const DynamicPrivacyPolicyUI = dynamic(() => import("@components/UI/PrivacyPolicy"))

const NFTPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Privacy Policy | Sipher" description="Read about Sipher's privacy policy" />
            <DynamicPrivacyPolicyUI />
        </>
    )
}
NFTPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default NFTPage
