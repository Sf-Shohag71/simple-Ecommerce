import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(()=>{
    const storedCart = getShoppingCart();
    const savedCart = [];
    //step 1: get the id
    for(const id in storedCart){
      //step 2: get the product by using id
      const addedProduct = products.find(product => product.id === id);
      //step 3: get product quantity
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //step : add the added product to the save cart
        savedCart.push(addedProduct);
      }
    }
    //step 5: set cart
    setCart(savedCart);

  },[products])
  const HandleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product 
          key={product.id} 
          product={product}
          HandleAddToCart={HandleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
