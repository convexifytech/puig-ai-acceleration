export const categories = [
  {
    id: "content-creative",
    title: "Crear contenido más rápido",
    icon: "Pencil",
    color: "#C9A84E",
    problem: "Mi equipo tarda demasiado en crear contenido",
    description: "Herramientas de IA que ayudan a tu equipo a crear textos, imágenes y contenido de marca en minutos en lugar de horas.",
    useCases: [
      {
        id: "copywriting-assistant",
        title: "Asistente de Copywriting",
        headline: "Crea textos de marca en segundos, no en horas",
        problem: "Escribir copy que suene a nuestra marca es lento y requiere muchas revisiones",
        solution: "Un asistente de IA entrenado específicamente con las guías de tu marca, tu tono de voz y conocimiento de productos. Genera posts para redes, descripciones de producto y textos de marketing que suenan exactamente como tu marca.",
        benefits: [
          "Reduce el tiempo de creación de 2 horas a 5 minutos",
          "Mantiene consistencia de marca en todos los mercados",
          "Adapta automáticamente el tono para cada canal",
          "Tu equipo revisa y mejora, no empieza de cero"
        ],
        example: "El equipo de Rabanne usa este asistente para generar 50+ variaciones de copy para campañas en redes. Lo que antes tardaba una semana, ahora lo hacen en una mañana.",
        brands: ["Rabanne", "Apivita", "Kama Ayurveda", "Uriage", "Jean Paul Gaultier", "Carolina Herrera"],
        impact: "80% más rápido",
        forYouIf: "Tu equipo pasa horas escribiendo textos y siempre hay que revisar que suenen a marca"
      },
      {
        id: "social-media-gpt",
        title: "Generador de Contenido Social",
        headline: "Contenido para todas tus redes, adaptado a cada plataforma",
        problem: "Crear contenido diferente para Instagram, TikTok, LinkedIn... es agotador",
        solution: "Una herramienta que genera contenido optimizado para cada red social. Tú le das la idea o la campaña, y te devuelve versiones adaptadas para cada plataforma con los formatos, hashtags y tonos correctos.",
        benefits: [
          "Un solo briefing, contenido para todas las plataformas",
          "Hashtags y formatos optimizados por red",
          "Calendarios de contenido generados automáticamente",
          "Banco de ideas que nunca se agota"
        ],
        example: "Apivita genera su calendario mensual de contenido en una sesión de 2 horas. Antes les llevaba 2 semanas de trabajo.",
        brands: ["Rabanne", "Apivita", "Kama Ayurveda", "Uriage"],
        impact: "5x más contenido",
        forYouIf: "Gestionas múltiples redes y nunca tienes suficiente contenido"
      },
      {
        id: "brand-voice-agent",
        title: "Guardián del Tono de Voz",
        headline: "Asegura que todo tu equipo comunique igual",
        problem: "Cada persona del equipo escribe diferente y perdemos consistencia de marca",
        solution: "Un agente de IA que conoce perfectamente el tono de voz de tu marca. Revisa cualquier texto y lo ajusta para que suene a marca, o lo genera desde cero siguiendo tus guías.",
        benefits: [
          "Consistencia 100% en todos los textos",
          "Onboarding instantáneo para nuevos miembros",
          "Adaptación automática por mercado manteniendo esencia",
          "Guías de marca siempre actualizadas y aplicadas"
        ],
        example: "CREO utiliza este agente para asegurar que los 50+ editores de contenido mantengan el mismo tono en todos los artículos.",
        brands: ["Todas las marcas Prestige", "CREO"],
        impact: "100% consistencia",
        forYouIf: "Tienes equipos grandes o distribuidos y te preocupa la consistencia"
      },
      {
        id: "image-generation",
        title: "Generación de Imágenes Segura",
        headline: "Imágenes generadas por IA, con control de marca",
        problem: "Las herramientas de generación de imágenes son un caos sin control",
        solution: "Acceso a generación de imágenes por IA dentro del entorno seguro de empresa, con guías de marca integradas y controles de calidad. Crea moodboards, conceptos y visuales manteniendo la integridad creativa.",
        benefits: [
          "Generación rápida de conceptos visuales",
          "Entorno seguro y controlado",
          "Guías de marca integradas",
          "Ideal para brainstorming y moodboards"
        ],
        example: "Los equipos creativos usan esta herramienta para explorar 100 direcciones visuales en una hora antes de elegir las 3 mejores para desarrollar.",
        brands: ["Disponible para todas las marcas"],
        impact: "1,000 licencias activas",
        forYouIf: "Tu equipo creativo necesita explorar ideas visuales rápidamente"
      }
    ]
  },
  {
    id: "customer-experience",
    title: "Mejorar la experiencia del cliente",
    icon: "Heart",
    color: "#5C5E34",
    problem: "Quiero que mis clientes tengan una experiencia más personalizada",
    description: "Asistentes inteligentes que ayudan a tus clientes a encontrar lo que buscan, 24/7, como si hablaran con tu mejor vendedor.",
    useCases: [
      {
        id: "gifting-engine",
        title: "Recomendador de Regalos",
        headline: "Ayuda a tus clientes a encontrar el regalo perfecto",
        problem: "Los clientes no saben qué regalar y abandonan la compra",
        solution: "Un concierge de regalos interactivo que guía al cliente a través de preguntas sencillas: ¿Para quién es? ¿Qué ocasión? ¿Qué le gusta? Y recomienda el producto perfecto con una explicación personalizada.",
        benefits: [
          "Reduce el abandono en categoría regalos",
          "Aumenta el ticket medio con recomendaciones premium",
          "Experiencia memorable que diferencia de competidores",
          "Funciona 24/7 sin necesidad de staff"
        ],
        example: "Penhaligon's implementó este recomendador en su web y vio un aumento del 35% en conversión en la categoría de regalos durante la campaña de Navidad.",
        brands: ["Penhaligon's"],
        impact: "+35% conversión",
        forYouIf: "Tienes una categoría de regalos importante y quieres mejorar la experiencia de compra"
      },
      {
        id: "beauty-advisor",
        title: "Asesor de Belleza Digital",
        headline: "Tu experto de belleza disponible 24 horas",
        problem: "Los clientes necesitan consejo experto pero no siempre hay alguien disponible",
        solution: "Un asesor de belleza con IA entrenado en todo tu catálogo, ingredientes y expertise de marca. Responde preguntas, recomienda productos y explica beneficios como lo haría tu mejor beauty advisor.",
        benefits: [
          "Disponible 24/7 en cualquier idioma",
          "Conocimiento perfecto de todo el catálogo",
          "Recomendaciones personalizadas por tipo de piel",
          "Libera tiempo del equipo de atención al cliente"
        ],
        example: "Kama Ayurveda usa su asesor digital para explicar los beneficios de ingredientes ayurvédicos. Los clientes que interactúan con él tienen un 40% más de probabilidad de comprar.",
        brands: ["Rabanne", "Kama Ayurveda"],
        impact: "24/7 disponible",
        forYouIf: "Tus productos necesitan explicación y consejo experto para vender"
      },
      {
        id: "in-store-expert",
        title: "Asistente para Tienda",
        headline: "Tu equipo de tienda con superpoderes",
        problem: "Los vendedores no pueden saberlo todo de todos los productos",
        solution: "Una app móvil con IA para el personal de tienda. Responde cualquier pregunta sobre productos, ingredientes, disponibilidad o recomendaciones en tiempo real. Como tener a un experto de producto en el bolsillo.",
        benefits: [
          "Staff más seguro y mejor informado",
          "Respuestas instantáneas a cualquier pregunta",
          "Recomendaciones de cross-sell inteligentes",
          "Training continuo integrado"
        ],
        example: "El personal de Kama Ayurveda en India usa esta app para responder preguntas complejas sobre Ayurveda. La satisfacción del cliente en tienda subió 25 puntos.",
        brands: ["Kama Ayurveda"],
        impact: "+25 NPS en tienda",
        forYouIf: "Tienes tiendas físicas y quieres mejorar la experiencia de venta"
      }
    ]
  },
  {
    id: "market-intelligence",
    title: "Entender el mercado",
    icon: "TrendingUp",
    color: "#6B6B6B",
    problem: "No tenemos visibilidad de lo que pasa en el mercado",
    description: "Herramientas que monitorizan lo que se dice de tu marca, detectan tendencias y te dan inteligencia competitiva en tiempo real.",
    useCases: [
      {
        id: "social-listening",
        title: "Escucha Social en Tiempo Real",
        headline: "Sabe qué dicen de tu marca ahora mismo",
        problem: "No sabemos qué se dice de nosotros en redes hasta que es tarde",
        solution: "Un dashboard que integra toda la escucha social de Meltwater con análisis de IA. Ve el sentimiento, detecta crisis potenciales, identifica tendencias y monitorea a la competencia, todo en un solo lugar.",
        benefits: [
          "Alertas inmediatas de menciones importantes",
          "Análisis de sentimiento automático",
          "Comparativa con competidores",
          "Detección temprana de crisis"
        ],
        example: "Charlotte Tilbury detectó una tendencia viral sobre uno de sus productos 48 horas antes que la competencia y pudo capitalizar el momento.",
        brands: ["Charlotte Tilbury", "Rabanne", "Jean Paul Gaultier", "Carolina Herrera", "Byredo"],
        impact: "Tiempo real",
        forYouIf: "Necesitas saber qué se dice de tu marca y reaccionar rápido"
      },
      {
        id: "trend-detection",
        title: "Detector de Tendencias",
        headline: "Anticípate a lo que viene",
        problem: "Los informes de tendencias llegan tarde para actuar",
        solution: "Un sistema de IA que analiza millones de señales para detectar tendencias emergentes antes de que sean mainstream. Ingredientes, formatos, narrativas, estéticas... todo lo que puede impactar a tu marca.",
        benefits: [
          "Detecta tendencias 3-6 meses antes",
          "Análisis por categoría y mercado",
          "Alertas personalizadas por relevancia",
          "Datos para decisiones de producto e innovación"
        ],
        example: "El equipo de innovación identificó el auge de 'skin cycling' 4 meses antes del pico y pudo preparar contenido y productos.",
        brands: ["Portfolio Prestige"],
        impact: "3-6 meses de ventaja",
        forYouIf: "Trabajas en innovación o estrategia y necesitas anticiparte"
      }
    ]
  },
  {
    id: "sales-analytics",
    title: "Datos para decidir",
    icon: "BarChart3",
    color: "#000000",
    problem: "No tenemos datos accionables para tomar decisiones",
    description: "Análisis inteligente que convierte tus datos de ventas en insights claros y recomendaciones concretas.",
    useCases: [
      {
        id: "sales-forecasting",
        title: "Predicción de Ventas",
        headline: "Sabe lo que vas a vender antes de venderlo",
        problem: "Nuestras previsiones de venta fallan constantemente",
        solution: "Un modelo de IA que combina tus históricos con factores externos (clima, eventos, tendencias) para predecir ventas con precisión. Ideal para planificación de stock y campañas.",
        benefits: [
          "Predicciones 85%+ de precisión",
          "Reduce stock muerto y roturas",
          "Planificación de campañas más precisa",
          "Alertas de desviaciones automáticas"
        ],
        example: "Carolina Herrera mejoró la precisión de sus previsiones del 60% al 87%, reduciendo el stock muerto en un 30%.",
        brands: ["Carolina Herrera", "Dries Van Noten"],
        impact: "87% precisión",
        forYouIf: "Tus previsiones de venta no son fiables y te genera problemas de stock"
      },
      {
        id: "ecommerce-intel",
        title: "Inteligencia E-commerce",
        headline: "Todos tus datos de e-retailers en un solo lugar",
        problem: "Cada e-retailer envía reportes diferentes y no podemos comparar",
        solution: "Una plataforma que unifica los datos de todos tus e-retailers (Amazon, Sephora, Douglas, etc.) en un dashboard único. Compara rendimiento, detecta oportunidades y toma decisiones basadas en datos.",
        benefits: [
          "Vista unificada de todos los canales",
          "Comparativas de rendimiento automáticas",
          "Alertas de oportunidades y problemas",
          "Informes automáticos para dirección"
        ],
        example: "Penhaligon's unificó datos de 12 e-retailers diferentes y descubrió que un producto estaba agotado en 3 de ellos sin que nadie lo supiera.",
        brands: ["Penhaligon's", "Rabanne"],
        impact: "Vista 360°",
        forYouIf: "Vendes en múltiples e-retailers y pierdes el control de los datos"
      }
    ]
  },
  {
    id: "search-visibility",
    title: "Aparecer donde importa",
    icon: "Search",
    color: "#C9A84E",
    problem: "No aparecemos donde deberíamos en búsquedas",
    description: "Estrategias para que tu marca aparezca cuando los clientes buscan, tanto en Google como en ChatGPT y otras IAs.",
    useCases: [
      {
        id: "seo-services",
        title: "Estrategia SEO",
        headline: "Aparece en Google cuando te buscan",
        problem: "No salimos en las búsquedas importantes de nuestra categoría",
        solution: "Estrategia SEO completa: análisis de keywords, optimización de contenido, SEO técnico y creación de contenido optimizado con IA. Todo alineado con tu estrategia de marca.",
        benefits: [
          "Más tráfico orgánico cualificado",
          "Mejor posicionamiento en keywords clave",
          "Contenido optimizado que suena a marca",
          "Resultados medibles mes a mes"
        ],
        example: "Jean Paul Gaultier aumentó su tráfico orgánico un 150% en 6 meses con nuestra estrategia de contenido SEO.",
        brands: ["Rabanne", "Jean Paul Gaultier", "Carolina Herrera"],
        impact: "+150% tráfico",
        forYouIf: "Tu marca debería aparecer más en búsquedas de Google"
      },
      {
        id: "geo-optimization",
        title: "Visibilidad en IA (GEO)",
        headline: "Que ChatGPT hable bien de ti",
        problem: "Cuando preguntas a ChatGPT por nuestra categoría, no nos menciona",
        solution: "GEO (Generative Engine Optimization) es el nuevo SEO. Optimizamos tu presencia digital para que las IAs como ChatGPT, Perplexity o Gemini te mencionen y recomienden correctamente.",
        benefits: [
          "Aparece en respuestas de IAs",
          "Control de cómo te describen las IAs",
          "Ventaja competitiva temprana",
          "Preparación para el futuro de la búsqueda"
        ],
        example: "Penhaligon's pasó de no aparecer nunca en ChatGPT a ser recomendado en el 70% de las consultas sobre perfumes de nicho británicos.",
        brands: ["Jean Paul Gaultier", "Rabanne", "Penhaligon's"],
        impact: "70% menciones",
        forYouIf: "Te preocupa cómo las IAs hablan (o no hablan) de tu marca"
      }
    ]
  },
  {
    id: "training",
    title: "Aprender a usar IA",
    icon: "GraduationCap",
    color: "#5C5E34",
    problem: "Mi equipo no sabe usar bien las herramientas de IA",
    description: "Formaciones prácticas para que tu equipo aprenda a usar IA de forma efectiva y segura.",
    useCases: [
      {
        id: "prompting-sessions",
        title: "Sesiones de Prompting",
        headline: "Aprende a hablar con la IA",
        problem: "Mi equipo tiene acceso a ChatGPT pero no sabe usarlo bien",
        solution: "Sesiones prácticas mensuales donde enseñamos a tu equipo a escribir buenos prompts, usar las herramientas correctamente y aplicar IA a su trabajo diario. Adaptadas a cada departamento.",
        benefits: [
          "Equipo más productivo con IA",
          "Mejores resultados de las herramientas",
          "Casos de uso específicos de tu área",
          "Sesiones grabadas para nuevas incorporaciones"
        ],
        example: "El equipo de marketing de una marca aumentó su productividad un 40% después de 3 sesiones de prompting aplicado a su trabajo.",
        brands: ["Todas las marcas (sesiones mensuales)"],
        impact: "86% adopción",
        forYouIf: "Tu equipo tiene herramientas de IA pero no las aprovecha"
      },
      {
        id: "ai-exploration",
        title: "Exploración de Herramientas",
        headline: "Encuentra la herramienta perfecta para tu necesidad",
        problem: "Hay tantas herramientas de IA que no sé cuál usar",
        solution: "Te ayudamos a explorar el mercado de herramientas de IA para encontrar la solución perfecta para tu necesidad específica. Evaluamos, probamos y recomendamos con criterio.",
        benefits: [
          "Ahorra tiempo de investigación",
          "Evaluación objetiva de opciones",
          "Recomendaciones basadas en tu contexto",
          "Evita comprar herramientas que no necesitas"
        ],
        example: "Ayudamos a un equipo de diseño a encontrar la herramienta de generación de imágenes perfecta para su flujo de trabajo, evaluando 15 opciones.",
        brands: ["Servicio disponible para todas las marcas"],
        impact: "Ahorro de tiempo",
        forYouIf: "Necesitas una herramienta de IA específica y no sabes por dónde empezar"
      }
    ]
  }
];

