import { useState } from "react";
const useInput = (validityChecker) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const enteredInputIsValid = validityChecker(inputValue);
  const isError = !enteredInputIsValid && inputIsTouched;

  const inputKeyStrockHandler = (event) => {
    setInputValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
  };
  const reset = () => {
    setInputValue("");
    setInputIsTouched(false);
  };
  return {
    value: inputValue,
    isValid: enteredInputIsValid,
    isError,
    inputKeyStrockHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
