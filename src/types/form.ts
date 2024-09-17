export interface AdaptedBaseInputProps {
  name: string;
  onChange?(value: string, options: { meta: { log: string } }): void;
  onFocus?(options: { meta: { log: string } }): void;
}
