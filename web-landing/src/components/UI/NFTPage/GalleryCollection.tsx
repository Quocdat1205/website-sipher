import { Img, Box, Flex, HStack, StackProps } from "@chakra-ui/react"
import { LinkButton, TextContainer } from "@components/shared"
import { MyText } from "@sipher/web-components"
import { motion } from "framer-motion"
import React from "react"

const images = [
    "/images/pc/characters/phasewalker.png",
    "https://s3-alpha-sig.figma.com/img/8cee/5043/39688ec0d83a4fa7625edb6d5964f973?Expires=1635120000&Signature=CITIgKtUrrnsrlo047K-dQQvYqn5LVzk1ZzHOavAWEXfPRauocs8BTn4-d0n8pbTmTAC-gp9cCxiAemI8nh5gsjqmAHzSLAF2yEjY9fleV4BwwoAohIhEcs1t9~g37mqwyIjK9r6sWRed5JQbAENK0QTelfAhosrNyNBTHol1-E8Z3KZLa~DHxRM9JdqK2I~f4YLXuFmfeFDzADsGk~3eQ~TkUjTqcb318zMx4LuOhiewQMaiCkeB2Ohvmr79s-IWUfbb9er3Pk7z4FiNp3mAQzw6uK-scmk~VUzrB1V0p8S6t1IBZ8qmCg1YsKKBroQ1ue2GDLpg7fRJS2bduqnAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "/images/pc/characters/crystalis.png",
    "https://s3-alpha-sig.figma.com/img/2243/7363/947a51a556a93b0c4b391630276e367a?Expires=1635120000&Signature=D3yJdes~6ztdG-U7oi8qwqznQl0yZ6qjw9xPx1wwTNaSQU~C~E9F-sDd--DxXKuZucAT18ZujYEnUqQjXcqHVEUPQUnBVfQrOnZaMDxjSzMoTDKSgZxQn1j4KXSQw1SKtgkppGm8JuT5Eok05BS~vXYMHwJHSxwM3T~xo6XGN28f74D0-7pKZzPWqMrtQlwnlmYrKEA067knuTf4EybISvH7SVasXvJ78EXkyDm3v92mQY1zvZMSlMEOxlXfYVaXMXgBa8lADSeshgyG5sfZrJSuENplqe2z1rgUo3qtTIUvC3PuiPomVrLWWKCOPbAF6ySYg1Ms5vj4fuon33YXyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "/images/pc/characters/mech.png",
    "https://s3-alpha-sig.figma.com/img/6444/93bc/a0510a6640312583a40b0bfb013f630f?Expires=1635120000&Signature=Ed~b7weXz-ORL9jpQYkNi7zEEd7NfwtkuNUSBYhXM3MQAsFR60uwFfBqfDtHGi6tkU7K31IVGCg91WhnmL766Q4lB2oxdjPXOqEagRQOEImVbt2UmM-vIEEhTStQ9ykHu7DSDla4WmOQZvQcf1vhpPNEQvQu8Cl2e2sUFY9lKWcWX4tdcPGigBHqK2wO1Aelg6XfChNy57bUrrmrlNzF9M0uVbedDvmnG3~cwLzmsqELjRqe8TVO6JXAAOHS1YU575yr9tmROQKupY7qn0bi9g7fXnNi70hCRkdCyoOhRseh2SlcZlpWsxYml0P0HKd6AdK~QsLHBuBE6Xiv1A7UAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "/images/pc/characters/felis.png",
    "https://s3-alpha-sig.figma.com/img/12de/5d62/b93ef2672499723338172662ab9caea2?Expires=1635120000&Signature=ESgjNFu8qpl7y8CQhkwZclQzhvwSzyQPPXpVuPFlTAl9qSPog6rAM5ce14CF6qTwdca3PpKFCvbHr07KbYb~IIU7SwFWYBbypE95LUTjjpLR4H2NcYVAdTNIs0sfkcS71RMHtHLHgPYo8RgQBSXjPOYaNTCHelg~9hjVMhatOSStoqWthYNe7sVVqucS-6O4WPqs3l3hnx9253q-qbQ8dMUl78Ejm1~OELBXlhMr~m66H8sndeERFdeuTKkZZl~JWHITzokCp-TpX5Ep-WOull8P1MjI8UbuwH3FAJUUDN2cjnbc8vbbXFagHgd3Qk1KrXiTalNsYBr56tcmnMGfrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
]

const MotionStack = motion<Omit<StackProps, "transition">>(HStack)

const GalleryCollection = () => {
    return (
        <Flex direction="column" align="center" w="full">
            <TextContainer headline="Gallery Collection">
                <MyText px={4}>
                    {`The first 10,000 Sipherians, SIPHER, are the combination of two ideals: Surrogates and Cipher. These are the adventurers in the world of Sipheria. The first of the races, INU, make up the 1st Fleet of the "Sipherian Surge" and were created by mad scientists as a product of animal CRISPR-genome extraction and ethereal elements.`}
                </MyText>
                <Box my={8} w="full" overflow="hidden">
                    <Box>
                        <MotionStack
                            w="400%"
                            overflow="hidden"
                            spacing={0}
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                ease: "linear",
                                duration: 10,
                                loop: Infinity,
                            }}
                        >
                            <HStack w="50%" overflow="hidden" spacing={0}>
                                {images.map(image => (
                                    <Box key={image} flex={1} px={1}>
                                        <Img src={image} alt="sipher-image" w="full" />
                                    </Box>
                                ))}
                            </HStack>
                            <HStack w="50%" overflow="hidden" spacing={0}>
                                {images.map(image => (
                                    <Box key={image} flex={1} px={1}>
                                        <Img src={image} alt="sipher-image" w="full" />
                                    </Box>
                                ))}
                            </HStack>
                        </MotionStack>
                    </Box>
                </Box>
            </TextContainer>
            <Flex justify="center" w="full" mt={8}>
                <LinkButton
                    text="Check Out The Collection"
                    href="https://opensea.io/collection/sipheriansurge"
                    size="large"
                />
            </Flex>
        </Flex>
    )
}

export default GalleryCollection
