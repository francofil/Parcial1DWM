import React, { useState, useEffect} from "react";
import estilo from "./index.module.css";

function Contador() {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        // Inicia un intervalo que aumenta el valor de "segundos" cada segundo
        const intervalo = setInterval(() => {
          setSegundos(prevSegundos => prevSegundos + 1);
        }, 1000); //Ejecuta SetInterval cada 1000 milisegundos, 1sec
    
        // Limpieza: limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalo);
      }, []);

    return (
        <div className={estilo.card}>   
            {segundos}
        </div>
    )


}

export default Contador;