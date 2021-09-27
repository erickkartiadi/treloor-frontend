import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Input,
  FormControl,
  FormLabel,
  Checkbox,
  Flex,
  Spacer,
  BoxProps,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { MotionProps, motion } from "framer-motion";
import FancyLink from "../../components/FancyLink";
import PasswordInput from "../../components/PasswordInput";
import LogoLink from "../../components/LogoLink";
import loginBackground from "../../assets/images/login-background.jpg";

interface AuthPageProps {
  initial: MotionProps["initial"];
  animate: MotionProps["animate"];
  exit: MotionProps["exit"];
}

const MotionBox = motion<BoxProps>(Box);

function Login(props: AuthPageProps): ReactElement {
  const { initial, animate, exit } = props;

  return (
    <Box maxH="100vh" overflowX="hidden" overflowY="auto">
      <Flex minH="100vh">
        <MotionBox
          initial={initial}
          animate={animate}
          exit={exit}
          width={{
            base: "100vw",
            lg: "70vw",
            xl: "60vw",
            "2xl": "50vw",
          }}
        >
          <Box
            pt={{
              base: "8",
              md: "12",
              xl: "16",
            }}
            px={{ base: "4", md: "12", lg: "24" }}
          >
            <LogoLink to="/" />
            <Heading lineHeight="shorter" size="3xl">
              Welcome back <br /> to{" "}
              <Text as="span" color="blue.500">
                treloor
              </Text>
            </Heading>
            <Box py="10" as="form">
              <Stack spacing="4">
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input variant="outline" placeholder="Email" size="lg" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <Flex>
                    <FormLabel>Password</FormLabel>
                    <Spacer />
                    <FancyLink to="/forgot-password">
                      Forgot Password?
                    </FancyLink>
                  </Flex>
                  <PasswordInput inputSize="lg" placeholder="Password" />
                </FormControl>
                <Box>
                  <Checkbox>Remember me</Checkbox>
                </Box>
              </Stack>
              <Button mt="6" width="fit-content" size="md" colorScheme="blue">
                Sign In
              </Button>
            </Box>
            <Text mb="8">
              New here?{" "}
              <FancyLink fontWeight="medium" to="/auth/signup">
                Create new account
              </FancyLink>
            </Text>
          </Box>
        </MotionBox>
        <MotionBox
          backgroundImage={loginBackground}
          backgroundSize="cover"
          backgroundPosition="center"
          display={{
            base: "none",
            lg: "flex",
          }}
          flex="1"
        />
      </Flex>
    </Box>
  );
}

export default Login;
