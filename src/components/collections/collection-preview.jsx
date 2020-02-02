import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart-actions";

const CollectionPreview = ({ title, items, addCartItem }) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="columns is-multiline">
        {items &&
          items
            .filter((item, idx) => idx < 4)
            .map(item => (
              <div
                key={item.id}
                className="column is-3"
                onClick={() => addCartItem(item)}
              >
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={item.imageUrl} alt={item.name} />
                    </figure>
                  </div>
                  <div className="cart-content">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <button className="button is-light">Cart</button>
                      <span className="button is-light">${item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionPreview);
