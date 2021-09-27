import { Box, BoxProps } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Route } from "react-router-dom";
import { motion, MotionProps } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";

export const MotionBox = motion<BoxProps>(Box);

function Auth(): ReactElement {
  const authMotionProps: MotionProps = {
    initial: {
      opacity: 0,
      x: -10,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 10,
    },
  };

  return (
    <>
      <Route exact path="/auth/login">
        <Login
          initial={authMotionProps.initial}
          animate={authMotionProps.animate}
          exit={authMotionProps.exit}
        />
      </Route>
      <Route exact path="/auth/signup">
        <Signup
          initial={authMotionProps.initial}
          animate={authMotionProps.animate}
          exit={authMotionProps.exit}
        />
      </Route>
    </>
  );
}

export default Auth;
