import React, { useRef } from "react"
import { Flex, Box, Image, IconButton, Stack } from "@chakra-ui/react"
import { MotionFlex, Typo } from "@components/shared"
import { AnimatePresence } from "framer-motion"
import useHover from "@hooks/useHover"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

export interface PersonCardProps {
    name: string
    job: string
    srcImg: string
    isEmployee?: boolean
    linkedin?: string
    twitter?: string
}

const PersonCard = ({ isEmployee, name, job, srcImg, linkedin, twitter }: PersonCardProps) => {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)

    return (
        <Flex pos="relative" ref={hoverRef} direction="column" p={6} rounded="2xl" bg="#131313" align="center">
            <Box overflow="hidden" bg="about.textGray" rounded="full" boxSize={isEmployee ? "6rem" : "9rem"} mb={4}>
                <Image display="block" w="full" h="full" src={srcImg} alt="" />
            </Box>
            <Typo.BoldText size="medium" textTransform="uppercase" textAlign="center">
                {name}
            </Typo.BoldText>
            <Typo.Text textAlign="center">{job}</Typo.Text>
            <AnimatePresence>
                {isHover && (
                    <MotionFlex
                        pos="absolute"
                        top={0}
                        left={0}
                        p={4}
                        w="full"
                        h="full"
                        justify="center"
                        align="center"
                        bg="blackAlpha.700"
                        exit={{ opacity: 0 }}
                        transition={{ type: "tween", duration: 0.25 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Stack spacing={1} direction="column" align="center" userSelect="none">
                            <IconButton
                                as="a"
                                href={twitter}
                                rel="nonreferrer"
                                target="_blank"
                                borderRadius="99"
                                rounded="full"
                                _hover={{ bg: "none" }}
                                _active={{ bg: "whiteAlpha.200" }}
                                _focus={{ shadow: "none" }}
                                variant="ghost"
                                aria-label="twitter"
                                fontSize={["1.5rem", "2rem"]}
                                pointerEvents={`${twitter ? "unset" : "none"}`}
                                icon={<FaTwitter />}
                                color={twitter ? "white" : "whiteAlpha.500"}
                            />
                            <IconButton
                                as="a"
                                href={linkedin}
                                rel="nonreferrer"
                                target="_blank"
                                rounded="full"
                                _hover={{ bg: "none" }}
                                _active={{ bg: "whiteAlpha.200" }}
                                _focus={{ shadow: "none" }}
                                variant="ghost"
                                aria-label="linkedin"
                                fontSize={["1.5rem", "2rem"]}
                                pointerEvents={`${linkedin ? "unset" : "none"}`}
                                icon={<FaLinkedin />}
                                color={linkedin ? "white" : "whiteAlpha.500"}
                            />
                        </Stack>
                    </MotionFlex>
                )}
            </AnimatePresence>
        </Flex>
    )
}

export default PersonCard
