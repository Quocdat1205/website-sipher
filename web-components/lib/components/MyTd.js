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
import { Td } from "@chakra-ui/react";
import React from "react";
export var MyTd = function (props) {
    return (React.createElement(Td, __assign({ fontSize: ["xs", "sm", "md", "lg"] }, props), props.children));
};
export default MyTd;
