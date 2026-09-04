import './Header.scss'
import { useState } from 'react';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='header'>
            <div className='header__container'>
                <a href="#home" className='header__logo'>
                    T<span>C</span>
                </a>

                <button className='header__burger' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className={isMenuOpen ? "open" : ""}></span>
                </button>

                <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
                    <ul onClick={() => setIsMenuOpen(false)}>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#skills">Compétences</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#experience">Parcours</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header