import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const location = useLocation();

  // Mostrar solo en /formulario
    if (location.pathname !== '/formulario') {
        return null;
    }


    const auth = useAuth();
    if (!auth) {
    return null;
    }

    const { isLoggedIn, logout } = auth;
    const navigate = useNavigate();

    return (
        <aside className="sidebar-container">
        <div>
            <div className="logo-container p-4 flex items-center gap-3">
            <img
                src={logo}                
                alt="Logo de FormularioWEB"
                className="logo w-12 h-12"
            />
            <h1 className="header-title">FormularioWEB</h1>
        </div>
        </div>

        {isLoggedIn && (
            <div className="logout-container">
            <button
                onClick={() => {
                logout();
                navigate('/login');
            }}
                className="logout-button"
            >
            🔓 Cerrar Sesión
            </button>
        </div>
        )}
    </aside>
    );
};

export default Header;
