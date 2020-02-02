import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import CartIcon from "../shopping-icon";
const CartDropdown = ({ toggleCartHidden, hidden }) => {
  return (
    <div className="navbar-item">
      <div
        className={`dropdown is-right ${hidden ? "is-hoverable" : ""}`}
        onClick={toggleCartHidden}
      >
        <div className="dropdown-trigger">
          <CartIcon />
        </div>
        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <div className="columns">
                <div className="column is-4">
                  <figure className="image is-256x256">
                    <img
                      alt="logo"
                      src="https://bulma.io/images/placeholders/256x256.png"
                    />
                  </figure>
                </div>
                <div className="column is-8">This is product name</div>
              </div>
            </div>
            <hr className="dropdown-divider" />{" "}
            <div className="has-text-centered">
              <button className="button is-link is-small">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
