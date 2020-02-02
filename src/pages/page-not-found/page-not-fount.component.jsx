import React from "react";
import { useHistory } from "react-router-dom";
const PageNotFound = () => {
  const history = useHistory();

  return (
    <section class="section">
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div class="column is-7">
            <h1 class="title is-1">404</h1>
            <p class="subtitle is-3">Page not found</p>
            <p>
              As well as funds, willing VC-s, client-centered approach, basic UX
              skills, proper level of nutrients, girlfriends and most of our
              dignity.
            </p>
          </div>
        </div>
        <button
          class="button is-primary"
          onClick={() => history.push({ pathname: "/" })}
        >
          Back to homepage
        </button>
      </div>
    </section>
  );
};
export default PageNotFound;
