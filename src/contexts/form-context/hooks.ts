import { useContext } from "react";
import { FormContext } from "./index";
import { AnyObject, OnChangeOptions, OnFocusOptions } from "./types";

export const useForm = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useForm was called outside of FormProvider");
  }

  return context;
};

export const useField = <
  V extends AnyObject = AnyObject,
  K extends keyof V = keyof V
>(
  field: K
) => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useField was called outside of FormProvider");
  }

  const { meta, values, onChangeField, onFocusField } = context;

  const boundOnChangeField = (options: OnChangeOptions<V[K]>) =>
    onChangeField(field, options);

  const boundOnFocusField = (options: OnFocusOptions) =>
    onFocusField(field, options);

  return {
    meta: {
      focused: meta.focused?.[field] ?? false,
    },
    value: values[field],
    onChange: boundOnChangeField,
    onFocus: boundOnFocusField,
  };
};
