import { Box, HStack, VStack, Text } from "@chakra-ui/react";

export interface IDetails {
  time: string[] | undefined;
  data: { prices: [] };
}

const Details: React.FC<IDetails> = ({ time, data }: IDetails) => {
  return (
    <>
      <HStack width="30%" justify="space-between">
        <Box>
          <Text
            color="quorum.gray.200"
            fontFamily="SF Pro Display Regular"
            fontSize="13px"
            lineHeight="18px"
          >
            Time
          </Text>
          {time?.map((t: any) => (
            <Box key={t}>
              <Text
                color="quorum.red.100"
                fontFamily="SF Pro Display Regular"
                fontSize="16px"
                lineHeight="21px"
              >
                {t}
              </Text>
            </Box>
          ))}
        </Box>
        <Box marginLeft="2rem">
          <Text
            color="quorum.gray.200"
            fontFamily="SF Pro Display Regular"
            fontSize="13px"
            lineHeight="18px"
            textAlign="right"
          >
            Price
          </Text>
          <Box d="flex" flexDir="column">
            {data?.prices?.slice(0, 12).map((price: any) => (
              <Box key={price[1]}>
                <Text
                  color="white"
                  fontFamily="SF Pro Display Regular"
                  fontSize="16px"
                  lineHeight="21px"
                >
                  {price[1].toFixed(2)}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </HStack>
    </>
  );
};

export default Details;
