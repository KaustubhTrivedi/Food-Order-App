import React, { Fragment } from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props,ref) => {
  return (
    <Fragment>
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} id={props.input.id} {...props.input} />
      </div>
    </Fragment>
  );
});

export default Input;
