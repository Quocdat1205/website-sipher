import React from "react";
import { Box, useOutsideClick, Collapse, Text, VStack } from "@chakra-ui/react";
import { GradientButton } from ".";
import { useRef, useState } from "react";
export var SubLink = function (_a) {
    var text = _a.text, href = _a.href;
    return (React.createElement(Text, { fontWeight: "700", bgGradient: "linear(to-b, bgGradient.orange)", bgClip: "text", as: "a", href: href, rel: "nonreferrer", target: "_blank", borderBottom: "1px" }, text));
};
export var ViewCollectionButton = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "medium" : _b, _c = _a.text, text = _c === void 0 ? "VIEW COLLECTION ON OPENSEA" : _c;
    var _d = useState(false), isExpanded = _d[0], setIsExpanded = _d[1];
    var ref = useRef(null);
    useOutsideClick({
        ref: ref,
        handler: function () { return setIsExpanded(false); },
    });
    return (React.createElement(Box, { pos: "relative", ref: ref },
        React.createElement(GradientButton, { text: text, rounded: "full", onClick: function () { return setIsExpanded(!isExpanded); }, zIndex: 2, size: size }),
        React.createElement(Box, { pos: "absolute", top: "50%", left: 0, w: "full" },
            React.createElement(Collapse, { in: isExpanded },
                React.createElement(Box, { bgGradient: "linear(to-b, bgGradient.orange)", p: 1, sx: { borderRadius: "0 0 1rem 1rem" } },
                    React.createElement(VStack, { direction: "column", w: "full", spacing: 3, align: "flex-start", px: size === "medium" ? 6 : 8, bg: "rgb(8, 8, 8)", pt: 7, pb: 3, sx: { borderRadius: "0 0 1rem 1rem" }, shadow: "base" },
                        React.createElement(SubLink, { text: "NEKO - SIPHERIAN FLASH", href: "https://opensea.io/collection/sipherianflash" }),
                        React.createElement(SubLink, { text: "INU - SIPHERIAN SURGE", href: "https://opensea.io/collection/sipheriansurge" })))))));
};
export default ViewCollectionButton;
