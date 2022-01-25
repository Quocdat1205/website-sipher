import { Box, Flex, Stack, Img, Text } from "@chakra-ui/react";
import { currency } from "@source/utils";
import React from "react";

interface Props {
    title: string;
    value?: number;
    icon?: React.ReactNode;
}

const Card = ({ title, value = 0, icon }: Props) => {
    return (
        <Stack p={4}>
            <Flex align="center" justify="space-between">
                <Text fontSize="lg" color="#7C7D91">
                    {title}
                </Text>
                <Box>{icon}</Box>
            </Flex>
            <Flex align="center">
                <Img h="1.5rem" src="/images/icons/sipher.png" alt="sipher" />
                <Text fontWeight={600} fontSize="xl" ml={2}>
                    {currency(value)}
                </Text>
            </Flex>
            <Text fontWeight={600} color="#7C7D91">
                ${currency(value * 1.5)}
            </Text>
        </Stack>
    );
};
export default Card;
