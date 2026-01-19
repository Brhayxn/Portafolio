import { useState, useEffect } from 'react';
import avatar from "/image-reference.png"
import {  FaDownload } from 'react-icons/fa';

import Card from './cardProject';
import ImageGalleryModal from './ImageGalleryModal';
import { proyectosPersonales, proyectosProfesionales } from '../data/proyectsInfo';
import {
  SiPandas,
  SiJupyter,
  SiScikitlearn,
  SiPython,
  SiFastapi,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiFlutter,
  SiGit,
  SiPostman,
} from 'react-icons/si';


export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageError, setImageError] = useState({ avatar: false, capachify: false });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleImageClick = (images) => {
    setModalImages(images);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalImages([]);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`nav-glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span>Portafolio</span>
          </div>

          {/* Botón de menú móvil con estilo circular */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Menú de navegación */}
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>Inicio</a>
            <a href="#projects" className="nav-link" onClick={closeMobileMenu}>Proyectos</a>
            <a href="#experience" className="nav-link" onClick={closeMobileMenu}>Experiencia</a>
            <a href="#interests" className="nav-link" onClick={closeMobileMenu}>Intereses</a>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contacto</a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        {/* Elemento decorativo de fondo */}
        <div className="hero-bg-glow"></div>

        <div className="container hero-content">
          <div className="hero-text fade-in-up">
            
            {/* Saludo estilo Terminal */}
            <div className="terminal-badge">
              <span className="blink">&gt;</span> Hola mundo! Soy
            </div>

            <h1 className="hero-name">Brhayan Yañez</h1>
            
            <h2 className="hero-role">
              <span className="code-bracket">{'<'}</span>
              Analista Programador & Data Lover
              <span className="code-bracket">{'/>'}</span>
            </h2>

            <p className="hero-bio">
              Transformo <span className="highlight">datos</span> en decisiones y <span className="highlight">código</span> en soluciones. 
              Especializado en el desarrollo de sistemas funcionales, automatización 
              y análisis de datos.
            </p>
            
            <div className="hero-actions">
              <a 
                href={`${import.meta.env.BASE_URL}Curriculum_Brhayan_Yañez.pdf`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-glow"
              >
                <FaDownload className="btn-icon" /> Descargar CV
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper fade-in-up delay-200">
            {/* Contenedor del avatar con efectos */}
            <div className="tech-avatar-container">
              <div className="tech-ring ring-1"></div>
              <div className="tech-ring ring-2"></div>
              <div className="img-frame">
                 {/* Manejo de error de imagen simplificado para el ejemplo */}
                <img 
                  src={avatar} 
                  alt="Brhayan Yañez" 
                  className="profile-img"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">

          <h2 className="section-title">Proyectos Profesionales</h2>
          <div className="projects-grid">
            {proyectosProfesionales.map((proyecto, index) => (
              <Card key={index} {...proyecto} onImageClick={handleImageClick} />
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: "4rem" }}>
            Proyectos Personales
          </h2>
          <div className="projects-grid">
            {proyectosPersonales.map((proyecto, index) => (
              <Card key={index} {...proyecto} onImageClick={handleImageClick} />
            ))}
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Experiencia</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <h3>Soporte TI y Desarrollo Fullstack</h3>
                  <h4>Cesfam Ignacio Carrera Pinto</h4>
                  <span className="timeline-date">05/2025 - 08/2025</span>
                  <p>
                    Participé en tareas de soporte técnico e infraestructura,
                    realizando instalación y configuración de redes, routers, switches
                    e impresoras en red, además del mantenimiento preventivo y correctivo de equipos.
                    Paralelamente, desarrollé un sistema de gestión de urgencias utilizando React,
                    Express y PostgreSQL, y configuré un servidor básico con Windows Server.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <h3>Desarrollador Full Stack</h3>
                  <h4>Maxi mechadas</h4>
                  <span className="timeline-date">03/2024 - 01/2025</span>
                  <p>
                    Desarrollé un sistema de ventas para Maxi Mechadas, abarcando
                    desde la toma de requerimientos hasta la implementación final
                    bajo arquitectura MVC. Utilicé CodeIgniter y phpMyAdmin para
                    la gestión del sistema, incluyendo generación de reportes diarios,
                    y desarrollé una API en Flask para la impresión automática de comandas,
                    cubriendo diseño de base de datos y desarrollo completo de la solución.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="interests-section">
        <div className="container">
          <h2 className="section-title">Tecnologías de Interés</h2>
          <p className="interests-subtitle">
            Tecnologías y herramientas que me apasionan y con las que disfruto trabajar
          </p>
          <div className="interests-grid">
            {[
              { name: 'Python', Icon: SiPython, color: '#3776AB' },
              { name: 'Pandas', Icon: SiPandas, color: '#150458' },
              { name: 'Jupyter', Icon: SiJupyter, color: '#F37626' },
              { name: 'Scikit-learn', Icon: SiScikitlearn, color: '#F7931E' },
              { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
              { name: 'React', Icon: SiReact, color: '#61DAFB' },
              { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
              { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
              { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
              { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
              { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
              { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
              { name: 'Git', Icon: SiGit, color: '#F05032' },
              { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
            ].map((tech, index) => {
              const IconComponent = tech.Icon;
              return (
                <div
                  key={tech.name}
                  className="tech-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="tech-icon">
                    <IconComponent style={{ color: tech.color }} />
                  </div>
                  <div className="tech-name">{tech.name}</div>
                  <div className="tech-glow" style={{ '--tech-color': tech.color }}></div>
                  {hoveredTech === tech.name && (
                    <div className="tech-ripple" style={{ '--tech-color': tech.color }}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-card">
            <h2>¿Trabajamos juntos?</h2>
            <p>Estoy disponible para nuevos proyectos y oportunidades</p>
            <div className="contact-buttons">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yanezbrhayan@gmail.com&su=Contacto%20interes&body=Hola,%20me%20gustaría%20saber%20más..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Enviar email
              </a>
              <a
                href="https://www.linkedin.com/in/brhayan-ya%C3%B1ez-1b19012a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        images={modalImages}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}