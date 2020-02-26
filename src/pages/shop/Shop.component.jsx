import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectShopCollectionPreview } from "../../redux/shop/shop-selectors";
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
              history.push({ pathname: `${match.path}/${title}` })
            }
            key={id}
            title={title}
            {...otherProps}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  shops: selectShopCollectionPreview
});

export default connect(mapStateToProps)(ShopCollection);
