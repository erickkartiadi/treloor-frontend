import { ComponentStyleConfig } from "@chakra-ui/react";

const Link: ComponentStyleConfig = {
  variants: {
    primary: ({ colorScheme = "blue" }) => ({
      color: `${colorScheme}.400`,
      _hover: {
        color: `${colorScheme}.600`,
      },
    }),
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Link;
