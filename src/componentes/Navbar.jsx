// src/componentes/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🌎 TerraVision</div>
      <ul className="navbar-links">
        <li><Link to="/formulario">Formulario</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
