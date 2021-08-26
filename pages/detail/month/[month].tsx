import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import { Box, Stack } from "@chakra-ui/react";

import Chart from "@/components/Chart";
import Details from "@/components/Details";
import Layout from "@/components/Layout";
import CoinNavigator from "@/components/CoinNavigator";

import useTime from "@/hooks/useTime";
import useCoinNavigation from "@/hooks/useCoinNavigation";

import { IDetails } from "types";

const CoinPerMonth: NextPage<IDetails> = ({ data }: IDetails) => {
  const router = useRouter();
  const { time } = useTime(data);

  const { name, vs_currency } = router.query;

  const { getCoinDataPerWeeks, getCoinDataPerDay } = useCoinNavigation(
    name,
    vs_currency
  );

  return (
    <Layout title={(name as string).replace(/^\w/, (c) => c.toUpperCase())}>
      <Stack
        color="quorum.gray.200"
        direction={{ base: "column", sm: "row" }}
        alignItems="flex-start"
        justify="space-between"
      >
        <Details time={time} data={data} />

        <Box
          height="100%"
          width={{ base: "100%", sm: "100%", md: "100%", lg: "55%" }}
          display={{ sm: "block" }}
          paddingY={{ base: 0, sm: "2rem" }}
        >
          <CoinNavigator
            labelPrevPage="01 day ago"
            labelNextPage="14 days ago"
            prevPage={getCoinDataPerDay}
            nextPage={getCoinDataPerWeeks}
          />
          <Chart data={data} />
        </Box>
      </Stack>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/coins/${query.name}/market_chart?vs_currency=${query.vs_currency}&days=30`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  };
};

export default CoinPerMonth;
