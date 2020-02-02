import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import {
  selectCartItemCounts,
  selectCartItems,
  selectCartHidden
} from "../../redux/cart/cart-selectors";
import CartIcon from "../shopping-icon";
import CartItem from "../cart-item";
const CartDropdown = ({ toggleCartHidden, hidden, cartItems, itemCount }) => {
  const history = useHistory();
  return (
    <div className="navbar-item">
      <div
        className={`dropdown is-right ${hidden ? "is-hoverable" : ""}`}
        onClick={toggleCartHidden}
      >
        <div className="dropdown-trigger">
          <CartIcon count={itemCount} />
        </div>
        <div
          className="dropdown-menu"
          id="dropdown-menu4"
          role="menu"
          style={{ width: "300px" }}
        >
          <div className="dropdown-content">
            <div className="dropdown-item">
              {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} {...cartItem} />
              ))}
            </div>
            <hr className="dropdown-divider" />
            <div className="has-text-centered">
              <button
                className="button is-link is-small"
                onClick={() => history.push({ pathname: "/checkout" })}
              >
                Check Out
              </button>
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

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItems: selectCartItems,
  itemCount: selectCartItemCounts
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
