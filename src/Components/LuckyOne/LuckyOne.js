import React from "react";
import "./LuckyOne.css";

const LuckyOne = ({ random }) => {
  const { img, name } = random;
  return (
    <div className="luckyone">
      <img src={img} alt="" />
      <h1>{name}</h1>
    </div>
  );
};

export default LuckyOne;
