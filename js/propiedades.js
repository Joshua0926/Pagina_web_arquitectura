/**
 * AURÉA — Base de datos de propiedades
 * Consumido por: propiedades.html (catálogo) y propiedad-detalle.html (detalle)
 *
 * tipo: 'venta' | 'renta' | 'ambos'
 * Si tipo === 'ambos', usar precioVenta y precioRenta.
 * Si tipo === 'venta' o 'renta', usar el campo precio.
 */
const propiedades = [
  {
    id: "casa-1",
    nombre: "Lo De Ubieto",
    tipo: "ambos",
    precioVenta: "US$1,600,000",
    precioRenta: "US$4,500 / mes",
    descripcionCorta: "1,500 m² de construcción sobre 2,562 v² de terreno, con jardines, piscina y tecnología integrada.",
    descripcionLarga: {
      resumen: "Residencia de escala excepcional ubicada a minutos del centro financiero, donde cada ambiente fue diseñado para la vida en familia sin sacrificar la elegancia. Chimeneas, terrazas panorámicas, domótica y amplios jardines conforman una propiedad que raramente sale al mercado.",
      detalles: [
        "Área de Terreno: 2,562 v²",
        "Área de Construcción: 1,500 m²",
        "Sala principal con chimenea",
        "Comedor amplio",
        "Cocina equipada con desayunador",
        "Amplio deck con churrasquera, chimenea y vista a la ciudad",
        "Patio interno con pila estilo colonial",
        "Estudio",
        "Habitación o taller con baño completo",
        "Baño de visitas",
        "Habitación principal con chimenea y terraza",
        "3 Habitaciones con baño c/u",
        "Sala Familiar",
        "Habitación de servicio para dos empleadas",
        "Lavandería",
        "Despensa",
        "Cuarto para guardián con baño completo",
        "Bodega Principal",
        "Bodega Secundaria",
        "Jardín con Juegos Infantiles",
        "Planta de Emergencia de 20 KVA",
        "Planta Telefónica para 15 Extensiones",
        "8 Cámaras de Vigilancia",
        "Equipo Audio SONOS con bocinas ambientales",
        "Portón Eléctrico"
      ],
      ubicacion: "Km 8 Carretera a Santa Catarina Pinula. A 4 kms. de 20 Calle Zona 10."
    },
    ubicacion: "Km 8 Carretera A Santa Catarina Pinula",
    imagenes: [
      "img/propiedades/SAN MIGUEL BUENAVISTA/1.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/2.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/3.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/4.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/5.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/6.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/7.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/8.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/9.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/10.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/11.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/12.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/13.jpeg",
      "img/propiedades/SAN MIGUEL BUENAVISTA/14.jpeg",
    ],
    specs: { cuartos: 5, baños: 7, parqueos: 3 }
  },
  {
    id: "casa-2",
    nombre: "Torre Once",
    tipo: "renta",
    precio: "Q7,000 / mes",
    descripcionCorta: "Apartamento en nivel alto con 75 m², 2 habitaciones y acceso a amenidades de primer nivel en Zona 11.",
    descripcionLarga: {
      resumen: "Unidad residencial moderna en Torre Once, uno de los proyectos verticales más reconocidos de la Zona 11. Diseño limpio, buena luz y amenidades completas para quienes valoran la comodidad urbana sin complicaciones.",
      detalles: [
        "Nivel alto. Aprox. 75 m²",
        "Sala",
        "Comedor",
        "Cocina equipada",
        "Área de lavandería",
        "2 habitaciones",
        "2 baños",
        "2 parqueos",
        "Amenidades:",
        "Lounge",
        "Fire Pit",
        "Jardín de mascotas",
        "Juegos infantiles",
        "Gimnasio",
        "Piscina",
        "Coworking"
      ],
      ubicacion: "Zona 11, Ciudad de Guatemala."
    },
    ubicacion: "Zona 11, Ciudad de Guatemala",
    imagenes: [
      "img/propiedades/TORRE ONCE/1.jpeg",
      "img/propiedades/TORRE ONCE/2.jpeg",
      "img/propiedades/TORRE ONCE/3.jpeg",
      "img/propiedades/TORRE ONCE/4.jpeg",
      "img/propiedades/TORRE ONCE/5.jpeg",
      "img/propiedades/TORRE ONCE/6.jpeg",
      "img/propiedades/TORRE ONCE/7.jpeg",
      "img/propiedades/TORRE ONCE/8.jpeg",
      "img/propiedades/TORRE ONCE/9.jpeg"
    ],
    specs: { cuartos: 2, baños: 2, parqueos: 2 }
  },
  {
    id: "casa-3",
    nombre: "Villas del Campo",
    tipo: "renta",
    precio: "US$1,700 / mes",
    descripcionCorta: "Casa de 404 m² con jardín amplio, sala con chimenea y 3 dormitorios en condominio privado al Km 13.",
    descripcionLarga: {
      resumen: "Residencia amplia dentro de condominio privado sobre la carretera a El Salvador, ideal para familia. Distribución generosa con sala familiar, dormitorio de servicio, jardín y múltiples ambientes que equilibran comodidad y privacidad.",
      detalles: [
        "404 m²",
        "Garage para dos vehículos",
        "Hall de entrada",
        "Estudio o 4a habitación",
        "Baño completo",
        "Sala con chimenea",
        "Comedor",
        "Cocina con área para pantry",
        "Lavandería",
        "Área de alacena",
        "Jardín amplio",
        "Dormitorio de servicio con baño",
        "Sala familiar",
        "Dormitorio principal con walk-in-closet amplio y baño",
        "2 dormitorios con closet y su baño cada uno"
      ],
      ubicacion: "Km 13 Carretera a El Salvador."
    },
    ubicacion: "Km 13 Carretera a El Salvador.",
    imagenes: [
      "img/propiedades/VILLAS DEL CAMPO/1.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/2.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/3.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/4.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/5.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/6.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/7.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/8.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/9.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/10.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/11.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/12.jpeg",
      "img/propiedades/VILLAS DEL CAMPO/13.jpeg"
    ],
    specs: { cuartos: 4, baños: 4, parqueos: 2 }
  },
  {
    id: "casa-4",
    nombre: "La Herradura de Kanajuyú",
    tipo: "venta",
    precio: "US$466,000",
    descripcionCorta: "Casa de 260 m² en garita privada, Zona 16, con garage para 4 vehículos y sala familiar.",
    descripcionLarga: {
      resumen: "Casa dentro de condominio con garita en uno de los sectores más consolidados de la Zona 16. Distribución práctica y bien aprovechada, con espacios para toda la familia y estacionamiento generoso.",
      detalles: [
        "Área de terreno: 395.00 v²",
        "Área de construcción: 260.00 m²",
        "Medidas: 7 x 40 mts",
        "Garage para 4 vehículos",
        "Sala, comedor, cocina, estudio, baño de visitas",
        "Área de lavandería y dormitorio de servicio",
        "3 dormitorios: principal con walk-in-closet y baño",
        "2 dormitorios secundarios con closet, comparten baño",
        "Sala familiar",
        "Dentro de garita",
        "No incluye gabinetes de cocina"
      ],
      ubicacion: "Zona 16, Ciudad de Guatemala."
    },
    ubicacion: "Zona 16, Ciudad de Guatemala",
    imagenes: [
      "img/propiedades/LA HERRADURA/1.jpeg",
      "img/propiedades/LA HERRADURA/2.jpeg",
      "img/propiedades/LA HERRADURA/3.jpeg",
      "img/propiedades/LA HERRADURA/4.jpeg",
      "img/propiedades/LA HERRADURA/5.jpeg",
      "img/propiedades/LA HERRADURA/6.jpeg",
      "img/propiedades/LA HERRADURA/7.jpeg",
      "img/propiedades/LA HERRADURA/8.jpeg",
      "img/propiedades/LA HERRADURA/9.jpeg"
    ],
    specs: { cuartos: 3, baños: 3, parqueos: 4 }
  },
  {
    id: "casa-5",
    nombre: "Vertical El Zapote",
    tipo: "renta",
    precio: "Q4,750 / mes",
    descripcionCorta: "Apartamento de 39 m² en nivel alto con balcón y 1 parqueo en la Zona 2.",
    descripcionLarga: {
      resumen: "Unidad compacta y bien diseñada en edificio boutique de la Zona 2, pensada para quienes buscan eficiencia sin renunciar al confort. Nivel alto con balcón y buenas vistas en una ubicación céntrica e histórica.",
      detalles: [
        "Nivel alto — 39 m²",
        "1 dormitorio",
        "1 baño",
        "Sala | Comedor | Cocina",
        "Área de lavandería",
        "Balcón",
        "1 parqueo"
      ],
      ubicacion: "Zona 2, Ciudad de Guatemala."
    },
    ubicacion: "Zona 2, Ciudad de Guatemala",
    imagenes: [
      "img/propiedades/EL ZAPOTE/1.jpeg",
      "img/propiedades/EL ZAPOTE/2.jpeg",
      "img/propiedades/EL ZAPOTE/3.jpeg",
      "img/propiedades/EL ZAPOTE/4.jpeg",
      "img/propiedades/EL ZAPOTE/5.jpeg",
      "img/propiedades/EL ZAPOTE/6.jpeg",
      "img/propiedades/EL ZAPOTE/7.jpeg",
      "img/propiedades/EL ZAPOTE/8.jpeg",
      "img/propiedades/EL ZAPOTE/9.jpeg",
      "img/propiedades/EL ZAPOTE/10.jpeg",
      "img/propiedades/EL ZAPOTE/11.jpeg"
    ],
    specs: { cuartos: 1, baños: 1, parqueos: 1 }
  },
  {
    id: "casa-6",
    nombre: "Zona Pradera",
    tipo: "ambos",
    precioVenta: "US$205,000",
    precioRenta: "US$1,280 / mes",
    descripcionCorta: "Oficina de 93 m² en Nivel 10, Torre II, con 2 parqueos en pleno corazón de Zona 10.",
    descripcionLarga: {
      resumen: "Espacio de oficina en uno de los edificios de mayor prestigio de la Zona 10, con vistas abiertas desde el nivel 10 y una distribución flexible ideal para despachos profesionales o empresas que buscan una dirección de primer nivel.",
      detalles: [
        "Nivel 10 — Torre II",
        "93.28 m² + área de parqueos",
        "Espacio abierto de trabajo",
        "Una cocineta",
        "Un baño",
        "Dos parqueos"
      ],
      ubicacion: "Zona 10, Ciudad de Guatemala."
    },
    ubicacion: "Zona 10, Ciudad de Guatemala",
    imagenes: [
      "img/propiedades/ZONA PRADERA/1.jpeg",
      "img/propiedades/ZONA PRADERA/2.jpeg",
      "img/propiedades/ZONA PRADERA/3.jpeg",
      "img/propiedades/ZONA PRADERA/4.jpeg",
      "img/propiedades/ZONA PRADERA/5.jpeg",
      "img/propiedades/ZONA PRADERA/6.jpeg",
      "img/propiedades/ZONA PRADERA/7.jpeg",
      "img/propiedades/ZONA PRADERA/8.jpeg",
      "img/propiedades/ZONA PRADERA/9.jpeg"
    ],
    specs: { cuartos: 0, baños: 1, parqueos: 2 }
  },
  {
    id: "casa-7",
    nombre: "Edificio Viro",
    tipo: "venta",
    precio: "Q1,350,000",
    descripcionCorta: "Apartamento de 78 m² en Nivel 10 con 3 habitaciones, 2 baños y amenidades completas en Zona 11.",
    descripcionLarga: {
      resumen: "Unidad en venta en Edificio Viro, referente residencial de la Zona 11. Planta bien distribuida en nivel alto, con acabados de calidad y acceso a amenidades que elevan la experiencia de vivir en la ciudad.",
      detalles: [
        "78 m²",
        "Nivel 10",
        "3 habitaciones",
        "2 baños",
        "Sin línea blanca",
        "2 parqueos individuales en sótano 4",
        "Amenidades:",
        "Gym",
        "Piscina",
        "Churrasqueras",
        "Área de niños",
        "Sky lounge",
        "Salón social"
      ],
      ubicacion: "Zona 11, Mariscal, Ciudad de Guatemala."
    },
    ubicacion: "Zona 11, Mariscal",
    imagenes: [
      "img/propiedades/EDIFICIO VIRO/1.jpeg",
      "img/propiedades/EDIFICIO VIRO/2.jpeg",
      "img/propiedades/EDIFICIO VIRO/3.jpeg",
      "img/propiedades/EDIFICIO VIRO/4.jpeg",
      "img/propiedades/EDIFICIO VIRO/5.jpeg",
      "img/propiedades/EDIFICIO VIRO/6.jpeg",
      "img/propiedades/EDIFICIO VIRO/7.jpeg"
    ],
    specs: { cuartos: 3, baños: 2, parqueos: 2 }
  },
  {
    id: "casa-8",
    nombre: "Finca Teculután Zacapa",
    tipo: "venta",
    precio: "Q2,300,000",
    descripcionCorta: "7.76 manzanas sobre carretera asfaltada en Teculután, actualmente rentadas con contrato vigente.",
    descripcionLarga: {
      resumen: "Terreno agrícola de frente amplio sobre carretera asfaltada en Teculután, Zacapa. Actualmente arrendado a empresa melonera con contrato vigente hasta junio 2026, lo que representa una oportunidad de inversión con renta inmediata.",
      detalles: [
        "7.76 manzanas de terreno",
        "Frente: 375 mts",
        "Fondo: 130 mts",
        "Actualmente rentada a melonera",
        "Contrato finaliza junio 2026",
        "Se puede realizar una concesión del contrato"
      ],
      ubicacion: "Aldea San José, Teculután, Zacapa. Sobre carretera asfaltada que va de La Fragua a Huite."
    },
    ubicacion: "Aldea San José, Teculután Zacapa",
    imagenes: [
      "img/propiedades/FINCA ZACAPA/1.jpeg",
      "img/propiedades/FINCA ZACAPA/2.jpeg",
      "img/propiedades/FINCA ZACAPA/3.jpeg",
      "img/propiedades/FINCA ZACAPA/4.jpeg",
      "img/propiedades/FINCA ZACAPA/5.jpeg",
      "img/propiedades/FINCA ZACAPA/6.jpeg"
    ],
    specs: { cuartos: 0, baños: 0, parqueos: 0 }
  },
  {
    id: "casa-9",
    nombre: "Lares 16",
    tipo: "renta",
    precio: "Q4,200",
    descripcionCorta: "Penúltimo nivel con vistas abiertas, cocina equipada con línea blanca de lujo y mantenimiento incluido.",
    descripcionLarga: {
      resumen: "Apartamento listo para habitar en Torre 2 de Lares 16, con acabados modernos, electrodomésticos nuevos y una ubicación que simplifica la vida diaria. Mantenimiento y agua incluidos en el precio de renta.",
      detalles: [
        "Torre 2, Apto 803 — Penúltimo nivel",
        "Mantenimiento y agua incluidos",
        "Cocina equipada con línea blanca de lujo (electrodomésticos nuevos)",
        "Persianas modernas instaladas en habitaciones",
        "Baño con termoducha premium",
        "Lámparas LED ovaladas y modernas",
        "2 habitaciones con closet",
        "Sala",
        "Cocina",
        "Área de lavandería",
        "1 baño con acabados de alta calidad",
        "1 parqueo privado (no techado, no pega el sol)",
        "Amenidades:",
        "Vestíbulo y sala de recepción con diseño moderno",
        "Coworking",
        "Gimnasio equipado",
        "Salón de eventos"
      ],
      ubicacion: "24 Calle B 8-30, Ciudad de Guatemala."
    },
    ubicacion: "24 Calle B 8-30, Cdad. de Guatemala",
    imagenes: [
      "img/propiedades/LARES 16/1.jpeg",
      "img/propiedades/LARES 16/2.jpeg",
      "img/propiedades/LARES 16/3.jpeg",
      "img/propiedades/LARES 16/4.jpeg",
      "img/propiedades/LARES 16/5.jpeg",
      "img/propiedades/LARES 16/6.jpeg",
      "img/propiedades/LARES 16/7.jpeg",
      "img/propiedades/LARES 16/8.jpeg",
      "img/propiedades/LARES 16/9.jpeg"
    ],
    specs: { cuartos: 2, baños: 1, parqueos: 1 }
  },
  {
    id: "casa-10",
    nombre: "Altavista Los Alamos",
    tipo: "renta",
    precio: "Q4,000",
    descripcionCorta: "Apartamento de 82 m² pet-friendly con 3 habitaciones, balcón y mantenimiento incluido en San Miguel Petapa.",
    descripcionLarga: {
      resumen: "Amplio apartamento en Altavista Los Alamos con acabados modernos, cocina con top de cuarzo negro y todos los servicios incluidos en el precio. Entorno familiar, pet-friendly y con acceso rápido a vías principales, centros comerciales y colegios.",
      detalles: [
        "82 m²",
        "3 habitaciones",
        "1 walking closet",
        "2 baños completos",
        "Sala",
        "Comedor",
        "Cocina con gabinetes y top de cuarzo negro",
        "Balcón",
        "Área de lavandería",
        "2 parqueos",
        "Garita de seguridad, lobby y elevadores",
        "Salón social, área coworking y recreaciones",
        "Precio incluye mantenimiento, agua y extracción de basura",
        "Pet friendly"
      ],
      ubicacion: "ALTAVISTA LOS ALAMOS, San Miguel Petapa, carretera a Villa Canales. A pocos metros de la VAS, gasolineras, centros comerciales, supermercados y colegios."
    },
    ubicacion: "ALTAVISTA LOS ALAMOS San Miguel Petapa, carretera a Villa Canales",
    imagenes: [
      "img/propiedades/ALTAVISTA LOS ALAMOS/1.jpeg",
      "img/propiedades/ALTAVISTA LOS ALAMOS/2.jpeg",
      "img/propiedades/ALTAVISTA LOS ALAMOS/3.jpeg",
      "img/propiedades/ALTAVISTA LOS ALAMOS/4.jpeg",
      "img/propiedades/ALTAVISTA LOS ALAMOS/5.jpeg",
      "img/propiedades/ALTAVISTA LOS ALAMOS/6.jpeg",
      "img/propiedades/ALTAVISTA LOS ALAMOS/7.jpeg",
      "img/propiedades/ALTAVISTA LOS ALAMOS/8.jpeg",
      "img/propiedades/ALTAVISTA LOS ALAMOS/9.jpeg",
      "img/propiedades/ALTAVISTA LOS ALAMOS/10.jpeg",
      "img/propiedades/ALTAVISTA LOS ALAMOS/11.jpeg"
    ],
    specs: { cuartos: 3, baños: 2, parqueos: 2 }
  }
];