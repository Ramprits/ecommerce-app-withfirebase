import React from "react";
import SignUp from "../../components/auth/sign-up.component";
import SignIn from "../../components/auth/sign-in.component";
const Index = () => {
  return (
    <div className="columns">
      <div className="column is-half">
        <SignIn />
      </div>
      <div className="column is-half">
        <SignUp />
      </div>
    </div>
  );
};

export default Index;
