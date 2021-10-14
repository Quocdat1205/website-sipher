import { Flex, Box, Stack, Image } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import React from "react"

export interface PersonCardProps {
    name: string
    job: string
    srcImg: string
    isEmployee?: boolean
}

const PersonCard = ({ isEmployee, name, job, srcImg }: PersonCardProps) => {
    return (
        <Flex direction="column" p={6} rounded="2xl" bg="#131313" align="center">
            <Box overflow="hidden" bg="about.textGray" rounded="full" boxSize={isEmployee ? "6rem" : "9rem"} mb={4}>
                <Image display="block" w="full" h="full" src={srcImg} alt="" />
            </Box>
            <Typo.BoldText size="medium" textTransform="uppercase" textAlign="center">
                {name}
            </Typo.BoldText>
            <Typo.Text textAlign="center">{job}</Typo.Text>
        </Flex>
    )
}

export default PersonCard
