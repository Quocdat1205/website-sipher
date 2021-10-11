const variants = {
    slideFromLeft: {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: "-100vw" },
    },
    slideFromRight: {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: "100vw" },
    },
    slideFromBottom: {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: "100vh" },
    },
    zoom: {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    },
}

export default variants
