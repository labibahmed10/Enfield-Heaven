import React, { useEffect, useState } from "react";
import Bikes from "../Bikes/Bikes";
import Cart from "../Cart/Cart";
import "./Product.css";

const Product = () => {
  // setting main products
  const [products, setProducts] = useState([]);

  // fetching from json file
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // setting state of cart
  const [cart, setCart] = useState([]);

  // state-lifting event handler to send cart array to Cart component
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart.length >= 4 ? newCart.slice(0, 4) : newCart);
  };

  // randomly generating one product

  const chooseOneFromCart = (cart) => {
    let number = Math.floor(Math.random() * 11) + 1;
    const item = cart.find((item) => item.id === number);
    console.log(item);
  };

  //removing all the products from cart
  const removeFromCart = () => {
    const vanishCart = [];
    setCart(vanishCart);
  };

  return (
    <section className="main-container">
      {/* product section */}
      <section className="bike-container">
        {products.map((bike) => (
          <Bikes key={bike.id} data={bike} addToCart={addToCart}></Bikes>
        ))}
      </section>

      {/* cart-section */}
      <aside className="cart-container">
        <div className="cart-info">
          <h1>Order History</h1>

          {cart.map((item) => (
            <Cart key={item.id} cart={item}></Cart>
          ))}

          {/* choose one btn */}
          <button onClick={() => chooseOneFromCart(cart)} className="btn-1">
            Choose 1 bike for me
          </button>

          {/* choose again btn */}
          <button onClick={() => removeFromCart()} className="btn-2">
            Choose Again
          </button>
        </div>
      </aside>
    </section>
  );
};

export default Product;
