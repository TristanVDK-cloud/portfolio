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
                    <h2>{project.title}</h2>
                    <h3>La Mission</h3>
                    <p>{project.mission}</p>

                    <h3>Technologies</h3>
                    <div className='modal-tags'>
                        {project.stack.map(tech => <span key={tech}>{tech}</span>)}
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