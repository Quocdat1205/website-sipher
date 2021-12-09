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
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { MyText } from ".";
// hehe
export var NavBarLink = function (_a) {
    var onClick = _a.onClick, size = _a.size, text = _a.text, active = _a.active, href = _a.href, rest = __rest(_a, ["onClick", "size", "text", "active", "href"]);
    var router = useRouter();
    return (React.createElement(Flex, __assign({ onClick: onClick, color: "white", pos: "relative", cursor: "pointer", px: 2, justify: "center" }, rest),
        React.createElement(MyText, { fontWeight: "bold", size: "small", textAlign: "center", isTruncated: true, onClick: function () { return router.push(href); }, textTransform: "uppercase", letterSpacing: "3px", color: active ? "#FF710B" : "white", 
            // size={size}
            px: 2, py: 1, bgGradient: active ? "linear(to-t, whiteAlpha.100, transparent)" : "", borderBottom: "2px", borderColor: active ? "main.orange" : "transparent" }, text)));
};
