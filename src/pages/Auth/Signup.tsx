/* eslint-disable react/jsx-props-no-spreading */
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
  FormErrorMessage,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import FancyLink from "../../components/FancyLink";
import PasswordInput from "../../components/PasswordInput";
import LogoLink from "../../components/LogoLink";
import signupSchema from "../../utils/hooks/validation/signup-schema.validation";

export type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

function Signup(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({ resolver: joiResolver(signupSchema) });

  const onSignup = (data: SignupFormData): any => {
    console.log(data);
  };

  return (
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
      <Box noValidate onSubmit={handleSubmit(onSignup)} py="10" as="form">
        <Stack spacing="4">
          <Flex
            flexDirection={{
              base: "column",
              md: "row",
            }}
          >
            <FormControl isInvalid={!!errors.firstName} isRequired>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                variant="outline"
                placeholder="First name"
                size="lg"
                {...register("firstName")}
              />
              <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            </FormControl>
            <Spacer m="2" />
            <FormControl isInvalid={!!errors.lastName} isRequired>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                variant="outline"
                placeholder="Last name"
                size="lg"
                {...register("lastName")}
              />

              <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            </FormControl>
          </Flex>
          <FormControl isInvalid={!!errors.email} id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              id="email"
              type="email"
              variant="outline"
              placeholder="Email"
              size="lg"
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <Flex
            flexDirection={{
              base: "column",
              md: "row",
            }}
          >
            <FormControl isInvalid={!!errors.password} id="password" isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <PasswordInput
                id="password"
                inputSize="lg"
                placeholder="Password"
                {...register("password")}
              />

              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Spacer m="2" />
            <FormControl
              isInvalid={!!errors.passwordConfirmation}
              id="passwordConfirmation"
              isRequired
            >
              <FormLabel htmlFor="passwordConfirmation">
                Confirm Password
              </FormLabel>
              <PasswordInput
                id="passwordConfirmation"
                inputSize="lg"
                placeholder="Confirm password"
                {...register("passwordConfirmation")}
              />
              <FormErrorMessage>
                {errors.passwordConfirmation?.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
        </Stack>
        <Button
          type="submit"
          mt="6"
          width="fit-content"
          size="md"
          colorScheme="blue"
        >
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
  );
}

export default Signup;
