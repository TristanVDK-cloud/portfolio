import './Header.scss'

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <a href="#home" className='header__logo'>
                    T<span>C</span>
                </a>
                <nav className='header__nav'>
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#about">À propos</a></li>
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