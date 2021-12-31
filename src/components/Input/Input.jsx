import classes from "./Input.module.css";

function Input(props) {
  const inputClasses = props.isNotValid ? classes.invalidInput : classes.input;
  return (
    <>
      <span className="flex flex-col">
        <label className="text-md font-semibold text-white">
          {props.label}
        </label>
        <input
          className={`transition-all ${inputClasses}`}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
      </span>
    </>
  );
}

export default Input;
