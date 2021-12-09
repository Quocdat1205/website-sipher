// * DESCRIPTION:
import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
export var Toast = function (_a) {
    var status = _a.status, title = _a.title, message = _a.message;
    var textColor = status === "success"
        ? "main.lightGreen"
        : status === "error"
            ? "main.brightRed"
            : status === "warning"
                ? "main.yellow"
                : "main.orange";
    return (React.createElement(Flex, { bg: "blackAlpha.800", shadow: "base", align: "center", pos: "relative", zIndex: "tooltip", color: "whiteAlpha.900" },
        React.createElement(Box, { h: "full", w: "4px", bgGradient: "linear(to-b, bgGradient.orange)", pos: "absolute", top: 0, left: 0 }),
        React.createElement(Flex, { w: "full", align: "flex-start", py: 2, px: 4, direction: "column" },
            React.createElement(Text, { fontWeight: "bold", textAlign: "left", color: textColor }, title),
            React.createElement(Text, { textAlign: "left" }, message))));
};
export default Toast;
