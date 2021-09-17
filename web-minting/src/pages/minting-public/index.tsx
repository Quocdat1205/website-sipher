import PublicSale from "@components/UI/PublicSale";
import Head from "next/head";
import MainLayout from "@components/UI/MainLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "@pages/_app";

const MintingPublic: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Public Sale</title>
			</Head>
			<PublicSale />
		</>
	);
};

MintingPublic.getLayout = (page: ReactElement) => {
	return (
		<>
			<MainLayout>{page}</MainLayout>
		</>
	);
};
export default MintingPublic;
