import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { VStack, HStack, Box, Text, Stack } from "@chakra-ui/react";

import { useCoinContext } from "@/contexts/CoinContext";

import Layout from "@/components/Layout";
import TraddingApp from "@/components/TradingApp";
import Dropdown from "@/components/Dropdown";
import SwitchPrice from "@/components/SwitchPrice";

import useCoin from "@/hooks/useCoin";
import CoinPrices from "@/components/CoinPrices";
import SwitchRoutes from "@/components/SwitchRoutes";

const Home: NextPage = () => {
  const { coin, coinName, setCoinName, priceInUsd, setPriceInUsd, isLoading } =
    useCoinContext();

  const { getCoinInfo } = useCoin();

  useEffect(() => {
    if (!coinName.length) return;
    else getCoinInfo(coinName);
  }, [coinName]);

  return (
    <Layout title="Home">
      <VStack height="100%" paddingBottom="2rem">
        <HStack width="100%" height="100%" justify="space-between">
          <VStack
            height="34.375rem"
            width={{ base: "90%", sm: "80%", md: "30%" }}
            margin={{ base: "0 auto", sm: "0 auto" }}
            alignSelf="stretch"
          >
            <Dropdown
              coin={coin}
              setCoinName={setCoinName}
              isLoading={isLoading}
            />
            <SwitchPrice
              priceInUsd={priceInUsd}
              setPriceInUsd={setPriceInUsd}
            />

            <CoinPrices priceInUsd={priceInUsd} coin={coin} />
          </VStack>

          <VStack
            width="65%"
            height="34.375rem"
            justify="flex-end"
            display={{ base: "none", sm: "none", md: "flex" }}
          >
            <Box
              background="quorum.black.300"
              height="70%"
              width="100%"
              display={{
                base: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              }}
            ></Box>
          </VStack>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Home;
