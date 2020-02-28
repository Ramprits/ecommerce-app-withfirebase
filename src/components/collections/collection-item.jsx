import React from "react";
import { connect } from "react-redux";
import { Button } from "@chakra-ui/core";
import { addCartItem } from "../../redux/cart/cart-actions";
import { shopCollectionById } from "../../redux/shop/shop-selectors";
import "./collection-item.css";

const CollectionItem = ({ collection, addCartItem }) => {
  console.log(collection);

  return (
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
                      <Button
                        onClick={() => addCartItem(c)}
                        variantColor="green"
                        size="sm"
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state, owner) => ({
  collection: shopCollectionById(owner.match.params.collectionId)(state)
});

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
