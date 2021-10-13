import { Flex, Box } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import logo from "@components/shared/InitialLoader/logo512.png"
import { MyText } from "@sipher/web-components"

interface Props {}

const Nodata = (props: Props) => {
	return (
		<Flex justify="center" align="center">
			<Box textAlign="center">
				<Image src={logo} height={80} width={80} alt="logo" />
				<MyText color="about.textGray">Data not found! (x_x)</MyText>
			</Box>
		</Flex>
	)
}

export default Nodata
