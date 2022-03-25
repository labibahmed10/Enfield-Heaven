import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

  return (
    <section className="main-container">
      <section className="bike-container"></section>

      <aside className="cart-section"></aside>
    </section>
  );
};

export default Products;
