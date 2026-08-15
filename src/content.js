// ---------------------------------------------------------------------------
// Contenido bilingüe del sitio. Editar aquí, no en los componentes.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'José Francisco Urdaneta',
  initials: 'JU',
  brand: 'JU Technologies',
  location: 'Barranquilla, Colombia',
  email: 'jfurdaneta@gmail.com',
  phone: '+57 312 750 7463',
  whatsapp: '573127507463',
  linkedin: 'https://www.linkedin.com/in/jos%C3%A9-francisco-urdaneta-98914095/',
  linkedinHandle: '/josé-francisco-urdaneta',
  github: 'https://github.com/jfurdaneta',
  site: 'https://jutechnologies.com',
}

// Términos técnicos que cambian entre idiomas. Los que no aparecen aquí
// (React, FastAPI, Firestore, RAG...) son iguales en ambos y se dejan tal cual.
const TERM_EN = {
  'IA agéntica': 'Agentic AI',
  'Orquestación multi-agente': 'Multi-agent orchestration',
  'Drools (motor de reglas)': 'Drools (rules engine)',
  'Drools': 'Drools',
  'Agentes de IA': 'AI agents',
  'Microservicios': 'Microservices',
  'Analítica de datos': 'Data analytics',
  'Analitica de datos': 'Data analytics',
  'Android nativo': 'Native Android',
  'iOS nativo': 'Native iOS',
  'Crédito digital': 'Digital lending',
  'Originación': 'Origination',
  'Motores de riesgo': 'Risk engines',
  'Centrales de crédito': 'Credit bureaus',
  'Onboarding digital': 'Digital onboarding',
  'Biometría': 'Biometrics',
  'Firma electrónica': 'E-signature',
  'Operaciones tecnológicas': 'Technology operations',
  'Equipos multidisciplinarios': 'Cross-functional teams',
  'Metodologías ágiles': 'Agile methods',
  'Gestión de SLA': 'SLA management',
  'Delivery a producción': 'Production delivery',
  'Negociación enterprise': 'Enterprise negotiation',
  'Producto': 'Product',
  'Rendimiento web': 'Web performance',
  'Diseño de conversión': 'Conversion design',
  'Data lake': 'Data lake',
  // RAG e ingeniería del conocimiento
  'Búsqueda vectorial (HNSW)': 'Vector search (HNSW)',
  'Similitud coseno': 'Cosine similarity',
  'Chunking estructural': 'Structural chunking',
  'Ontologías y taxonomías': 'Ontologies & taxonomies',
  'Evaluación de recuperación (Precision@k, MRR)': 'Retrieval evaluation (Precision@k, MRR)',
  'Grounding y validación de citas': 'Grounding & citation validation',
  'Ingeniería del conocimiento': 'Knowledge engineering',
  // Datos y analítica
  'Lago de datos': 'Data lake',
  'Modelado de datos': 'Data modelling',
  'Analítica descriptiva': 'Descriptive analytics',
  'KPIs operativos': 'Operational KPIs',
  // Backend / móvil / herramientas
  'Java (Android)': 'Java (Android)',
  'Manejo de proyectos': 'Project management',
  'Core bancario': 'Core banking',
  'Banca móvil': 'Mobile banking',
  'Prompt engineering': 'Prompt engineering',
  // SEO
  'SEO técnico': 'Technical SEO',
  'SSR / indexabilidad': 'SSR / indexability',
}

export const term = (t, lang) => (lang === 'en' ? (TERM_EN[t] ?? t) : t)

