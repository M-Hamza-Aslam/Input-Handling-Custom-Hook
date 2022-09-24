import useInput from "../../Hooks/useInput";

//using Object Destructuring to get all the return values of useInput Hook
const {
  value: emailInputValue,
  isValid: enteredEmailisValid,
  isError: emailIsError,
  inputKeyStrockHandler: emailKeyStrockHandler,
  InputBlurHandler: emailInputBlurHandler,
  reset: resetEmailInput,
} = useInput((value) => value.includes("@"));

const {
  value: passwordInputValue,
  isValid: enteredPasswordisValid,
  isError: passwordIsError,
  inputKeyStrockHandler: passwordKeyStrockHandler,
  InputBlurHandler: passwordInputBlurHandler,
  reset: resetPasswordInput,
} = useInput((value) => !(value.trim().length < 6));

//Form will be valid only if all the inputs of form are valid
let formIsValid = false;
if (enteredEmailisValid && enteredPasswordisValid) {
  formIsValid = true;
}

//setting error class by checking validity of input
const emailInputClasses = emailIsError
  ? `${classes.emailInput} ${classes.invalid}`
  : classes.emailInput;
const passwordInputClasses = passwordIsError
  ? `${classes.passwordInput} ${classes.invalid}`
  : classes.passwordInput;

//on form submit event if form is valid then do what you want to do and then reset the inputs
const formSubmitHandler = (event) => {
  event.preventDefault();
  if (!formIsValid) {
    return;
  }
  //add your logic

  //
  resetEmailInput();
  resetPasswordInput();
};

return (
  <form onSubmit={formSubmitHandler}>
    <label htmlFor="email">Email</label>
    <input
      id="email"
      className={emailInputClasses}
      value={emailInputValue}
      onChange={emailKeyStrockHandler}
      onBlur={emailInputBlurHandler}
    />
    {emailIsError && <p className={styles.invalidtext}>Enter your message!</p>}
    <label htmlFor="password">Password</label>
    {passwordIsError && (
      <p className={styles.invalidtext}>Enter your message!</p>
    )}
    <input
      id="password"
      className={passwordInputClasses}
      value={passwordInputValue}
      onChange={passwordKeyStrockHandler}
      onBlur={passwordInputBlurHandler}
    />
    <button disabled={!formIsValid}>Submit</button>
  </form>
);
