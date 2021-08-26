import { HStack, Box, Text, SkeletonText } from "@chakra-ui/react";
import { IDropdownCoinInfo } from "types";

const DropdownCoinInfo: React.FC<IDropdownCoinInfo> = ({
  coin,
  isLoading,
}: IDropdownCoinInfo) => {
  return (
    <HStack color="white" width="100%" justify="space-around">
      <Box width="100%">
        {isLoading ? (
          <Box padding="2" background="transparent">
            <SkeletonText noOfLines={2} />
          </Box>
        ) : (
          <>
            <Text
              textTransform="uppercase"
              fontFamily="SF Pro Display Regular"
              fontSize="1rem"
              lineHeight="21px"
              textAlign="left"
            >
              {coin?.symbol || "-"}
            </Text>
            <Text
              fontFamily="SF Pro Display Regular"
              fontSize="0.75rem"
              lineHeight="16px"
              color="quorum.gray.200"
              textAlign="left"
            >
              {coin?.name}
            </Text>
          </>
        )}
      </Box>
    </HStack>
  );
};

export default DropdownCoinInfo;
