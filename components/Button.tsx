import { Box } from "@chakra-ui/react";
import { IButton } from "types";

const Button: React.FC<IButton> = ({ onClick, condition, label }: IButton) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      bg={condition ? "quorum.gray.100" : "rgba(238, 104, 85, 0.04)"}
      color="white"
      width="50%"
      border="0.5px solid"
      borderColor="rgba(0, 0, 0, 0.04);"
      boxShadow="0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)"
      borderRadius="6.93px"
      fontWeight="500"
      fontFamily="SF Pro Display Regular"
      fontSize="14px"
      lineHeight="18px"
      textAlign="center"
      padding="0.5rem"
    >
      {label}
    </Box>
  );
};

export default Button;
