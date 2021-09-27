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
  Checkbox,
  Flex,
  Spacer,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import FancyLink from "../../components/FancyLink";
import PasswordInput from "../../components/PasswordInput";
import LogoLink from "../../components/LogoLink";
import loginSchema from "../../utils/hooks/validation/login-schema.validation";

export type LoginFormData = {
  email: string;
  password: string;
  remember: boolean;
};

// TODO add remember me functionality
function Login(): ReactElement {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: joiResolver(loginSchema) });

  const onLogin = (data: LoginFormData): any => {
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
        Welcome back <br /> to{" "}
        <Text as="span" color="blue.500">
          treloor
        </Text>
      </Heading>
      <Box as="form" py="10" noValidate onSubmit={handleSubmit(onLogin)}>
        <Stack spacing="4">
          <FormControl isInvalid={!!errors.email} isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              variant="outline"
              placeholder="Email"
              size="lg"
              isInvalid={!!errors.email}
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password} id="password" isRequired>
            <Flex>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Spacer />
              <FancyLink to="/forgot-password">Forgot Password?</FancyLink>
            </Flex>
            <PasswordInput
              isInvalid={!!errors.email}
              id="password"
              inputSize="lg"
              placeholder="Password"
              {...register("password")}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <Box>
            <Controller
              control={control}
              name="remember"
              defaultValue={false}
              render={({ field: { onChange, value, ref } }) => (
                <Checkbox
                  onChange={onChange}
                  textTransform="capitalize"
                  ref={ref}
                  isChecked={value}
                >
                  Remember me
                </Checkbox>
              )}
            />
          </Box>
        </Stack>
        <Button
          type="submit"
          mt="6"
          width="fit-content"
          size="md"
          colorScheme="blue"
        >
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
  );
}

export default Login;
