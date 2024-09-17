import "./App.css";
import { InputText } from "./components/inputs/input-text";
import { Password } from "./components/inputs/password";
import { Form } from "./contexts/form-context";
import { useForm } from "./contexts/form-context/hooks";

const SomeForm = () => {
  const { values, meta } = useForm();

  return (
    <>
      <div>
        <InputText name="text" />
        This is text input: <strong>{values.text}</strong>
        <br />
        Text has been focused:
        <strong>{meta.focused.text ? "true" : "false"}</strong>
      </div>
      <hr />
      <div>
        <Password name="password" />
        Password has been focused:
        <strong>{meta.focused.password ? "true" : "false"}</strong>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Form initialValues={{ text: "initial", password: "" }}>
        <SomeForm />
      </Form>
    </>
  );
}

export default App;
