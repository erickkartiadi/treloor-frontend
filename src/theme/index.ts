import { extendTheme, ThemeOverride } from "@chakra-ui/react";

// component styles overrides
import Link from "./components/link";

const overrides: ThemeOverride = {
  components: {
    Link,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
};

export default extendTheme(overrides);
