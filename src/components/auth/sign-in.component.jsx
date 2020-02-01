import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase-utils";
import { signInWithGoogle } from "../../firebase/firebase-utils";
import { Input } from "@chakra-ui/core";
const SignIn = () => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async data => {
    try {
      const { email, password } = data;
      await auth.signInWithEmailAndPassword(email, password);
      reset();
      history.push({ pathname: "/" });
    } catch (error) {
      console.error(error);
    }
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
        <div className="buttons">
          <button className="button is-primary" type="submit">
            Sign In
          </button>
          <button className="button is-link" onClick={signInWithGoogle}>
            {" "}
            SignIn With Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
