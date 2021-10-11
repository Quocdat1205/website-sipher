// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { BackgroundContainer, TextContainer, Typo } from "@components/shared"
import { GradientButton, MyText } from "@sipher/web-components"

interface CareesProps {}

const Careers = ({}: CareesProps) => {
    return (
        <BackgroundContainer>
            <Flex direction="column" align="center" px={4} py={24} w="full">
                <TextContainer headline="CAREERS">
                    <Typo.Text textAlign="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ornare libero, ut consequat
                        tortor luctus iaculis. Quisque at lectus faucibus, mollis massa at, commodo nisl. Cras sed neque
                        consectetur, egestas elit at, dignissim enim. Proin id pulvinar ipsum. Nulla luctus malesuada
                        diam nec dapibus.
                    </Typo.Text>
                    <Flex w="full" justify="center" mt={4}>
                        <GradientButton
                            text="Join Our Discord Community"
                            as="a"
                            href="https://discord.com/invite/dRqdSxUSmd"
                            rounded="full"
                            w="fit-content"
                            fontSize="xs"
                            px={4}
                            py={2}
                        />
                    </Flex>
                </TextContainer>
            </Flex>
        </BackgroundContainer>
    )
}

export default Careers
