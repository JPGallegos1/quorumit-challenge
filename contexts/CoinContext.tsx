import { useState, useContext, createContext, ReactNode } from "react";
import { CoinName, ICoin, IContextValue } from "@/types/index";

export const CoinContext = createContext<IContextValue>({} as IContextValue);

interface IChildren {
  children: ReactNode;
}

export const CoinsProvider: React.FC<IChildren> = ({
  children,
}: IChildren): JSX.Element => {
  const [coinName, setCoinName] = useState<string | CoinName>("");
  const [priceInUsd, setPriceInUsd] = useState<boolean>(true);
  const [coin, setCoin] = useState<ICoin>({} as ICoin);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGraphicTab, setIsGraphicTab] = useState<boolean>(false);

  const context: IContextValue = {
    coinName,
    setCoinName,
    priceInUsd,
    setPriceInUsd,
    coin,
    setCoin,
    isLoading,
    setIsLoading,
    isGraphicTab,
    setIsGraphicTab,
  };

  return (
    <CoinContext.Provider value={context}>
      <>{children}</>
    </CoinContext.Provider>
  );
};

export function useCoinContext() {
  const context = useContext(CoinContext);

  if (!context) {
    throw new Error(
      "You're trying to render the context outside of the React Component"
    );
  }

  return context;
}
