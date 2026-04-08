/**
 * =============================================================================
 * AURÉA — Base de datos de productos (Tienda)
 * =============================================================================
 * CÓMO AGREGAR UN PRODUCTO:
 *   1. Copia un objeto existente dentro del arreglo `productos`
 *   2. Cambia el `id` (debe ser único, sin espacios ni caracteres especiales)
 *   3. Rellena los campos y guarda el archivo
 *   4. El producto aparecerá automáticamente en la tienda
 *
 * CATEGORÍAS DISPONIBLES (usar exactamente como aparecen):
 *   "Arte"  |  "Decoración"  |  "Mobiliario"  |  "Iluminación"  |  "Textiles"
 *
 * CAMPOS:
 *   id            {string}   Identificador único (URL-friendly, ej: "cuadro-abstracto-01")
 *   nombre        {string}   Nombre del producto
 *   categoria     {string}   Una de las categorías listadas arriba
 *   precio        {number}   Precio numérico (sin símbolo, ej: 1200)
 *   moneda        {string}   Código de moneda (ej: "GTQ" o "USD")
 *   descripcion   {string}   Descripción corta para la tarjeta del catálogo
 *   descripcionLarga {string} Descripción completa para la página de detalle
 *   imagenes      {string[]} URLs de imágenes (mínimo 1, la primera es la portada)
 *   disponible    {boolean}  true = en stock | false = agotado
 *   destacado     {boolean}  true = aparece en sección "Destacados" del home
 *   specs         {object}   Especificaciones libres (pares clave-valor)
 *   tags          {string[]} Palabras clave para el buscador
 * =============================================================================
 */

