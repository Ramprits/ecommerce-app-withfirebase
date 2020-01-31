import { theme } from "@chakra-ui/core";

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    // Go to https://smart-swatch.netlify.com/ to easily generate a new color
    // palette.
    brand: {
      50: "#ddf5ff",
      100: "#b2ddfe",
      200: "#85c4f9",
      300: "#56adf3",
      400: "#2a95ee",
      500: "#117cd5",
      600: "#0560a7",
      700: "#004578",
      800: "#00294b",
      900: "#000f1f"
    }
  }
};
