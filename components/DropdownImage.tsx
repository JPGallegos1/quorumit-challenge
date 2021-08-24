import { Box } from "@chakra-ui/react";
import { IDropdownCoinInfo } from "types";
import Picture from "./Picture";

export interface DropdownImageProps {}

const DropdownImage: React.FC<IDropdownCoinInfo> = ({
  coin,
}: IDropdownCoinInfo) => {
  return (
    <Box
      h="3.5rem"
      w="4rem"
      background="quorum.white.100"
      opacity="0.3"
      borderRadius="12px"
    >
      {!coin.image ? (
        <Box display="none" />
      ) : (
        <Picture
          src={coin?.image}
          srcset={coin?.image}
          alt={`${coin?.name} symbol`}
          height="100%"
        />
      )}
    </Box>
  );
};

export default DropdownImage;
