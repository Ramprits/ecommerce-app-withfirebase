import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="logo"
          />
        </a>
        <span
          role="button"
          className={`navbar-burger burger ${active ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setActive(!active)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${active ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link
            onClick={() => setActive(!active)}
            to="/"
            className="navbar-item"
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={() => setActive(!active)}
            className="navbar-item"
          >
            Shop
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link
                onClick={() => setActive(!active)}
                to="/signup"
                className="button is-primary"
              >
                <strong>Sign up</strong>
              </Link>
              <Link
                onClick={() => setActive(!active)}
                to="/signin"
                className="button is-light"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
