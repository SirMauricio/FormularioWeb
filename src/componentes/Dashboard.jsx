import React, { useContext } from "react";
import { FormularioContext } from './FormularioContext';

const Dashboard = () => {
  const { formularios, cargarFormularios } = useContext(FormularioContext);

  return (
    <div className="dashboard-container">
      <h1>Dashboard de Formularios</h1>
      <button onClick={cargarFormularios}>Actualizar</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Correo</th>
            <th>Celular</th>
            <th>Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {formularios.map((f, index) => (
            <tr key={index}>
              <td>{f.nombre}</td>
              <td>{f.apellidoPaterno}</td>
              <td>{f.apellidoMaterno}</td>
              <td>{f.correo}</td>
              <td>{f.celContacto}</td>
              <td>{f.mensaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
