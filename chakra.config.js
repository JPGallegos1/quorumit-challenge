import { extendTheme } from "@chakra-ui/react";

const colors = {
  quorum: {
    white: {
      100: "#EFEFF2",
    },
    black: {
      100: "#23292F",
      200: "#0D0E0E",
      300: "#181B21",
    },
    gray: {
      100: "#394251",
      200: "#B9C1D9",
    },
    red: {
      100: "#EE6855",
    },
  },
};

export const theme = extendTheme({ colors });
