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

  return (
    <section className="main-container">
      <section className="bike-container">
        {products.map((bike) => (
          <Bikes key={bike.id} data={bike}></Bikes>
        ))}
      </section>
      <aside className="cart-container">
        <Cart></Cart>
      </aside>
    </section>
  );
};

export default Product;
