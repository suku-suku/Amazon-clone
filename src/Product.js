import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
   
   // <img src={image} alt="" />
   <div className="product">

<img src={image} alt="" />


      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
       
        
      </div>

      

      <button onClick={addToBasket}>WishList</button>
    </div>
  );
}

export default Product;