import { useInView } from 'react-intersection-observer';
import './About.scss';

function About() {
    const { ref, inView } = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });

    return (
        <section className='about' id='about' ref={ref}>
            <div className='about__container'>
                <h2 className={`about__title ${inView ? 'visible' : ''}`}>À propos</h2>
                <div className='about__content'>
                    <div className={`about__text ${inView ? 'visible' : ''}`}>
                        <p>
                            Après <strong>14 ans de carrière dans le secteur du commerce</strong>, dont 7 années en tant que <strong>responsable
                            de magasin</strong>, j'ai développé une solide expertise dans la gestion de projet et la satisfaction client.
                        </p>
                        <p>
                            Aujourd'hui en reconversion vers le <strong>développement web</strong>, je transpose cette rigueur et mon sens de l'organisation
                            dans la création d'applications modernes. Ma formation d'Intégrateur Web m'a permis de maîtriser
                            l'écosystème <strong>React</strong>, avec un objectif constant : transformer des besoins métiers complexes en interfaces
                            fluides, performantes et accessibles.
                        </p>
                    </div>
                    <div className={`about__skills-quick ${inView ? 'visible' : ''}`}>
                        <h3>Mes atouts "Manager"</h3>
                        <ul>
                            <li><span>🚀</span> Autonomie & Responsabilité</li>
                            <li><span>🤝</span> Sens du service client</li>
                            <li><span>📅</span> Respect des délais</li>
                            <li><span>📈</span> Capacité d'adaptation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About