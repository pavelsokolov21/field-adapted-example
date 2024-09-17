import { BaseInputProps } from "./fields";

export interface AdaptedBaseInputProps
  extends Pick<BaseInputProps, "placeholder"> {
  name: string;
  onChange?(value: string, options: { meta: { log: string } }): void;
  onFocus?(options: { meta: { log: string } }): void;
}