const stack = [
  {
    id: 'ai',
    es: 'IA y Sistemas Inteligentes',
    en: 'AI & Intelligent Systems',
    items: [
      'IA agéntica', 'Orquestación multi-agente', 'RAG', 'SLM',
      'Gemini 2.5 Flash', 'Vertex AI', 'OpenAI', 'DeepSeek',
      'Drools (motor de reglas)', 'Fine-tuning', 'Prompt engineering',
    ],
  },
  {
    id: 'rag',
    es: 'RAG e Ingeniería del Conocimiento',
    en: 'RAG & Knowledge Engineering',
    items: [
      'ChromaDB', 'Búsqueda vectorial (HNSW)', 'Similitud coseno',
      'text-embedding-004', 'LangChain text splitters', 'Chunking estructural',
      'Ontologías y taxonomías', 'Evaluación de recuperación (Precision@k, MRR)',
      'Grounding y validación de citas',
    ],
  },
  {
    id: 'cloud',
    es: 'Cloud y DevOps',
    en: 'Cloud & DevOps',
    items: [
      'Google Cloud', 'Cloud Run', 'Firebase', 'Firestore', 'Firebase Auth',
      'Firebase Hosting', 'AWS', 'Supabase', 'Railway', 'Docker',
      'GitHub Actions', 'Nixpacks',
    ],
  },
  {
    id: 'backend',
    es: 'Backend',
    en: 'Backend',
    items: [
      'Python', 'FastAPI', 'Uvicorn', 'Pydantic', 'Java',
      '.NET / C#', 'Node.js', 'Microservicios', 'REST API', 'Web Services', 'BPM',
    ],
  },
  {
    id: 'db',
    es: 'Bases de Datos',
    en: 'Databases',
    items: ['SQL Server', 'PostgreSQL', 'Firestore', 'Supabase', 'ChromaDB', 'SQL'],
  },
  {
    id: 'data',
    es: 'Datos y Analítica',
    en: 'Data & Analytics',
    items: [
      'Lago de datos', 'Power BI', 'Modelado de datos', 'ETL',
      'Analítica descriptiva', 'KPIs operativos', 'Motores de riesgo', 'Pandas',
    ],
  },
  {
    id: 'frontend',
    es: 'Frontend',
    en: 'Frontend',
    items: [
      'React', 'Vite', 'Angular', 'JavaScript', 'Tailwind CSS',
      'HTML5', 'CSS3', 'PWA', 'Recharts', 'Zustand', 'TanStack Query',
    ],
  },
  {
    id: 'mobile',
    es: 'Móvil Nativo',
    en: 'Native Mobile',
    items: [
      'Android Studio', 'Xcode', 'Android nativo', 'iOS nativo',
      'Java (Android)', 'Play Store', 'App Store',
    ],
  },
  {
    id: 'tools',
    es: 'Herramientas',
    en: 'Tools',
    items: [
      'VS Code', 'Visual Studio', 'Git', 'GitHub', 'Postman',
      'npm', 'Metodologías ágiles',
    ],
  },
  {
    id: 'domain',
    es: 'Dominio Fintech',
    en: 'Fintech Domain',
    items: [
      'Crédito digital', 'Originación', 'Motores de riesgo', 'Centrales de crédito',
      'Onboarding digital', 'Biometría', 'OCR', 'Firma electrónica',
      'Core bancario', 'Banca móvil',
    ],
  },
  {
    id: 'lead',
    es: 'Liderazgo y Delivery',
    en: 'Leadership & Delivery',
    items: [
      'Operaciones tecnológicas', 'Equipos multidisciplinarios',
      'Gestión de SLA', 'Delivery a producción', 'Negociación enterprise',
      'Manejo de proyectos',
    ],
  },
]

