import Head from "next/head";
import { ReactElement } from "react";
import { NextPageWithLayout } from "@pages/_app";
import InvestorLayout from "@components/UI/InvestorLayout";
import Investor from "@components/UI/Dashboard/Investor";

const InvestorPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Investor</title>
            </Head>
            <Investor />
        </>
    );
};

InvestorPage.getLayout = (page: ReactElement) => {
    return <InvestorLayout>{page}</InvestorLayout>;
};
export default InvestorPage;
