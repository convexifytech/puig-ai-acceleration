// Categorías de problemas - Lenguaje accesible para personas de marca
export const categories = [
  {
    id: "content-creative",
    title: "Contenido y Creatividad",
    icon: "Pencil",
    color: "#C9A84E",
    problem: "Mi equipo dedica demasiado tiempo a crear contenido",
    description: "Soluciones para acelerar la creación de contenido manteniendo la esencia de tu marca",
    useCases: [
      {
        id: "copywriting-assistant",
        title: "Asistente de Copywriting",
        headline: "Crea textos perfectos para tu marca en segundos, no en horas",
        problem: "Crear copy que suene a tu marca lleva demasiado tiempo",
        solution: "Un asistente inteligente que conoce tu tono de voz, tus productos y tu forma de comunicar. Le describes lo que necesitas y te genera opciones listas para usar.",
        benefits: [
          "Textos alineados con tu tono de voz automáticamente",
          "Genera múltiples opciones para elegir la mejor",
          "Aprende de tus correcciones y mejora con el tiempo",
          "Disponible 24/7 para todo tu equipo"
        ],
        example: "Carolina Herrera lo usa para crear descripciones de producto en 5 idiomas. Lo que antes tardaba 2 días ahora se hace en 2 horas.",
        brands: ["Rabanne", "Apivita", "Kama Ayurveda", "Uriage", "Jean Paul Gaultier", "Carolina Herrera", "Dries Van Noten", "Nina Ricci", "Penhaligon's", "Byredo"],
        impact: "80% más rápido",
        forYouIf: "Tu equipo dedica horas a escribir posts, descripciones o emails que podrían generarse más rápido",
        technologies: ["Custom GPT", "Base de Conocimiento"]
      },
      {
        id: "brand-voice-agent",
        title: "Agente de Tono de Voz",
        headline: "Tu marca siempre suena igual, sin importar quién escriba",
        problem: "Cada persona del equipo escribe diferente y la marca suena inconsistente",
        solution: "Un agente entrenado específicamente con tu tono de voz, mensajes clave y guidelines de comunicación. Revisa y adapta cualquier texto para que suene 100% a tu marca.",
        benefits: [
          "Consistencia total en todos los mercados",
          "Nuevos miembros del equipo escriben bien desde el día 1",
          "Reduce ciclos de revisión y aprobación",
          "Protege la integridad de tu marca"
        ],
        example: "CREO usa este agente para revisar todas las comunicaciones antes de publicar. Han eliminado el 90% de las correcciones de tono.",
        brands: ["Todas las marcas Prestige", "CREO"],
        impact: "100% consistencia",
        forYouIf: "Tienes equipos en diferentes países o agencias externas que necesitan escribir como tu marca",
        technologies: ["Custom GPT", "Brand Guidelines"]
      },
      {
        id: "social-media-gpt",
        title: "GPT de Redes Sociales",
        headline: "Un mes de contenido social en una tarde",
        problem: "Crear contenido para redes sociales es manual y consume mucho tiempo",
        solution: "Genera contenido específico para cada plataforma: captions, hashtags, calendarios editoriales. Todo alineado con tu estrategia de marca.",
        benefits: [
          "Contenido adaptado a cada red (Instagram, TikTok, LinkedIn...)",
          "Sugiere los mejores horarios y hashtags",
          "Mantiene coherencia con campañas activas",
          "Genera variaciones para A/B testing"
        ],
        example: "Rabanne genera su calendario social mensual en 4 horas en lugar de 4 días.",
        brands: ["Rabanne", "Apivita", "Kama Ayurveda", "Uriage"],
        impact: "5x más contenido",
        forYouIf: "Tu equipo de social media está desbordado y no llega a crear todo el contenido que necesita",
        technologies: ["Custom GPT", "Optimización Multi-plataforma"]
      },
      {
        id: "image-generation",
        title: "Generación de Imágenes Gobernada",
        headline: "Creatividad visual con control total de marca",
        problem: "Las herramientas de generación de imágenes no están controladas y suponen riesgo",
        solution: "Generación de imágenes segura dentro del entorno Enterprise, con controles de marca y protección de integridad creativa.",
        benefits: [
          "Imágenes alineadas con tu estética de marca",
          "Cumple con políticas de compliance",
          "Sin riesgo de uso no autorizado",
          "Historial y trazabilidad completa"
        ],
        example: "1,000 licencias desplegadas para equipos creativos de todas las marcas Puig.",
        brands: ["Disponible para todas las marcas"],
        impact: "1,000 licencias",
        forYouIf: "Quieres explorar generación de imágenes con IA pero te preocupa el control y la gobernanza",
        technologies: ["IA de Imagen", "Gobernanza Enterprise"]
      }
    ]
  },
  {
    id: "customer-experience",
    title: "Experiencia de Cliente",
    icon: "Heart",
    color: "#5C5E34",
    problem: "Quiero que mis clientes tengan una experiencia más personalizada",
    description: "Soluciones para conectar mejor con tus clientes y ofrecerles atención experta",
    useCases: [
      {
        id: "gifting-engine",
        title: "Motor de Recomendación de Regalos",
        headline: "Que encontrar el regalo perfecto sea tan fácil como responder 3 preguntas",
        problem: "Los clientes no saben qué regalar y abandonan la compra",
        solution: "Un concierge digital que guía al cliente con preguntas simples: ¿Para quién es? ¿Qué ocasión? ¿Qué le gusta? Y recomienda el producto perfecto.",
        benefits: [
          "Aumenta conversión en momentos de regalo",
          "Reduce abandonos por indecisión",
          "Experiencia premium y personalizada",
          "Funciona en web y móvil"
        ],
        example: "Penhaligon's lo usa en Navidad y San Valentín. La conversión en la sección de regalos subió un 35%.",
        brands: ["Penhaligon's"],
        impact: "+35% conversión",
        forYouIf: "Los regalos son importantes para tu marca y quieres que la experiencia de elegir sea memorable",
        technologies: ["Agentes IA", "Apps Inteligentes"]
      },
      {
        id: "beauty-advisor",
        title: "Asesor de Belleza Digital",
        headline: "Un experto de tu marca disponible 24 horas, los 365 días",
        problem: "Necesitas dar consejo experto a clientes pero no puedes estar siempre disponible",
        solution: "Un asesor virtual entrenado con todo tu catálogo, ingredientes y expertise de belleza. Responde preguntas, recomienda productos y educa al cliente.",
        benefits: [
          "Disponible cuando el cliente lo necesita",
          "Conoce todos tus productos al detalle",
          "Mantiene el nivel de expertise de tus mejores asesores",
          "Escala sin aumentar costes"
        ],
        example: "Kama Ayurveda tiene un experto ayurvédico virtual que responde sobre ingredientes y rutinas personalizadas.",
        brands: ["Rabanne", "Kama Ayurveda"],
        impact: "24/7 disponible",
        forYouIf: "Tus clientes tienen preguntas sobre productos que requieren conocimiento experto",
        technologies: ["Agentes IA", "Base de Conocimiento de Producto"]
      },
      {
        id: "in-store-expert",
        title: "Experto para Tienda",
        headline: "Tus asesores de tienda con superpoderes de conocimiento",
        problem: "Los asesores de tienda no pueden saber todo sobre todos los productos",
        solution: "Una app móvil que da a tus asesores acceso instantáneo a todo el conocimiento de producto, recomendaciones y guías de venta.",
        benefits: [
          "Respuestas inmediatas a cualquier pregunta del cliente",
          "Formación continua integrada",
          "Aumenta confianza del equipo",
          "Mejora la experiencia en tienda"
        ],
        example: "Kama Ayurveda lo usa para que sus asesores dominen los 200+ ingredientes ayurvédicos.",
        brands: ["Kama Ayurveda"],
        impact: "Equipos empoderados",
        forYouIf: "Tienes tiendas físicas y quieres que tus asesores den el mejor servicio posible",
        technologies: ["Agentes IA", "Apps Móviles"]
      }
    ]
  },
  {
    id: "market-intelligence",
    title: "Inteligencia de Mercado",
    icon: "TrendingUp",
    color: "#5C5E34",
    problem: "No tenemos visibilidad de lo que pasa en el mercado",
    description: "Soluciones para entender qué dicen de ti, qué hace la competencia y hacia dónde va el mercado",
    useCases: [
      {
        id: "social-listening",
        title: "Dashboard de Escucha Social",
        headline: "Sabe qué dicen de tu marca en tiempo real, no en informes mensuales",
        problem: "No sabemos qué dice la gente de nosotros en redes hasta que es tarde",
        solution: "Un dashboard que integra Meltwater y analiza en tiempo real: sentimiento, tendencias, menciones y comparativa con competidores.",
        benefits: [
          "Alertas inmediatas de crisis o virales",
          "Entiende el sentimiento hacia tu marca",
          "Detecta tendencias antes que otros",
          "Compara tu share of voice vs competencia"
        ],
        example: "Charlotte Tilbury detectó una tendencia viral de un producto en TikTok y pudo reaccionar en 24 horas.",
        brands: ["Charlotte Tilbury", "Rabanne", "Jean Paul Gaultier", "Carolina Herrera", "Nina Ricci", "Kama Ayurveda", "Byredo", "Penhaligon's", "Dries Van Noten"],
        impact: "Monitoreo en tiempo real",
        forYouIf: "Quieres saber qué dice la gente de tu marca sin esperar a informes mensuales",
        technologies: ["Integración Meltwater", "Apps Inteligentes"]
      },
      {
        id: "consumer-intelligence",
        title: "Plataforma de Consumer Intelligence",
        headline: "Detecta las tendencias antes que tu competencia",
        problem: "Los informes de tendencias llegan tarde para actuar",
        solution: "Una plataforma que agrega tendencias de mercado, insights de consumidor e inteligencia competitiva con alertas automáticas.",
        benefits: [
          "Ve tendencias emergentes antes que otros",
          "Insights de consumidor agregados",
          "Alertas automáticas de cambios relevantes",
          "Datos para tomar decisiones rápidas"
        ],
        example: "Las marcas Prestige usan la plataforma para detectar macro-tendencias y ajustar estrategia de producto.",
        brands: ["Portfolio Marcas Prestige"],
        impact: "Respuesta más rápida",
        forYouIf: "Necesitas entender hacia dónde va el mercado para tomar decisiones estratégicas",
        technologies: ["Sistemas Multi-Agente", "Integración de Datos"]
      }
    ]
  },
  {
    id: "sales-analytics",
    title: "Ventas y Analítica",
    icon: "BarChart3",
    color: "#C9A84E",
    problem: "No tenemos datos accionables para tomar decisiones",
    description: "Soluciones para entender tus ventas, predecir demanda y tomar mejores decisiones",
    useCases: [
      {
        id: "sales-forecasting",
        title: "Herramienta de Forecasting",
        headline: "Predice tus ventas con datos, no con intuición",
        problem: "El análisis de sell-through es manual y lento",
        solution: "Forecasting de ventas que combina datos históricos, tendencias de mercado y factores externos para predecir demanda con precisión.",
        benefits: [
          "Predicciones más precisas",
          "Reduce sobre-stock y roturas",
          "Automatiza informes manuales",
          "Visualizaciones claras para decisiones"
        ],
        example: "Carolina Herrera redujo su error de forecasting en un 40% el primer trimestre.",
        brands: ["Carolina Herrera", "Dries Van Noten"],
        impact: "Forecasting preciso",
        forYouIf: "Pasas horas haciendo análisis de ventas en Excel que podrían automatizarse",
        technologies: ["Apps Inteligentes", "Analítica Predictiva"]
      },
      {
        id: "wholesale-reporting",
        title: "Reporting Wholesale con IA",
        headline: "Todos tus datos de wholesale en un solo lugar",
        problem: "No tenemos visibilidad real del rendimiento wholesale",
        solution: "Sistema de reporting automatizado que integra datos de ELM y retailers para tener visibilidad unificada del canal wholesale.",
        benefits: [
          "Vista consolidada de todos los canales",
          "Alertas de variaciones significativas",
          "Informes automáticos semanales",
          "Compara rendimiento por retailer"
        ],
        example: "Dries Van Noten tiene visibilidad completa de su red wholesale por primera vez.",
        brands: ["Dries Van Noten"],
        impact: "Visibilidad completa",
        forYouIf: "Tienes datos de wholesale dispersos y no puedes ver el panorama completo",
        technologies: ["Integración de Datos", "Apps Inteligentes"]
      }
    ]
  },
  {
    id: "search-visibility",
    title: "Búsqueda y Visibilidad",
    icon: "Search",
    color: "#C9A84E",
    problem: "No aparecemos donde deberíamos en las búsquedas",
    description: "Soluciones para que te encuentren en Google y en las nuevas búsquedas con IA",
    useCases: [
      {
        id: "seo-services",
        title: "Estrategia SEO y Contenido",
        headline: "Que Google te encuentre cuando te buscan",
        problem: "No estamos optimizados para buscadores",
        solution: "Estrategia SEO completa: investigación de keywords, optimización de contenido y SEO técnico integrado con creación de contenido con IA.",
        benefits: [
          "Más tráfico orgánico cualificado",
          "Contenido optimizado para búsquedas",
          "Mejor posicionamiento vs competencia",
          "Informes de progreso mensuales"
        ],
        example: "Rabanne mejoró su posicionamiento en keywords clave de fragancias en 6 meses.",
        brands: ["Rabanne", "Jean Paul Gaultier", "Carolina Herrera"],
        impact: "Mejor posicionamiento",
        forYouIf: "Sabes que podrías tener más tráfico orgánico pero no sabes por dónde empezar",
        technologies: ["Herramientas SEO", "Contenido con IA"]
      },
      {
        id: "geo-optimization",
        title: "GEO (Optimización para IA)",
        headline: "Que ChatGPT y Perplexity hablen bien de tu marca",
        problem: "No aparecemos en ChatGPT, Perplexity ni en búsquedas con IA",
        solution: "La nueva frontera de la visibilidad: optimización para que tu marca aparezca correctamente en buscadores con IA y asistentes conversacionales.",
        benefits: [
          "Presencia en el nuevo paradigma de búsqueda",
          "Control de cómo la IA habla de tu marca",
          "Ventaja competitiva temprana",
          "Monitoreo de menciones en IA"
        ],
        example: "Jean Paul Gaultier ya aparece correctamente cuando preguntas a ChatGPT por fragancias icónicas.",
        brands: ["Jean Paul Gaultier", "Rabanne", "Penhaligon's"],
        impact: "Presencia en búsquedas IA",
        forYouIf: "Quieres estar preparado para el futuro de las búsquedas donde la IA responde directamente",
        technologies: ["Estrategia GEO", "Optimización de Contenido"]
      }
    ]
  },
  {
    id: "enablement",
    title: "Formación y Capacitación",
    icon: "GraduationCap",
    color: "#5C5E34",
    problem: "Mi equipo no sabe usar las herramientas de IA efectivamente",
    description: "Programas para que tu equipo domine la IA y descubra nuevas oportunidades",
    useCases: [
      {
        id: "prompting-sessions",
        title: "Sesiones de Formación",
        headline: "Que tu equipo use la IA como un experto, no como un novato",
        problem: "Los equipos no están adoptando las herramientas de IA que les damos",
        solution: "Sesiones prácticas de formación donde los equipos aprenden a usar los Custom GPTs con ejercicios reales de su día a día.",
        benefits: [
          "Equipos que realmente usan las herramientas",
          "Mejora la calidad de los resultados",
          "Reduce frustración y abandono",
          "Crea evangelistas internos"
        ],
        example: "Después de las formaciones, el uso activo de Custom GPTs subió del 30% al 86%.",
        brands: ["Todas las marcas (sesiones mensuales)"],
        impact: "86% adopción",
        forYouIf: "Has dado herramientas de IA a tu equipo pero no las usan o no las usan bien",
        technologies: ["Programas de Formación", "Best Practices"]
      },
      {
        id: "use-case-workshops",
        title: "Workshops de Descubrimiento",
        headline: "Descubre qué puede hacer la IA por tu marca específicamente",
        problem: "No sabemos qué casos de uso de IA aplican a nosotros",
        solution: "Workshops colaborativos para identificar las oportunidades de IA de alto impacto específicas para los retos y procesos de tu marca.",
        benefits: [
          "Roadmap de IA personalizado",
          "Priorización por impacto real",
          "Equipo alineado en la estrategia",
          "Quick wins identificados"
        ],
        example: "El workshop con Fashion Brands identificó 12 casos de uso prioritarios para 2025.",
        brands: ["Fashion Brands (workshop Marzo)"],
        impact: "Roadmap claro",
        forYouIf: "Sabes que la IA puede ayudarte pero no sabes exactamente cómo empezar",
        technologies: ["Consultoría", "Estrategia"]
      },
      {
        id: "tool-exploration",
        title: "Exploración de Herramientas",
        headline: "Te ayudamos a encontrar la herramienta perfecta que ya existe",
        problem: "Hay miles de herramientas de IA y no sabemos cuál usar",
        solution: "Analizamos tu necesidad específica y te recomendamos (o descartamos) herramientas existentes en el mercado que podrían resolver tu problema.",
        benefits: [
          "Ahorra tiempo de investigación",
          "Evita comprar herramientas innecesarias",
          "Recomendaciones basadas en tu caso real",
          "Pruebas de concepto rápidas"
        ],
        example: "Ayudamos a Apivita a evaluar 15 herramientas de IA para redes sociales y elegir la correcta.",
        brands: ["Disponible para todas las marcas"],
        impact: "Decisiones informadas",
        forYouIf: "Tienes una necesidad específica y crees que alguna herramienta de IA podría resolverla",
        technologies: ["Análisis de Mercado", "Consultoría"]
      }
    ]
  }
];

