import { useRef, useState } from "react";
import type { NextPage } from "next";
import {
  Heading,
  VStack,
  HStack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import Layout from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <VStack height="100%" paddingBottom="2rem">
        <Box width="100%">
          <Heading
            textStyle="h1"
            color="quorum.gray.300"
            textAlign="left"
            fontFamily="SF Pro Display Regular"
          >
            Tradding App
          </Heading>
        </Box>

        <HStack width="100%" height="100%">
          <VStack height="34.375rem" width="40%" alignSelf="stretch">
            <HStack width="100%" height="42%">
              <Box id="image" h="5rem" w="5rem" background="white"></Box>
              <VStack width="100%">
                <HStack color="white" width="100%" justify="space-around">
                  <Box>
                    <Text>BTC</Text>
                    <Text>Bitcoin</Text>
                  </Box>
                  <Box>
                    <Text>BTC</Text>
                    <Text>Bitcoin</Text>
                  </Box>
                </HStack>
              </VStack>

              <Box>
                <Menu isLazy id="menu-button-2">
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<ChevronDownIcon />}
                    variant="outline"
                    borderRadius="full"
                    color="white"
                    background="quorum.gray.400"
                    _hover={{ bg: "trasparent" }}
                    _focus={{ borderColor: "quorum.black.300" }}
                    _expanded={{ bg: "quorum.gray.400" }}
                  />
                  <MenuList
                    background="quorum.black.200"
                    color="white"
                    border="none"
                  >
                    <MenuItem _hover={{ bg: "quorum.black.100" }}>
                      BTC - Bitcoin
                    </MenuItem>
                    <MenuItem _hover={{ bg: "quorum.black.100" }}>
                      ETH - Ethereum
                    </MenuItem>
                    <MenuItem _hover={{ bg: "quorum.black.100" }}>
                      Cardano - Bitcoin
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </HStack>
            <Box
              height="100%"
              width="100%"
              background="quorum.black.200"
              margin="0"
            ></Box>
          </VStack>

          <VStack width="100%" height="34.375rem" justify="flex-end">
            <Box background="quorum.black.300" height="70%" width="100%"></Box>
          </VStack>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Home;
