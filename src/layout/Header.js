import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import CartDropdown from "../components/cart-dropdown";
import { auth } from "../firebase/firebase-utils";

const Header = ({ currentUser, hidden }) => {
  const history = useHistory();
  const [active, setActive] = useState(false);

  return (
    <nav
      className="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
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
            <CartDropdown />
            <div className="navbar-item">
              <div className="buttons">
                {currentUser && currentUser.userAuth !== null ? (
                  <button
                    className="button is-link is-small is-rounded"
                    onClick={() => {
                      auth.signOut();
                      history.push({ pathname: "/signup" });
                    }}
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    onClick={() => setActive(!active)}
                    to="/signup"
                    className="button is-primary is-small is-rounded"
                  >
                    <strong>Sign In</strong>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
