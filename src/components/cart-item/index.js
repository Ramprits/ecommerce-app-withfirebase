import React from "react";

const CartItem = ({ name, imageUrl, price, quantity }) => {
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
        <button className="delete"></button>
      </div>
    </article>
  );
};

export default CartItem;
