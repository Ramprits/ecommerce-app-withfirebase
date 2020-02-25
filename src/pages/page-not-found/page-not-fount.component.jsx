import React from "react";
import { useHistory } from "react-router-dom";
const PageNotFound = () => {
  const history = useHistory();

  return (
    <section className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-7">
            <h1 className="title is-1">404</h1>
            <p className="subtitle is-3">Page not found</p>
            <p>
              As well as funds, willing VC-s, client-centered approach, basic UX
              skills, proper level of nutrients, girlfriends and most of our
              dignity.
            </p>
          </div>
        </div>
        <button
          className="button is-primary"
          onClick={() => history.push({ pathname: "/" })}
        >
          Back to homepage
        </button>
      </div>
    </section>
  );
};
export default PageNotFound;
