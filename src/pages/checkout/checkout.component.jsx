import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart-selectors";
const Checkout = ({ total, cartItems }) => {
  return (
    <>
      {cartItems.map(cartItem => (
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img alt="logo" src={cartItem.imageUrl} />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{cartItem.name}</strong>
                <small>31m</small>
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fas fa-reply"></i>
                  </span>
                </a>
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fas fa-retweet"></i>
                  </span>
                </a>
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fas fa-heart"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
          <div class="media-right">
            <button class="delete is-danger"></button>
          </div>
        </article>
      ))}
      <button className="is-pulled-right button is-success is-rounded is-small">
        ${total}
      </button>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
