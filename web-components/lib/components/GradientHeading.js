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
// * DESCRIPTION:
import React from "react";
import MyHeading from "./MyHeading";
export var GradientHeading = function (props) {
    return React.createElement(MyHeading, __assign({ bgClip: "text", bgGradient: "linear(to-b,bgGradient.orange)" }, props));
};
export default GradientHeading;
