import { extendTheme } from "@chakra-ui/react"

// ??? ???
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
            lightGray: "#111111",
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
            orange: "#FF710B",
        },
        bgGradient: {
            orange: "#FF6795 0%, #FF710B 84.37%",
            white: "#FFFFFF 0%, #FFFFFF 84.37%",
            black: "#292929 0%, rgba(41, 41, 41, 0) 100%",
        },
        about: {
            textGray: "#9B9E9D",
            cardGray: "#292929",
            darkRed: "rgba(114, 17, 31, 0.9)",
        },
        stack: {
            textBlack: "#05070c",
            cardWhite: "hsla(0,0%,100%,.5)",
            cardGray: "#f1f3f5",
        },
        border: {
            gray: "#383838",
        },
    },
    components: {
        Heading: {
            baseStyle: {
                fontWeight: 600,
            },
            sizes: {
                small: {
                    fontSize: ["md", "lg"],
                },
                medium: {
                    fontSize: ["lg", "xl"],
                },
                large: {
                    fontSize: ["xl", "2xl"],
                },
            },
        },
        Text: {
            baseStyle: {
                fontFamily: "Mark Pro",
                color: "whiteAlpha.900",
                fontWeight: 400,
            },
            sizes: {
                small: {
                    fontSize: ["xs", "sm", "sm", "md"],
                },
                medium: {
                    fontSize: ["sm", "md", "md", "xl"],
                },
                large: {
                    fontSize: ["md", "lg", "lg", "xl", "2xl"],
                },
            },
        },
        Input: {
            baseStyle: {
                fontFamily: "Mark Pro",
                color: "whiteAlpha.900",
                fontWeight: 500,
            },
            sizes: {
                small: {
                    fontSize: ["xs", "sm", "sm", "md"],
                },
                medium: {
                    fontSize: ["sm", "md", "md", "xl"],
                },
                large: {
                    fontSize: ["md", "lg", "lg", "xl", "2xl"],
                },
            },
        },
        Button: {
            baseStyle: {
                _focus: {
                    shadow: "none",
                },
                fontFamily: "Mark Pro",
                fontWeight: 500,
                color: "#05070c",
            },
            sizes: {
                small: {
                    fontSize: ["xs", "sm", "sm", "md"],
                },
                medium: {
                    fontSize: ["sm", "md", "md", "xl"],
                },
                large: {
                    fontSize: ["md", "lg", "lg", "xl", "2xl"],
                },
            },
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
            "body::-webkit-scrollbar": {
                width: "0.3rem",
            },
            "body::-webkit-scrollbar-track": {
                background: "black",
            },
            "body::-webkit-scrollbar-thumb": {
                background: "linear-gradient(to bottom, #FF6795 0%, #FF710B 84.37%)",
            },
            ".motion-container": {
                overflow: "hidden",
                height: "100%",
            },
            "video::-webkit-media-controls-start-playback-button": {
                display: "none !important",
                "-webkit-appearance": "none",
            },
        },
    },
    breakpoints: ["0px", "480px", "960px", "1440px", "1920px"],
})
export default theme
