import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Flex,
    Stack,
    Text,
} from "@chakra-ui/react"
import React, { SetStateAction } from "react"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
import { ModeProps } from "../Home"
import CustomCheckbox from "./CustomCheckbox"

interface Props extends ModeProps {
    filter: any
    setFilter: SetStateAction<any>
    clearFilter: () => void
}

const dataCheckBox = [
    {
        title: "COLLECTION",
        data: [
            {
                id: "Inu",
                value: "inu",
            },
            {
                id: "Neko",
                value: "neko",
            },
        ],
    },
    {
        title: "LISTING TYPE",
        data: [
            {
                id: "Buy Now",
                value: "buy",
            },
            {
                id: "Auction",
                value: "auction",
            },
        ],
    },
    {
        title: "RARITY",
        data: [
            {
                id: "Common",
                value: "common",
            },
            {
                id: "Epic",
                value: "epic",
            },
        ],
    },
]

const Sidebar = ({ mode, filter, setFilter, clearFilter }: Props) => {
    const filterSelect = (type, checked, item) => {
        switch (type) {
            case "COLLECTION":
                const collection = checked ? [...filter.COLLECTION, item] : filter.COLLECTION.filter(e => e !== item)
                setFilter({ ...filter, COLLECTION: collection })
                break
            case "LISTING TYPE":
                const type = checked
                    ? [...filter["LISTING TYPE"], item]
                    : filter["LISTING TYPE"].filter(e => e !== item)
                setFilter({ ...filter, "LISTING TYPE": type })
                break
            case "RARITY":
                const rarity = checked ? [...filter.RARITY, item] : filter.RARITY.filter(e => e !== item)
                setFilter({ ...filter, RARITY: rarity })
                break
            default:
        }
    }

    return (
        <Flex flex={1} h="calc(100vh - 13rem)" flexDir="column" p={2}>
            <Flex flex={1} flexDir="column" overflow="hidden" rounded="xl" p={4} h="full" maxW="320px" bg="#292A40">
                <Flex p={4} justify="space-between" align="center">
                    <Text color="#7C7D91">FILTER</Text>
                    <Button
                        onClick={clearFilter}
                        fontWeight="semibold"
                        color="#3D84E6"
                        _focus={{ boxShadow: "none" }}
                        variant="unstyled"
                    >
                        CLEAR ALL
                    </Button>
                </Flex>
                <Box flex={1} overflow="auto">
                    <Accordion defaultIndex={[0]} allowMultiple>
                        {dataCheckBox.map(item => (
                            <AccordionItem py={4} borderColor="#3E3F53" key={item.title}>
                                {({ isExpanded }) => (
                                    <Box>
                                        <AccordionButton _focus={{ boxShadow: "none" }}>
                                            <Text
                                                fontWeight="semibold"
                                                color={isExpanded ? "white" : "rgba(233, 233, 233, 0.5)"}
                                                flex={1}
                                                textAlign="left"
                                            >
                                                {item.title}
                                            </Text>
                                            <Box>
                                                {isExpanded ? (
                                                    <MdArrowDropUp size="1.8rem" />
                                                ) : (
                                                    <MdArrowDropDown color="rgba(233, 233, 233, 0.5)" size="1.8rem" />
                                                )}
                                            </Box>
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Stack spacing={4}>
                                                {item.data.map(checkbox => (
                                                    <CustomCheckbox
                                                        onChange={e =>
                                                            filterSelect(item.title, e.target.checked, checkbox.value)
                                                        }
                                                        isChecked={filter[item.title].includes(checkbox.value)}
                                                        key={checkbox.id}
                                                        value={checkbox.value}
                                                    >
                                                        {checkbox.id}
                                                    </CustomCheckbox>
                                                ))}
                                            </Stack>
                                        </AccordionPanel>
                                    </Box>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Sidebar