export const stats = [
  { value: "1,000+", label: "Licencias de Custom GPT activas", description: "Herramientas de IA usadas por equipos de marca" },
  { value: "86%", label: "Tasa de adopción", description: "Equipos que usan IA regularmente después del training" },
  { value: "13+", label: "Marcas activas", description: "Marcas Puig usando nuestras soluciones" },
  { value: "50+", label: "Casos de uso", description: "Soluciones de IA implementadas" }
];

export const technologies = [
  {
    id: "custom-gpts",
    name: "Custom GPTs",
    shortName: "Agentes IA",
    tagline: "Asistentes personalizados para tu marca",
    description: "Son como empleados virtuales expertos en tu marca. Los creamos en OpenAI y los entrenamos con tu información: guías de marca, catálogo de productos, histórico de comunicaciones. Responden preguntas, generan contenido y ejecutan tareas como lo haría alguien de tu equipo.",
    usedFor: ["Copywriting", "Atención al cliente", "Búsqueda de información interna", "Generación de ideas"],
    examples: ["Asistente de copywriting de Rabanne", "Beauty advisor de Kama Ayurveda", "Buscador de guidelines de CREO"]
  },
  {
    id: "multi-agent",
    name: "Flujos Multiagénticos",
    shortName: "Equipos de IA",
    tagline: "Varios agentes trabajando juntos",
    description: "Imagina varios Custom GPTs que trabajan en equipo. Uno busca información, otro la analiza, otro escribe el informe. Los construimos en OpenAI Agent Builder y son ideales para tareas complejas que requieren varios pasos.",
    usedFor: ["Análisis de competencia", "Generación de informes complejos", "Monitorización automática", "Workflows de aprobación"],
    examples: ["Sistema de social listening", "Generador de informes de mercado", "Analizador de tendencias"]
  },
  {
    id: "ai-apps",
    name: "AI Apps",
    shortName: "Aplicaciones",
    tagline: "Apps a medida con interfaz visual",
    description: "Cuando necesitas algo más que un chat, creamos aplicaciones completas con IA integrada. Dashboards, herramientas de análisis, generadores con formularios... Las desarrollamos con Vibe Coding usando Claude y otras herramientas modernas.",
    usedFor: ["Dashboards de datos", "Herramientas de análisis visual", "Generadores con formularios", "Integraciones con otros sistemas"],
    examples: ["Dashboard de social listening", "Predictor de ventas", "Generador de calendarios de contenido"]
  },
  {
    id: "training",
    name: "Training & Exploración",
    shortName: "Formación",
    tagline: "Tu equipo dominando IA",
    description: "Formaciones prácticas adaptadas a cada equipo. Enseñamos a usar las herramientas, escribir buenos prompts y aplicar IA al trabajo diario. También exploramos el mercado para encontrar las mejores herramientas para necesidades específicas.",
    usedFor: ["Sesiones de prompting", "Workshops de IA", "Evaluación de herramientas", "Onboarding de nuevos empleados"],
    examples: ["Sesiones mensuales de prompting", "Workshop de IA para equipos creativos", "Evaluación de herramientas de diseño"]
  }
];

