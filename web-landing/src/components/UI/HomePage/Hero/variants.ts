const variants = {
    slideFromLeft: {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },
    },
    slideFromRight: {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 2000 },
    },
    slideFromBottom: {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 1000 },
    },
    zoom: {
        visible: { opacity: 1, scaleX: 1 },
        hidden: { opacity: 0, scaleX: 0 },
    },
}

export default variants
