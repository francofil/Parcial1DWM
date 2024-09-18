import React, { useState} from "react";
import estilo from "./index.module.css";

function Card() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className={estilo.card}>
            <input type="text" className={estilo.nombre} value={inputValue} onChange={handleInputChange} placeholder="Ingresa tu nombre"/>
            <p className={estilo.parrafo}>{inputValue}</p>
        </div>
    )
}

export default Card;