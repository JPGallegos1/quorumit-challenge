/**
 * @TYPES
 */
export type CoinName = "bitcoin" | "ethereum" | "dogecoin" | "cardano";

/**
 * @INTERFACES
 */

export interface ICoin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  market_data: {
    ath: {
      btc: number;
      ars: number;
      usd: number;
    };
    current_price: {
      btc: number;
      ars: number;
      usd: number;
    };
    high_24h: {
      btc: number;
      ars: number;
      usd: number;
    };
    low_24h: {
      btc: number;
      ars: number;
      usd: number;
    };
  };
}

export interface IContextValue {
  coinName: string;
  setCoinName: (coinName: string) => void;
  priceInUsd: boolean;
  setPriceInUsd: (priceInUsd: boolean) => void;
  coin: ICoin;
  setCoin: (coin: ICoin) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export interface ISwitchPrice {
  priceInUsd: boolean;
  setPriceInUsd: (priceInUsd: boolean) => void;
}

export interface IButton {
  onClick: () => void;
  condition?: boolean;
  label: string;
}

export interface IDropdown {
  coin: ICoin;
  setCoinName: (coinName: string) => void;
  isLoading: boolean;
}

export interface IDropdownMenu {
  setCoinName: (coinName: string) => void;
}

export interface IDropdownCoinInfo {
  coin: ICoin;
  isLoading: boolean;
}

export interface IDetails {
  data: {
    prices: [];
  };
}
