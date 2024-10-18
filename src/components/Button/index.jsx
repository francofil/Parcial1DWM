import React from "react";
import estiloButton from "./index.module.css";
import { useNavigate } from 'react-router-dom';

const Button = ({ children, onClickHandler }) => {

  return (
    <button className={estiloButton.Button} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;