import React from "react";
import "./Cart.css";

import { AiTwotoneDelete } from "react-icons/ai";

const Cart = ({ cart }) => {
  const { img, name } = cart;

  return (
    <div className="order-detials">
      <img src={img} alt="" />
      <p>{name}</p>
      <p className="dlt-btn">
        <AiTwotoneDelete></AiTwotoneDelete>
      </p>
    </div>
  );
};

export default Cart;
