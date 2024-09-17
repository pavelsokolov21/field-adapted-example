import { createContext, useState } from "react";
import {
  AnyObject,
  FormContextValues,
  FormProviderProps,
  OnChangeField,
  OnFocusField,
} from "./types";
import { createInitialMeta } from "./utils";

export const FormContext = createContext<FormContextValues | null>(null);

export const Form = <V extends AnyObject = AnyObject>({
  children,
  initialValues = {} as V,
}: FormProviderProps<V>) => {
  const [values, setValues] = useState(() => initialValues);
  const [meta, setMeta] = useState(() => createInitialMeta(initialValues));

  const onChangeField: OnChangeField<V> = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const onFocusField: OnFocusField<V> = (field, { focused }) => {
    setMeta((prev) => ({
      ...prev,
      focused: {
        ...prev.focused,
        [field]: prev.focused[field] ? true : focused,
      },
    }));
  };

  const contextValues: FormContextValues<V> = {
    initialValues,
    values,
    meta,
    onChangeField,
    onFocusField,
  };

  return (
    <FormContext.Provider value={contextValues}>
      {children}
    </FormContext.Provider>
  );
};
