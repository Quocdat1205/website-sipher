import React, { Fragment, useEffect, useRef, useState } from "react";
import { SimpleGrid, chakra, Flex, Box, CircularProgress, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";

import { getAllNFTs } from "@api/nfts";
import Card from "./Card";
import Filter from "./Filter";
import BorderLine from "@components/shared/BorderLine";
import { MyButton, MyHeading, MyText } from "@sipher/web-components";
import { useStoreActions, useStoreState } from "src/store";
interface Props {}

const HomeList = (props: Props) => {
	const [search, setSearch] = useState("");
	const [queryTitle, setQueryTitle] = useState("");
	const setTotal = useStoreActions((_) => _.setTotal);
	const total = useStoreState((_) => _.total);
	const [scroll, setScroll] = useState(0);
	const router = useRouter();
	const step = useRef(10);
	useEffect(() => {
		step.current = window.innerHeight < 1080 ? 10 : 20;
	}, []);
	// const STEP = window.innerHeight < 1080 ? 10 : 20;
	// lay tu 0 => 5 duoc 0, 1, 2, 3, 4, k lay 5
	const getNFTWithRange = async ({ pageParam = 0 }) => {
		let nfts = await getAllNFTs(queryTitle, pageParam + 1, pageParam + step.current + 1);
		setTotal(nfts.total);
		return nfts.data;
	};
	const { data, hasNextPage, fetchNextPage, refetch } = useInfiniteQuery("requests", getNFTWithRange, {
		getNextPageParam: (lastPage, pages) => (lastPage.length < 10 ? undefined : lastPage.length * pages.length),
		refetchOnWindowFocus: true,
		refetchInterval: 30000,
	});
	useEffect(() => {
		refetch();
	}, [queryTitle, refetch]);

	useEffect(() => {
		const timeOutId = setTimeout(() => setQueryTitle(search), 700);
		return () => clearTimeout(timeOutId);
	}, [search, setQueryTitle]);

	const handleClick = (id: string) => {
		router.push(`/${id}`);
	};
	return (
		<Flex
			bg="url(https://sipher.xyz/images/pc/background.jpg)"
			flexDir="column"
			overflow="hidden"
			p="4"
			h="100vh"
			w="100%"
		>
			<Flex py="2" align="center" justify="space-between">
				<Flex>
					<chakra.a href="https://sipher.xyz" display="block" cursor="pointer">
						<Image
							h={["1.5rem", "2rem", "2rem", "2rem"]}
							src="https://sipher.xyz/images/general/logo_pc.png"
							alt=""
						/>
					</chakra.a>
				</Flex>
				<MyHeading ml="4" fontWeight="normal" flex="1" py="2" color="red.500">
					NFTs Sipherian Surge List
				</MyHeading>
				{/* <MyButton
					bgGradient="linear(180deg, #FF6795 0%, #FF710B 84.37%)"
					colorScheme="orange"
					color="whiteAlpha.800"
					borderRadius="99"
					p={[2, 4]}
					onClick={() => (window.location.href = "https://sipher.xyz/")}
				>
					Back to home
				</MyButton> */}
			</Flex>
			<BorderLine />
			<Filter setSearch={setSearch} />
			<MyText px="4" py="2" color="yellow.400">
				{total && total.toLocaleString()} results
			</MyText>
			<Box flex="1" overflow="auto" className="nice-scroll" id="scrollableDiv">
				<InfiniteScroll
					dataLength={data ? data.pages.reduce((init, cur) => init.concat(cur), []).length : 0}
					next={() => {
						fetchNextPage();
					}}
					hasMore={!!hasNextPage}
					style={{ width: "100%", overflow: "hidden" }}
					scrollableTarget="scrollableDiv"
					loader={
						<Flex mt="4" align="center" justify="center" color="white">
							<CircularProgress size="10" isIndeterminate color="yellow.400" />
						</Flex>
					}
					initialScrollY={scroll || 0}
					onScroll={(v) => {
						if (setScroll) setScroll((v.target as HTMLDivElement).scrollTop);
					}}
				>
					{data ? (
						<SimpleGrid columns={[1, 3, 5, 6]} spacing={4}>
							{data.pages.map((page, i) => (
								<Fragment key={i}>
									{page.map((item) => (
										<Card item={item} key={item.id} onClick={() => handleClick(item.id)} />
									))}
								</Fragment>
							))}
						</SimpleGrid>
					) : (
						<MyText px="2" color="whiteAlpha.500">
							Not Found
						</MyText>
					)}
				</InfiniteScroll>
			</Box>
		</Flex>
	);
};
export default HomeList;
