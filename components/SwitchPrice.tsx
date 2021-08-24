import { Box } from "@chakra-ui/react";
import { ISwitchPrice } from "types";
import Button from "./Button";

const SwitchPrice: React.FC<ISwitchPrice> = ({
  setPriceInUsd,
  priceInUsd,
}: ISwitchPrice) => {
  return (
    <Box height="20%" width="100%" margin="0">
      <Button
        onClick={() => setPriceInUsd(true)}
        condition={priceInUsd}
        label="USD"
      />

      <Button
        onClick={() => setPriceInUsd(false)}
        condition={!priceInUsd}
        label="ARS"
      />
    </Box>
  );
};

export default SwitchPrice;