const projects = [
  {
    id: 'pulseai',
    legend: { es: ['Orquestador', 'Agentes especialistas', 'Reglas de negocio', 'Canales'], en: ['Orchestrator', 'Specialist agents', 'Business rules', 'Channels'] },
    visual: 'pulse',
    tag: { es: 'Producto empresarial', en: 'Enterprise product' },
    org: '4Told Fintech',
    year: '2024 - 2026',
    name: 'PulseAI',
    role: { es: 'Dirección de producto y arquitectura', en: 'Product direction & architecture' },
    es: 'Plataforma de IA agéntica para finanzas y seguros regulados. Arquitectura multi-agente (recepcionista, orquestador y agentes especialistas) con razonamiento por reglas de negocio, RAG y modelos pequeños. Integra varios motores LLM bajo una capa única de orquestación y opera de forma omnicanal sobre CRM, core bancario, banca móvil, web y WhatsApp, con gobernanza de reglas de contacto.',
    en: 'Agentic AI platform for regulated finance and insurance. Multi-agent architecture (receptionist, orchestrator and specialist agents) combining business-rule reasoning, RAG and small language models. Multiple LLM engines sit behind a single orchestration layer, and the agents operate omnichannel across CRM, core banking, mobile banking, web and WhatsApp under contact-rule governance.',
    tech: ['IA agéntica', 'RAG', 'SLM', 'Drools', 'OpenAI', 'Gemini', 'DeepSeek'],
    metrics: [
      { value: '3', es: 'motores LLM orquestados', en: 'LLM engines orchestrated' },
      { value: '5+', es: 'canales integrados', en: 'integrated channels' },
    ],
  },
  {
    id: 'onboarding',
    legend: { es: ['Documento', 'Biometría', 'Validación', 'Firma electrónica'], en: ['Document', 'Biometrics', 'Validation', 'E-signature'] },
    visual: 'scan',
    tag: { es: 'Producto empresarial', en: 'Enterprise product' },
    org: '4Told Fintech',
    year: '2020 - 2026',
    name: { es: 'Onboarding Digital', en: 'Digital Onboarding' },
    role: { es: 'Dirección de operaciones y delivery', en: 'Operations & delivery direction' },
    es: 'Identidad digital y registro anti-suplantación para originación de crédito. Automatización end-to-end del alta de clientes: validación biométrica, OCR de documentos, validación documental y firma electrónica, conectado a motores de riesgo y centrales de crédito. Implementado en producción para retail y entidades financieras en Colombia y Perú.',
    en: 'Digital identity and anti-impersonation enrolment for credit origination. End-to-end automation of customer onboarding: biometric validation, document OCR, documentary verification and electronic signature, wired into risk engines and credit bureaus. Deployed to production for retail and financial institutions in Colombia and Peru.',
    tech: ['Biometría', 'OCR', 'Firma electrónica', 'Motores de riesgo', 'Java', 'Angular'],
    metrics: [
      { value: '+82%', es: 'operaciones de crédito', en: 'credit operations' },
      { value: '-83%', es: 'tickets de soporte', en: 'support tickets' },
      { value: '10', es: 'clientes en producción', en: 'clients in production' },
    ],
  },
  {
    id: 'orienta',
    legend: { es: ['Lago de datos', 'Modelado', 'Indicadores'], en: ['Data lake', 'Modelling', 'Indicators'] },
    visual: 'lake',
    tag: { es: 'Consultoría', en: 'Consulting' },
    org: 'Vedana Solutions',
    year: '2022 - 2025',
    name: 'Orienta & Loanware',
    role: { es: 'Consultor de producto y datos', en: 'Product & data consultant' },
    es: 'Analítica con IA sobre lago de datos para convertir la información operativa de las empresas en palanca de crecimiento y cierre de brechas. Ciclo completo de producto: conceptualización, arquitectura, kickoff de desarrollo, UAT, evaluación de mercado, análisis de riesgo, posicionamiento y registro de marca.',
    en: 'AI analytics over a data lake, turning companies\' operational data into a growth lever and a way to close performance gaps. Full product cycle: concept, architecture, development kickoff, UAT, market assessment, risk analysis, positioning and trademark registration.',
    tech: ['Data lake', 'Analítica de datos', 'Python', 'Producto'],
    metrics: [],
  },
  {
    id: 'zonabarrica',
    legend: { es: ['Cata registrada', 'Perfil sensorial', 'Sommelier IA', 'Recomendación'], en: ['Tasting logged', 'Sensory profile', 'AI Sommelier', 'Recommendation'] },
    visual: 'radar',
    tag: { es: 'Cliente · IA', en: 'Client · AI' },
    org: { es: 'Plataforma en producción', en: 'Platform in production' },
    year: '2025 - 2026',
    name: 'Zona Barrica',
    role: { es: 'Arquitectura, full-stack, IA e infraestructura', en: 'Architecture, full-stack, AI & infrastructure' },
    url: 'https://zonabarrica-1541.web.app/',
    featured: true,
    es: 'Plataforma cloud-native de colección y cata de whisky, con el **Sommelier IA** como núcleo del producto. El motor no responde desde conocimiento genérico: construye el ADN del paladar a partir del perfil sensorial de 14 atributos que la propia bitácora de catas calcula, y con Gemini 2.5 Flash sobre Vertex AI genera recomendaciones personalizadas, un Índice de Descubrimiento y chat conversacional. La puntuación de cada cata se normaliza a una escala única, porque conviven tres modos distintos de calificar, para que el modelo reciba una señal coherente. Detrás, cuatro microservicios FastAPI en Cloud Run con rate-limit configurable sobre la generación de IA, para acotar el costo por usuario.',
    en: 'Cloud-native whisky collection and tasting platform, with the **AI Sommelier** as the core of the product. The engine doesn\'t answer from generic knowledge: it builds a palate DNA from the 14-attribute sensory profile the tasting log itself computes, then uses Gemini 2.5 Flash on Vertex AI to generate personalised recommendations, a Discovery Index and conversational chat. Every tasting score is normalised to a single scale, since three different scoring modes coexist, so the model receives a coherent signal. Behind it, four FastAPI microservices on Cloud Run with a configurable rate limit on AI generation to bound per-user cost.',
    tech: ['Gemini 2.5 Flash', 'Vertex AI', 'React 18', 'Vite', 'FastAPI', 'Python 3.11', 'Cloud Run', 'Firestore', 'Firebase Auth'],
    metrics: [
      { value: '14', es: 'atributos de perfil sensorial', en: 'sensory profile attributes' },
      { value: '4', es: 'microservicios en producción', en: 'microservices in production' },
      { value: '3', es: 'modos de cata normalizados', en: 'normalised tasting modes' },
      { value: '87', es: 'whiskies en catálogo', en: 'whiskies in catalogue' },
    ],
  },
  {
    id: 'runcoach',
    legend: { es: ['Consulta', 'Orquestador', 'RAG', 'Respuesta validada'], en: ['Query', 'Orchestrator', 'RAG', 'Validated answer'] },
    visual: 'rag',
    tag: { es: 'IA · RAG · Investigación', en: 'AI · RAG · Research' },
    org: { es: 'Plataforma en producción · Maestría TIC (LUZ)', en: 'Platform in production · MSc ICT (LUZ)' },
    year: '2025 - 2026',
    name: 'RunCoach AI',
    role: { es: 'Arquitectura de conocimiento, RAG y full-stack', en: 'Knowledge architecture, RAG & full-stack' },
    url: 'https://runcoach-ai-496921.web.app/login',
    featured: true,
    es: 'Plataforma de entrenamiento de corredores rediseñada de agente simple a **sistema basado en conocimiento**. La versión original tenía una sola regla de dominio escrita a mano en el código y Gemini respondía desde su conocimiento paramétrico: ninguna recomendación era trazable. El rediseño interpone una capa de conocimiento completa: ontología y taxonomía del dominio, chunking estructural con propagación de metadata, embeddings con `text-embedding-004` de 768 dimensiones y un almacén vectorial en ChromaDB con índice HNSW y similitud coseno. En runtime el agente sintetiza la consulta, recupera top-k con filtrado por metadata, construye el prompt de grounding y **valida las citas antes de responder**: una cita alucinada se detecta y se descarta. La ingesta es idempotente por hash de contenido, y la recuperación se mide contra un conjunto de referencia, no a ojo.',
    en: 'Runner training platform redesigned from a simple agent into a **knowledge-based system**. The original version had a single hand-coded domain rule and Gemini answered from its parametric knowledge: no recommendation was traceable. The redesign interposes a full knowledge layer: domain ontology and taxonomy, structural chunking with metadata propagation, 768-dimension `text-embedding-004` embeddings and a ChromaDB vector store with an HNSW index and cosine similarity. At runtime the agent synthesises the query, retrieves top-k with metadata filtering, builds the grounding prompt and **validates citations before answering**: a hallucinated citation is detected and discarded. Ingestion is idempotent by content hash, and retrieval is measured against a golden set rather than eyeballed.',
    tech: ['RAG', 'ChromaDB', 'text-embedding-004', 'Gemini 2.5 Flash', 'Vertex AI', 'FastAPI', 'LangChain text splitters', 'Firestore', 'Cloud Run', 'React 18'],
    metrics: [
      { value: '0.815', es: 'Precision@3 en recuperación', en: 'Precision@3 on retrieval' },
      { value: '0.944', es: 'Recall y MRR', en: 'Recall and MRR' },
      { value: '1.000', es: 'precisión de citación', en: 'citation precision' },
      { value: '82', es: 'chunks vectorizados', en: 'vectorised chunks' },
    ],
  },
  {
    id: 'loslideres',
    legend: { es: ['Casillero en Maicao', 'Tránsito', 'Entrega en Maracaibo'], en: ['Mailbox in Maicao', 'In transit', 'Delivery in Maracaibo'] },
    visual: 'route',
    tag: { es: 'Cliente', en: 'Client' },
    org: { es: 'Logística transfronteriza Colombia-Venezuela', en: 'Cross-border logistics, Colombia-Venezuela' },
    year: '2025 - 2026',
    name: 'Los Líderes Encomiendas',
    role: { es: 'Arquitectura, desarrollo y despliegue', en: 'Architecture, development & deployment' },
    url: 'https://www.loslideresencomiendas.com/',
    es: 'Operación logística transfronteriza Colombia-Venezuela digitalizada de punta a punta. Dos productos desplegados por separado: una PWA multi-rol para la operación, con casilleros, rastreo, roles y reportes, y una landing comercial optimizada para conversión y SEO. Incluye una auditoría de conversión que reordenó la propuesta de valor y el llamado a la acción del sitio público.',
    en: 'Cross-border Colombia-Venezuela logistics operation, digitised end to end. Two separately deployed products: a multi-role PWA for operations, covering mailboxes, tracking, roles and reporting, and a commercial landing page optimised for conversion and SEO. Includes a conversion audit that reshaped the public site\'s value proposition and call to action.',
    tech: ['React 19', 'Vite', 'Tailwind CSS 4', 'Supabase', 'TanStack Query', 'Zustand', 'Railway'],
    metrics: [
      { value: '2', es: 'servicios en producción', en: 'services in production' },
      { value: 'PWA', es: 'multi-rol con rastreo', en: 'multi-role with tracking' },
    ],
  },
  {
    id: 'seo',
    legend: { es: ['Visitantes', 'SEO y diseño', 'Conversión'], en: ['Visitors', 'SEO & design', 'Conversion'] },
    visual: 'funnel',
    tag: { es: 'Cliente', en: 'Client' },
    org: { es: 'Caprichos Makeup · Alma Beauty · Tu Rincón Efímero', en: 'Caprichos Makeup · Alma Beauty · Tu Rincón Efímero' },
    year: '2026',
    name: { es: 'Diseño y posicionamiento SEO', en: 'Design & SEO' },
    role: { es: 'Diagnóstico, diseño y optimización', en: 'Diagnosis, design & optimisation' },
    links: [
      { label: 'Caprichos Makeup', url: 'https://propuesta-caprichos.web.app/demo-caprichos' },
      { label: 'Tu Rincón Efímero', url: 'https://tu-rincon-efimero.web.app/' },
    ],
    es: 'Sitios que se ven bien y además aparecen en Google. En Caprichos Makeup el diagnóstico fue claro: una SPA que Google no podía indexar, experiencia móvil deficiente en un mercado donde más de tres cuartos del tráfico llega por celular, y presentación de producto por debajo del estándar visual de Instagram. La respuesta fue rediseño mobile-first, arquitectura indexable, imágenes optimizadas y una base de componentes que sirve también para Alma Beauty. Tu Rincón Efímero es el otro ejemplo del mismo trabajo: diseño e identidad visual con la estructura y los metadatos que necesita para posicionar.',
    en: 'Sites that look good and also show up on Google. At Caprichos Makeup the diagnosis was clear: a SPA that Google could not index, a poor mobile experience in a market where over three quarters of traffic arrives on phones, and product presentation below the visual standard of Instagram. The answer was a mobile-first redesign, an indexable architecture, optimised imagery and a component base that also serves Alma Beauty. Tu Rincón Efímero is the second example of the same work: design and visual identity, built with the structure and metadata it needs to rank.',
    tech: ['SEO técnico', 'SSR / indexabilidad', 'Mobile-first', 'Rendimiento web', 'Diseño de conversión', 'Open Graph', 'Schema.org'],
    metrics: [
      { value: '3', es: 'marcas sobre una base común', en: 'brands on one shared base' },
      { value: '75%', es: 'del tráfico llega por móvil', en: 'of traffic arrives on mobile' },
    ],
  },
]

