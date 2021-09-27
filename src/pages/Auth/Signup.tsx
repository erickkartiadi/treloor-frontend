import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Spacer,
  BoxProps,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { motion, MotionProps } from "framer-motion";
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

function Signup(props: AuthPageProps): ReactElement {
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
              Sign up to
              <Text as="span" color="blue.500">
                {" "}
                <br />
                treloor
              </Text>
            </Heading>
            <Box py="10" as="form">
              <Stack spacing="4">
                <Flex
                  flexDirection={{
                    base: "column",
                    md: "row",
                  }}
                >
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      variant="outline"
                      placeholder="First name"
                      size="lg"
                    />
                  </FormControl>
                  <Spacer m="2" />
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      variant="outline"
                      placeholder="Last name"
                      size="lg"
                    />
                  </FormControl>
                </Flex>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input variant="outline" placeholder="Email" size="lg" />
                </FormControl>
                <Flex
                  flexDirection={{
                    base: "column",
                    md: "row",
                  }}
                >
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <PasswordInput inputSize="lg" placeholder="Password" />
                  </FormControl>
                  <Spacer m="2" />
                  <FormControl id="confirmPassword" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <PasswordInput
                      inputSize="lg"
                      placeholder="Confirm password"
                    />
                  </FormControl>
                </Flex>
              </Stack>
              <Button mt="6" width="fit-content" size="md" colorScheme="blue">
                Create Account
              </Button>
            </Box>
            <Text mb="8">
              Already have an account?{" "}
              <FancyLink fontWeight="medium" to="/auth/login">
                Sign in
              </FancyLink>
            </Text>
          </Box>
        </MotionBox>
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
      </Flex>
    </Box>
  );
}

export default Signup;
