import { ReactElement } from "react";

export type AnyObject = Record<PropertyKey, any>;

export interface FieldMeta {
  focused: boolean;
}

export type OnChangeOptions<V = any> = V;

export type OnFocusOptions = FieldMeta;

export type OnChangeField<V extends AnyObject, K extends keyof V = keyof V> = (
  field: K,
  value: V[K]
) => void;

export type OnFocusField<V extends AnyObject, K extends keyof V = keyof V> = (
  field: K,
  options: OnFocusOptions
) => void;

export interface FormMeta<K extends PropertyKey> {
  focused: Record<K, FieldMeta>;
}

export interface FormProviderProps<V extends AnyObject> {
  children: ReactElement;
  initialValues?: V;
}

export interface FormContextValues<V extends AnyObject = AnyObject> {
  initialValues: V;
  values: V;
  meta: FormMeta<keyof V>;
  onChangeField: OnChangeField<V>;
  onFocusField: OnFocusField<V>;
}
