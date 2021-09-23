import { Box, chakra, HStack, Text } from "@chakra-ui/react";
import React, { useMemo, useEffect, useState } from "react";
import differenceInSeconds from "date-fns/differenceInSeconds";

function CountDown({ deadline }) {
	//Ex: deadline: newDate(16000000)

	const ONE_DAY = 60 * 60 * 24;
	const ONE_HOUR = 60 * 60;
	const ONE_MINUTE = 60;
	const [currentTime, setCurrentTime] = useState(new Date().getTime());

	const diffInSeconds = differenceInSeconds(deadline, currentTime);

	const getCoundown = () => {
		if (diffInSeconds <= 1) {
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			};
		}
		const days = Math.floor(diffInSeconds / ONE_DAY);
		const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
		const minutes = Math.floor((diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE);
		const seconds = diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;
		return {
			days,
			hours,
			minutes,
			seconds,
		};
	};

	const countdown = useMemo(() => getCoundown, [currentTime]);

	useEffect(() => {
		const timeouts = setTimeout(() => {
			const now = new Date().getTime();
			setCurrentTime(now);
		}, 1000);

		return () => clearTimeout(timeouts);
	}, []);

	return (
		<>
			<HStack mt="2" justifyContent="center" width="100%">
				<Box pos="relative" px="4" textAlign="center">
					<chakra.span
						m="0 auto"
						w={{
							base: "2rem",
							sm: "2rem",
							md: "3rem",
							xl: "3rem",
							xxl: "4rem",
							xxxl: "5rem",
						}}
						h={{
							base: "2rem",
							sm: "2rem",
							md: "3rem",
							xl: "3rem",
							xxl: "4rem",
							xxxl: "5rem",
						}}
						display="flex"
						alignItems="center"
						justifyContent="center"
						fontSize={{
							base: "1rem",
							sm: "1rem",
							md: "1rem",
							xl: "1rem",
							xxl: "1.2rem",
							xxxl: "2rem",
						}}
						fontWeight="bold"
						borderColor="gray!important"
						border="1px"
						p="4"
						bg="gray.800"
						color="red.400"
					>
						{countdown.days}
					</chakra.span>
					<Text
						fontSize={{
							base: "0.6rem",
							sm: "0.7rem",
							md: "0.8rem",
							xl: "0.8rem",
							xxl: "1rem",
							xxxl: "1.5rem",
						}}
					>
						DAYS
					</Text>
					<Text
						pos="absolute"
						top="31%"
						left="100%"
						transform="translate(0%, -50%)"
						color="whiteAlpha.800"
						fontSize="1.5rem"
						fontWeight="bold"
					>
						:
					</Text>
				</Box>
				<Box pos="relative" px="4" textAlign="center">
					<chakra.span
						m="0 auto"
						w={{
							base: "2rem",
							sm: "2rem",
							md: "3rem",
							xl: "3rem",
							xxl: "4rem",
							xxxl: "5rem",
						}}
						h={{
							base: "2rem",
							sm: "2rem",
							md: "3rem",
							xl: "3rem",
							xxl: "4rem",
							xxxl: "5rem",
						}}
						display="flex"
						alignItems="center"
						justifyContent="center"
						fontSize={{
							base: "1rem",
							sm: "1rem",
							md: "1rem",
							xl: "1rem",
							xxl: "1.2rem",
							xxxl: "2rem",
						}}
						fontWeight="bold"
						borderColor="gray!important"
						border="1px"
						p="4"
						bg="gray.800"
						color="red.400"
					>
						{countdown.hours}
					</chakra.span>
					<Text
						fontSize={{
							base: "0.6rem",
							sm: "0.7rem",
							md: "0.8rem",
							xl: "0.8rem",
							xxl: "1rem",
							xxxl: "1.5rem",
						}}
					>
						HOURS
					</Text>
					<Text
						pos="absolute"
						top="31%"
						left="100%"
						transform="translate(0%, -50%)"
						color="whiteAlpha.800"
						fontSize="1.5rem"
						fontWeight="bold"
					>
						:
					</Text>
				</Box>
				<Box pos="relative" px="4" textAlign="center">
					<chakra.span
						m="0 auto"
						w={{
							base: "2rem",
							sm: "2rem",
							md: "3rem",
							xl: "3rem",
							xxl: "4rem",
							xxxl: "5rem",
						}}
						h={{
							base: "2rem",
							sm: "2rem",
							md: "3rem",
							xl: "3rem",
							xxl: "4rem",
							xxxl: "5rem",
						}}
						display="flex"
						alignItems="center"
						justifyContent="center"
						fontSize={{
							base: "1rem",
							sm: "1rem",
							md: "1rem",
							xl: "1rem",
							xxl: "1.2rem",
							xxxl: "2rem",
						}}
						fontWeight="bold"
						borderColor="gray!important"
						border="1px"
						p="4"
						bg="gray.800"
						color="red.400"
					>
						{countdown.minutes}
					</chakra.span>
					<Text
						fontSize={{
							base: "0.6rem",
							sm: "0.7rem",
							md: "0.8rem",
							xl: "0.8rem",
							xxl: "1rem",
							xxxl: "1.5rem",
						}}
					>
						MINUTES
					</Text>
					<Text
						pos="absolute"
						top="31%"
						left="100%"
						transform="translate(0%, -50%)"
						color="whiteAlpha.800"
						fontSize="1.5rem"
						fontWeight="bold"
					>
						:
					</Text>
				</Box>
				<Box pos="relative" px="4" textAlign="center">
					<chakra.span
						m="0 auto"
						w={{
							base: "2rem",
							sm: "2rem",
							md: "3rem",
							xl: "3rem",
							xxl: "4rem",
							xxxl: "5rem",
						}}
						h={{
							base: "2rem",
							sm: "2rem",
							md: "3rem",
							xl: "3rem",
							xxl: "4rem",
							xxxl: "5rem",
						}}
						display="flex"
						alignItems="center"
						justifyContent="center"
						fontSize={{
							base: "1rem",
							sm: "1rem",
							md: "1rem",
							xl: "1rem",
							xxl: "1.2rem",
							xxxl: "2rem",
						}}
						fontWeight="bold"
						borderColor="gray!important"
						border="1px"
						p="4"
						bg="gray.800"
						color="red.400"
					>
						{countdown.seconds}
					</chakra.span>
					<Text
						fontSize={{
							base: "0.6rem",
							sm: "0.7rem",
							md: "0.8rem",
							xl: "0.8rem",
							xxl: "1rem",
							xxxl: "1.5rem",
						}}
					>
						SECONDS
					</Text>
				</Box>
			</HStack>
		</>
	);
}

export default CountDown;
