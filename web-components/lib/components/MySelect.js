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
import { Select } from "@chakra-ui/react";
import React from "react";
export var MySelect = function (props) {
    return (React.createElement(Select, __assign({ fontSize: ["sm", "md", "lg"] }, props), props.children));
};
export default MySelect;
