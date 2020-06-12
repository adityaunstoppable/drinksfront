import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowCategoryImage from "./ShowCategoryImage";
import "./card.css"

const CategoryCard = ({
    category, 
}) => {



    return (
       <div>
       <div className="card bg-dark" style={{width:"20rem"}}  >
                <div className="overflow">
                <Link to={`/category/${category._id}`}>
                <ShowCategoryImage item={category} url="category" />
               
                </Link>
                </div>
                <div className="card-header " style={{color:"#ECD6D6"}}>{category.name}</div>
            
        </div>

     
        </div>
    );
};

export default CategoryCard;
