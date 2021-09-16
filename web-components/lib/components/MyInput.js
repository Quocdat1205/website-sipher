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
import { Input } from "@chakra-ui/react";
import React from "react";
export var MyInput = function (props) {
    return React.createElement(Input, __assign({ fontSize: ["sm", "md", "lg"] }, props));
};
export default MyInput;
