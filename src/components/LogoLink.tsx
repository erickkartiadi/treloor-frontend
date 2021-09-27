/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from "react";
import { Image, Link, useColorMode } from "@chakra-ui/react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logo-dark.png";

function LogoLink(props: LinkProps): ReactElement {
  const { colorMode } = useColorMode();

  return (
    <Link
      display="flex"
      mb={{ base: "16", lg: "20" }}
      width={{ base: "7rem", md: "8rem", xl: "10rem" }}
      as={RouterLink}
      {...props}
    >
      <Image as="img" src={colorMode === "light" ? logo : logoDark} />
    </Link>
  );
}

export default LogoLink;
