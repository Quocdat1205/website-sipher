// * DESCRIPTION:
import React from "react";
import { Flex, HStack, Img } from "@chakra-ui/react";
import { NavBarLink } from ".";
import { useRouter } from "next/router";
export var BaseNavigationBar = function (_a) {
    var menus = _a.menus, logoPath = _a.logoPath, onLogoClick = _a.onLogoClick, children = _a.children;
    var router = useRouter();
    return (React.createElement(Flex, { px: 4, py: 4, bg: "blackAlpha.900", align: "center", justify: "space-between", overflow: "visible" },
        React.createElement(Flex, { mr: "2", flexShrink: 0, align: "center", onClick: onLogoClick, cursor: "pointer" },
            React.createElement(Img, { src: logoPath, h: ["1.5rem", "2rem"], alt: "sipher-logo" })),
        React.createElement(HStack, { spacing: [2, 2, 2, 4], flex: 1, justify: "center", sx: {
                "@media (max-width: 960px)": {
                    display: "none",
                },
            }, mr: 2 }, menus.map(function (menu) { return (React.createElement(NavBarLink, { key: menu.id, text: menu.id, href: menu.path, active: router.pathname.split("/")[1] === menu.path.split("/")[1] })); })),
        children));
};
