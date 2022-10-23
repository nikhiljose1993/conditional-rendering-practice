import React, { Fragment } from "react";
import Input from "./Input";
import Button from "./Button";

function Form({ isRegistered }) {
  return (
    <form className="form">
      <Input type={"text"} placeholder={"Email"} />
      <Input type={"password"} placeholder={"Password"} />
      {!isRegistered && (
        <Input type={"password"} placeholder={"Confirm Password"} />
      )}
      <Button text={isRegistered ? "Login" : "Register"} />
    </form>
  );
}

export default Form;
