import React, { useState } from "react";
import estilo from "./index.module.css";

function listaTareas() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState([]);

    const handleInputChange = (e) => {
        setNuevaTarea(e.target.value)
    }

    const agregarTarea = (e) => {
        if (nuevaTarea.trim() !== '') {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea(''); // Limpia el input
        }
    };

    return (
        <div className={estilo.card}>
            <h1 className={estilo.h1}>Lista de tareas</h1>
            <div className={estilo.tareaNueva}>
                <input type="text" value={nuevaTarea} onChange={handleInputChange} placeholder="Ingrese nueva Tarea" />
                <button onClick={agregarTarea}>Agregar</button>
            </div>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>{tarea}</li>
                ))}
            </ul>
        </div>
    )

}

export default listaTareas;