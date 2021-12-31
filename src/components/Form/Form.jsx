import Input from "../Input/Input";
import useInput from "../../hooks/use-Input";
import classes from "./Form.module.css";

function Form() {
  const {
    value: nameValue,
    inputTouched: nameInputTouched,
    hasError: nameInputHasError,
    changeValueHandler: nameChangeHandler,
    changeBlurHandler: nameFocusHandler,
    reset: nameRestHandler,
  } = useInput((value) => value.trim() != "");
  const {
    value: passwordValue,
    inputTouched: passwordInputTouched,
    hasError: passwordInputHasError,
    changeValueHandler: passwordChangeHandler,
    changeBlurHandler: passwordFocusHandler,
    reset: passwordRestHandler,
  } = useInput((value) => value.length >= 8);
  const {
    value: emailValue,
    inputTouched: emailInputTouched,
    hasError: emailInputHasError,
    changeValueHandler: emailChangeHandler,
    changeBlurHandler: emailFocusHandler,
    reset: emailRestHandler,
  } = useInput((value) => value.includes("@"));

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(nameValue, emailValue, passwordValue);
    nameRestHandler();
    passwordRestHandler();
    emailRestHandler();
  };
  return (
    <>
      <form className="bg-sky-300 p-5" onSubmit={submitFormHandler}>
        <Input
          label="FULL NAME"
          type="text"
          placeholder="Enter Your Full Name"
          value={nameValue}
          isTouched={nameInputTouched}
          isNotValid={nameInputHasError}
          onChange={nameChangeHandler}
          onBlur={nameFocusHandler}
        />
        <Input
          label="PASSWORD"
          type="password"
          placeholder="Enter Your Password"
          value={passwordValue}
          isTouched={passwordInputTouched}
          isNotValid={passwordInputHasError}
          onChange={passwordChangeHandler}
          onBlur={passwordFocusHandler}
        />
        <Input
          label="E-MAIL"
          type="email"
          placeholder="Enter Your Full Email"
          value={emailValue}
          isTouched={emailInputTouched}
          isNotValid={emailInputHasError}
          onChange={emailChangeHandler}
          onBlur={emailFocusHandler}
        />

        <button className={classes.formBtn}>Sign Up</button>
      </form>
    </>
  );
}

export default Form;
