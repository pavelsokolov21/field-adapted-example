import { ComponentType } from "react";
import { AdaptedBaseInputProps } from "../../../types/form";
import { BaseInputProps } from "../../../components/input";
import { useField } from "../../../contexts/form-context/hooks";

// Тут мы создаем адаптер, который будет создавать нам поля под нашу библиотеку
// менеджемента формы.
// Для упрощения, тут будут просто состояния, но подразумеваются код из библиотеки, например
// Controller из react-hook-forms.
export const createOwnFormStateField = <P extends BaseInputProps>(
  Component: ComponentType<P>
) => {
  return ({ onChange, onFocus, name, ...rest }: AdaptedBaseInputProps) => {
    const {
      onChange: fieldOnChange,
      onFocus: fieldOnFocus,
      value,
    } = useField(name);

    const onChangeHandler: BaseInputProps["onChange"] = (value) => {
      fieldOnChange(value);

      if (onChange) {
        onChange(value, { meta: { log: `log: ${value}` } });
      }
    };

    const onFocusHandler: BaseInputProps["onFocus"] = () => {
      fieldOnFocus({ focused: true });

      if (onFocus) {
        onFocus({ meta: { log: `log: Focused` } });
      }
    };

    return (
      <Component
        {...(rest as unknown as P)}
        value={value}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
      />
    );
  };
};
