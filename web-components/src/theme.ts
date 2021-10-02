import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        main: {
            yellow: "#F4B533",
            amber: "#B75473",
            purple: "#391798",
            gray: "#828282",
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
            darkRed2: "#C71F38",
            darkRed3: "#D72F48",
            darkGrey: "#242424",
            white: "#FFFFFF",
            lightGray: "#111111",
            orange: "#FF710B",
        },
        bgGradient: {
            orange: "#FF6795 0%, #FF710B 84.37%",
        },
    },
    styles: {
        global: {
            "*": {
                fontFamily: "Mark Pro",
                color: "inherit",
            },
            "div::-webkit-scrollbar": {
                width: "0.3rem",
            },
            "div::-webkit-scrollbar-track": {
                background: "transparent",
            },
            "div::-webkit-scrollbar-thumb": {
                background: "linear-gradient(to bottom, #FF6795 0%, #FF710B 84.37%)",
            },
            ".motion-container": {
                overflow: "hidden",
                height: "100%",
            },
        },
    },
    components: {
        Heading: {
            baseStyle: {
                fontFamily: "Brandon",
                letterSpacing: "1px",
                color: "whiteAlpha.900",
            },
        },
        Text: {
            baseStyle: {
                fontFamily: "Mark Pro",
                color: "whiteAlpha.900",
                fontWeight: 300,
            },
        },
    },
    breakpoints: ["0px", "480px", "960px", "1440px"],
})

export default theme
