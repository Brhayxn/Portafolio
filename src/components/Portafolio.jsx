import { useState, useEffect } from 'react';
import avatar from "/image-reference.png"
import gif_capachify from "/capachify.gif"
import Card from './cardProject';
import { proyectosPersonales, proyectosProfesionales } from '../data/proyectsInfo';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageError, setImageError] = useState({ avatar: false, capachify: false });

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
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contacto</a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-card">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <img
                  className='img-avatar'
                  src={avatar}
                  alt="Brhayan Yañez - Analista Programador"
                  onError={() => setImageError(prev => ({ ...prev, avatar: true }))}
                />
              </div>
            </div>
            <h1 className="hero-title">
              Hola, soy <span className="accent-text">Brhayan Yañez</span>
            </h1>
            <p className="hero-subtitle">
              Analista Programador orientado al desarrollo de sistemas funcionales y a la automatización de procesos, con enfoque en el uso eficiente de la información para apoyar la toma de decisiones a través del análisis de datos.
            </p>
            <div className="hero-quote">
              <p>"La única constante en la tecnología es el cambio."</p>
              <span>- William Pollard</span>
            </div>
            <div className="hero-buttons">
              <a
                href={`${import.meta.env.BASE_URL}Curriculum_Brhayan_Yañez.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Descargar CV
              </a>
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
              <Card key={index} {...proyecto} />
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: "4rem" }}>
            Proyectos Personales
          </h2>
          <div className="projects-grid">
            {proyectosPersonales.map((proyecto, index) => (
              <Card key={index} {...proyecto} />
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
    </div>
  );
}