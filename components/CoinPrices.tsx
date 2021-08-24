import { Box, Text } from "@chakra-ui/react";
import { ICoin } from "types";

export interface ICoinPrices {
  priceInUsd: boolean;
  coin: ICoin;
}

const CoinPrices: React.FC<ICoinPrices> = ({ priceInUsd, coin }) => {
  return (
    <Box height="82%" width="100%">
      <Box
        borderBottom="1px solid"
        borderColor="rgba(185, 193, 217, 0.2)"
        paddingY="1rem"
      >
        <Text
          color="white"
          fontSize="13px"
          fontFamily="SF Pro Display Regular"
          lineHeight="18px"
          letterSpacing="-0.00615385em"
          marginBottom="0.5rem"
        >
          Current price
        </Text>
        <Text
          color="white"
          fontFamily="SF Pro Display Regular"
          fontSize="1.5rem"
          lineHeight="21px"
          fontWeight="600"
          letterSpacing="-0.02em"
        >
          $
          {priceInUsd
            ? `${coin?.market_data?.current_price.usd} USD`
            : `${coin?.market_data?.current_price.ars} ARS`}
        </Text>
      </Box>
      <Box
        borderBottom="1px solid"
        borderColor="rgba(185, 193, 217, 0.2)"
        paddingY="1rem"
      >
        <Text
          color="white"
          fontSize="13px"
          fontFamily="SF Pro Display Regular"
          lineHeight="18px"
          letterSpacing="-0.00615385em"
          marginBottom="0.5rem"
        >
          Low 24 Hours
        </Text>
        <Text
          color="white"
          fontFamily="SF Pro Display Regular"
          fontSize="1rem"
          lineHeight="21px"
          fontWeight="600"
          letterSpacing="-0.02em"
        >
          $
          {priceInUsd
            ? `${coin?.market_data?.low_24h.usd} USD`
            : `${coin?.market_data?.low_24h.ars} ARS`}
        </Text>
      </Box>
      <Box
        borderBottom="1px solid"
        borderColor="rgba(185, 193, 217, 0.2)"
        paddingY="1rem"
      >
        <Text
          color="white"
          fontSize="13px"
          fontFamily="SF Pro Display Regular"
          lineHeight="18px"
          letterSpacing="-0.00615385em"
          marginBottom="0.5rem"
        >
          High 24 Hours
        </Text>
        <Text
          color="white"
          fontFamily="SF Pro Display Regular"
          fontSize="1rem"
          lineHeight="21px"
          fontWeight="600"
          letterSpacing="-0.02em"
        >
          $
          {priceInUsd
            ? `${coin?.market_data?.high_24h.usd} USD`
            : `${coin?.market_data?.high_24h.ars} ARS`}
        </Text>
      </Box>
    </Box>
  );
};

export default CoinPrices;
