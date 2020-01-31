import React from "react";

const CollectionPreview = ({ title, items }) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="columns is-multiline">
        {items &&
          items
            .filter((item, idx) => idx < 4)
            .map(({ id, name, imageUrl, price }) => (
              <div className="column is-3">
                <div className="card" key={id}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={imageUrl} alt={name} />
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
                      <span className="button is-light">${price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default CollectionPreview;