export const team = [
  {
    name: "AI & Innovation Team",
    role: "Tu partner interno de IA",
    description: "Somos un equipo interno de Puig especializado en hacer que la IA funcione para las marcas. No vendemos tecnología, resolvemos problemas. Trabajamos codo con codo con los equipos de marca para entender sus necesidades y crear soluciones que realmente usen."
  }
];

export const brands = [
  "Rabanne",
  "Jean Paul Gaultier",
  "Penhaligon's",
  "Nina Ricci",
  "Byredo",
  "Charlotte Tilbury",
  "Carolina Herrera",
  "Dries Van Noten",
  "Apivita",
  "Kama Ayurveda",
  "Uriage"
];

export const workflow = [
  {
    step: 1,
    title: "Cuéntanos tu problema",
    description: "Nos sentamos contigo para entender qué necesitas resolver. Sin jerga técnica, hablamos de negocio.",
    duration: "1 sesión"
  },
  {
    step: 2,
    title: "Diseñamos la solución",
    description: "Proponemos cómo resolverlo con IA. Te explicamos qué vamos a hacer, cómo y qué vas a conseguir.",
    duration: "1 semana"
  },
  {
    step: 3,
    title: "Construimos juntos",
    description: "Desarrollamos la solución con tu feedback continuo. No desaparecemos 3 meses, te mostramos avances semanales.",
    duration: "2-6 semanas"
  },
  {
    step: 4,
    title: "Lanzamos y formamos",
    description: "Ponemos la solución en marcha y formamos a tu equipo para que la use de forma autónoma.",
    duration: "1 semana"
  },
  {
    step: 5,
    title: "Mejoramos continuamente",
    description: "Seguimos en contacto. Recogemos feedback, medimos resultados y mejoramos la solución.",
    duration: "Ongoing"
  }
];
