import { BsFillTriangleFill } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { Box, chakra, Flex, Text } from "@chakra-ui/react";
import useSortableData from "src/hooks/useSortableData";

interface VestingItem {
    createdAt: string;
    vestingTime: string;
    deadline: string;
}

interface VestingProps {
    data?: VestingItem[];
}

const header = [
    { id: "pricePerItem", name: "Start at" },
    { id: "priceInUSD", name: "Vesting time" },
    { id: "deadline", name: "Ends at" },
] as const;

const VestingTable = ({ data = [] }: VestingProps) => {
    const { items, requestSort, sortConfig } = useSortableData(data);

    return (
        <Box mb={6}>
            <Box overflowX="auto" whiteSpace="nowrap" rounded="lg" bg="background.secondary" p={4}>
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
                            <chakra.tr key={index} borderTop="1px" borderColor="border.gray2">
                                <chakra.td p={2}>
                                    <Flex align="center">
                                        <Box mr={1}>
                                            <FaEthereum />
                                        </Box>
                                        {item.createdAt}
                                    </Flex>
                                </chakra.td>
                                <chakra.td p={2}></chakra.td>
                                <chakra.td p={2}>
                                    {formatDistanceToNow(new Date(item.deadline), {
                                        addSuffix: true,
                                    })}
                                </chakra.td>
                                <chakra.td p={2} color="fill.blue" title={item.vestingTime}>
                                    {formatDistanceToNow(new Date(item.vestingTime), {
                                        addSuffix: true,
                                    })}
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
