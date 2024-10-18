import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import estilosDetalles from './index.module.css'; // Importa el archivo CSS para estilos
import { fetchRecetaDetails } from "../../api/api";

const Details = () => {
    const { id } = useParams();  // Obtener el ID desde la URL
    const navigate = useNavigate();
    const [recetaDetails, setRecetaDetails] = useState(null); // Estado para almacenar los detalles
    const [loading, setLoading] = useState(true); // Estado para manejar la carga

    // Función para obtener los detalles del deporte
    const loadRecetaDetails = async () => {
        try {
            const data = await fetchRecetaDetails(id);
            setRecetaDetails(data); 
        } catch (error) {
        } finally {
            setLoading(false); // Cambia el estado de carga
        }

    };

    useEffect(() => {
        loadRecetaDetails(); // Llama a la función cuando se carga el componente
    }, [id]);

    const handleVolverHome = () => {
        navigate('/');
    };

    if (loading) {
        return <div>Cargando detalles...</div>; // Mensaje de carga mientras se obtienen los datos
    }

    if (!recetaDetails) {
        return <div>No se encontraron detalles para este deporte.</div>;
    }

    return (
        <div className={estilosDetalles.detailsContainer}>
            <button className={estilosDetalles.backButton} onClick={handleVolverHome}>
                Atrás
            </button>
            <div className={estilosDetalles.detailsContent}>
                <h2>Nombre: {recetaDetails.name || 'Sin título'}</h2>
                <p>Descripción: {recetaDetails.description || 'Sin descripción'}</p>
                <p>Preparacion: {recetaDetails.preparation || 'Sin información'}</p>
                <p>Categorías: {recetaDetails.type ? recetaDetails.type : 'Sin categorías'}</p>
            </div>
        </div>
    );
};

export default Details;