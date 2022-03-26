import React, { useEffect, useState } from "react";
import Bikes from "../Bikes/Bikes";
import Cart from "../Cart/Cart";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart.length >= 4 ? newCart.slice(0, 4) : newCart);
  };

  return (
    <section className="main-container">
      <section className="bike-container">
        {products.map((bike) => (
          <Bikes key={bike.id} data={bike} addToCart={addToCart}></Bikes>
        ))}
      </section>
      <aside className="cart-container">
        <div className="cart-info">
          <h1>Order History</h1>

          {cart.map((item) => (
            <Cart key={item.id} cart={item}></Cart>
          ))}

          <button className="btn-1">Choose 1 bike for me</button>
          <button className="btn-2">Choose Again</button>
        </div>
      </aside>
    </section>
  );
};

export default Product;
