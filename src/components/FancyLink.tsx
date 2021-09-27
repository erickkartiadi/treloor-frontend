import { Link, LinkProps } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import {
  Link as ReactRouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

type FancyLinkProps = LinkProps & RouterLinkProps;

function FancyLink(props: FancyLinkProps): ReactElement {
  const { children, ...rest } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link as={ReactRouterLink} {...rest}>
      {children}
    </Link>
  );
}

export default FancyLink;
