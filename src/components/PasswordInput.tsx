import React, { ReactElement } from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  InputProps,
  Icon,
} from "@chakra-ui/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import useToggle from "../utils/hooks/useToggle";

type InputGroupSize = "lg" | "md";

interface PasswordInputProps extends InputProps {
  inputSize: InputGroupSize;
  placeholder: string;
}

function PasswordInput(props: PasswordInputProps): ReactElement {
  const { inputSize, variant, placeholder } = props;
  const [isPasswordShown, togglePasswordShown] = useToggle(false);

  const PasswordShownIcon = isPasswordShown ? IoEyeOffOutline : IoEyeOutline;

  return (
    <InputGroup size={inputSize}>
      <Input
        type={isPasswordShown ? "text" : "password"}
        placeholder={placeholder}
        variant={variant}
        pr="16"
      />
      <InputRightElement width="16">
        <Button
          variant="ghost"
          width="6"
          height="8"
          onClick={() => togglePasswordShown(undefined)}
        >
          <Icon as={PasswordShownIcon} width="5" height="5" />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
