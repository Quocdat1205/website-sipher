// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout";
import Body from "./Body";

interface FagUIProps {}

const FagUI = ({}: FagUIProps) => {
  return (
    <Flex bg="black" direction="column">
      <Body />
    </Flex>
  );
};

export default FagUI;
