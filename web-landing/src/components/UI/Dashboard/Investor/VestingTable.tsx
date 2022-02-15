import { BsFillTriangleFill } from "react-icons/bs";
// import { formatDistanceToNow } from "date-fns";
import { Box, chakra, Flex, Text } from "@chakra-ui/react";
import useSortableData from "src/hooks/useSortableData";
import { BiCalendar, BiCalendarCheck, BiTimeFive } from "react-icons/bi";

interface VestingItem {
    startAt: string;
    vestingTime: string;
    endsAt: string;
}

interface VestingProps {
    data?: VestingItem[];
}

const header = [
    { id: "startAt", name: "Start at" },
    { id: "vestingTime", name: "Vesting time" },
    { id: "endsAt", name: "Ends at" },
] as const;

const VestingTable = ({ data = [] }: VestingProps) => {
    const { items, requestSort, sortConfig } = useSortableData(data);

    return (
        <Box overflow="hidden" h="full">
            <Box h="full" maxH="30rem" overflow="auto" whiteSpace="nowrap" rounded="lg" bg="background.secondary" p={4}>
                <chakra.table w="full">
                    <chakra.thead>
                        <chakra.tr>
                            {header.map(i => (
                                <chakra.th key={i.id} p={2} fontWeight={500} textAlign={"left"}>
                                    <Flex align="center">
                                        <Text mr={2} color="#7C7D91 ">
                                            {i.name}
                                        </Text>
                                        <Box
                                            cursor="pointer"
                                            onClick={() => requestSort(i.id)}
                                            rotate={
                                                sortConfig?.key === i.id
                                                    ? sortConfig.direction === "ascending"
                                                        ? "0deg"
                                                        : "180deg"
                                                    : "180deg"
                                            }
                                            color="text.secondary"
                                            transform={"auto"}
                                        >
                                            <BsFillTriangleFill size={"0.5rem"} />
                                        </Box>
                                    </Flex>
                                </chakra.th>
                            ))}
                            <chakra.th p={2}></chakra.th>
                        </chakra.tr>
                    </chakra.thead>
                    <chakra.tbody>
                        {items.map((item, index) => (
                            <chakra.tr key={index} borderTop="1px" borderColor="#45465D">
                                <chakra.td p={2}>
                                    <Flex align="center">
                                        <Box color="#5F6073" mr={1}>
                                            <BiCalendar />
                                        </Box>
                                        {item.startAt}
                                    </Flex>
                                </chakra.td>
                                <chakra.td p={2}>
                                <Flex align="center">
                                        <Box color="#5F6073" mr={1}>
                                            <BiTimeFive />
                                        </Box>
                                        {item.vestingTime}
                                    </Flex>
                                </chakra.td>
                                <chakra.td p={2} >
                                <Flex align="center">
                                        <Box color="#5F6073" mr={1}>
                                            <BiCalendarCheck />
                                        </Box>
                                        {item.endsAt}
                                    </Flex>  
                                </chakra.td>
                                <chakra.td p={2}></chakra.td>
                            </chakra.tr>
                        ))}
                    </chakra.tbody>
                </chakra.table>
            </Box>
        </Box>
    );
};

export default VestingTable;
