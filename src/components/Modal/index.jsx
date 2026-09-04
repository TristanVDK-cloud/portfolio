import './Modal.scss';

function Modal({ project, onClose }) {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={stopPropagation}>
                <button className='modal-close' onClick={onClose}>&times;</button>

                <div className='modal-header'>
                    <img src={project.cover} alt={project.title} />
                </div>

                <div className='modal-text'>
                    <div className='modal-intro'>
                        <h2>{project.title}</h2>
                        <p className='project-tagline'>{project.description}</p>

                        <div className='modal-section'>
                            <h3>Technologies utilisées</h3>
                            <div className='modal-tech-grid'>
                                {project.technologies.map((tech, index) => (
                                    <div key={index} className='tech-badge'>
                                        <img src={tech.logo} alt={tech.name} />
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='modal-grid'>
                        <div className='modal-section'>
                            <h3>Contexte</h3>
                            <p>{project.context}</p>
                        </div>

                        <div className='modal-section'>
                            <h3>Objectifs</h3>
                            <p>{project.objectives}</p>
                        </div>

                        <div className='modal-section'>
                            <h3>Compétences développées</h3>
                            <ul className='skills-list'>
                                {project.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='modal-section'>
                            <h3>Résultats & Impact</h3>
                            <p>{project.results}</p>
                        </div>

                        <div className='modal-section'>
                            <h3>Perspectives d'amélioration</h3>
                            <p>{project.improvements}</p>
                        </div>
                    </div>

                    <a href={project.link} target='_blank' rel='noreferrer' className='btn btn--primary'>
                        Voir sur GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Modal;