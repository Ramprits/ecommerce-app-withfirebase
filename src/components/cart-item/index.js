import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart-actions";
const CartItem = ({
  name,
  imageUrl,
  price,
  quantity,
  removeItem,
  cartItem
}) => {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img alt="logo" src={imageUrl} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{name}</strong>
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            {quantity} * ${price} = $ {quantity * price}
          </div>
        </nav>
      </div>
      <div className="media-right">
        <button
          className="delete"
          onClick={() => removeItem(cartItem)}
        ></button>
      </div>
    </article>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);
