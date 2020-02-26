import React from "react";
import { Image } from "@chakra-ui/core";
import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart-actions";
const CartItem = ({ name, imageUrl, removeItem, cartItem }) => (
  <article className="media">
    <figure className="media-left">
      <Image rounded="full" size="50px" alt="logo" src={imageUrl} />
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong>
        </p>
      </div>
    </div>
    <div className="media-right">
      <button
        className="delete has-text-danger"
        style={{ color: "red" }}
        onClick={() => removeItem(cartItem)}
      ></button>
    </div>
  </article>
);

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);
