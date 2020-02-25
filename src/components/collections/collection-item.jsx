import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart-actions";
import { selectCollections } from "../../redux/shop/shop-selectors";
import "./collection-item.css";

const CollectionItem = ({ collection, addCartItem }) => {
  return (
    <div>
      <section className="section">
        <div className="container has-text-centered">
          <div className="columns is-multiline is-centered">
            {collection &&
              collection.items.map(c => (
                <div key={c.id} className="column is-4 is-4-widescreen">
                  <div className="block">
                    <div className="image-container">
                      <figure className="image is-square">
                        <img src={c.imageUrl} alt="" />
                      </figure>
                      <div className="middle">
                        <button
                          className="button is-success"
                          onClick={() => addCartItem(c)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = (state, owner) => ({
  collection: selectCollections(owner.match.params.collectionId)(state)
});

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
