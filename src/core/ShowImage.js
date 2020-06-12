import React from "react";

const ShowImage = ({ item, url }) => (
    <div className="product-img hieght-100px width-100px">
        <img
            src={`http://localhost:5000/api/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
);

export default ShowImage;

