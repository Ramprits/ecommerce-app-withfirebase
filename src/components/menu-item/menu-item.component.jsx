import React from "react";
import { useHistory } from "react-router-dom";

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const history = useHistory();
  return (
    <div
      className="column is-4"
      onClick={() =>
        history.push({ pathname: "/product", search: `?q=${linkUrl}` })
      }
    >
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={imageUrl} alt={title} />
          </figure>
        </div>
        <div className="card-content is-capitalized">{title}</div>
      </div>
    </div>
  );
};
export default MenuItem;
