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
import { Button } from "@chakra-ui/react";
import React from "react";
export var MyButton = function (props) {
    return (React.createElement(Button, __assign({ fontSize: ["xs", "sm", "md", "lg"] }, props), props.children));
};
export default MyButton;
