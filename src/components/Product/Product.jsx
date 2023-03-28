import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { name, seller, price, ratings, img } = props.product;
  const HandleAddToCart = props.HandleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4 className="product-title">{name}</h4>
        <p className="product-price">Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button onClick={()=> HandleAddToCart(props.product)} className="btn-cart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
};

export default Product;
