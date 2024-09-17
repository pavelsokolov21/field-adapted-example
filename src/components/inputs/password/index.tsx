import { HTMLInputTypeAttribute, useState } from "react";
import { createOwnFormStateField } from "../../../hocs/form/create-field";
import { BaseInputProps, Input } from "../../input";

export type InputTextProps = BaseInputProps;

const Password = (props: InputTextProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputType: HTMLInputTypeAttribute = isPasswordVisible
    ? "text"
    : "password";

  const onSwitchPasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <Input
      {...props}
      type={inputType}
      rightIcon={<div>S</div>}
      onRightIconClick={onSwitchPasswordVisibility}
    />
  );
};

const AdaptedPassword = createOwnFormStateField(Password);

export { AdaptedPassword as Password };
