import React, { useState } from "react";
import CollectionPreview from "../../components/collections/collection-preview";
import Collections from "./shop.data";
const Shop = () => {
  const [collections] = useState(Collections);
  return (
    <>
      {collections.map(({ id, title, ...otherProps }) => {
        return <CollectionPreview key={id} title={title} {...otherProps} />;
      })}
    </>
  );
};
export default Shop;
