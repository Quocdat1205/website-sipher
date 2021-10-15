import FagUI from "@components/UI/Faq";
import NewsLayout from "@components/UI/NewsLayout";
import Head from "next/head";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const FagPage: NextPageWithLayout = () => {
  return <FagUI />;
};
FagPage.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Faq</title>
      </Head>
      <NewsLayout>{page}</NewsLayout>
    </>
  );
};
export default FagPage;
