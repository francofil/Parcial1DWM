const API_URL = 'http://localhost:3000/dishes'; // Reemplaza con la URL real de tu backend

export const fetchReceta = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error al obtener las recetas');
    }
    const data = await response.json();
    return data; // Devuelve los datos obtenidos
  } catch (error) {
    console.error('Error:', error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};

export const deleteReceta = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/dishes/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error al eliminar la receta');
        }
        return true;
    } catch (error) {
        console.error('Error eliminando receta:', error);
        throw error;
    }
};

export const addReceta = async (newReceta) => {
    try {
        const response = await fetch('http://localhost:3000/dishes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReceta)
        });
        
        if (!response.ok) {
            throw new Error('Error al agregar la receta');
        }
        
        const addedSport = await response.json();
        return addedSport;
    } catch (error) {
        console.error('Error agregando receta:', error);
        throw error;
    }
};

export const fetchRecetaDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/dishes/${id}`);
      if (!response.ok) {
        throw new Error('Error al obtener los detalles de la receta');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error obteniendo los detalles de la receta:', error);
      throw error;
    }
  };