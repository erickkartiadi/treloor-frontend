import { extendTheme, ThemeOverride } from "@chakra-ui/react";

// component styles overrides
import Link from "./components/link";

const overrides: ThemeOverride = {
  components: {
    Link,
    Input: {
      defaultProps: {
        errorBorderColor: "red.500",
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
};

export default extendTheme(overrides);
