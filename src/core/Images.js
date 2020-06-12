import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from "react-router-dom";

import {Carousel, CarouselItem } from 'react-bootstrap';

function Images() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  
  return (
 <div>
<Carousel activeIndex={index} onSelect={handleSelect}>
<Carousel.Item>
   <Link to="/admin/dashboard" >
    <img
      className="d-block w-100"
      src={require("./blue-Rib.jpg")}
      alt="Third slide"
    />
    </Link>
  </Carousel.Item>
  
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./Carlsberg.jpg")}
      alt="Third slide"
    />
  </Carousel.Item>
  
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./BS.png")}
      alt="Third slide"
    />
  </Carousel.Item> 
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./chivas (2).jpg")}
      alt="Third slide"
    />
  </Carousel.Item> 
  
  
</Carousel>
  
  
    </div>
  )
  
}

export default Images;
