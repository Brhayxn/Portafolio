import gif_capachify from "../assets/images/capachify.gif"



import cosecha_logo from "../assets/images/capachify.png"
import img_capachify_1 from "../assets/ImagesProjects/capachifyImages/1.png"
import img_capachify_2 from "../assets/ImagesProjects/capachifyImages/2.png"
import img_capachify_3 from "../assets/ImagesProjects/capachifyImages/3.png"
import img_capachify_4 from "../assets/ImagesProjects/capachifyImages/4.png"
import img_capachify_5 from "../assets/ImagesProjects/capachifyImages/5.png"

import queueSystem_logo from "../assets/images/queue.png"
import img_queueSystem1 from "../assets/ImagesProjects/queueImages/1.png"
import img_queueSystem2 from "../assets/ImagesProjects/queueImages/2.png"
import img_queueSystem3 from "../assets/ImagesProjects/queueImages/3.png"
import img_queueSystem4 from "../assets/ImagesProjects/queueImages/4.png"
import img_queueSystem5 from "../assets/ImagesProjects/queueImages/5.png"
import img_queueSystem6 from "../assets/ImagesProjects/queueImages/6.png"
import img_queueSystem7 from "../assets/ImagesProjects/queueImages/7.png"
import img_queueSystem8 from "../assets/ImagesProjects/queueImages/8.png"
import img_queueSystem9 from "../assets/ImagesProjects/queueImages/9.png"
import img_queueSystem10 from "../assets/ImagesProjects/queueImages/10.png"
import img_queueSystem11 from "../assets/ImagesProjects/queueImages/11.png"
import img_queueSystem12 from "../assets/ImagesProjects/queueImages/12.png"

import estacionamiento_logo from "../assets/images/estacionamiento.png"
import img_estacionamiento1 from "../assets/ImagesProjects/estacionamiento/1.png"
import img_estacionamiento2 from "../assets/ImagesProjects/estacionamiento/2.png"
import img_estacionamiento3 from "../assets/ImagesProjects/estacionamiento/3.png"
import img_estacionamiento4 from "../assets/ImagesProjects/estacionamiento/4.png"
import img_estacionamiento5 from "../assets/ImagesProjects/estacionamiento/5.png"

import rapidEats_logo from "../assets/images/rapidEats.png"



export const proyectosProfesionales = [
  {
    img_placeholder: queueSystem_logo,
    nombre: "Sistema de categorización",
    descripcion:
      "Sistema que mejora la eficiencia en la atención al cliente en salas de urgencias mediante una interfaz moderna desarrollada en React y un backend robusto en Node.js, facilitando triage y gestión de estados en tiempo real.",
    tecnologias: ["React", "WebSocket", "Express.js", "PostgreSQL", "Tailwind CSS"],
    imgs_carrusel: [img_queueSystem1, img_queueSystem2, img_queueSystem3, img_queueSystem4, img_queueSystem5, img_queueSystem6, img_queueSystem7, img_queueSystem8, img_queueSystem9, img_queueSystem10, img_queueSystem11, img_queueSystem12]
  },
  {
    img_placeholder: rapidEats_logo,
    nombre: "Sistema de ventas",
    descripcion:
      "Sistema web que permite gestionar y registrar ventas de manera organizada, con generación de reportes diarios e impresión de comandas.",
    tecnologias: ["PHP", "jQuery", "phpMyAdmin", "Flask", "API", "Bootstrap 5"],
  },
]

export const proyectosPersonales = [
  {
    img_placeholder: cosecha_logo,
    nombre: "Capachify",
    descripcion:
      "Sistema diseñado para reemplazar el uso de planillas en huertos, eliminando papel y generando reportes automáticos en PDF.",
    tecnologias: ["Dart", "Flutter", "SQLite", "PDF"],
    imgs_carrusel: [img_capachify_1, img_capachify_2, img_capachify_3, img_capachify_4, img_capachify_5]
  },
  {
    img_placeholder: estacionamiento_logo,
    nombre: "Sistema de estacionamientos",
    descripcion:
      "Sistema orientado a reemplazar el registro manual en estacionamientos, permitiendo gestionar ingresos, salidas y cobros en tiempo real.",
    tecnologias: ["React", "Express.js", "PostgreSQL", "Tailwind CSS"],
    imgs_carrusel: [img_estacionamiento1, img_estacionamiento2, img_estacionamiento3, img_estacionamiento4, img_estacionamiento5]
  },
]

