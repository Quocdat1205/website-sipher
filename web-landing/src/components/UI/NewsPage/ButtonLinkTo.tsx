import { Button, ButtonProps } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { MyText } from "@sipher/web-components"
import React from "react"

interface ButtonLinkToProps extends ButtonProps {
	url: string
	typeSocial: "medium" | "twitter"
}

const ButtonLinkTo = ({ url, typeSocial, ...rest }: ButtonLinkToProps) => {
	return (
		<Button
			{...rest}
			variant="link"
			onClick={(e) => {
				e.stopPropagation()
				window.open(url, "_blank")
			}}
		>
			<Image
				zIndex="2"
				display="block"
				m="0 auto"
				src={`/images/icons/${typeSocial === "medium" ? "medium" : "twitter"}.png`}
				alt=""
				h="1.5rem"
			/>
			<MyText color="about.textGray" ml={2}>
				Link
			</MyText>
		</Button>
	)
}
export default ButtonLinkTo
