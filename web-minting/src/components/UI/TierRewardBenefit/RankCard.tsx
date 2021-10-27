import { Flex, FlexProps, Image } from "@chakra-ui/react";
import { Typo } from "@components/shared/Typo";
import React from "react";

export interface RankCardProps extends FlexProps {
  id: string;
  srcImg: string;
}

const RankCard = ({ id, srcImg }: RankCardProps) => {
  return (
    <Flex flexDir="column" align="center">
      <Image h="4rem" src={srcImg} />
      <Typo.Text size="small" textTransform="uppercase">
        {id}
      </Typo.Text>
    </Flex>
  );
};
export default RankCard;
