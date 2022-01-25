import Head from "next/head";
import { ReactElement } from "react";
import { NextPageWithLayout } from "@pages/_app";
import InventoryLayout from "@components/UI/InventoryLayout";
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
    return <InventoryLayout>{page}</InventoryLayout>;
};
export default InvestorPage;
