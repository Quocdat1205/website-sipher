import { extendTheme } from "@chakra-ui/react";

// ??? ???
export const theme = extendTheme({
    fonts: {
        heading: "Brandon",
        body: "Mark Pro",
    },

    colors: {
        main: {
            yellow: "#F4B533",
            gray: "#828282",
            greenGray: "#6D7779",
            lightGray: "#111111",
            lightGreen: "#59D9A6",
            brightRed: "#E6463A",
            darkRed: "#B70F28",
            orange: "#FF710B",
        },
        // ======== NEW THEME COLOR
        text: {
            primary: "#FFFFFF",
            secondary: "#9B9E9D",
        },
        fill: {
            green: "#59D9A6",
        },
        gradient: {
            orange: "#FF6795 0%, #FF710B 84.37%",
        },
        // ========
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
        border: {
            gray: "#383838",
        },
        sipher: {
            orange: "#FF9800",
        },
    },
    components: {
        Heading: {
            baseStyle: {
                fontWeight: 600,
            },
        },
        Text: {
            baseStyle: {
                fontFamily: "Mark Pro",
                color: "text.primary",
            },
        },
        Input: {
            baseStyle: {
                fontFamily: "Mark Pro",
                color: "text.primary",
                fontWeight: 500,
            },
        },
        Button: {
            baseStyle: {
                _focus: { boxShadow: "none" },
            },
        },
    },
    styles: {
        global: {
            html: {
                fontSize: ["14px", "15px", "15px", "16px"],
            },
            "*": {
                fontFamily: "Mark Pro",
                color: "inherit",
            },
            "*::-webkit-scrollbar": {
                width: "0.3rem",
                height: "0.3rem",
            },
            "*::-webkit-scrollbar-track": {
                background: "black",
            },
            "*::-webkit-scrollbar-thumb": {
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
});
export default theme;