const experience = [
  {
    org: '4Told Fintech',
    place: { es: 'Colombia (remoto)', en: 'Colombia (remote)' },
    period: { es: 'abr 2017 - Presente', en: 'Apr 2017 - Present' },
    roles: {
      es: 'Director de Operaciones (desde 2020) · Director de Plataformas Digitales (2018-2020) · Líder Técnico Mobile (2017-2018)',
      en: 'Director of Operations (since 2020) · Director of Digital Platforms (2018-2020) · Mobile Tech Lead (2017-2018)',
    },
    es: [
      'Escalé las operaciones de crédito digital +82% (de 453 a 825 operaciones/mes) mientras reducía los tickets de soporte -83% (de 208 a 36/mes) en el mismo ciclo, y sostuve el crecimiento hasta 889 a 964 operaciones/mes con los tickets en mínimos históricos.',
      'Implementé y puse en producción 10 clientes en Colombia y Perú: retail nacional, banca de desarrollo agropecuario, cajas municipales, bancos y cooperativas.',
      'Reduje la morosidad de cartera de los clientes -5% con motores de riesgo automatizados conectados a centrales de crédito, y sus costos -20% con aumento de colocación +20%.',
      'Reduje costos operativos -30%, tiempos de respuesta de soporte -40% y horas/hombre -20%; entregué +25% de proyectos/año con el mismo presupuesto.',
      'Dirigí PulseAI y lideré un equipo multidisciplinario de 20 personas: implementación en cliente, web, backend, motor de reglas, mobile, PM y soporte técnico.',
    ],
    en: [
      'Scaled digital credit operations +82% (453 → 825 operations/month) while cutting support tickets -83% (208 → 36/month) in the same cycle, then sustained growth to 889-964 operations/month with tickets at record lows.',
      'Implemented and took to production 10 clients across Colombia and Peru: national retail, agricultural development banking, municipal savings banks, banks and credit unions.',
      'Cut client portfolio delinquency -5% with automated risk engines wired to credit bureaus, and their costs -20% while lifting loan placement +20%.',
      'Reduced operating costs -30%, support response times -40% and man-hours -20%; delivered +25% more projects per year on the same budget.',
      'Directed PulseAI and led a 20-person cross-functional team: client-facing implementation, web, backend, rules engine, mobile, PM and technical support.',
    ],
  },
  {
    org: { es: 'Vedana Solutions / Consultoría independiente', en: 'Vedana Solutions / Independent consulting' },
    place: { es: 'LatAm (remoto)', en: 'LatAm (remote)' },
    period: { es: 'dic 2022 - dic 2025', en: 'Dec 2022 - Dec 2025' },
    roles: {
      es: 'Consultor de Operaciones, Producto y Datos',
      en: 'Operations, Product & Data Consultant',
    },
    es: [
      'Diseñé e implementé analítica sobre lago de datos (Orienta, Loanware) para convertir los datos de las empresas en palanca de crecimiento.',
      'Lideré el ciclo completo de producto: conceptualización, arquitectura, kickoff, UAT, evaluación de mercado, análisis de riesgo, posicionamiento, registro de marca y ventas.',
      'Diagnostiqué procesos, detecté cuellos de botella y diseñé soluciones con presupuesto ajustado, desarrollando software a medida como herramienta de apoyo.',
    ],
    en: [
      'Designed and implemented data-lake analytics (Orienta, Loanware) to turn company data into a growth lever.',
      'Led the full product cycle: concept, architecture, kickoff, UAT, market assessment, risk analysis, positioning, trademark registration and sales.',
      'Diagnosed processes, found bottlenecks and designed solutions on tight budgets, building custom software as the supporting tool.',
    ],
  },
  {
    org: 'B.O.D. Banco Universal',
    place: { es: 'Venezuela', en: 'Venezuela' },
    period: { es: 'may 2010 - dic 2016', en: 'May 2010 - Dec 2016' },
    roles: {
      es: 'Gerente de Desarrollo Mobile (2014-2016) · Coordinador de Desarrollo BPM (2010-2014)',
      en: 'Mobile Development Manager (2014-2016) · BPM Development Coordinator (2010-2014)',
    },
    es: [
      'Llevé a producción la banca digital transaccional (web + móvil): +20% en operaciones frente al sistema anterior, 5.000 usuarios activos/día y USD 2M/día transaccionados.',
      'Lideré un equipo multidisciplinario de 15 personas y publiqué las aplicaciones en Play Store y App Store con estándares de calidad garantizados.',
      'Coordiné el desarrollo BPM: factibilidad, levantamiento de procesos, estimación y asignación de recursos, e implantación de nuevas tecnologías.',
    ],
    en: [
      'Took transactional digital banking (web + mobile) to production: +20% operations versus the previous system, 5,000 daily active users and USD 2M transacted per day.',
      'Led a 15-person cross-functional team and shipped the apps to Play Store and App Store against guaranteed quality standards.',
      'Coordinated BPM development: feasibility, process discovery, estimation and resource allocation, and rollout of new technologies.',
    ],
  },
  {
    org: { es: 'Experiencia previa', en: 'Earlier experience' },
    place: { es: 'Madrid · Venezuela', en: 'Madrid · Venezuela' },
    period: '2006 - 2015',
    roles: {
      es: 'Pyramid Consulting (Madrid) · Newtech Sistemas (Venezuela)',
      en: 'Pyramid Consulting (Madrid) · Newtech Sistemas (Venezuela)',
    },
    es: [
      'Project Manager / Team Leader en desarrollo mobile nativo y web responsive (2014-2015).',
      'Consultor de desarrollo en aplicaciones .NET y Web Services (2006-2010).',
    ],
    en: [
      'Project Manager / Team Leader for native mobile and responsive web development (2014-2015).',
      'Development consultant on .NET applications and Web Services (2006-2010).',
    ],
  },
]

