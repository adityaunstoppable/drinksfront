import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { readCategory  ,read , getProducts} from "./apiCore";
import ProductCard from "./ProductCard";

const Category = props => {
    const [category, setCategory] = useState({});
  


    const loadSingleCategory = categoryId => {
        readCategory(categoryId).then(data => {
           
                setCategory(data);
              
                });
             };

    useEffect(() => {
        var categoryId = props.match.params.categoryId;

        loadSingleCategory(categoryId);
    }, [props]);
   
  const [products, setProducts] = useState([])
    
   const loadProducts = () => {
       getProducts().then(data => {
           setProducts(data)
       })
   }

   useEffect(() => {
  

    loadProducts();
}, []);

var categoryId = props.match.params.categoryId;

var newDataForId = products.map(function(value){
    console.log("ci" ,categoryId)
      
    if(value.category===categoryId){
        return  value 
    }
                
   })

   newDataForId = newDataForId.filter(function(element){
       return element !== undefined;
   })
console.log("newDataForId" ,newDataForId)

    return (
        <Layout
            title={category && category.name}
            description={
                category &&
                category.description &&
                category.description.substring(0, 100)
            }
            className="container-fluid"
        >
            
            
                 <div className="col-12">
                 <div className="row">
                  {newDataForId.map((product, i) => (
                      
                  <span key={i} 
                  
                  className="col-12 mb-3 ">
                  <ProductCard product={product} />
                  </span>
            
                        
                        ))}
               </div>
               </div>
               
        </Layout>
    );
};

export default Category;
