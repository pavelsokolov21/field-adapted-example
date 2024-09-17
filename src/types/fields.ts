import {
  ChangeEvent,
  FocusEvent,
  HTMLInputTypeAttribute,
  MouseEvent,
  ReactElement,
} from "react";

export interface BaseInputProps {
  onChange?(value: string, e: ChangeEvent<HTMLInputElement>): void;
  onFocus?(e: FocusEvent<HTMLInputElement>): void;
  onBlur?(e: FocusEvent<HTMLInputElement>): void;
  onRightIconClick?(e: MouseEvent<HTMLButtonElement>): void;
  rightIcon?: ReactElement;
  type?: HTMLInputTypeAttribute;
  value: string;
  placeholder?: string;
}
