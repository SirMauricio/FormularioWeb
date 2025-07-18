import { createContext, useState, useEffect } from "react";

export const FormularioContext = createContext();

export const FormularioProvider = ({ children }) => {
  const [formularios, setFormularios] = useState([]);

  const cargarFormularios = async () => {
    try {
      const res = await fetch("http://localhost:5000/formulario/obtenerFormularios");
      const data = await res.json();
      setFormularios(data);
    } catch (error) {
      console.error("Error al cargar formularios", error);
    }
  };

  useEffect(() => {
    cargarFormularios();
  }, []);

  return (
    <FormularioContext.Provider value={{ formularios, cargarFormularios }}>
      {children}
    </FormularioContext.Provider>
  );
};
