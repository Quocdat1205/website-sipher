import { extendTheme } from "@chakra-ui/react";

const genColor = (lightColor: string, darkColor: string) => ({
	light: lightColor,
	dark: darkColor,
});

const breakpoints = ["768px", "1200px", "1920px"];

const theme = extendTheme({
	breakpoints,
	colors: {
		background: {
			primary: genColor("#FFFFFF", "#212223"),
			secondary: genColor("#F7F7F7", "#252627"),
		},
		text: {
			primary: genColor("#555555", "#E8DEC8"),
			secondary: genColor("#777777", "#9E9FA1"),
		},
		fill: genColor("#174091", "#E8DEC8"),
		success: genColor("#0A842F", "#56C26A"),
		warning: genColor("#FDB913", "#FFD54F"),
		danger: genColor("#CC1D33", "#ED323B"),
		info: genColor("#256EC2", "#76D7EA"),
		border: genColor("#E3E3E3", "#333333"),
		main: {
			"50": "#E9EFFC",
			"100": "#C1D3F5",
			"200": "#9AB6EF",
			"300": "#729AE9",
			"400": "#4B7EE2",
			"500": "#2361DC",
			"600": "#1C4EB0",
			"700": "#153A84",
			"800": "#0E2758",
			"900": "#07132C",
		},
	},
	components: {
		Button: {
			defaultProps: {
				colorScheme: "main",
			},
			baseStyle: {
				rounded: "md",
			},
		},
		Heading: {
			baseStyle: {
				fontFamily: "Chakra Petch",
			},
			defaultProps: {
				size: "md",
				colorScheme: "main",
			},
		},
		Input: {
			defaultProps: {
				errorBorderColor: "base",
				focusBorderColor: "base",
				autoComplete: "off",
				spellCheck: "off",
			},
		},
		Tag: {
			defaultProps: {
				size: "sm",
			},
			baseStyle: {
				cursor: "pointer",
				borderRadius: "base",
				fontWeight: "bold",
			},
		},
	},
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,
	},
	styles: {
		global: {
			"*": {
				fontFamily: "Chakra Petch",
			},
			".nice-scroll::-webkit-scrollbar": {
				width: "0.5rem",
			},
			".nice-scroll::-webkit-scrollbar-track": {
				background: "transparent",
			},
			".nice-scroll::-webkit-scrollbar-thumb": {
				borderRadius: "99px",
				background: "yellow.300",
			},
		},
	},
});

export default theme;
