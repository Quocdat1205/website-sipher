import { Button } from "@chakra-ui/react"
import { MyText, useChakraToast } from "@sipher/web-components"
import React from "react"
import { IoShareSocialOutline } from "react-icons/io5"

const AddressCopier = () => {
	const toast = useChakraToast()

	const handleCopy = async () => {
		await navigator.clipboard.writeText(window.location.href)
		toast({ status: "success", title: "Copied address to clipboard", message: "", duration: 1500 })
	}

	return (
		<Button variant="link" onClick={handleCopy}>
			<IoShareSocialOutline fontSize="1.5rem" />
			<MyText color="about.textGray" ml={2}>
				Share
			</MyText>
		</Button>
	)
}

export default AddressCopier
