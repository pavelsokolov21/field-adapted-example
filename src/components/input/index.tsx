import {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  forwardRef,
  ReactElement,
  useState,
} from "react";
import cn from "classnames";

import styles from "./input.module.css";

export interface BaseInputProps {
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  onFocus?(e: FocusEvent<HTMLInputElement>): void;
  onBlur?(e: FocusEvent<HTMLInputElement>): void;
  onRightIconClick?(e: MouseEvent<HTMLButtonElement>): void;
  rightIcon?: ReactElement;
  value: string | number;
}

export const Input = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    { onChange, onFocus, onBlur, onRightIconClick, rightIcon, value = "" },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };

    const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
      if (onFocus) {
        onFocus(e);
      }

      setFocused(true);
    };

    const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(e);
      }

      setFocused(false);
    };

    const onRightIconClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
      if (onRightIconClick) {
        onRightIconClick(e);
      }
    };

    return (
      <div>
        <input
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        />
        {rightIcon && (
          <button onClick={onRightIconClickHandler}>{rightIcon}</button>
        )}
      </div>
    );
  }
);
