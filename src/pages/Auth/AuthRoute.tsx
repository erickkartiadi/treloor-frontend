import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Route } from "react-router-dom";
import { MotionProps } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";
import loginBackground from "../../assets/images/login-background.jpg";
import MotionBox from "../../components/MotionBox";

const AuthLeftSide = (props: BoxProps) => {
  const { children } = props;

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
    <MotionBox
      initial={authMotionProps.initial}
      animate={authMotionProps.animate}
      exit={authMotionProps.exit}
      width={{
        base: "100vw",
        lg: "70vw",
        xl: "60vw",
        "2xl": "50vw",
      }}
    >
      {children}
    </MotionBox>
  );
};

const AuthRightSide = () => {
  return (
    <Box
      backgroundImage={loginBackground}
      backgroundSize="cover"
      backgroundPosition="center"
      display={{
        base: "none",
        lg: "flex",
      }}
      flex="1"
    />
  );
};

function AuthRoute(): ReactElement {
  return (
    <>
      <Route exact path="/auth/login">
        <Box maxH="100vh" overflowX="hidden" overflowY="auto">
          <Flex minH="100vh">
            <AuthLeftSide>
              <Login />
            </AuthLeftSide>
            <AuthRightSide />
          </Flex>
        </Box>
      </Route>
      <Route exact path="/auth/signup">
        <Box maxH="100vh" overflowX="hidden" overflowY="auto">
          <Flex minH="100vh">
            <AuthLeftSide>
              <Signup />
            </AuthLeftSide>
            <AuthRightSide />
          </Flex>
        </Box>
      </Route>
    </>
  );
}

export default AuthRoute;
