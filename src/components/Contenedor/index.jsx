import React from "react";
import contenedorEstilos from "./index.module.css"

const Contenedor = ({children}) => {
    return (
        <div className={contenedorEstilos.contenedor}>
            {children}
        </div>
    );
};

export default Contenedor;