const productos = [

  // ══════════════════════════════════════════════════════════════════════════
  // AIRE ACONDICIONADO
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "aire-acondicionado-01",
    nombre: "Mini Split · York",
    categoria: "Aire Acondicionado",
    precio: 2500,
    moneda: "GTQ",
    descripcion: "Mini Split de 12,000 BTU con tecnología inverter.",
    descripcionLarga: "Mini Split de 12,000 BTU con tecnología inverter para máxima eficiencia energética. Ideal para habitaciones de hasta 25m². Incluye unidad interior, unidad exterior, control remoto y kit de instalación básica. Garantía de 5 años en compresor y 2 años en partes eléctricas.",
    imagenes: [
      "img/productos/AIRE ACONDICIONADO/MINI SPLIT/YORK/1.png",
      "img/productos/AIRE ACONDICIONADO/MINI SPLIT/YORK/2.png"
    ],
    disponible: true,
    destacado: false,
    specs: {
      "Tipo": "Mini split inverter",
      "Refrigerante": "R410A",
      "Capacidad": "12,000 a 24,000 BTU (3.5 kW – 6.7 kW)",
      "Funciones": "Solo frío",
      "Extras": "WiFi opcional, Flujo de aire 3D, Pantalla oculta",
      "Eficiencia": "Alta (similar a 16–18 SEER)",
      "Ruido": "Muy bajo"
    },
    tags: ["aire acondicionado", "mini split", "york", "inverter", "eficiencia energética"]
  },

  {
    id: "aire-acondicionado-02",
    nombre: "Mini Split · Samsung",
    categoria: "Aire Acondicionado",
    precio: 2700,
    moneda: "GTQ",
    descripcion: "Mini Split de 12,000 BTU con tecnología inverter.",
    descripcionLarga: "Mini Split de 12,000 BTU con tecnología inverter para máxima eficiencia energética. Ideal para habitaciones de hasta 25m². Incluye unidad interior, unidad exterior, control remoto y kit de instalación básica. Garantía de 5 años en compresor y 2 años en partes eléctricas.",
    imagenes: [
      "https://i0.wp.com/www.estpace-company.com/wp-content/uploads/2024/04/Mini-Split-Marca-Samsung.webp?resize=1024%2C1024&ssl=1",
      "https://iprpartesyrepuestos.com/wp-content/uploads/2020/10/614-0057-4-1-700x700.jpg"
    ],
    disponible: true,
    destacado: false,
    specs: {
      "Capacidad": "12,000 BTU",
      "Tecnología": "Inverter",
      "Área recomendada": "Hasta 25m²",
      "Incluye": "Unidad interior, unidad exterior, control remoto, kit de instalación",
      "Garantía": "5 años en compresor, 2 años en partes eléctricas"
    },
    tags: ["aire acondicionado", "mini split", "samsung", "inverter", "eficiencia energética"]
  },

  {
    id: "aire-acondicionado-03",
    nombre: "Mini Split · Carrier",
    categoria: "Aire Acondicionado",
    precio: 2400,
    moneda: "GTQ",
    descripcion: "Mini Split de 12,000 BTU con tecnología inverter.",
    descripcionLarga: "Mini Split de 12,000 BTU con tecnología inverter para máxima eficiencia energética. Ideal para habitaciones de hasta 25m². Incluye unidad interior, unidad exterior, control remoto y kit de instalación básica. Garantía de 5 años en compresor y 2 años en partes eléctricas.",
    imagenes: [
      "img/productos/AIRE ACONDICIONADO/MINI SPLIT/CARRIER/1.png",
      "img/productos/AIRE ACONDICIONADO/MINI SPLIT/CARRIER/2.png"
    ],
    disponible: true,
    destacado: false,
    specs: {
      "Tipo": "Inverter de alta gama",
      "Eficiencia": "Hasta 21 SEER",
      "Refrigerante": "R410A",
      "Capacidades": "12k – 24k BTU",
      "Tecnología": "Enfriamiento rápido (hasta 65% más veloz)",
      "Consumo": "Muy bajo",
      "Durabilidad": "Alta"
    },
    tags: ["aire acondicionado", "mini split", "carrier", "inverter", "eficiencia energética"]
  },

  {
    id: "aire-acondicionado-04",
    nombre: "Mini Split · Lennox",
    categoria: "Aire Acondicionado",
    precio: 2800,
    moneda: "GTQ",
    descripcion: "Mini Split de 12,000 BTU con tecnología inverter.",
    descripcionLarga: "Mini Split de 12,000 BTU con tecnología inverter para máxima eficiencia energética. Ideal para habitaciones de hasta 25m². Incluye unidad interior, unidad exterior, control remoto y kit de instalación básica. Garantía de 5 años en compresor y 2 años en partes eléctricas.",
    imagenes: [
      "img/productos/AIRE ACONDICIONADO/MINI SPLIT/LENNOX/1.png",
      "img/productos/AIRE ACONDICIONADO/MINI SPLIT/LENNOX/2.png"
    ],
    disponible: true,
    destacado: false,
    specs: {
      "Tipo": "Mini split inverter (ahorra energía)",
      "Refrigerante": "R410A",
      "Eficiencia": "Hasta 18 SEER",
      "Capacidades": "12,000 / 18,000 / 24,000 BTU",
      "Voltaje": "208–230V",
      "Consumo": "Bajo–medio (gracias al inverter)",
      "Ruido": "Bajo",
      "Funciones": "Solo frío o frío/calor según modelo"
    },
    tags: ["aire acondicionado", "mini split", "lennox", "inverter", "eficiencia energética"]
  },

  /*
  // ══════════════════════════════════════════════════════════════════════════
  // ARTE
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "abstracto-tierra-01",
    nombre: "Composición Tierra I",
    categoria: "Arte",
    precio: 4800,
    moneda: "GTQ",
    descripcion: "Óleo sobre lino belga con pigmentos naturales de tierra y ocre.",
    descripcionLarga: "Obra original de gran formato ejecutada en técnica mixta sobre lino belga sin tratar. La composición explora la tensión entre el orden geométrico y la materia orgánica, empleando pigmentos naturales importados de Umbría. Pieza única con certificado de autenticidad y marco de roble natural incluido.",
    imagenes: [
      "https://images.unsplash.com/photo-1578926288207-a90a5366759d?q=80&w=1200",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=1200",
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1200"
    ],
    disponible: true,
    destacado: true,
    specs: {
      "Técnica": "Óleo y pigmentos naturales",
      "Soporte": "Lino belga sin tratar",
      "Dimensiones": "120 × 90 cm",
      "Edición": "Pieza única"
    },
    tags: ["óleo", "abstracto", "pintura", "tierra", "original", "arte"]
  },

  {
    id: "fotografia-volcan-01",
    nombre: "Volcán · Amanecer",
    categoria: "Arte",
    precio: 2200,
    moneda: "GTQ",
    descripcion: "Fotografía fine-art en papel baryta 310g, edición limitada de 10.",
    descripcionLarga: "Fotografía tomada desde el flanco norte del volcán Acatenango al amanecer, durante una expedición de cuatro días. Impresa en papel baryta de 310 gramos con tintas de archivo de 200 años de duración. Cada pieza viene firmada, numerada y con marco de aluminio anodizado negro incluido.",
    imagenes: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200"
    ],
    disponible: true,
    destacado: false,
    specs: {
      "Técnica": "Fotografía fine-art",
      "Papel": "Baryta 310g, libre de ácido",
      "Dimensiones": "80 × 120 cm",
      "Edición": "Limitada — 10 ejemplares"
    },
    tags: ["fotografía", "volcán", "paisaje", "guatemala", "limitada", "fine-art"]
  },

  {
    id: "escultura-bronce-01",
    nombre: "Forma Suspendida",
    categoria: "Arte",
    precio: 12500,
    moneda: "GTQ",
    descripcion: "Escultura en bronce fundido a la cera perdida, base de mármol travertino.",
    descripcionLarga: "Escultura de autor fundida en bronce mediante la técnica ancestral de la cera perdida (lost-wax casting). La pieza captura un instante de equilibrio inestable, evocando la fragilidad y la permanencia simultáneamente. Base de mármol travertino romano incluida. Certificado de autenticidad numerado.",
    imagenes: [
      "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1200",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200"
    ],
    disponible: true,
    destacado: true,
    specs: {
      "Material": "Bronce fundido",
      "Técnica": "Cera perdida",
      "Altura": "38 cm",
      "Base": "Mármol travertino"
    },
    tags: ["escultura", "bronce", "artesanal", "mármol", "original"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DECORACIÓN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "florero-ceramica-01",
    nombre: "Vasija Negra · Serie I",
    categoria: "Decoración",
    precio: 890,
    moneda: "GTQ",
    descripcion: "Cerámica artesanal ahumada en técnica rakú japonés. Pieza única.",
    descripcionLarga: "Vasija elaborada a mano en arcilla de alta temperatura, sometida a cocción rakú y ahumado natural con serrín de maderas locales. Cada pieza es irrepetible: las variaciones de tono y textura son consecuencia directa del proceso de cocción. Interior vitrificado, apto para uso con flores frescas.",
    imagenes: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1200",
      "https://images.unsplash.com/photo-1612200507153-7f0c9c5e9e0e?q=80&w=1200",
      "https://images.unsplash.com/photo-1493106641515-5d10f52a6e17?q=80&w=1200"
    ],
    disponible: true,
    destacado: true,
    specs: {
      "Material": "Arcilla alta temperatura",
      "Técnica": "Rakú y ahumado",
      "Altura": "28 cm",
      "Interior": "Vitrificado"
    },
    tags: ["cerámica", "vasija", "rakú", "artesanal", "negro", "decoración"]
  },

  {
    id: "espejo-madera-01",
    nombre: "Espejo Orbis",
    categoria: "Decoración",
    precio: 3200,
    moneda: "GTQ",
    descripcion: "Marco de madera de teca recuperada con acabado oil wax natural.",
    descripcionLarga: "Espejo circular con marco construido en madera de teca recuperada de demoliciones históricas de Ciudad de Guatemala. El acabado oil wax resalta las vetas naturales de la madera sin alterar su color. Sistema de colgado oculto incluido. Disponible en dos diámetros.",
    imagenes: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200"
    ],
    disponible: true,
    destacado: false,
    specs: {
      "Material": "Teca recuperada",
      "Acabado": "Oil wax natural",
      "Diámetro": "90 cm",
      "Cristal": "Float 5mm, biselado"
    },
    tags: ["espejo", "madera", "teca", "circular", "decoración", "mural"]
  },

  {
    id: "bandeja-marmol-01",
    nombre: "Bandeja Calacatta",
    categoria: "Decoración",
    precio: 1450,
    moneda: "GTQ",
    descripcion: "Mármol Calacatta oro con asas de latón torneado a mano.",
    descripcionLarga: "Bandeja tallada en un solo bloque de mármol Calacatta con vetas doradas características. Las asas de latón son torneadas a mano en un taller local y atornilladas con tornillería de acero inoxidable invisible. Fondo en fieltro natural para proteger superficies. Ideal para tocador, sala o cocina de alta gama.",
    imagenes: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1200",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200"
    ],
    disponible: true,
    destacado: false,
    specs: {
      "Material": "Mármol Calacatta Oro",
      "Asas": "Latón torneado",
      "Dimensiones": "40 × 20 × 5 cm",
      "Fondo": "Fieltro natural"
    },
    tags: ["mármol", "bandeja", "calacatta", "latón", "decoración", "lujo"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MOBILIARIO
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "mesa-centro-01",
    nombre: "Mesa Travertino",
    categoria: "Mobiliario",
    precio: 18500,
    moneda: "GTQ",
    descripcion: "Mesa de centro en travertino romano sobre estructura de acero negro mate.",
    descripcionLarga: "Mesa de centro diseñada por el estudio AURÉA para espacios con carácter. El tablero es una sola losa de travertino romano con su textura porosa natural, sin rellenar, que evoluciona con el uso. La estructura es acero lacado en negro mate con uniones soldadas invisibles. Producción local bajo pedido.",
    imagenes: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200"
    ],
    disponible: true,
    destacado: true,
    specs: {
      "Tablero": "Travertino romano natural",
      "Estructura": "Acero negro mate",
      "Dimensiones": "120 × 60 × 38 cm",
      "Producción": "Bajo pedido — 4 semanas"
    },
    tags: ["mesa", "travertino", "mobiliario", "centro", "mármol", "acero"]
  },

  {
    id: "silla-nogal-01",
    nombre: "Silla Arco",
    categoria: "Mobiliario",
    precio: 6800,
    moneda: "GTQ",
    descripcion: "Madera de nogal americano macizo, tapizado en lino natural belga.",
    descripcionLarga: "Silla de comedor o escritorio en nogal americano macizo con uniones de espiga tradicionales, sin tornillos ni adhesivos estructurales. El asiento y respaldo están tapizados en lino natural belga de 340g/m². Disponible en tres tonos de lino y acabado oil wax o lacado transparente en la madera.",
    imagenes: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1200"
    ],
    disponible: true,
    destacado: false,
    specs: {
      "Madera": "Nogal americano macizo",
      "Tapizado": "Lino natural 340g/m²",
      "Dimensiones": "45 × 48 × 82 cm",
      "Uniones": "Espiga tradicional"
    },
    tags: ["silla", "nogal", "madera", "lino", "mobiliario", "comedor"]
  },

  {
    id: "estante-metal-01",
    nombre: "Estante Módulo",
    categoria: "Mobiliario",
    precio: 9200,
    moneda: "GTQ",
    descripcion: "Sistema modular en acero laminado en frío con estantes de madera de cedro.",
    descripcionLarga: "Sistema de estantería modular diseñado para escalar según la necesidad del espacio. La estructura es acero laminado en frío con acabado óxido controlado (no mancha). Los estantes son tablas de cedro guatemalteco de 40mm de espesor con aceite danés. Módulo base: 90cm de ancho, ampliable lateralmente.",
    imagenes: [
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1200",
      "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=1200"
    ],
    disponible: false,
    destacado: false,
    specs: {
      "Estructura": "Acero laminado en frío",
      "Estantes": "Cedro guatemalteco 40mm",
      "Módulo base": "90 × 35 × 200 cm",
      "Carga máx.": "80 kg por estante"
    },
    tags: ["estante", "estantería", "acero", "cedro", "modular", "mobiliario"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ILUMINACIÓN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "lampara-techo-01",
    nombre: "Lámpara Esfera · Latón",
    categoria: "Iluminación",
    precio: 5400,
    moneda: "GTQ",
    descripcion: "Globo de vidrio soplado a mano con soporte en latón macizo.",
    descripcionLarga: "Lámpara de techo con globo de vidrio soplado artesanalmente en un taller de Antigua Guatemala. El soporte y los herrajes son latón macizo torneado, sin revestimientos ni pinturas: el latón desarrolla una pátina natural con el tiempo. Compatible con bombillas E27 estándar hasta 10W LED. Cable textil de yute natural incluido (2m, ajustable).",
    imagenes: [
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1200",
      "https://images.unsplash.com/photo-1513506003901-1e6a35f8ac30?q=80&w=1200",
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1200"
    ],
    disponible: true,
    destacado: true,
    specs: {
      "Globo": "Vidrio soplado artesanal",
      "Herrajes": "Latón macizo natural",
      "Casquillo": "E27, máx. 10W LED",
      "Cable": "Textil de yute, 2m ajustable"
    },
    tags: ["lámpara", "techo", "latón", "vidrio", "soplado", "iluminación", "artesanal"]
  },

  {
    id: "lampara-pie-01",
    nombre: "Arco · Lámpara de Pie",
    categoria: "Iluminación",
    precio: 7800,
    moneda: "GTQ",
    descripcion: "Arco en hierro forjado, pantalla de lino y base de mármol negro.",
    descripcionLarga: "Lámpara de pie con estructura de arco en hierro forjado a mano, acabado negro grafito con textura de martillo. Pantalla confeccionada en lino natural de doble capa que filtra la luz cálida. Base de mármol negro Zimbabwe de 8kg para máxima estabilidad. Altura total ajustable entre 160 y 195cm.",
    imagenes: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200"
    ],
    disponible: true,
    destacado: false,
    specs: {
      "Estructura": "Hierro forjado negro grafito",
      "Pantalla": "Lino natural doble capa",
      "Base": "Mármol negro Zimbabwe",
      "Altura": "160–195 cm ajustable"
    },
    tags: ["lámpara", "pie", "arco", "hierro", "lino", "iluminación", "mármol"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // TEXTILES
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "alfombra-lana-01",
    nombre: "Alfombra Wabi",
    categoria: "Textiles",
    precio: 8900,
    moneda: "GTQ",
    descripcion: "Lana de oveja guatemalteca anudada a mano. Diseño asimétrico en tonos tierra.",
    descripcionLarga: "Alfombra tejida artesanalmente por tejedoras de San Juan Comalapa con lana de oveja local hilada a mano. El diseño abstracto en tonos arena, ocre y carbón surge del proceso mismo del tejido, sin patrón previo. Cada pieza es única e irrepetible. Sin tintes sintéticos: todos los colores son naturales o de origen vegetal.",
    imagenes: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200"
    ],
    disponible: true,
    destacado: true,
    specs: {
      "Material": "Lana de oveja guatemalteca",
      "Técnica": "Anudado a mano",
      "Dimensiones": "200 × 140 cm",
      "Tintes": "Naturales y vegetales"
    },
    tags: ["alfombra", "lana", "tejido", "artesanal", "textil", "guatemala"]
  },

  {
    id: "cojin-lino-01",
    nombre: "Set Cojines Mineral",
    categoria: "Textiles",
    precio: 1200,
    moneda: "GTQ",
    descripcion: "Lino belga lavado con relleno de plumón de pato. Set de 2 piezas.",
    descripcionLarga: "Set de dos cojines en lino belga stonewashed de 280g/m², que adquiere una textura suave y natural con cada lavado. Relleno en plumón de pato certificado (sin vivos). Cierre invisible en la parte inferior. Disponible en tres paletas: Mineral (gris piedra y arena), Bosque (verde salvia y lino natural) y Noche (negro y grafito).",
    imagenes: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200"
    ],
    disponible: true,
    destacado: false,
    specs: {
      "Material": "Lino belga stonewashed 280g/m²",
      "Relleno": "Plumón de pato certificado",
      "Dimensiones": "50 × 50 cm c/u",
      "Cierre": "Invisible"
    },
    tags: ["cojín", "lino", "textil", "plumón", "set", "sala"]
  },

  {
    id: "manta-alpaca-01",
    nombre: "Manta Alpaca Natural",
    categoria: "Textiles",
    precio: 2800,
    moneda: "GTQ",
    descripcion: "100% alpaca royal peruana, tejida en telar tradicional. Edición natural sin tinte.",
    descripcionLarga: "Manta elaborada en 100% alpaca royal peruana de 18 micras, la fibra más fina de América. Tejida en telar tradicional de pedal por artesanos andinos. Sin tintes: el color es el natural de la fibra (blanco marfil, gris plata o café). Certificación OEKO-TEX estándar 100. Empacada en caja de madera reutilizable.",
    imagenes: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200",
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1200"
    ],
    disponible: true,
    destacado: false,
    specs: {
      "Material": "100% alpaca royal, 18 micras",
      "Técnica": "Telar tradicional de pedal",
      "Dimensiones": "180 × 130 cm",
      "Certificación": "OEKO-TEX Estándar 100"
    },
    tags: ["manta", "alpaca", "textil", "natural", "tejido", "artesanal"]
  }
  */
  
];

/**
 * CATEGORÍAS — Lista maestra para filtros y navegación
 * Agrega aquí si creas una categoría nueva
 */
const CATEGORIAS = ["Aire Acondicionado"/*, "Arte", "Decoración", "Mobiliario", "Iluminación", "Textiles"*/];

/**
 * CONFIGURACIÓN DE LA TIENDA
 */
const TIENDA_CONFIG = {
  monedaDefault: "GTQ",
  whatsappNumero: "50233667439",
  productosPorPagina: 9,
  /* Mensaje de WhatsApp al consultar un producto */
  mensajeWa: (producto) =>
    `Hola, me interesa el producto: *${producto.nombre}* (Q${producto.precio.toLocaleString()}). ¿Está disponible?`
};