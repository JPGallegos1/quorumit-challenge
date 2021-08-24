import Layout from "@/components/Layout";
import { Box } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getMarketData } from "../../../services/market";

export interface CoinProps {
  props: any;
}

const CoinPerMonth: NextPage<CoinProps> = (props: CoinProps) => {
  console.log(props);

  // TODO: We should use server-side just calling the API with day=1 param and send the user to the other routes in case its change the day from 1 to 14 or 30.

  // const router = useRouter();
  // const { coinName, isUsd } = router.query;

  // useEffect(() => {
  //   getMarketData(coinName, isUsd);
  // }, []);

  return (
    <Layout title="Coin">
      <Box color="white">months</Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log(query);

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${query.name}/market_chart?vs_currency=${query.vs_currency}&days=${query.month}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: { props: data },
  };
};

export default CoinPerMonth;
