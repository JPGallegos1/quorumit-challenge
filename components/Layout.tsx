import type { FC, ReactNode } from "react";
import Head from "next/head";
import { Container, VStack, Box } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";
import TraddingApp from "./TradingApp";
import SwitchRoutes from "./SwitchRoutes";
import { useRouter } from "next/router";
import { useCoinContext } from "@/contexts/CoinContext";

interface ILayout {
  children: ReactNode;
  title: string;
}

const Layout: FC<ILayout> = ({ children, title }: ILayout) => {
  const router = useRouter();
  const { coin, priceInUsd } = useCoinContext();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <VStack background="quorum.black.100" marginX="2rem" paddingY="2rem">
        <Header />
        <Container
          as="main"
          width="100%"
          maxW="container.xl"
          paddingY="2rem"
          flex="1"
        >
          <Box as="section" height="100%">
            <TraddingApp />

            <SwitchRoutes router={router} coin={coin} priceInUsd={priceInUsd} />

            <>{children}</>
          </Box>
        </Container>
        <Footer author="Juan Pablo Gallegos" company="Quorum IT Challenge" />
      </VStack>
    </>
  );
};

export default Layout;
