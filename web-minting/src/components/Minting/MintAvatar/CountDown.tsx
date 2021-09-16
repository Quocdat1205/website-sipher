import { Box, chakra, HStack, Text } from "@chakra-ui/react";
import { useMetamask } from "@src/hooks/useMetamask";
import React, { useEffect, useState } from "react";

function CountDown() {
	const { metaState } = useMetamask();
	// const targetTime = moment(metaState.time && metaState.time);
	// const [currentTime, setCurrentTime] = useState(moment());
	// const timeBetween = moment.duration(targetTime.diff(currentTime));

	// useEffect(() => {
	//     const interval = setTimeout(() => {
	//       setCurrentTime(moment());
	//     }, 1000);
	//     return () => clearTimeout(interval);
	// });

	return (
		<>
			{/* <HStack mt="2" justifyContent="center" width="100%">
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
            {Math.abs(timeBetween.days())}
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
          <Text pos="absolute" top="31%" left="100%" transform="translate(0%, -50%)" color="whiteAlpha.800" fontSize="1.5rem" fontWeight="bold">:</Text>
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
            {Math.abs(timeBetween.hours())}
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
          <Text pos="absolute" top="31%" left="100%" transform="translate(0%, -50%)" color="whiteAlpha.800" fontSize="1.5rem" fontWeight="bold">:</Text>
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
            {Math.abs(timeBetween.minutes())}
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
          <Text pos="absolute" top="31%" left="100%" transform="translate(0%, -50%)" color="whiteAlpha.800" fontSize="1.5rem" fontWeight="bold">:</Text>
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
            {Math.abs(timeBetween.seconds())}
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
     */}
		</>
	);
}

export default CountDown;
