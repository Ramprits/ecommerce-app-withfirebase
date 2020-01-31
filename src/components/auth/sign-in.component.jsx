import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "@chakra-ui/core";
const SignIn = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <form className="box" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="title is-size-5">I already have an account!</h2>
      <hr />
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <Input
            className="input"
            name="email"
            ref={register({ required: true })}
            type="email"
            placeholder="Text input"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <Input
            className="input"
            name="password"
            ref={register({ required: true })}
            type="password"
            placeholder="Text input"
          />
        </div>
      </div>
      <div className="field">
        <Button variantColor="green" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default SignIn;
