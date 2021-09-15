import { Box } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import HomeDetails from "../../components/HomePage/Details";

const Home: NextPage = () => {
	return <HomeDetails />;
};
export default Home;
