/* ---------------------------------------------------------------------------
 * Visuales vectoriales animados.
 *
 * Todos son SVG puro, sin imágenes ni dependencias, y toda la animación es CSS
 * (ver bloque "visuales animados" en styles.css). Eso significa que respetan
 * `prefers-reduced-motion` automáticamente y no cuestan un solo byte de red.
 *
 * Ninguno lleva texto: a este tamaño el texto no se lee y además habría que
 * traducirlo. El significado lo carga la forma.
 * ------------------------------------------------------------------------- */

/* Degradados compartidos. Se inyectan una sola vez por SVG con <Defs id="..."/> */
function Defs({ p }) {
  return (
    <defs>
      <linearGradient id={`${p}-blue`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2C4BCE" />
        <stop offset="100%" stopColor="#4C6BF5" />
      </linearGradient>
      <linearGradient id={`${p}-teal`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0E9F9F" />
        <stop offset="100%" stopColor="#22C3B4" />
      </linearGradient>
      <radialGradient id={`${p}-glow`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2C4BCE" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#2C4BCE" stopOpacity="0" />
      </radialGradient>
    </defs>
  )
}

const CARD = '0 0 320 120'

/* ======================================================== HERO: la pila ==
 * Datos abajo, servicios en medio, inteligencia arriba. Las partículas suben
 * a través de las capas: es el recorrido de una consulta por el sistema.
 */
export function HeroVisual({ legend }) {
  return (
    <div className="hero-art">
      <div aria-hidden="true">
      <svg viewBox="0 0 440 400" role="presentation">
        <Defs p="hv" />

        <ellipse cx="220" cy="120" rx="190" ry="130" fill="url(#hv-glow)" />

        {/* órbita */}
        <g className="v-orbit" style={{ transformOrigin: '220px 108px' }}>
          <ellipse cx="220" cy="108" rx="132" ry="46" fill="none" stroke="#C7D2E8" strokeWidth="1.4" strokeDasharray="3 7" />
        </g>
        <circle className="v-orbit-dot" cx="220" cy="108" r="5" fill="#0E9F9F" style={{ transformOrigin: '220px 108px' }} />

        {/* núcleo */}
        <circle className="v-halo" cx="220" cy="108" r="46" fill="none" stroke="#4C6BF5" strokeWidth="1.6" opacity="0.35" style={{ transformOrigin: '220px 108px' }} />
        <circle className="v-halo" cx="220" cy="108" r="46" fill="none" stroke="#4C6BF5" strokeWidth="1.6" opacity="0.35" style={{ transformOrigin: '220px 108px', animationDelay: '1.3s' }} />
        <circle cx="220" cy="108" r="30" fill="url(#hv-blue)" />
        <circle cx="220" cy="108" r="30" fill="none" stroke="#fff" strokeWidth="1" opacity="0.35" />
        <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.9">
          <path d="M212 102h16M212 108h16M212 114h10" />
        </g>

        {/* haces ascendentes */}
        <g className="v-beam" stroke="#4C6BF5" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.55">
          <path d="M140 268V172" />
          <path d="M220 268V150" style={{ animationDelay: '.35s' }} />
          <path d="M300 268V172" style={{ animationDelay: '.7s' }} />
        </g>

        {/* capa de servicios */}
        {[[74, 0], [174, 0.18], [274, 0.36]].map(([x, d], i) => (
          <g key={i}>
            <rect className="v-lift" x={x} y="268" width="92" height="46" rx="13"
                  fill="#FFFFFF" stroke="#DCE4F2" strokeWidth="1.5"
                  style={{ animationDelay: `${d}s`, transformOrigin: `${x + 46}px 291px` }} />
            <circle cx={x + 24} cy="291" r="7.5" fill="none"
                    stroke={i === 2 ? '#0E9F9F' : '#4C6BF5'} strokeWidth="2.4" />
            <g stroke="#C7D2E8" strokeWidth="2.6" strokeLinecap="round">
              <path d={`M${x + 42} 287h32`} />
              <path d={`M${x + 42} 295h20`} />
            </g>
          </g>
        ))}

        {/* capa de datos */}
        <rect x="74" y="336" width="292" height="50" rx="15" fill="url(#hv-teal)" />
        <g fill="#FFFFFF" opacity="0.5">
          {Array.from({ length: 22 }, (_, i) => (
            <circle key={i} className="v-twinkle"
                    cx={92 + (i % 11) * 26} cy={i < 11 ? 352 : 370} r="3"
                    style={{ animationDelay: `${(i * 0.17) % 2.4}s` }} />
          ))}
        </g>

        {/* partículas que suben */}
        <g fill="#0E9F9F">
          {[[140, 0], [220, 0.9], [300, 1.7], [180, 2.4], [260, 3.1]].map(([x, d], i) => (
            <circle key={i} className="v-rise" cx={x} cy="330" r="3.4" style={{ animationDelay: `${d}s` }} />
          ))}
        </g>
      </svg>
      </div>

      {legend?.length > 0 && (
        <ol className="hero-art-legend">
          {legend.map((l) => (
            <li key={l.title}>
              <strong>{l.title}</strong>
              <span>{l.body}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

/* ================================================ ZONA BARRICA: el radar ==
 * El perfil sensorial de 14 atributos, que es de donde el Sommelier IA saca
 * su señal. El barrido girando es el motor leyendo el paladar.
 */
function VisRadar() {
  const cx = 160, cy = 60, R = 44
  const axes = 7
  const pt = (i, r) => {
    const a = (Math.PI * 2 * i) / axes - Math.PI / 2
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]
  }
  const ring = (r) => Array.from({ length: axes }, (_, i) => pt(i, r).join(',')).join(' ')
  const shape = [0.85, 0.55, 0.92, 0.62, 0.78, 0.45, 0.7]
    .map((f, i) => pt(i, R * f).join(',')).join(' ')

  return (
    <svg viewBox={CARD} role="presentation">
      <Defs p="rd" />
      <g stroke="#DCE4F2" strokeWidth="1" fill="none">
        {[0.35, 0.68, 1].map((f, i) => <polygon key={i} points={ring(R * f)} />)}
        {Array.from({ length: axes }, (_, i) => (
          <line key={i} x1={cx} y1={cy} x2={pt(i, R)[0]} y2={pt(i, R)[1]} />
        ))}
      </g>

      <polygon className="v-breathe" points={shape} fill="#2C4BCE" fillOpacity="0.14"
               stroke="url(#rd-blue)" strokeWidth="2" strokeLinejoin="round"
               style={{ transformOrigin: `${cx}px ${cy}px` }} />

      {/* barrido */}
      <g className="v-sweep" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <path d={`M${cx} ${cy} L${cx} ${cy - R} A${R} ${R} 0 0 1 ${cx + R * 0.75} ${cy - R * 0.66} Z`}
              fill="url(#rd-teal)" fillOpacity="0.3" />
        <line x1={cx} y1={cy} x2={cx} y2={cy - R} stroke="#0E9F9F" strokeWidth="1.8" />
      </g>

      <g fill="#2C4BCE">
        {[0.85, 0.55, 0.92, 0.62, 0.78, 0.45, 0.7].map((f, i) => {
          const [x, y] = pt(i, R * f)
          return <circle key={i} className="v-twinkle" cx={x} cy={y} r="3.2"
                         style={{ animationDelay: `${i * 0.28}s` }} />
        })}
      </g>
      <circle cx={cx} cy={cy} r="4" fill="#0E9F9F" />
    </svg>
  )
}

/* ================================================== PULSE AI: el pulso ====
 * Un orquestador en el centro emitiendo hacia canales: CRM, core bancario,
 * banca móvil, web, WhatsApp. Las ondas son la operación omnicanal.
 */
function VisPulse() {
  const cx = 160, cy = 60
  const nodes = [[54, 30], [54, 90], [266, 30], [266, 90], [160, 16], [160, 104]]
  return (
    <svg viewBox={CARD} role="presentation">
      <Defs p="pl" />
      <g stroke="#DCE4F2" strokeWidth="1.3">
        {nodes.map(([x, y], i) => <line key={i} x1={cx} y1={cy} x2={x} y2={y} />)}
      </g>

      {[0, 1, 2].map((i) => (
        <circle key={i} className="v-ripple" cx={cx} cy={cy} r="20" fill="none"
                stroke="#4C6BF5" strokeWidth="2"
                style={{ animationDelay: `${i * 1.1}s`, transformOrigin: `${cx}px ${cy}px` }} />
      ))}

      {nodes.map(([x, y], i) => (
        <circle key={i} className="v-twinkle" cx={x} cy={y} r="7"
                fill="#FFFFFF" stroke={i > 3 ? '#0E9F9F' : '#4C6BF5'} strokeWidth="2.4"
                style={{ animationDelay: `${i * 0.42}s` }} />
      ))}

      <circle cx={cx} cy={cy} r="19" fill="url(#pl-blue)" />
      <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d={`M${cx - 10} ${cy} h4l3-7 4 14 3-7h4`} />
      </g>
    </svg>
  )
}

/* ================================================ RUNCOACH: el flujo RAG ==
 * Consulta → orquestador → recuperación / razonamiento / validación → base
 * vectorial. Es literalmente la arquitectura del rediseño.
 */
function VisRag() {
  return (
    <svg viewBox="0 0 320 150" role="presentation">
      <Defs p="rg" />

      <g stroke="#D3DDEE" strokeWidth="1.3" fill="none">
        <path d="M160 32v14" />
        <path d="M160 74 L74 92" />
        <path d="M160 74v18" />
        <path d="M160 74 L246 92" />
        <path d="M74 116 L160 132" />
        <path d="M160 116v16" />
        <path d="M246 116 L160 132" />
      </g>
      <g className="v-beam" stroke="#2C4BCE" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M160 32v14" />
        <path d="M160 74v18" style={{ animationDelay: '.4s' }} />
        <path d="M160 116v16" style={{ animationDelay: '.8s' }} />
      </g>

      {/* consulta */}
      <rect x="96" y="10" width="128" height="22" rx="9" fill="#FFFFFF" stroke="#E0E7F2" strokeWidth="1.4" />
      <circle cx="110" cy="21" r="4" fill="#94A3C4" />
      <g stroke="#C7D2E8" strokeWidth="2.6" strokeLinecap="round">
        <path d="M122 18h58M122 25h36" />
      </g>

      {/* orquestador */}
      <rect x="96" y="46" width="128" height="28" rx="10" fill="url(#rg-blue)" />
      <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.92">
        <path d="M140 56h40M140 63h26" />
      </g>
      <circle cx="128" cy="60" r="5.5" fill="none" stroke="#fff" strokeWidth="2" opacity="0.85" />

      {/* agentes */}
      {[[36, '#4C6BF5', 0], [122, '#4C6BF5', 0.25], [208, '#0E9F9F', 0.5]].map(([x, c, d], i) => (
        <g key={i}>
          <rect className="v-lift" x={x} y="92" width="76" height="24" rx="9"
                fill="#FFFFFF" stroke="#DCE4F2" strokeWidth="1.4"
                style={{ animationDelay: `${d}s`, transformOrigin: `${x + 38}px 104px` }} />
          <circle cx={x + 16} cy="104" r="6" fill="none" stroke={c} strokeWidth="2.2" />
          <g stroke="#C7D2E8" strokeWidth="2.4" strokeLinecap="round">
            <path d={`M${x + 30} 101h32`} />
            <path d={`M${x + 30} 108h20`} />
          </g>
        </g>
      ))}

      {/* base vectorial */}
      <rect x="96" y="132" width="128" height="16" rx="8" fill="url(#rg-teal)" />
      <g fill="#FFFFFF" opacity="0.6">
        {Array.from({ length: 9 }, (_, i) => (
          <circle key={i} className="v-twinkle" cx={110 + i * 13.5} cy="140" r="2.4"
                  style={{ animationDelay: `${(i * 0.19) % 1.8}s` }} />
        ))}
      </g>
    </svg>
  )
}

/* ============================================== ONBOARDING: el escaneo ====
 * Documento + rostro + línea de escaneo + validación. El alta de cliente sin
 * suplantación, que es de lo que trata el producto.
 */
function VisScan() {
  return (
    <svg viewBox={CARD} role="presentation">
      <Defs p="sc" />

      <rect x="66" y="22" width="132" height="76" rx="12" fill="#FFFFFF" stroke="#DCE4F2" strokeWidth="1.6" />
      <circle cx="102" cy="52" r="14" fill="#EEF2FF" stroke="#4C6BF5" strokeWidth="2" />
      <path d="M86 82c3-10 9-15 16-15s13 5 16 15" fill="none" stroke="#4C6BF5" strokeWidth="2" strokeLinecap="round" />
      <g stroke="#D8E0EE" strokeWidth="3.4" strokeLinecap="round">
        <path d="M134 44h48M134 56h40M134 68h48M134 80h28" />
      </g>

      {/* línea de escaneo */}
      <g className="v-scan">
        <rect x="66" y="22" width="132" height="3" fill="url(#sc-teal)" />
        <rect x="66" y="25" width="132" height="14" fill="#0E9F9F" opacity="0.12" />
      </g>

      {/* huella */}
      <g transform="translate(232, 60)" fill="none" stroke="#4C6BF5" strokeLinecap="round">
        {[10, 17, 24].map((r, i) => (
          <path key={i} className="v-trace"
                d={`M${-r} 6 A${r} ${r} 0 0 1 ${r} 6`}
                strokeWidth="2.2" strokeDasharray="60"
                style={{ '--len': 60, animationDelay: `${i * 0.35}s` }} />
        ))}
        <circle cx="0" cy="6" r="3" fill="#4C6BF5" stroke="none" />
      </g>

      {/* check */}
      <g transform="translate(232, 26)">
        <circle className="v-pop" r="12" fill="url(#sc-teal)" />
        <path className="v-trace" d="M-5 0l3.6 4L6-4" fill="none" stroke="#fff" strokeWidth="2.6"
              strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="20" style={{ '--len': 20, animationDelay: '.5s' }} />
      </g>
    </svg>
  )
}

/* ============================================== LOS LÍDERES: la ruta ======
 * Un paquete viajando de un punto a otro cruzando la frontera. El servicio,
 * en una sola imagen.
 */
function VisRoute() {
  return (
    <svg viewBox={CARD} role="presentation">
      <Defs p="rt" />

      <path d="M52 82 Q160 12 268 82" fill="none" stroke="#DCE4F2" strokeWidth="2.4" strokeLinecap="round" />
      <path className="v-dash" d="M52 82 Q160 12 268 82" fill="none" stroke="#2C4BCE"
            strokeWidth="2.4" strokeLinecap="round" strokeDasharray="7 11" />

      {/* frontera */}
      <line x1="160" y1="20" x2="160" y2="104" stroke="#E4E9F0" strokeWidth="1.4" strokeDasharray="4 5" />

      {/* pines */}
      {[[52, '#2C4BCE'], [268, '#0E9F9F']].map(([x, c], i) => (
        <g key={i} transform={`translate(${x}, 82)`}>
          <ellipse cx="0" cy="16" rx="11" ry="3.4" fill="#0B1220" opacity="0.08" />
          <path d="M0 14c0-6 9-10 9-17A9 9 0 1 0-9-3c0 7 9 11 9 17z" fill={c} />
          <circle cx="0" cy="-3" r="3.6" fill="#fff" />
        </g>
      ))}

      {/* paquete */}
      <g className="v-travel">
        <g transform="translate(-11,-11)">
          <rect width="22" height="22" rx="4" fill="#FFFFFF" stroke="#2C4BCE" strokeWidth="2" />
          <path d="M0 8h22M11 8v14" stroke="#4C6BF5" strokeWidth="1.8" />
        </g>
      </g>
    </svg>
  )
}

/* ============================================ ORIENTA: el lago de datos ===
 * Datos cayendo al lago y saliendo convertidos en indicadores. Literal.
 */
function VisLake() {
  const bars = [[196, 34], [220, 52], [244, 26], [268, 44]]
  return (
    <svg viewBox={CARD} role="presentation">
      <Defs p="lk" />

      {/* gotas */}
      <g fill="#4C6BF5">
        {[60, 82, 104, 126, 71, 115].map((x, i) => (
          <circle key={i} className="v-drop" cx={x} cy="18" r="3.6"
                  style={{ animationDelay: `${(i * 0.5) % 2.6}s` }} />
        ))}
      </g>

      {/* lago */}
      <path d="M40 78h108a16 16 0 0 1 0 32H40a16 16 0 0 1 0-32z" fill="url(#lk-blue)" />
      <g fill="#FFFFFF" opacity="0.45">
        {Array.from({ length: 8 }, (_, i) => (
          <circle key={i} className="v-twinkle" cx={56 + i * 14} cy={i % 2 ? 90 : 99} r="2.6"
                  style={{ animationDelay: `${(i * 0.23) % 1.9}s` }} />
        ))}
      </g>

      {/* flujo hacia los indicadores */}
      <path className="v-dash" d="M168 94h20" fill="none" stroke="#0E9F9F" strokeWidth="2.4"
            strokeLinecap="round" strokeDasharray="5 6" />

      {/* barras */}
      <line x1="190" y1="110" x2="286" y2="110" stroke="#DCE4F2" strokeWidth="1.6" />
      {bars.map(([x, h], i) => (
        <rect key={i} className="v-bar" x={x} y={110 - h} width="14" height={h} rx="4"
              fill={i === 2 ? 'url(#lk-teal)' : '#94A3C4'}
              style={{ animationDelay: `${i * 0.22}s`, transformOrigin: `${x + 7}px 110px` }} />
      ))}
    </svg>
  )
}

/* =============================================== CAPRICHOS: el embudo =====
 * Muchos visitantes entran, pocos convierten. El problema del cliente y el
 * objetivo del rediseño, en una figura.
 */
function VisFunnel() {
  return (
    <svg viewBox={CARD} role="presentation">
      <Defs p="fn" />

      <path d="M92 22h136l-46 50v34a4 4 0 0 1-6 3.4l-32-19V72z"
            fill="#EEF2FF" stroke="#C7D2E8" strokeWidth="1.6" strokeLinejoin="round" />

      {/* visitantes entrando */}
      <g fill="#94A3C4">
        {[104, 124, 144, 164, 184, 204, 216].map((x, i) => (
          <circle key={i} className="v-fall" cx={x} cy="10" r="4"
                  style={{ animationDelay: `${(i * 0.34) % 2.4}s` }} />
        ))}
      </g>

      {/* conversiones saliendo */}
      <g fill="#0E9F9F">
        {[0, 1].map((i) => (
          <circle key={i} className="v-convert" cx="160" cy="104" r="4.4"
                  style={{ animationDelay: `${i * 1.6}s` }} />
        ))}
      </g>

      <path className="v-dash" d="M160 108v8" stroke="#0E9F9F" strokeWidth="2.2" strokeDasharray="3 4" />

      {/* la conversión: el sello que aparece cuando alguien completa el flujo */}
      <g transform="translate(252, 62)">
        <g className="v-pop">
          <circle r="17" fill="url(#fn-teal)" />
          <path d="M-6.5-.5l4.4 4.6L7-5" fill="none" stroke="#fff" strokeWidth="2.8"
                strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <circle className="v-ripple" r="17" fill="none" stroke="#0E9F9F" strokeWidth="2" />
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ router */
const VISUALS = {
  radar: VisRadar,
  pulse: VisPulse,
  rag: VisRag,
  scan: VisScan,
  route: VisRoute,
  lake: VisLake,
  funnel: VisFunnel,
}

export function ProjectVisual({ name, legend }) {
  const V = VISUALS[name]
  if (!V) return null
  return (
    <div className={`project-vis project-vis--${name}`}>
      <div className="project-vis-art" aria-hidden="true"><V /></div>
      {legend?.length > 0 && (
        <ol className="project-vis-legend">
          {legend.map((label, i) => (
            <li key={label}>
              <span className="vl-step" aria-hidden="true">{i + 1}</span>
              {label}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
