import { Tab, TabPanel, TabPanelsProps, TabProps } from "@chakra-ui/tabs"

interface ButtunProps extends TabProps {}

const Button = ({ ...props }: ButtunProps) => {
    return (
        <Tab
            _selected={{
                bgGradient: "linear(to-b, bgGradient.orange)",
                bgClip: "text",
            }}
            _active={{
                bg: "transparent",
                bgGradient: "linear(to-b, bgGradient.orange)",
                bgClip: "text",
            }}
            _focus={{ boxShadow: "none" }}
            px="6"
            fontFamily="Mark Pro"
            fontWeight="bold"
            letterSpacing="2px"
            {...props}
        />
    )
}

interface PanelProps extends TabPanelsProps {}

const Panel = (props: PanelProps) => {
    return <TabPanel display="flex" flexDir="column" alignItems="center" overflow="hidden" p={0} h="full" {...props} />
}

const TabComponent = {
    Button,
    Panel,
}

export default TabComponent
