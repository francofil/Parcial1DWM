import React from "react";
import estilos from "./index.module.css"

const TitleComponent = ({children}) => {
    return (
        <div className={estilos.titulo}>
            <h1 className={estilos.h1}>{children}</h1>
        </div>
    );
};

export default TitleComponent;