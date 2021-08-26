import { ICoin } from "@/types/index";
import { COINS_URL } from "@/constants/index";
import { useCoinContext } from "@/contexts/CoinContext";
import { useRouter } from "next/router";

const useCoin = () => {
  const { setCoin, setIsLoading } = useCoinContext();
  const router = useRouter();

  const getCoinInfo = async (coin: string) => {
    const url = `${COINS_URL}/${coin}`;

    try {
      setIsLoading(true);
      const coinResponse = await fetch(url);
      if (coinResponse.status === 200) {
        const coinData = await coinResponse.json();
        const coinPayload: ICoin = {
          id: coinData.id,
          name: coinData.name,
          symbol: coinData.symbol,
          image: coinData.image.small,
          market_data: {
            ath: {
              btc: coinData.market_data.ath.btc,
              ars: coinData.market_data.ath.ars,
              usd: coinData.market_data.ath.usd,
            },
            current_price: {
              btc: coinData.market_data.current_price.btc,
              ars: coinData.market_data.current_price.ars,
              usd: coinData.market_data.current_price.usd,
            },
            high_24h: {
              btc: coinData.market_data.high_24h.btc,
              ars: coinData.market_data.high_24h.ars,
              usd: coinData.market_data.high_24h.usd,
            },
            low_24h: {
              btc: coinData.market_data.low_24h.btc,
              ars: coinData.market_data.low_24h.ars,
              usd: coinData.market_data.low_24h.usd,
            },
          },
        };
        if (window !== undefined) {
          window.localStorage.setItem("coin", JSON.stringify(coinPayload));
        }
        setCoin(coinPayload);
        setIsLoading(false);
      }
    } catch (error) {
      if (error) {
        window.localStorage.clear();
        router.push("/404");
      }
    }
  };

  return {
    getCoinInfo,
  };
};

export default useCoin;
