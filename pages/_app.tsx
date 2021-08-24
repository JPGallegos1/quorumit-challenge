import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "@/components/Fonts";

import { theme } from "../chakra.config";
import { CoinsProvider } from "@/contexts/CoinContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <CoinsProvider>
        <Component {...pageProps} />
      </CoinsProvider>
    </ChakraProvider>
  );
}
export default MyApp;
