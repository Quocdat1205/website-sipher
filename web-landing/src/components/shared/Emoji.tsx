import React from "react";
import { BoxProps, Box } from "@chakra-ui/react";

interface Props extends BoxProps {
  symbol: any;
}

export const Emoji = React.memo(({ symbol, ...rest }: Props) => (
  <Box as="span" role="img" {...rest}>
    {String.fromCodePoint(symbol)}
  </Box>
));
