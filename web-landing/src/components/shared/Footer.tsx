import { Flex, Stack } from "@chakra-ui/react"
import { usePostSubscribe } from "@hooks/api/subscribe"
import React, { useEffect, useRef } from "react"
import { GradientOutlineButton } from "."
import { useFormCore, useChakraToast, MyText, GradientText } from "@sipher/web-components"
import { isEmail } from "src/utils"
import TextFormControl from "./TextFormControl2"
import CommunityIcons from "./CommunityIcons"
import { useRouter } from "next/router"

export const Footer = () => {
	const router = useRouter()
	const inputRef = useRef<HTMLInputElement>(null)
	const { values, setValue, errors, setError, initForm } = useFormCore({
		email: "",
		full_name: "",
	})
	const toast = useChakraToast()

	useEffect(() => {
		initForm()
	}, [initForm])

	const { mutate, isLoading } = usePostSubscribe({
		onError: () => {
			toast({ status: "error", title: "Something went wrong!", message: "Try again later." })
		},
		onSuccess: (data) => {
			if (!data.message) {
				initForm()
				toast({
					status: "success",
					title: "Congrats!",
					message: "Stay tuned & subscribe to our community for woofing perks and exclusive news.",
				})
			} else {
				if (data.message === "email exists") setError("email", "Email was already subscribed!")
				else setError("email", "Something went wrong!")
			}
		},
	})

	const submit = () => {
		if (values.email === "") {
			setError("email", "Email is required!")
			return
		}
		if (!isEmail(values.email)) {
			setError("email", "Email is invalid!")
			return
		}
		mutate(values)
	}

	return (
		<Flex align="center" justify="center" w="full" bg="main.lightGray" pb={4} pt={8} direction="column">
			<Flex direction="column" maxW="64rem" align="center" px="4">
				<MyText size="large" fontWeight="bold" textTransform="uppercase" letterSpacing="3px">
					Stay in touch with us
				</MyText>
				<Stack mt={4} align="center" direction={["column", "row"]} spacing={4} px={[0, 4, 8]} py={2} w="full">
					<TextFormControl
						label="Your name"
						value={values.full_name}
						onChange={(newValue) => setValue("full_name", newValue)}
						w={["full", "15rem"]}
					/>
					<TextFormControl
						label="Email address"
						value={values.email}
						onChange={(newValue) => setValue("email", newValue)}
						error={errors.email}
						inputRef={inputRef}
						w={["full", "20rem"]}
					/>
					<GradientOutlineButton
						w={["full", "auto"]}
						text="Submit"
						rounded="full"
						onClick={submit}
						isLoading={isLoading}
						backgroundColor="main.lightGray"
					/>
				</Stack>
			</Flex>
			<Stack
				direction={["column", "row"]}
				px={[4, 16, 24]}
				py={2}
				justify="space-between"
				spacing={4}
				mt={[4, 6, 8]}
				w="full"
			>
				<Stack
					direction={["column", "column", "row"]}
					spacing={[2, 2, 4]}
					align={["center", "flex-start", "center"]}
				>
					<MyText>Copyright © 2021 Sipher. All rights reserved</MyText>
					<MyText
						fontWeight="thin"
						sx={{
							"@media (max-width: 960px)": {
								display: "none",
							},
						}}
					>
						|
					</MyText>
					<GradientText cursor="pointer" onClick={() => router.push("/term-and-condition")} fontWeight="bold">
						Terms & Conditions
					</GradientText>
				</Stack>
				<CommunityIcons size="small" />
			</Stack>
		</Flex>
	)
}

export default Footer
