import React from "react";
interface BaseNavigationBarProps {
    menus: Record<"id" | "path", string>[];
    logoPath: string;
    onLogoClick?: () => void;
    children: React.ReactNode;
}
export declare const BaseNavigationBar: ({ menus, logoPath, onLogoClick, children }: BaseNavigationBarProps) => JSX.Element;
export {};
