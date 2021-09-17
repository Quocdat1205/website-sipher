import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	breakpoints: ["0px", "768px", "960px", "1440px"],
	colors: {
		main: {
			yellow: "#F4B533",
			amber: "#B75473",
			purple: "#391798",
			gray: "#4C4C4C",
			teal: "#4C4C4C",
			powerPink: "#DD9EED",
			greenGray: "#6D7779",
			lightGreen: "#59D9A6",
			jadeGreen: "#2B807B",
			pinkRed: "#F44A67",
			brightRed: "#E6463A",
			lightPink: "#FF78A8",
			neutralGreen: "#527E4D",
			grassGreen: "#395836",
			white80: "whiteAlpha.800",
			lightPurple: "#8C63FF",
			offBlack: "rgba(24, 24, 24, 0.75)",
			darkRed: "#B70F28",
			darkGrey: "#242424",
			white: "#FFFFFF",
		},
	},
	components: {
		Heading: {
			baseStyle: {
				fontFamily: "Chakra Petch",
				letterSpacing: "1px",
				color: "whiteAlpha.900",
			},
		},
		Text: {
			baseStyle: {
				color: "whiteAlpha.900",
			},
		},
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
