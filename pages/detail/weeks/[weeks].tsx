import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import { Box, HStack } from "@chakra-ui/react";

import Chart from "@/components/Chart";
import Details from "@/components/Details";
import Layout from "@/components/Layout";

import { IDetails } from "types";
import useTime from "@/hooks/useTime";

const CoinPerWeek: NextPage<IDetails> = ({ data }: IDetails) => {
  const router = useRouter();
  const { time } = useTime(data);

  const { name, vs_currency } = router.query;
  const getCoinDataPerDay = () => {
    router.push({
      pathname: `/detail/days/${name}`,
      query: { name, vs_currency },
    });
  };

  const getCoinDataPerMonth = () => {
    router.push({
      pathname: `/detail/month/${name}`,
      query: { name, vs_currency },
    });
  };

  return (
    <Layout title="Coin">
      <HStack color="white" alignItems="flex-start" justify="space-between">
        <Details time={time} data={data} />

        <Box height="100%" width="55%">
          <HStack>
            <Box padding="2rem" onClick={getCoinDataPerDay}>
              1
            </Box>
            <Box padding="2rem" onClick={getCoinDataPerMonth}>
              30
            </Box>
          </HStack>
          <Chart data={data} />
        </Box>
      </HStack>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log("query strings", query);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/coins/${query.name}/market_chart?vs_currency=${query.vs_currency}&days=14`
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

export default CoinPerWeek;
