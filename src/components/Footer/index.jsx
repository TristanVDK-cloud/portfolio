import './Footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__logo'>
                    T<span>C</span>
                </div>
                <p className='footer__text'>
                    © {new Date().getFullYear()} - Conçu et développé par Tristan Camps
                </p>
                <div className='footer__social'>
                    <a
                        href="https://www.linkedin.com/in/tristan-camps-899254147/"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='footer__link'
                    >
                        <i className='fa-brands fa-linkedin'></i> Linkedin
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;