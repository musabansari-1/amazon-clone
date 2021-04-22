import React from "react";
import StarIcon from '@material-ui/icons/Star';
import ProductDetail from './ProductDetail';

import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({id,  title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();


  const addToBasket = () => {
    alert("Product added to the basket");
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <div className="product" >
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (<StarIcon />) )}
          {Array(5- rating).fill().map((_, i) => (<StarIcon style={{color: 'black'}}/>) )}
        </div>
      </div>
      <img
        src={image}
        alt=""
      />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
