import React from "react";
import "./Bikes.css";
import { FaCartPlus } from "react-icons/fa";

const Bikes = ({ data }) => {
  const { name, img, price } = data;

  return (
    <div className="card">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h3>{price}</h3>

      <button>
        Add To Cart <FaCartPlus></FaCartPlus>
      </button>
    </div>
  );
};

export default Bikes;
