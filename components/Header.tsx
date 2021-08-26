import type { FC, ReactNode } from "react";
import { HStack, Image } from "@chakra-ui/react";
import Picture from "./Picture";

const Header: FC = () => {
  return (
    <>
      <HStack
        as="header"
        height="4.6875rem"
        width="100%"
        maxW="container.xl"
        justify="flex-end"
      >
        <Picture
          src="/assets/quorum-logo.svg"
          alt="Logo of Quorum Information Technology"
          height="100%"
          srcset="/assets/quorum-logo.svg"
        />
      </HStack>
    </>
  );
};

export default Header;