const services = [
  {
    icon: 'credit',
    es: { title: 'Plataformas de crédito digital', body: 'Originación, decisión y colocación de punta a punta. Motores de riesgo conectados a centrales de crédito, flujos de otorgamiento automatizados y despliegue en producción con clientes reales.' },
    en: { title: 'Digital lending platforms', body: 'Origination, decisioning and placement end to end. Risk engines wired to credit bureaus, automated approval flows and production rollout with real clients.' },
  },
  {
    icon: 'agent',
    es: { title: 'Agentes de IA para negocio', body: 'Orquestación multi-agente con RAG y reglas de negocio, integrada a tus sistemas actuales. Diseñada para dominios regulados, donde la respuesta debe ser trazable y no solo plausible.' },
    en: { title: 'AI agents for business', body: 'Multi-agent orchestration with RAG and business rules, wired into the systems you already run. Built for regulated domains, where an answer has to be traceable, not merely plausible.' },
  },
  {
    icon: 'id',
    es: { title: 'Onboarding digital e identidad', body: 'Alta de clientes sin fricción y con control de suplantación: biometría, OCR, validación documental y firma electrónica en un solo flujo.' },
    en: { title: 'Digital onboarding & identity', body: 'Frictionless customer enrolment with impersonation control: biometrics, OCR, documentary verification and e-signature in a single flow.' },
  },
  {
    icon: 'chart',
    es: { title: 'Analítica y datos', body: 'Lago de datos y analítica que responde preguntas de negocio, no que produce tableros bonitos. El objetivo es cerrar brechas operativas medibles.' },
    en: { title: 'Analytics & data', body: 'Data lake and analytics that answer business questions rather than produce pretty dashboards. The goal is closing measurable operational gaps.' },
  },
  {
    icon: 'code',
    es: { title: 'Desarrollo full-stack y cloud', body: 'Producto completo: React y PWA en el frente, Python/FastAPI y microservicios detrás, desplegados en Google Cloud, Firebase, Supabase o Railway.' },
    en: { title: 'Full-stack & cloud development', body: 'The whole product: React and PWA up front, Python/FastAPI and microservices behind, deployed on Google Cloud, Firebase, Supabase or Railway.' },
  },
  {
    icon: 'search',
    es: { title: 'Auditoría de conversión', body: 'Diagnóstico honesto de por qué tu web no convierte, con recomendaciones concretas y priorizadas. A veces la respuesta es rehacerla; casi siempre no lo es.' },
    en: { title: 'Conversion audit', body: 'An honest diagnosis of why your site isn\'t converting, with concrete, prioritised recommendations. Sometimes the answer is a rebuild; usually it isn\'t.' },
  },
]

