import { createOwnFormStateField } from "../../../hocs/form/create-field";
import { BaseInputProps } from "../../../types/fields";
import { Input } from "../../input";

export type InputTextProps = BaseInputProps;

const InputText = (props: InputTextProps) => {
  return <Input {...props} />;
};

const AdaptedInputText = createOwnFormStateField(InputText);

export { AdaptedInputText as InputText };
