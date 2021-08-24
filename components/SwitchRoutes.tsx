import { Box } from "@chakra-ui/react";
import { NextRouter } from "next/router";
import { ICoin } from "types";
import Button from "./Button";

export interface ISwitchRoutes {
  router: NextRouter;
  coin: ICoin;
  priceInUsd: boolean;
}

const SwitchRoutes: React.FC<ISwitchRoutes> = ({
  router,
  coin,
  priceInUsd,
}: ISwitchRoutes) => {
  const vs_currency = priceInUsd ? "usd" : "ars";
  return (
    <Box height="20%" width="100%" margin="0">
      <Button onClick={() => router.push("/")} label="CRYPTO" />

      <Button
        onClick={() =>
          router.push({
            pathname: `/detail/days/${coin.symbol}`,
            query: { name: coin.name.toLowerCase(), vs_currency },
          })
        }
        label="GRAPHIC VIEW"
      />
    </Box>
  );
};

export default SwitchRoutes;
