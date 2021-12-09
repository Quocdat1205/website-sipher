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
import { Th } from "@chakra-ui/react";
import React from "react";
export var MyTh = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "medium" : _b, rest = __rest(_a, ["size"]);
    var fontSize = size === "small"
        ? ["xs", "sm", "sm", "md"]
        : size === "medium"
            ? ["sm", "md", "md", "xl"]
            : ["md", "lg", "lg", "xl", "2xl"];
    return React.createElement(Th, __assign({ textAlign: "left", px: 0, fontSize: fontSize }, rest));
};
export default MyTh;
