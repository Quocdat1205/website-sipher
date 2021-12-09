// * DESCRIPTION:
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Box, Spinner, Flex } from "@chakra-ui/react";
import { MyText } from ".";
export var GradientButton = function (_a) {
    var text = _a.text, _b = _a.as, as = _b === void 0 ? "button" : _b, href = _a.href, isLoading = _a.isLoading, _c = _a.loadingText, loadingText = _c === void 0 ? "Submitting" : _c, rel = _a.rel, fontSize = _a.fontSize, disabled = _a.disabled, _d = _a.size, size = _d === void 0 ? "medium" : _d, rest = __rest(_a, ["text", "as", "href", "isLoading", "loadingText", "rel", "fontSize", "disabled", "size"]);
    var _e = size === "large" ? [3, 8] : [2, 6], px = _e[0], py = _e[1];
    return (React.createElement(Box, __assign({ as: as, href: href, target: "_blank", rel: rel, textTransform: "uppercase", rounded: "md", py: px, px: py, bgColor: "white", bgGradient: "linear(to-b, #FF6795, #FF710B 84.37%)", fontSize: "xs", color: "white", shadow: "base", letterSpacing: "1px", pos: "relative", textAlign: "center", pointerEvents: disabled ? "none" : "all" }, rest), isLoading ? (React.createElement(Flex, { align: "center", justify: "center" },
        React.createElement(Spinner, { size: "sm", thickness: "3px" }),
        React.createElement(MyText, { fontSize: fontSize, ml: 4, fontWeight: "bold" }, loadingText))) : (React.createElement(MyText, { fontSize: fontSize, letterSpacing: "2px", fontWeight: "bold" }, text))));
};
