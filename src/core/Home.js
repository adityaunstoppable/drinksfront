import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import {getSlideshow ,getCategories} from "./apiCore"
import CategoryCard from "./CategoryCard"
import SlideCard from "./SlideCard"
import Images from "./Images"
const Home = () => {

  const [slide, setSlide]=useState([])
  const loadSlides=() => {
    getSlideshow().then(data => {
      setSlide(data)
    })
  }
  
  useEffect(() => {
loadSlides()
  },[])


  const [category, setCategory]=useState([])
  const loadCategories=() => {
    getCategories().then(data => {
      setCategory(data)
    })
  }
  
  useEffect(() => {
    loadCategories();
  },[])

  
  return (
        <Layout
        title="Welcome to the happy world of Booze"
        description="Wanna take a round to the world of Happiness ? lets go,,.."
        className="container-fluid"
    >
                   <div className="row">

                   <span  className="col-3">
                 
                        <Images />
               </span>

               <div className="col-8">
                 <div className="row">
                  {category.map((product, i) => (
                  <span key={i} className="col-4 mb-3 ">
                  <CategoryCard category={product} />
                  
                  </span>
                        
                        ))}
               </div>
               </div>



 
      
   </div>
      </Layout>

        )
}

export default Home;
