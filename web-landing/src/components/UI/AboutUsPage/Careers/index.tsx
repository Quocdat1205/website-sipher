// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { BackgroundContainer, LinkButton, TextContainer, Typo } from "@components/shared"
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
                    <Flex w="full" justify="center" mt={8}>
                        <LinkButton
                            text="Join Us At Sipher"
                            href="https://www.notion.so/sipherhq/Join-us-at-Sipher-1357e774e38d432bb7d06078a99b43e7"
                            size="large"
                        />
                    </Flex>
                </TextContainer>
            </Flex>
        </BackgroundContainer>
    )
}

export default Careers
