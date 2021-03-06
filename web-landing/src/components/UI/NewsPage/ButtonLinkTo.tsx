import { Button, ButtonProps } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Typo } from "@components/shared"
import React from "react"

interface ButtonLinkToProps extends ButtonProps {
    url: string
    typeSocial: "TWITTER" | "MEDIUM" | "FACEBOOK" | "INSTAGRAM" | "POST"
}

const ButtonLinkTo = ({ url, typeSocial, ...rest }: ButtonLinkToProps) => {
    return (
        <Button
            {...rest}
            variant="link"
            onClick={e => {
                e.stopPropagation()
                window.open(url, "_blank")
            }}
        >
            <Image
                zIndex="2"
                display="block"
                m="0 auto"
                src={`/images/icons/community/${
                    typeSocial === "MEDIUM"
                        ? "medium"
                        : typeSocial === "TWITTER"
                        ? "twitter"
                        : typeSocial === "FACEBOOK"
                        ? "fb"
                        : typeSocial === "INSTAGRAM"
                        ? "ins"
                        : "main"
                }.png`}
                alt=""
                h="1.5rem"
            />
            <Typo.Text color="about.textGray" ml={2}>
                Link
            </Typo.Text>
        </Button>
    )
}
export default ButtonLinkTo
