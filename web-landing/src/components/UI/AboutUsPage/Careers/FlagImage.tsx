import { Image } from "@chakra-ui/image";
import React from "react";

interface Props {
  srcImg?: string;
}

const FlagImage = ({ srcImg }: Props) => {
  return (
    <Image
      px={[1]}
      sx={{
        "@media (max-width: 680px)": {
          display: "none",
        },
      }}
      src={srcImg}
      alt=""
      h={["1rem", "1.4rem"]}
    />
  );
};

export default FlagImage;
