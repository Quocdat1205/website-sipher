import { Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { usePostSubscribe } from "@hooks/api/subscribe";
import useChakraToast from "@hooks/useChakraToast";
import useFormCore from "@hooks/useFormCore";
import React, { useEffect, useRef } from "react";
import { isEmail } from "src/utils";
import { FlexContainer } from "./FlexContainer";
import { SpecialButton } from "./SpecialButton";
import TextFormControl from "./TextFormControl";

interface Props {}

const Footer = (props: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { values, setValue, errors, setError, initForm } = useFormCore({
		email: "",
		full_name: "",
	});
	const toast = useChakraToast();

	useEffect(() => {
		initForm();
	}, [initForm]);

	const { mutate, isLoading } = usePostSubscribe({
		onError: (error) => console.log("error json", error),
		onSuccess: (data) => {
			if (!data.message) {
				initForm();
				toast("Stay tuned & subscribe to our community for woofing perks and exclusive news.");
			} else {
				if (data.message === "email exists") setError("email", "Email was already subscribed!");
				else setError("email", "Something went wrong!");
			}
		},
	});

	const submit = () => {
		if (values.email === "") {
			setError("email", "Email is required!");
			return;
		}
		if (!isEmail(values.email)) {
			setError("email", "Email is invalid!");
			return;
		}
		mutate(values);
	};

	return (
		<Flex align="center" justify="center" w="full" bg="main.lightGray" py={[4, 4, 6]}>
			<FlexContainer align="center" px="4">
				<Heading size="md" textTransform="uppercase">
					Stay in touch with us
				</Heading>
				<Stack
					mt="8"
					align="center"
					direction={["column", "column", "row"]}
					spacing={4}
					// sx={{
					// 	"@media (max-width: 960px)": {
					// 		flexDirection: "column",
					// 	},
					// }}
				>
					<TextFormControl
						label="Email address"
						value={values.email}
						onChange={(newValue) => setValue("email", newValue)}
						error={errors.email}
						inputRef={inputRef}
					/>
					<TextFormControl
						label="Name"
						value={values.full_name}
						onChange={(newValue) => setValue("full_name", newValue)}
					/>
					<SpecialButton
						w={["full", "full", "auto"]}
						text="Submit"
						onClick={submit}
						isLoading={isLoading}
						loadingText="Subscribing"
					/>
				</Stack>
			</FlexContainer>
		</Flex>
	);
};

export default Footer;
