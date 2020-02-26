import React from "react";
import { connect } from "react-redux";
import { Button } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { addCartItem } from "../../redux/cart/cart-actions";
import "./collection-item.css";

const CollectionPreview = ({ title, items, addCartItem }) => {
  const history = useHistory();
  return (
    <>
      <div className="container">
        <span
          className="is-size-4"
          onClick={() => history.push({ pathname: `/shop/${title}` })}
        >
          {title}
        </span>
        <div className="columns is-multiline is-centered">
          {items &&
            items
              .filter((item, idx) => idx < 4)
              .map(item => (
                <div key={item.id} className="column is-3">
                  <div className="block">
                    <div className="image-container">
                      <figure className="image is-square">
                        <img src={item.imageUrl} alt="" />
                      </figure>
                      <div className="middle">
                        <Button
                          onClick={() => addCartItem(item)}
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
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionPreview);