// Estadísticas del equipo
export const stats = [
  { value: "1,000+", label: "Licencias de Custom GPTs" },
  { value: "86%", label: "Tasa de adopción" },
  { value: "13+", label: "Marcas activas" },
  { value: "50+", label: "Casos de uso desplegados" }
];

// Tecnologías explicadas de forma accesible
export const technologies = [
  {
    id: "custom-gpt",
    name: "Custom GPTs",
    shortName: "Custom GPT",
    tagline: "ChatGPT entrenado para tu marca",
    description: "Son como tener un ChatGPT que solo sabe de tu marca. Lo entrenamos con tus guidelines, productos y tono de voz para que las respuestas sean siempre relevantes y alineadas con tu marca.",
    icon: "MessageSquare",
    color: "#C9A84E",
    usedFor: [
      "Crear contenido alineado con tu marca",
      "Responder preguntas sobre productos",
      "Generar ideas para campañas",
      "Adaptar textos a tu tono de voz"
    ],
    examples: ["Asistente de Copywriting", "GPT de Redes Sociales", "Agente de Tono de Voz"]
  },
  {
    id: "multi-agent",
    name: "Flujos Multi-Agente",
    shortName: "Multi-Agente",
    tagline: "Varios expertos de IA trabajando juntos",
    description: "Imagina varios expertos que colaboran: uno busca información, otro analiza, otro escribe. Los flujos multi-agente coordinan múltiples IAs especializadas para resolver problemas complejos que un solo agente no podría.",
    icon: "Users",
    color: "#5C5E34",
    usedFor: [
      "Análisis de mercado automatizado",
      "Procesos que requieren múltiples pasos",
      "Tareas que combinan datos de varias fuentes",
      "Workflows complejos automatizados"
    ],
    examples: ["Plataforma de Consumer Intelligence", "Análisis Competitivo Automatizado"]
  },
  {
    id: "ai-apps",
    name: "AI Apps",
    shortName: "Apps",
    tagline: "Aplicaciones hechas a medida con IA",
    description: "Aplicaciones con interfaz visual diseñadas específicamente para tu necesidad. No son chatbots: son herramientas completas con botones, formularios y visualizaciones que hacen exactamente lo que necesitas.",
    icon: "Layout",
    color: "#C9A84E",
    usedFor: [
      "Dashboards interactivos",
      "Herramientas de análisis visual",
      "Aplicaciones para equipos específicos",
      "Interfaces personalizadas para procesos"
    ],
    examples: ["Dashboard de Escucha Social", "Herramienta de Forecasting", "Motor de Recomendación"]
  },
  {
    id: "training",
    name: "Formación y Exploración",
    shortName: "Formación",
    tagline: "Tu equipo dominando la IA",
    description: "Programas de formación práctica para que tu equipo use la IA efectivamente. También te ayudamos a explorar qué herramientas del mercado pueden resolver necesidades específicas.",
    icon: "GraduationCap",
    color: "#5C5E34",
    usedFor: [
      "Formación en uso de Custom GPTs",
      "Workshops de descubrimiento de casos de uso",
      "Evaluación de herramientas del mercado",
      "Best practices y gobernanza"
    ],
    examples: ["Sesiones de Prompting", "Workshops de Descubrimiento", "Análisis de Herramientas"]
  }
];

