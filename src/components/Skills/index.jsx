import { useInView } from "react-intersection-observer";
import './Skills.scss';
import htmlIcon from '../../assets/icons/html5.svg';
import cssIcon from '../../assets/icons/css.svg';
import jsIcon from '../../assets/icons/javascript.svg';
import reactIcon from '../../assets/icons/react.svg';
import sassIcon from '../../assets/icons/sass.svg';
import nodejsIcon from '../../assets/icons/nodedotjs.svg';


const techSkills = [
    { name: "HTML5", icon: htmlIcon },
    { name: 'CSS3', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Sass', icon: sassIcon },
    { name: 'Node.js', icon: nodejsIcon }
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