import { AnyObject, FormMeta } from "./types";

export const createInitialMeta = <V extends AnyObject>(
  initialValues: V
): FormMeta<keyof V> => {
  return {
    focused: Object.keys(initialValues).reduce(
      (acc, key) => ({
        ...acc,
        [key]: false,
      }),
      {} as FormMeta<keyof V>["focused"]
    ),
  };
};
