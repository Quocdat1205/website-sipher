/// <reference types="react" />
interface SubLinkProps {
    text: string;
    href: string;
}
export declare const SubLink: ({ text, href }: SubLinkProps) => JSX.Element;
export interface ViewCollectionButtonProps {
    size?: "large" | "medium";
    text?: string;
}
export declare const ViewCollectionButton: ({ size, text, }: ViewCollectionButtonProps) => JSX.Element;
export default ViewCollectionButton;
