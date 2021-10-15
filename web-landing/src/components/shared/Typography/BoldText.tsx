// * DESCRIPTION:

import { MyText, MyTextProps } from "@sipher/web-components";

interface BoldTextProps extends MyTextProps {
  isGradient?: boolean;
}

const BoldText = ({ isGradient, ...rest }: BoldTextProps) => {
  return (
    <MyText
      size="large"
      fontWeight="semibold"
      letterSpacing={["2px", "4px"]}
      {...rest}
      bgClip={isGradient ? "text" : "border-box"}
      bgGradient={isGradient ? "linear(to-b,bgGradient.orange)" : ""}
    />
  );
};

export default BoldText;
