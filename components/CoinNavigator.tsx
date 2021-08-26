import { Box, Center, Divider, HStack } from "@chakra-ui/react";

export interface ICoinNavigator {
  labelPrevPage: string;
  labelNextPage: string;
  prevPage: () => void;
  nextPage: () => void;
}

const CoinNavigator: React.FC<ICoinNavigator> = ({
  labelPrevPage,
  labelNextPage,
  prevPage,
  nextPage,
}: ICoinNavigator) => {
  return (
    <HStack justifyContent="space-around" display={{ base: "flex" }}>
      <Box
        padding="2rem 0 0"
        _hover={{ textDecor: "underline" }}
        cursor="pointer"
        onClick={prevPage}
      >
        {labelPrevPage}
      </Box>

      <Center height="20px" alignSelf="flex-end">
        <Divider orientation="vertical" />
      </Center>

      <Box
        padding="2rem 0 0"
        _hover={{ textDecor: "underline" }}
        cursor="pointer"
        onClick={nextPage}
      >
        {labelNextPage}
      </Box>
    </HStack>
  );
};

export default CoinNavigator;
