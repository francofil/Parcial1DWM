import React from "react";
import "./index.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts";

const Button = () => {
  const themeSettings = useContext(ThemeContext);

  return <button className={"primary-" + themeSettings.mode}>Click</button>;
};

export default Button;
