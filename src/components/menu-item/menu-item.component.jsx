import React from "react";
import { Image, Box } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import "./menu-item.styles.css";

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const history = useHistory();
  return (
    <div
      className="column is-4"
      onClick={() => history.push({ pathname: `/shop/${title}` })}
    >
      <div className="image-container">
        <Box className="image is-square">
          <Image src={imageUrl} alt="" />
        </Box>
        <div className="middle">
          <button className="button is-link">{title}</button>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
