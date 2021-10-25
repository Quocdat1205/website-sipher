import Head from "next/head";
import { ReactElement } from "react";
import { NextPageWithLayout } from "@pages/_app";
import MainLayout from "@components/UI/MainLayout";
import TierRewardBenefit from "@components/UI/TierRewardBenefit";

const TierRewardBenefitPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Tier Reward Benefits</title>
      </Head>
      <TierRewardBenefit />
    </>
  );
};

TierRewardBenefitPage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
export default TierRewardBenefitPage;
