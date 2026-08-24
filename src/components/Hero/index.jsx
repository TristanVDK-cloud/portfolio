import './Hero.scss';
import monAvatar from '../../assets/avatar_tristan.webp';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__container">
                <div className='hero__text-content'>
                    <h1 className="hero__name">
                        Tristan <span>Camps</span>
                    </h1>
                    <h2 className="hero__job">Développeur Front-End / Intégrateur Web</h2>
                    <p className="hero__description">
                        Passioné par la création d'interfaces modernes et performantes.
                        Spécialisé dans l'écosystème React, j'accompagne les projets de la conception à la mise en ligne.
                    </p>
                    <div className='hero__actions'>
                        <a href="#projects" className='btn btn--primary'>Voir mes projets</a>
                        <a href="#contact" className='btn btn--outline'>Me contacter</a>
                    </div>
                </div>
                <div className="hero__avatar">
                    <div className='hero__avatar-circle'>
                        <img src={monAvatar} alt="Tristan Camps" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero