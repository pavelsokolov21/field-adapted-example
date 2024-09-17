import { ChangeEvent, useState } from "react";
import "./App.css";
import { Input } from "./components/input";

function App() {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClickClear = () => {
    setInputValue("");
  };

  return (
    <>
      <Input
        value={inputValue}
        onChange={onChange}
        onRightIconClick={onClickClear}
        rightIcon={<div>D</div>}
      />
      {inputValue}
    </>
  );
}

export default App;
