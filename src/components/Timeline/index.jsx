import { useInView } from "react-intersection-observer";
import './Timeline.scss';

const experiences = [
    {
        date: "2025 - Aujourd'hui",
        title: "Formation Développeur Intégrateur Web",
        location: "OpenClassrooms",
        description: "Reconversion professionnelle vers le développement. Apprentissage de React, JavaScript, et des méthodologies Agiles à travers la réalisation de 12 projets professionnels."
    },
    {
        date: "2018 - 2025",
        title: "Responsable de Magasin",
        location: "Sud Ouest Aliment",
        description: "Management d'une équipe pendant 7 ans. Pilotage de la performance commerciale, négociation avec les fournisseurs et garantie de la satisfaction client."
    },
    {
        date: "2012 - 2018",
        title: "Conseiller-Vendeur",
        location: "Sud Ouest Aliment",
        description: "Gestion de la relation client et optimisation des stocks. Première approche des outils numériques et gestion de la manipulation quotidienne de l'ERP SAP."
    }
];

function TimelineItem({ exp, index }) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={`timeline__item ${inView ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
        >
            <div className="timeline__dot"></div>
            <div className="timeline__content">
                <span className="timeline__date">{exp.date}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.location}</h4>
                <p>{exp.description}</p>
            </div>
        </div>
    );
}

function Timeline() {
    return (
        <section className="timeline" id="experience">
            <div className="timeline__container">
                <h2 className="timeline__title">Mon Parcours</h2>
                <div className="timeline__line-wrapper">
                    <div className="timeline__main-line"></div>
                    {experiences.map((exp, index) => (
                        <TimelineItem
                            key={index}
                            exp={exp}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Timeline;