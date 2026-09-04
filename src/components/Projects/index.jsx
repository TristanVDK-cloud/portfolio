import { useState } from 'react';
import projectsData from '../../data/projects.json';
import './Projects.scss';
import Modal from '../Modal';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('Tous');
    const categories = ['Tous', 'HTML5', 'CSS3', 'React', 'Sass', 'JavaScript'];
    const [selectedProject, setSelectedProject] = useState(null);
    const filteredProjects = activeFilter === 'Tous'
        ? projectsData
        : projectsData.filter(project => project.technologies.some(tech => tech.name === activeFilter)
    );

    return (
        <section className='projects' id="projects">
            <div className='projects__container'>
                <h2 className='projects__title'>Mes Projets</h2>
                <div className='projects__filters'>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className='projects__grid'>
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className='project-card'>
                            <div className='project-card__inner' onClick={() => setSelectedProject(project)}>
                                <div className='project-card__image-wrapper'>
                                    <img src={project.cover} alt={project.title} />
                                    <div className='project-card__overlay'>
                                        <span>Voir en détail</span>
                                    </div>
                                </div>
                                <div className='project-card__info'>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedProject && (
                    <Modal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </section>
    );
}

export default Projects;