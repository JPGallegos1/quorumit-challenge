import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { IDropdownMenu } from "types";
import { COIN_OPTIONS } from "@/constants/index";

const DropdownMenu: React.FC<IDropdownMenu> = ({ setCoinName }) => {
  return (
    <>
      <Menu isLazy id="menu-button-2">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<ChevronDownIcon />}
          variant="outline"
          borderRadius="full"
          color="white"
          background="quorum.gray.400"
          _hover={{ bg: "trasparent" }}
          _focus={{ borderColor: "quorum.black.300" }}
          _expanded={{ bg: "quorum.gray.400" }}
        />
        <MenuList background="quorum.black.200" color="white" border="none">
          {COIN_OPTIONS.map((coin) => (
            <MenuItem
              _hover={{ bg: "quorum.black.100" }}
              key={coin.name}
              onClick={() => setCoinName(coin.name)}
            >
              {coin.label} - {coin.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default DropdownMenu;
