import { IconButton } from "@chakra-ui/button";
import { useMetamask } from "@hooks/useMetamask";
import React, { useState } from "react";
import { AiFillCopy } from "react-icons/ai";

interface Props {}

const CopyClipboard = (props: Props) => {
	const { metaState } = useMetamask();

	const handleCopy = async () => {
		await navigator.clipboard.writeText(metaState.accountLogin);
	};

	return (
		<IconButton
			variant="ghost"
			aria-label="copy-clipboard"
			onClick={handleCopy}
			_hover={{ bg: "none" }}
			icon={<AiFillCopy fontSize="24px" />}
		/>
	);
};

export default CopyClipboard;
