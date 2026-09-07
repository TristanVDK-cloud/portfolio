import { useInView } from "react-intersection-observer";
import './Skills.scss';

const techSkills = [
    { name: "HTML5", icon: `${import.meta.env.BASE_URL}icons/html5.svg` },
    { name: 'CSS3', icon: `${import.meta.env.BASE_URL}icons/css3.svg` },
    { name: 'JavaScript', icon: `${import.meta.env.BASE_URL}icons/javascript.svg` },
    { name: 'React', icon: `${import.meta.env.BASE_URL}icons/react.svg` },
    { name: 'Sass', icon: `${import.meta.env.BASE_URL}icons/sass.svg` },
    { name: 'Node.js', icon: `${import.meta.env.BASE_URL}icons/nodedotjs.svg` }
];

function Skills() {
    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true
    });

    return (
        <section className="skills" id="skills" ref={ref}>
            <div className="skills__container">
                <h2 className={`skills__title ${inView ? 'visible' : ''}`}>Mes Compétences</h2>

                <div className="skills__grid">
                    {techSkills.map((skill, index) => (
                        <div
                            key={index}
                            className={`skills__item ${inView ? 'visible' : ''}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="skills__card">
                                <img src={skill.icon} alt={skill.name} />
                                <span>{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;