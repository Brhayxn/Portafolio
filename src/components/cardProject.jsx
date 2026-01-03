export default function Card({ img_placeholder,nombre, descripcion, tecnologias }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <div className="project-placeholder">{img_placeholder}</div>
            </div>
            <div className="project-content">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>

                <div className="project-tags">
                    {tecnologias.map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}