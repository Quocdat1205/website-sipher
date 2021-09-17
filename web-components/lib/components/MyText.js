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
import { Text } from "@chakra-ui/layout";
import React from "react";
export var MyText = function (props) {
    return (React.createElement(Text, __assign({ fontSize: ["sm", "sm", "md", "lg"] }, props), props.children));
};
export default MyText;
