import React from "react";
import cardEstilo from "./index.module.css"

const Tarjeta = ({ title, type, children }) => {
    return (
      <div className={cardEstilo.card}>
        <h2>{title}</h2>
        <p>Type: {type}</p>
        <div className={cardEstilo.buttonGroup}>
        {children}
      </div>
      </div>
    );
  };

export default Tarjeta;