import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  removeCartItem,
  addCartItem,
  removeItem
} from "../../redux/cart/cart-actions";
import "./checkout.component.css";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart-selectors";

const Checkout = ({
  total,
  cartItems,
  removeCartItem,
  removeCart,
  addCart
}) => {
  return (
    <>
      <div className="columns">
        <div className="column is-4">Name</div>
        <div className="column is-4">Quantity</div>
        <div className="column is-4">Price</div>
      </div>
      <div className="clearfix"></div>
      {cartItems.map(cartItem => (
        <article className="media" key={cartItem.id}>
          <figure className="media-left">
            <p className="image is-64x64">
              <img alt="logo" src={cartItem.imageUrl} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <div className="columns">
                <div className="column is-4">{cartItem.name}</div>
                <div className="column is-4">
                  <div className="quantity">
                    <div className="arrow" onClick={() => removeCart(cartItem)}>
                      &#10094;
                    </div>
                    <span className="value">{cartItem.quantity}</span>
                    <div className="arrow" onClick={() => addCart(cartItem)}>
                      &#10095;
                    </div>
                  </div>
                </div>
                <div className="column is-4">{cartItem.price}</div>
              </div>
            </div>
          </div>
          <div className="media-right">
            <button
              className="delete is-danger"
              onClick={() => removeCartItem(cartItem)}
            ></button>
          </div>
        </article>
      ))}

      <button className="is-pulled-right button is-success is-rounded is-small">
        Check Out ${total}
      </button>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
  removeCartItem: item => dispatch(removeCartItem(item)),
  addCart: item => dispatch(addCartItem(item)),
  removeCart: item => dispatch(removeItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
