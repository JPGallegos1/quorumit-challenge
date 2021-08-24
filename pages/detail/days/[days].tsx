import Layout from "@/components/Layout";
import { Box } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

export interface CoinProps {
  data: any;
}

const CoinPerDays: NextPage<CoinProps> = ({ data }: CoinProps) => {
  const router = useRouter();

  let days = "14";
  const { coin, name, vs_currency } = router.query;

  const getDataPerWeek = () => {
    router.push({
      pathname: `/detail/weeks/${coin}`,
      query: { name, vs_currency, days },
    });
  };

  const getTimestamp = data.prices
    .splice(0, 10)
    .map((price: number[]) => price[0]);

  const timestamp = getTimestamp.map(
    (time: string | number | Date) => new Date(time)
  );

  const time = timestamp.map(
    (time: Date) =>
      `${("00" + String(time.getHours())).slice(-2)}:${(
        "00" + String(time.getMinutes())
      ).slice(-2)}:${("00" + String(time.getSeconds())).slice(-2)}`
  );
  const dataBar = [
    {
      day: time.map((t: any) => t),
      prices: data.prices
        .splice(0, 10)
        .map((price: any) => price[1].toFixed(2)),
    },
  ];

  console.log(dataBar);

  return (
    <Layout title="Coin">
      <Box color="white" display="flex">
        <Box d="flex">
          <Box>
            <Box>Time</Box>
            {time.map((t: any) => (
              <Box key={t}>{t}</Box>
            ))}
            <Box></Box>
          </Box>
          <Box marginLeft="2rem">
            <Box>Price</Box>
            <Box d="flex" flexDir="column">
              {data.prices.splice(0, 10).map((price: any) => (
                <Box key={price[1]}>{price[1].toFixed(2)}</Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box height="30rem" width="60%">
          <ResponsiveBar
            data={dataBar}
            keys={["prices"]}
            indexBy="day"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.4}
            valueScale={{ type: "linear" }}
            colors="red"
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRight={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "degrees",
              legendPosition: "middle",
              legendOffset: -40,
            }}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${query.name}/market_chart?vs_currency=${query.vs_currency}&days=1`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: { data },
  };
};

export default CoinPerDays;
