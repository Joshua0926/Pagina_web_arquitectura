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
    tipo: "venta",
    precio: "$1,600,000",
    descripcionCorta: "Una fusión perfecta entre concreto aparente y naturaleza virgen.",
    descripcionLarga: {
      resumen: "Residencia de autor ubicada en las afueras de la ciudad, donde la arquitectura dialoga con el entorno natural sin interrumpirlo. Materiales nobles, silencio y luz son los protagonistas de cada espacio.",
      detalles: [
        "450 mt² de construcción total",
        "Ventanales de piso a techo con doble vidrio laminado",
        "Acabados en madera de nogal importada",
        "Cocina de concepto abierto con isla central",
        "Terraza exterior con vista a jardín privado",
        "Sistema de domótica integrado",
        "Bodega climatizada y cuarto de servicio"
      ],
      ubicacion: "Km 8 Carretera a Santa Catarina Pinula. Acceso por portón privado, a 15 minutos del centro financiero de la ciudad."
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
    specs: { cuartos: 5, baños: 6, parqueos: 3 }
  },
  {
    id: "casa-2",
    nombre: "Torre Once",
    tipo: "ambos",
    precioVenta: "$320,000",
    precioRenta: "Q7,000 / mes",
    descripcionCorta: "Diseño urbano con techos de doble altura en el corazón de la zona 11.",
    descripcionLarga: {
      resumen: "Loft de diseño en una de las torres residenciales más reconocidas de la ciudad. Acabados industriales de alta gama en un espacio pensado para la vida contemporánea.",
      detalles: [
        "Techos de doble altura (5.2 m en sala)",
        "Ladrillo visto original y piso de concreto pulido",
        "Terraza privada con vista panorámica a los volcanes",
        "Cocina italiana con electrodomésticos de acero inoxidable",
        "Amenidades del edificio: gimnasio, rooftop y lobby con concierge",
        "Seguridad 24/7 con acceso controlado"
      ],
      ubicacion: "Zona 11, Ciudad de Guatemala. A dos cuadras de centros comerciales y zona gastronómica de Mariscal."
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
    specs: { cuartos: 1, baños: 1.5, parqueos: 1 }
  },
  {
    id: "casa-3",
    nombre: "Villas del Campo",
    tipo: "renta",
    precio: "$1,700 / mes",
    descripcionCorta: "Vistas panorámicas de la ciudad con acabados de mármol y vidrio.",
    descripcionLarga: {
      resumen: "Penthouse que redefine el lujo urbano en el Km 13. Con acceso directo por elevador privado y techos de 3 metros de altura, cada detalle fue concebido para quienes no aceptan lo ordinario.",
      detalles: [
        "Acceso exclusivo por elevador privado de la unidad",
        "Techos de 3 metros de altura en toda la planta",
        "Cocina italiana de concepto abierto con isla de mármol",
        "Terraza privada de 80 mt² con jacuzzi",
        "Acabados en mármol Calacatta y madera de roble blanco",
        "Sistema de audio Bose integrado en todos los ambientes",
        "4 parqueos cubiertos asignados"
      ],
      ubicacion: "Km 13 Carretera a El Salvador, dentro de condominio privado con acceso controlado las 24 horas."
    },
    ubicacion: "Km 13 Carretera a El Salvador",
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
    specs: { cuartos: 3, baños: 3.5, parqueos: 4 }
  },
  {
    id: "casa-4",
    nombre: "La Herradura de Kanajuyú",
    tipo: "venta",
    precio: "$466,000",
    descripcionCorta: "Fusión entre arquitectura colonial y minimalismo moderno.",
    descripcionLarga: {
      resumen: "Joya arquitectónica que integra muros de piedra original con estructuras de acero y vidrio. Un ambiente de paz y sofisticación inigualable en uno de los sectores residenciales más exclusivos de la ciudad.",
      detalles: [
        "Muros originales de piedra volcánica conservados",
        "Estructura nueva de acero y vidrio templado",
        "Jardín interior con fuente y vegetación nativa",
        "5 suites con baño privado y closet walk-in",
        "Estudio/biblioteca con estantería de cedro",
        "Piscina climatizada con deck de piedra laja",
        "Área de BBQ y lounge exterior cubierto"
      ],
      ubicacion: "Zona 16, Ciudad de Guatemala. Dentro de residencial privado, acceso por garita de seguridad."
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
    specs: { cuartos: 5, baños: 5.5, parqueos: 2 }
  },
  {
    id: "casa-5",
    nombre: "Vertical El Zapote",
    tipo: "renta",
    precio: "Q4,750 / mes",
    descripcionCorta: "Arquitectura vertical en el corazón histórico de la Zona 2.",
    descripcionLarga: {
      resumen: "Apartamento de diseño contemporáneo en un edificio boutique de la Zona 2, pensado para quienes valoran la proximidad al centro histórico sin renunciar a los estándares de vida más exigentes.",
      detalles: [
        "Planta abierta de 85 mt² con ventilación cruzada",
        "Ventanales de piso a techo con vista a la ciudad histórica",
        "Cocina equipada con electrodomésticos de acero",
        "Sistema de energía solar en el edificio",
        "Recolección y reutilización de aguas grises",
        "Área social en rooftop compartido",
        "Bicicleta de uso exclusivo incluida"
      ],
      ubicacion: "Zona 2, Ciudad de Guatemala. A 5 minutos caminando del Parque Jocotenango y principales instituciones del centro histórico."
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
    specs: { cuartos: 2, baños: 2, parqueos: 1 }
  },
  {
    id: "casa-6",
    nombre: "Zona Pradera",
    tipo: "ambos",
    precioVenta: "$980,000",
    precioRenta: "$1,280 / mes",
    descripcionCorta: "Privacidad absoluta con materiales crudos en Zona 10.",
    descripcionLarga: {
      resumen: "Residencia que destaca por su uso honesto de materiales crudos: concreto expuesto, madera de cedro y piedra volcánica. Diseñada para quienes entienden que el verdadero lujo es la privacidad.",
      detalles: [
        "Concreto expuesto en paredes y cielos estructurales",
        "Madera de cedro guatemalteco en pisos y closets",
        "Piedra volcánica en fachada y jardín perimetral",
        "Estudio privado con acceso independiente",
        "Piscina climatizada con sistema de sal",
        "4 suites con baño de mármol y terraza privada",
        "Sala de cine privada y cuarto de juegos"
      ],
      ubicacion: "Zona 10, Ciudad de Guatemala. Área de La Pradera, a dos cuadras de colegios internacionales y zonas gastronómicas premium."
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
    specs: { cuartos: 4, baños: 4.5, parqueos: 4 }
  },
  {
    id: "casa-7",
    nombre: "Edificio Viro",
    tipo: "renta",
    precio: "Q1,475 / mes",
    descripcionCorta: "Vida urbana sofisticada en el corazón de Mariscal, Zona 11.",
    descripcionLarga: {
      resumen: "Unidad residencial en uno de los edificios boutique más reconocidos de la Zona 11. Diseño contemporáneo, acabados de primera y una ubicación que lo tiene todo a pocos pasos.",
      detalles: [
        "Planta funcional con distribución inteligente de espacios",
        "Acabados premium en piso, baños y cocina",
        "Luz natural en todos los ambientes principales",
        "Áreas comunes: lobby, gimnasio y rooftop",
        "Parqueo asignado en sótano privado",
        "Servicio de concierge y seguridad permanente"
      ],
      ubicacion: "Zona 11, Mariscal, Ciudad de Guatemala. Rodeado de restaurantes, cafeterías, bancos y supermercados de alto nivel."
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
    specs: { cuartos: 4, baños: 4.5, parqueos: 4 }
  },
  {
    id: "casa-8",
    nombre: "Finca Teculután Zacapa",
    tipo: "venta",
    precio: "Q2,300,000",
    descripcionCorta: "Extensión productiva con infraestructura completa en el oriente del país.",
    descripcionLarga: {
      resumen: "Finca de gran extensión con infraestructura completa para uso residencial, agrícola o de inversión. Una oportunidad única en una de las regiones de mayor crecimiento del oriente guatemalteco.",
      detalles: [
        "45 manzanas con título de propiedad",
        "Casa principal de 3 habitaciones con acabados rústicos de lujo",
        "Sistema de riego tecnificado por goteo",
        "Pozo de agua propio con bomba eléctrica y manual",
        "Bodega de 300 mt² con electricidad y acceso vehicular",
        "Cultivos actuales de limón persa y mango Tommy",
        "Acceso directo desde carretera asfaltada principal"
      ],
      ubicacion: "Aldea San José, Teculután, Zacapa. A 2 horas de Ciudad de Guatemala por la ruta al Atlántico (CA-9)."
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
    specs: { cuartos: 3, baños: 2, parqueos: 4 }
  }
];