import { VStack, HStack, Text } from "@chakra-ui/react";

import DropdownImage from "./DropdownImage";
import DropdownCoinInfo from "./DropdownCoinInfo";
import DropdownMenu from "./DropdownMenu";

import { IDropdown } from "types";

const Dropdown: React.FC<IDropdown> = ({
  coin,
  setCoinName,
  isLoading,
}: IDropdown) => {
  return (
    <HStack width="100%" height="42%">
      <DropdownImage coin={coin} isLoading={isLoading} />
      <VStack width="100%">
        {!coin.symbol || !coin.name ? (
          <Text
            textAlign="center"
            color="quorum.white.100"
            fontFamily="SF Pro Display Regular"
            fontSize="1rem"
            lineHeight="21px"
          >
            Select a coin
          </Text>
        ) : (
          <DropdownCoinInfo coin={coin} isLoading={isLoading} />
        )}
      </VStack>

      <DropdownMenu setCoinName={setCoinName} />
    </HStack>
  );
};

export default Dropdown;
