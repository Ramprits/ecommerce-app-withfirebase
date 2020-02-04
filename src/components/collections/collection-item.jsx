import React from "react";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop-selectors";
import "./collection-item.css";

const CollectionItem = ({ collection }) => {
  return (
    <div>
      <section className="section">
        <div className="container has-text-centered">
          <div className="columns is-multiline is-centered">
            {collection &&
              collection.items.map(c => (
                <div key={c.id} className="column is-4 is-4-widescreen">
                  <div className="block">
                    <div class="image-container">
                      <figure class="image is-square">
                        <img src={c.imageUrl} alt="" />
                      </figure>
                      <div class="middle">
                        <button class="button is-success">Add To Cart</button>
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

export default connect(mapStateToProps)(CollectionItem);
