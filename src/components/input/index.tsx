import {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  forwardRef,
  ReactElement,
  useState,
  HTMLInputTypeAttribute,
} from "react";
import cn from "classnames";

import styles from "./input.module.css";

export interface BaseInputProps {
  onChange?(value: string, e: ChangeEvent<HTMLInputElement>): void;
  onFocus?(e: FocusEvent<HTMLInputElement>): void;
  onBlur?(e: FocusEvent<HTMLInputElement>): void;
  onRightIconClick?(e: MouseEvent<HTMLButtonElement>): void;
  rightIcon?: ReactElement;
  type?: HTMLInputTypeAttribute;
  value: string;
}

export const Input = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      onChange,
      onFocus,
      onBlur,
      onRightIconClick,
      rightIcon,
      type,
      value = "",
    },
    _ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value, e);
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

    const onMouseEnterHandler = () => {
      setHovered(true);
    };

    const onMouseLeaveHandler = () => {
      setHovered(false);
    };

    // Тут также можно сделать rest-оператор на input
    return (
      <div className={styles.root}>
        <input
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          className={cn(styles.input, {
            [styles.input_rightIcon]: !!rightIcon,
            [styles.input_focused]: focused,
            [styles.input_hovered]: hovered && !focused,
          })}
          type={type}
        />
        {rightIcon && (
          <button
            onClick={onRightIconClickHandler}
            className={styles.rightIcon}
          >
            {rightIcon}
          </button>
        )}
      </div>
    );
  }
);
