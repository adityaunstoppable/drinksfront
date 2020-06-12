import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowProductImage from "./ShowProductImage";
import "./card.css"

const ProductCard = ({
    product
}) => {


    return (
       <div className="row">
        <span className="overflow col-3">
        
        <ShowProductImage item={product} url="product" />
        </span>
         <div className="col-8">
        <div className="pn mb-3 " style={{color:"#eeeeee"}}>{product.name}</div>
        <div className="ph mb-4" style={{color:"#ECD6D6"}}> HISTORY -> {product.history}</div>
        <div className="pd mb-4"  style={{color:"#ECD6D6"}}> Description -> {product.description}</div><br />
        <div className="pp mb-4"  > Price -> ₹{product.price}</div>
        </div>
        </div>

    );
};

export default ProductCard;

