// Equipo
export const team = [
  {
    id: "javier",
    name: "Javier García",
    role: "AI Lead",
    description: "Lidera la estrategia de IA y el desarrollo de soluciones para las marcas Puig.",
    focus: "Estrategia, Custom GPTs, AI Apps"
  },
  {
    id: "team-member-2",
    name: "Nombre del Miembro",
    role: "AI Developer",
    description: "Desarrolla las aplicaciones y flujos de IA.",
    focus: "Desarrollo, Integraciones"
  },
  {
    id: "team-member-3",
    name: "Nombre del Miembro",
    role: "AI Specialist",
    description: "Especialista en formación y adopción de herramientas.",
    focus: "Formación, Adopción"
  }
];

// Workflow de cómo trabajamos
export const workflow = [
  {
    step: 1,
    title: "Cuéntanos tu problema",
    shortTitle: "Descubrimiento",
    description: "Empezamos escuchando. ¿Qué te quita el sueño? ¿Qué proceso te gustaría mejorar? No necesitas saber nada de tecnología, solo explicarnos tu día a día.",
    duration: "1-2 días",
    outcome: "Entendimiento claro del reto"
  },
  {
    step: 2,
    title: "Diseñamos la solución",
    shortTitle: "Diseño",
    description: "Analizamos tu problema y proponemos la mejor solución. Te explicamos qué haremos, cómo funcionará y qué resultados esperar. Sin jerga técnica.",
    duration: "3-5 días",
    outcome: "Propuesta clara y acordada"
  },
  {
    step: 3,
    title: "Construimos juntos",
    shortTitle: "Desarrollo",
    description: "Desarrollamos la solución con tu feedback continuo. Te mostramos avances semanales para asegurarnos de que va por el camino correcto.",
    duration: "2-4 semanas",
    outcome: "Solución lista para usar"
  },
  {
    step: 4,
    title: "Lanzamos y formamos",
    shortTitle: "Lanzamiento",
    description: "Desplegamos la solución y formamos a tu equipo para que la usen con confianza. No te dejamos solo con una herramienta nueva.",
    duration: "1 semana",
    outcome: "Equipo usando la solución"
  },
  {
    step: 5,
    title: "Mejoramos continuamente",
    shortTitle: "Evolución",
    description: "Seguimos en contacto. Recogemos feedback, medimos resultados y mejoramos la solución. La IA aprende y mejora con el tiempo.",
    duration: "Continuo",
    outcome: "Mejora constante"
  }
];

// Marcas que trabajan con nosotros
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