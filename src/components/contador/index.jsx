import React, { useState, useEffect} from "react";
import estilo from "./index.module.css";

function Contador() {
    const [count, setCount] = useState(0);

    const incrementar = ()=> setCount(count + 1)
    const decrementar = ()=> setCount(count - 1)

    useEffect(() => {
        document.title = `Contador: ${count}`;
    }, [count])
    return (
        <div className={estilo.card}>
            <button onClick={incrementar} className={estilo.nombre}>Aumentar</button>
            <button onClick={decrementar} className={estilo.nombre}>Decrementar</button>
            {count}
        </div>
    )


}

export default Contador;