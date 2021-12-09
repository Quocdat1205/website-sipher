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
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";
export var ChakraModal = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (React.createElement(Modal, __assign({ isCentered: true }, rest),
        React.createElement(ModalOverlay, null),
        React.createElement(ModalContent, { bg: "red.300", rounded: "0", bgGradient: "linear(to-b,bgGradient.orange)", p: 1 },
            React.createElement(ModalCloseButton, { color: "#9B9E9D", _focus: { border: "0px" } }),
            React.createElement(ModalBody, { bg: "black", p: 4, overflow: "auto" }, children))));
};
export default ChakraModal;
