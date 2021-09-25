import Head from "next/head";
import { ReactElement } from "react";
import { NextPageWithLayout } from "@pages/_app";
import PrivateSale from "@components/UI/PrivateSale";
import MainLayout from "@components/UI/MainLayout";

const MintingPrivate: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Private Sale</title>
			</Head>
			<PrivateSale />
		</>
	);
};

MintingPrivate.getLayout = (page: ReactElement) => {
	return (
		<>
			<MainLayout>{page}</MainLayout>
		</>
	);
};
export default MintingPrivate;
