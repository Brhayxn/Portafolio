export default function Card({ img_placeholder, nombre, descripcion, tecnologias, imgs_carrusel, onImageClick }) {
    const handleClick = () => {
        if (imgs_carrusel && imgs_carrusel.length > 0 && onImageClick) {
            onImageClick(imgs_carrusel);
        }
    };

    const isClickable = imgs_carrusel && imgs_carrusel.length > 0;

    return (
        <div 
            className={`project-card ${isClickable ? 'project-card-clickable' : ''}`}
            onClick={handleClick}
            role={isClickable ? 'button' : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onKeyDown={(e) => {
                if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >
            <div className="project-image">
                 <div className="project-placeholder">
                    <img src={img_placeholder} alt={nombre} className="img" />
                </div>     
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