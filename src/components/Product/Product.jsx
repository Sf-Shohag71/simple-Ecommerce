import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, seller, price, ratings, img } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />

      <div className="product-info">
        <h4 className="product-title">{name}</h4>
        <p className="product-price">Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
