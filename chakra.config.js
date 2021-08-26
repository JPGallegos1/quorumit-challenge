import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        background: "quorum.black.200",
      },
      a: {
        textDecoration: "none",
      },
    }),
  },
  colors: {
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
        300: "#EFEFF2",
        400: "#8B95B8",
        500: "#E5E5E5",
      },
      red: {
        100: "#EE6855",
      },
    },
  },
  textStyles: {
    h1: {
      fontSize: ["36px", "42px"],
      fontFamily: "SF Pro Display",
      fontWeight: "bold",
      lineHeight: "50px",
      letterSpacing: "0.41px",
    },
  },
});
