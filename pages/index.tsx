import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { VStack, HStack, Box } from "@chakra-ui/react";

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
  const router = useRouter();

  useEffect(() => {
    if (!coinName.length) return;
    else getCoinInfo(coinName);
  }, [coinName]);

  return (
    <Layout title="Home">
      <VStack height="100%" paddingBottom="2rem">
        <TraddingApp />

        <SwitchRoutes router={router} coin={coin} priceInUsd={priceInUsd} />

        <HStack width="100%" height="100%">
          <VStack height="34.375rem" width="40%" alignSelf="stretch">
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

          <VStack width="100%" height="34.375rem" justify="flex-end">
            <Box background="quorum.black.300" height="70%" width="100%"></Box>
          </VStack>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Home;
