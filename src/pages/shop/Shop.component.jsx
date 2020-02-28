import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { shopCollectionPreview } from "../../redux/shop/shop-selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collections/collection-preview";

const ShopCollection = ({ shops, match }) => {
  const history = useHistory();
  return (
    <>
      {shops.map(({ id, title, ...otherProps }) => {
        return (
          <CollectionPreview
            handleClick={() =>
              history.push({ pathname: `${match.path}/${title.toLowerCase()}` })
            }
            key={id}
            title={title.toLowerCase()}
            {...otherProps}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  shops: shopCollectionPreview
});

export default connect(mapStateToProps)(ShopCollection);
