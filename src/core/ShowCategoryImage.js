import React from "react";
import "./card.css"
const ShowCategoryImage = ({ item, url }) => (
    <div className="product-img pr " >
        <img
            src={`http://localhost:5000/api/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-3 img"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
);

export default ShowCategoryImage;
