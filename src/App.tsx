import { ChangeEvent, useState } from "react";
import "./App.css";
import { Input } from "./components/input";

function App() {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Input value={inputValue} onChange={onChange} />
      {inputValue}
    </>
  );
}

export default App;
