import React from "react";
import MenuItem from "../menu-item/menu-item.component";
const sections = [
  {
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "hats"
  },
  {
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "jackets"
  },
  {
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "sneakers"
  },
  {
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "womens"
  },
  {
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "Mens"
  }
];
const Directory = () => {
  return (
    <div className="columns is-multiline">
      {sections.map(({ title, imageUrl, id, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
        ></MenuItem>
      ))}
    </div>
  );
};
export default Directory;
