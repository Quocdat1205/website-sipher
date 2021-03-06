import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { IconSipher } from "@components/shared";
import { currency } from "@source/utils";
import React from "react";

interface Props {
    title: string;
    value?: number;
    icon?: React.ReactNode;
    sipherPrice?: number;
}

const Card = ({ title, value = 0, icon, sipherPrice = 0 }: Props) => {
    return (
        <Stack p={[4, 6]}>
            <Flex align="center">
                <Box mr={2}>{icon}</Box>
                <Text fontSize="lg" color="#7C7D91">
                    {title}
                </Text>
            </Flex>
            <Flex align="center">
                <IconSipher />
                <Text fontWeight={600} fontSize="2xl" ml={2}>
                    {currency(value)}
                </Text>
            </Flex>
            <Text fontWeight={600} color="#7C7D91">
                ${currency(value * sipherPrice)}
            </Text>
        </Stack>
    );
};
export default Card;
