import { ActionButton, TextContainer } from "@components/shared";
import React from "react";
import { contentRoadmap } from "@constant/content/roadmap";
import { Box, Stack, Text } from "@chakra-ui/react";

const RoadMap = () => {
    return (
        <TextContainer headline="ROADMAP">
            <Stack mb={8}>
                {contentRoadmap.map(item => (
                    <Text key={item}>{item}</Text>
                ))}
            </Stack>
            <Box textAlign="center">
                <ActionButton
                    text="JOIN US AT SIPHER"
                    rounded="full"
                    onClick={() => window.open("https://atlas.sipher.xyz/sipher-roadmap", "_blank")}
                />
            </Box>
        </TextContainer>
    );
};
export default RoadMap;
