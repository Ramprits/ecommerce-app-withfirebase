import React from "react";

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={imageUrl} alt={title} />
          </figure>
        </div>
        <div class="card-content">{title}</div>
      </div>
    </div>
  );
};
export default MenuItem;
