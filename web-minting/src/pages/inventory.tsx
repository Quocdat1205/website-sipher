import Head from "next/head";
import MainLayout from "@components/UI/MainLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "@pages/_app";
import Inventory from "@components/UI/Inventory";

const InventoryPage: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Inventory</title>
			</Head>
			<Inventory />
		</>
	);
};

InventoryPage.getLayout = (page: ReactElement) => {
	return (
		<>
			<MainLayout>{page}</MainLayout>
		</>
	);
};
export default InventoryPage;
