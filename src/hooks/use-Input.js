import { useState } from "react";

function useInput(validityFn) {
  const [value, setValue] = useState("");
  const [inputTouched, setInputIsTouched] = useState(false);

  const valueIsValid = validityFn(value);
  const hasError = !valueIsValid && inputTouched;

  const changeValueHandler = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const changeBlurHandler = (event) => {
    console.log("VALUE IS SET TO TRUE");
    setInputIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setInputIsTouched(false);
  };

  return {
    value,
    inputTouched,
    hasError,
    changeValueHandler,
    changeBlurHandler,
    reset,
  };
}

export default useInput;
