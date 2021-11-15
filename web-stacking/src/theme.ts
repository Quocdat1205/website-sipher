import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
    colors: {
        stack: {
            textBlack: "#05070c",
            cardWhite: "hsla(0,0%,100%,.5)",
            cardGray: "#f1f3f5",
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
            defaultProps: {
                size: "medium",
            },
        },
        Text: {
            baseStyle: {
                fontFamily: "Mark Pro",
                color: "whiteAlpha.900",
                fontWeight: 300,
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
            defaultProps: {
                size: "medium",
            },
        },
        Button: {
            baseStyle: {
                _focus: {
                    shadow: "none",
                },
                fontFamily: "Mark Pro",
                fontWeight: 300,
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
            defaultProps: {
                color: "#05070c",
            },
        },
        Td: {
            baseStyle: {
                fontFamily: "Mark Pro",
                color: "whiteAlpha.900",
                fontWeight: 300,
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
            defaultProps: {
                size: "medium",
            },
        },
        Th: {
            baseStyle: {
                fontFamily: "Mark Pro",
                color: "whiteAlpha.900",
                fontWeight: 300,
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
            defaultProps: {
                size: "medium",
            },
        },
    },
    breakpoints: ["0px", "480px", "960px", "1440px", "1920px"],
})
export default theme
