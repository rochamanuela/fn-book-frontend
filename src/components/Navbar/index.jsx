import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './style.css'

export default function navbar() {
    const location = useLocation()

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Cleanup do listener quando o componente for desmontado
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="logotype">FN Book</div>
            <div className="links">
                <NavLink to={'/'} className={location.pathname === '/' ? 'active-page' : ''}>Início</NavLink>
                {/* <NavLink to={'/about'} className={location.pathname === '/about' ? 'active-page' : ''}>Painel de análises</NavLink> */}
                {/* <NavLink to={'/admin-area'} className={location.pathname === '/admin-area' ? 'active-page' : ''}>Área administrativa</NavLink> */}
                {/* <NavLink to={'/about'} className={location.pathname === '/about' ? 'active-page' : ''}>Base de notícias</NavLink> */}
                <NavLink to={'/about'} className={location.pathname === '/about' ? 'active-page' : ''}>Sobre nós</NavLink>
                <NavLink to={'/login'} className={location.pathname === '/login' ? 'active-page' : ''}><div className="btn-login">Entrar</div></NavLink>
                <NavLink to={'/register'} className={location.pathname === '/register' ? 'active-page' : ''}><div className="btn-register">Cadastre-se</div></NavLink>
            </div>
        </div>
    )
}
