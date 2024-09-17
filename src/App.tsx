import "./App.css";
import { InputText } from "./components/inputs/InputText";
import { Form } from "./contexts/form-context";
import { useForm } from "./contexts/form-context/hooks";

const SomeForm = () => {
  const { values, meta } = useForm();

  return (
    <>
      <InputText name="text" />
      This is text input: <strong>{values.text}</strong>
      <br />
      Text has been focused:
      <strong>{meta.focused.text ? "true" : "false"}</strong>
    </>
  );
};

function App() {
  return (
    <>
      <Form initialValues={{ text: "initial" }}>
        <SomeForm />
      </Form>
    </>
  );
}

export default App;
