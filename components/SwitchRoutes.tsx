import { NextRouter } from "next/router";
import { Box } from "@chakra-ui/react";

import { useCoinContext } from "@/contexts/CoinContext";
import Button from "./Button";

import { ICoin } from "types";

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
  const { isGraphicTab, setIsGraphicTab } = useCoinContext();
  const vs_currency = priceInUsd ? "usd" : "ars";

  const graphicTab = () => {
    setIsGraphicTab(!isGraphicTab);
    router.push({
      pathname: `/detail/days/${coin.symbol}`,
      query: {
        name: coin.name.toLowerCase(),
        vs_currency,
      },
    });
  };

  return (
    <Box
      as="nav"
      height="20%"
      width="100%"
      margin="0"
      paddingTop="3rem"
      aria-label="navigation"
    >
      <Button
        onClick={() => router.push("/")}
        label="CRYPTO"
        condition={!isGraphicTab}
      />

      <Button
        onClick={graphicTab}
        label="GRAPHIC VIEW"
        condition={isGraphicTab}
        disabled={!coin.name && !coin.symbol}
      />
    </Box>
  );
};

export default SwitchRoutes;