export const content = {
  es: {
    lang: 'es',
    nav: {
      about: 'Perfil', work: 'Portafolio', stack: 'Stack',
      services: 'Servicios', experience: 'Trayectoria', contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Desarrollador de software · Arquitecto · Director de Operaciones Tecnológicas',
      title: 'Escribo software desde 2006. Hoy construyo sistemas que razonan.',
      lead: 'Más de 20 años desarrollando: empecé en .NET y Web Services, llevé banca móvil nativa a Play Store y App Store, y hoy construyo plataformas de crédito digital y sistemas de IA con RAG y agentes sobre Google Cloud. Ingeniero de origen y de oficio: diseño la arquitectura, escribo el código, armo el equipo y lo llevo a producción.',
      ctaWork: 'Ver portafolio',
      ctaContact: 'Hablemos',
      ctaCv: 'Descargar CV',
      available: 'Disponible para roles remotos en LatAm y proyectos de consultoría',
    },
    heroLegend: [
      { title: 'Inteligencia', body: 'agentes, RAG y reglas de negocio' },
      { title: 'Servicios', body: 'microservicios en Cloud Run' },
      { title: 'Datos', body: 'Firestore, SQL Server y lago de datos' },
    ],
    metrics: [
      { value: '+20', label: 'años desarrollando software', sub: '.NET, Java, móvil nativo, Python, React' },
      { value: '+82%', label: 'operaciones de crédito', sub: 'con -83% de tickets de soporte' },
      { value: '10', label: 'clientes en producción', sub: 'Colombia y Perú' },
      { value: '20', label: 'personas lideradas', sub: 'equipo multidisciplinario' },
    ],
    about: {
      kicker: 'Perfil',
      title: 'Veinte años escribiendo software, sin soltar el teclado',
      body: [
        'Empecé en 2006 escribiendo aplicaciones .NET y Web Services contra SQL Server. Después coordiné desarrollo BPM y llevé la banca digital transaccional de un banco universal a producción: web y móvil nativo en Android Studio y Xcode, publicadas en Play Store y App Store, con 5.000 usuarios activos al día y USD 2M transaccionados diariamente. Ese recorrido es el que hoy me permite dirigir sin perder criterio técnico: sé lo que cuesta cada decisión de arquitectura porque he pagado esa factura.',
        'Dirijo operaciones tecnológicas en fintech de crédito digital B2B: plataformas de originación, onboarding y decisión de riesgo para retail y entidades financieras en Colombia y Perú. Mi trabajo se mide en dos números que suelen moverse en direcciones opuestas: cuánto crece el volumen y cuánto baja la carga operativa. Conseguir ambos al mismo tiempo es el oficio.',
        'Dirijo PulseAI, la plataforma de IA agéntica de 4Told: arquitectura multi-agente con razonamiento por reglas, RAG y modelos pequeños para dominios financieros y de seguros regulados, donde una respuesta plausible no basta, porque tiene que ser verificable.',
        'Y sigo construyendo. Zona Barrica y RunCoach AI son plataformas en producción sobre GCP y Firebase donde el trabajo de IA es mío de punta a punta: el motor de recomendación sobre perfil sensorial real en una, y el rediseño completo de un agente a sistema RAG, con ontología, ChromaDB, embeddings, validación de citas y métricas de recuperación, en la otra. Ese rediseño es además el objeto de mi investigación en la Maestría en TIC de la Universidad del Zulia.',
      ],
      education: {
        kicker: 'Formación',
        items: [
          { title: 'Magíster en Tecnologías de la Información y Comunicación', org: 'Universidad del Zulia', note: 'En curso · estimado 2027' },
          { title: 'Licenciado en Computación', org: 'Universidad del Zulia', note: '2007' },
        ],
      },
      languages: { kicker: 'Idiomas', items: ['Español (nativo)', 'Inglés (B2 profesional)'] },
    },
    work: {
      kicker: 'Portafolio',
      title: 'Cosas que están en producción',
      lead: 'Producto empresarial, consultoría y proyectos propios. Cada ficha describe qué resuelve, con qué se construyó y qué se midió.',
      visit: 'Visitar',
      roleLabel: 'Rol',
    },
    stack: {
      kicker: 'Stack',
      title: 'Tecnología que uso a diario',
      lead: 'No es una lista de todo lo que he tocado. Es lo que uso en producción y puedo defender en una entrevista técnica.',
      groups: stack.map((g) => ({ id: g.id, title: g.es, items: g.items })),
    },
    services: {
      kicker: 'Servicios',
      title: 'En qué puedo ayudar a tu empresa',
      lead: `${profile.brand} es mi práctica de consultoría: los mismos problemas que resuelvo dentro de una fintech, aplicados a tu operación.`,
      items: services.map((s) => ({ icon: s.icon, ...s.es })),
      cta: 'Cuéntame tu caso',
    },
    experience: {
      kicker: 'Trayectoria',
      title: 'Dónde he estado',
      items: experience.map((e) => ({
        org: typeof e.org === 'string' ? e.org : e.org.es,
        place: typeof e.place === 'string' ? e.place : e.place.es,
        period: typeof e.period === 'string' ? e.period : e.period.es,
        roles: typeof e.roles === 'string' ? e.roles : e.roles.es,
        bullets: e.es,
      })),
    },
    contact: {
      kicker: 'Contacto',
      title: 'Hablemos',
      lead: 'Estoy abierto a roles de dirección de operaciones o tecnología en remoto, y a proyectos de consultoría en crédito digital, IA aplicada y automatización.',
      emailLabel: 'Correo',
      phoneLabel: 'WhatsApp',
      locationLabel: 'Ubicación',
      cvEs: 'CV en español (PDF)',
      cvEn: 'CV en inglés (PDF)',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      built: 'Sitio construido con React y Vite, desplegado en Railway.',
    },
    langToggle: 'EN',
  },

  en: {
    lang: 'en',
    nav: {
      about: 'Profile', work: 'Work', stack: 'Stack',
      services: 'Services', experience: 'Experience', contact: 'Contact',
    },
    hero: {
      eyebrow: 'Software developer · Architect · Director of Technology Operations',
      title: 'Writing software since 2006. Today I build systems that reason.',
      lead: 'Over 20 years of hands-on development: I started in .NET and Web Services, shipped native mobile banking to the Play Store and App Store, and today I build digital lending platforms and AI systems with RAG and agents on Google Cloud. An engineer by origin and by trade: I design the architecture, write the code, build the team and take it to production.',
      ctaWork: 'See the work',
      ctaContact: 'Get in touch',
      ctaCv: 'Download CV',
      available: 'Open to remote roles across LatAm and to consulting engagements',
    },
    heroLegend: [
      { title: 'Intelligence', body: 'agents, RAG and business rules' },
      { title: 'Services', body: 'microservices on Cloud Run' },
      { title: 'Data', body: 'Firestore, SQL Server and data lake' },
    ],
    metrics: [
      { value: '20+', label: 'years writing software', sub: '.NET, Java, native mobile, Python, React' },
      { value: '+82%', label: 'credit operations', sub: 'with -83% support tickets' },
      { value: '10', label: 'clients in production', sub: 'Colombia and Peru' },
      { value: '20', label: 'people led', sub: 'cross-functional team' },
    ],
    about: {
      kicker: 'Profile',
      title: 'Twenty years writing software, still at the keyboard',
      body: [
        'I started in 2006 writing .NET applications and Web Services against SQL Server. Then I coordinated BPM development and took a universal bank\'s transactional digital banking to production: web plus native mobile in Android Studio and Xcode, shipped to the Play Store and App Store, with 5,000 daily active users and USD 2M transacted per day. That path is what lets me lead today without losing technical judgement: I know what each architectural decision costs because I have paid that bill.',
        'I run technology operations at a B2B digital-lending fintech: origination, onboarding and risk-decisioning platforms for retail and financial institutions in Colombia and Peru. My work is measured by two numbers that usually move in opposite directions: how much volume grows and how much operational load falls. Getting both at once is the craft.',
        'I direct PulseAI, 4Told\'s agentic AI platform: a multi-agent architecture with rule-based reasoning, RAG and small language models for regulated finance and insurance, where a plausible answer isn\'t enough, because it has to be verifiable.',
        'And I keep building. Zona Barrica and RunCoach AI are platforms running in production on GCP and Firebase where the AI work is mine end to end: a recommendation engine grounded in a real sensory profile in one, and the full redesign from simple agent to RAG system, with ontology, ChromaDB, embeddings, citation validation and retrieval metrics, in the other. That redesign is also the subject of my research for the MSc in ICT at Universidad del Zulia.',
      ],
      education: {
        kicker: 'Education',
        items: [
          { title: 'MSc in Information and Communication Technologies', org: 'Universidad del Zulia', note: 'In progress · expected 2027' },
          { title: 'BSc in Computer Science', org: 'Universidad del Zulia', note: '2007' },
        ],
      },
      languages: { kicker: 'Languages', items: ['Spanish (native)', 'English (B2 professional)'] },
    },
    work: {
      kicker: 'Work',
      title: 'Things running in production',
      lead: 'Enterprise product, consulting and personal projects. Each entry says what it solves, what it was built with and what was measured.',
      visit: 'Visit',
      roleLabel: 'Role',
    },
    stack: {
      kicker: 'Stack',
      title: 'Technology I use daily',
      lead: 'Not a list of everything I have ever touched. This is what I run in production and can defend in a technical interview.',
      groups: stack.map((g) => ({ id: g.id, title: g.en, items: g.items.map((i) => term(i, 'en')) })),
    },
    services: {
      kicker: 'Services',
      title: 'How I can help your company',
      lead: `${profile.brand} is my consulting practice: the same problems I solve inside a fintech, applied to your operation.`,
      items: services.map((s) => ({ icon: s.icon, ...s.en })),
      cta: 'Tell me about your case',
    },
    experience: {
      kicker: 'Experience',
      title: 'Where I have been',
      items: experience.map((e) => ({
        org: typeof e.org === 'string' ? e.org : e.org.en,
        place: typeof e.place === 'string' ? e.place : e.place.en,
        period: typeof e.period === 'string' ? e.period : e.period.en,
        roles: typeof e.roles === 'string' ? e.roles : e.roles.en,
        bullets: e.en,
      })),
    },
    contact: {
      kicker: 'Contact',
      title: 'Let\'s talk',
      lead: 'I am open to remote operations or technology leadership roles, and to consulting work in digital lending, applied AI and automation.',
      emailLabel: 'Email',
      phoneLabel: 'WhatsApp',
      locationLabel: 'Location',
      cvEs: 'CV in Spanish (PDF)',
      cvEn: 'CV in English (PDF)',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Built with React and Vite, deployed on Railway.',
    },
    langToggle: 'ES',
  },
}

// Orden de aparición. Los dos destacados de IA van primero y ocupan dos columnas,
// así que este orden hace que cada fila del grid quede completa en desktop.
const ORDER = ['zonabarrica', 'pulseai', 'runcoach', 'onboarding', 'loslideres', 'orienta', 'seo']

export const projectList = ORDER
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean)
