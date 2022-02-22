import { BsFillTriangleFill } from "react-icons/bs";
// import { formatDistanceToNow } from "date-fns";
import { Box, chakra, Flex, Text } from "@chakra-ui/react";
import useSortableData from "src/hooks/useSortableData";
import { BiCalendar } from "react-icons/bi";
import { currency, floorPrecised } from "@source/utils";
import { IconSipher } from "@components/shared";
import Pagination from "@components/shared/Pagination";
import { useState, useMemo } from "react";
import { format } from "date-fns";

interface VestingItem {
    id: number;
    startAt: number;
    totalAmount: number;
}

interface VestingProps {
    data?: VestingItem[];
}

const header = [
    { id: "startAt", name: "Start at" },
    { id: "totalAmount", name: "Amount" },
] as const;

const pageSize = 6;

const VestingTable = ({ data = [] }: VestingProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);

    const { items, requestSort, sortConfig } = useSortableData(currentTableData);

    return (
        <Box overflow="hidden" h="full">
            <Box
                h="full"
                maxH="30rem"
                overflow="auto"
                whiteSpace="nowrap"
                rounded="lg"
                bg="background.secondary"
                p={[4, 6]}
            >
                <chakra.table mb={4} w="full">
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
                                        {format(new Date(item.startAt), "hh:mm a") +
                                            " UTC " +
                                            format(new Date(item.startAt), "dd MMM yyyy")}
                                    </Flex>
                                </chakra.td>
                                <chakra.td p={2}>
                                    <Flex align="center">
                                        <Box color="#5F6073" mr={2}>
                                            <IconSipher h="1rem" />
                                        </Box>
                                        {currency(floorPrecised(item.totalAmount.toString(), 2))}
                                    </Flex>
                                </chakra.td>
                                <chakra.td p={2}></chakra.td>
                            </chakra.tr>
                        ))}
                    </chakra.tbody>
                </chakra.table>
                <Pagination
                    currentPage={currentPage}
                    totalCount={data.length}
                    pageSize={pageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </Box>
        </Box>
    );
};

export default VestingTable;
