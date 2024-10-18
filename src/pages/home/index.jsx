import React from 'react'
import TitleComponent from "../../components/Title";
import Contenedor from "../../components/Contenedor"
import Button from '../../components/Button'
import Tarjeta from "../../components/Card"
import estilosIndex from "./index.module.css"
import { fetchReceta, deleteReceta, addReceta } from '../../api/api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleDetailsClick = (id) => {
        navigate(`/details/${id}`);
    };

    const [isModalOpen, setIsModalOpen] = useState(false); // Controla la visibilidad del modal
    const [newReceta, setNewReceta] = useState({
        name: '',
        description: '',
        preparation: '',
        type: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReceta((prevReceta) => ({
            ...prevReceta,
            [name]: value
        }));
    };

    // Agregar nueva receta
    const handleAddReceta = async () => {
        try {
            const recetaAgregada = await addReceta(newReceta); // Llama a la API para agregar la receta
            setRecetas([...recetas, recetaAgregada]); // Actualiza la lista de recetas
            setNewReceta({ name: '', description: '', preparation: '', type: '' });
            setIsModalOpen(false); // Cierra el modal después de agregar
        } catch (error) {
            alert('Hubo un error al agregar el deporte');
        }
    };

    const handleDeleteClick = async (id) => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta receta?');
        if (confirmDelete) {
            try {
                await deleteReceta(id); // Llama a la API para eliminar la receta
                setRecetas((prevReceta) => prevReceta.filter(receta => receta.id !== id));
            } catch (error) {
                console.log(error);
                alert('Hubo un error eliminando la receta');
            }
        }
    };

    const [recetas, setRecetas] = useState([]); // Estado para almacenar las recetas

    useEffect(() => {
        const loadReceta = async () => {
            try {
                const data = await fetchReceta(); // Llama a la función fetchReceta
                setRecetas(data); // Establece los datos obtenidos en el estado
            } catch (error) {
                // Maneja el error
            }
        };

        loadReceta(); // Llama a la función para cargar los deportes
    }, []);

    return (
        <>
            <TitleComponent children="Recetas" />
            <Contenedor>
                <Button onClickHandler={() => setIsModalOpen(true)}>Agregar receta</Button>
                <div className={estilosIndex.Contenedor}>
                    {recetas.map((receta) => (
                        <Tarjeta key={receta.id} title={receta.name} type={receta.type}>
                            <Button onClickHandler={() => handleDetailsClick(receta.id)}>Detalles</Button>
                            <Button onClickHandler={() => handleDeleteClick(receta.id)}>Borrar</Button>
                        </Tarjeta>
                    ))
                    }
                </div>
            </Contenedor>
            {/* Modal */}
            {isModalOpen && (
                <div className={estilosIndex.ModalOverlay}>
                    <div className={estilosIndex.ModalContent}>
                        <h2>Agregar Nueva Receta</h2>
                        <div className={estilosIndex.ModalInputs}>
                            <input
                                type="text"
                                name="name"
                                value={newReceta.name}
                                onChange={handleInputChange}
                                placeholder="Nombre de la receta"
                                className={estilosIndex.input}
                            />
                            <input
                                type="text"
                                name="description"
                                value={newReceta.description}
                                onChange={handleInputChange}
                                placeholder="Descripción"
                                className={estilosIndex.input}
                            />
                            <input
                                type="text"
                                name="preparation"
                                value={newReceta.preparation}
                                onChange={handleInputChange}
                                placeholder="preparacion"
                                className={estilosIndex.input}
                            />
                            <input
                                type="text"
                                name="type"
                                value={newReceta.type}
                                onChange={handleInputChange}
                                placeholder="Categorías"
                                className={estilosIndex.input}
                            />
                        </div>
                        <div className={estilosIndex.ModalButtons}>
                            <Button onClickHandler={handleAddReceta}>Agregar</Button>
                            <Button onClickHandler={() => setIsModalOpen(false)}>Cancelar</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
