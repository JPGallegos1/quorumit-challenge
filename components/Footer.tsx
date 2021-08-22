import type { FC } from "react";
import { HStack, VStack, Text } from "@chakra-ui/react";

export interface IFooter {
  author: string;
  company: string;
}

const Footer: FC<IFooter> = ({ company, author }: IFooter) => {
  return (
    <HStack
      as="footer"
      color="quorum.white.100"
      height="4.6875rem"
      width="100%"
      maxW="container.xl"
      justify="flex-end"
      paddingX="1rem"
    >
      <VStack>
        <Text fontFamily="SF Pro Display Regular">{author}</Text>
        <Text fontFamily="SF Pro Display Medium">{company}</Text>
      </VStack>
    </HStack>
  );
};

export default Footer;
