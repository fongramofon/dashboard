import React from 'react';
import classes from './Input.css';

const Input = ({ input, label, meta: { touched, error }, type}) => {
  console.log(touched, error);
  return (
    <div className={classes.inputGroup}>
      <label htmlFor={input.name} className={classes.label}>{label}</label>
      <input {...input} type={type}/>
      { touched && error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;