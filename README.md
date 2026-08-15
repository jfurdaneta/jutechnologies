# jutechnologies.com

Sitio personal y portafolio de **José Francisco Urdaneta**: JU Technologies.
Vite + React 19, bilingüe ES/EN, sin dependencias de UI externas. Desplegado en Railway.

---

## Estructura

```
jutechnologies/
├── index.html                 SEO, Open Graph, Twitter Card, JSON-LD (schema.org/Person)
├── src/
│   ├── content.js             TODO EL CONTENIDO ES/EN. Se edita aquí, no en los componentes.
│   ├── App.jsx                Componentes de sección
│   ├── visuals.jsx            Los 8 visuales SVG animados (hero + uno por proyecto)
│   ├── styles.css             Sistema de diseño completo (tokens en :root)
│   └── main.jsx
├── public/
│   ├── cv/CV_Jose_Urdaneta_ES.pdf
│   ├── cv/CV_Jose_Urdaneta_EN.pdf
│   ├── favicon.svg            Logo JU (trazo dibujado, sin dependencia de fuentes)
│   ├── favicon-32.png
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── og-image.png           1200x630 con tu foto, se usa al compartir en WhatsApp/LinkedIn
│   ├── perfil-ju.webp         Retrato recortado, fondo transparente (sección Perfil)
│   ├── avatar-ju.webp         Avatar circular 512px, por si hace falta
│   └── banner-ju.png          Banner (mismo del README de GitHub)
├── assets/                    Fuentes SVG de los gráficos (no se publican)
├── nixpacks.toml              Build de Railway
├── railway.json               startCommand
└── vite.config.js
```

---

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview
```

---

## Cómo editar el contenido

Todo vive en **`src/content.js`**. Tres bloques:

| Bloque | Qué controla |
|---|---|
| `profile` | Nombre, correo, teléfono, LinkedIn, GitHub |
| `projects` | Fichas del portafolio. Cada una tiene `es` y `en` |
| `content.es` / `content.en` | Textos de todas las secciones |

Para **agregar un proyecto**, copia un objeto de `projects` y rellena `es`, `en`, `tech` y `metrics`.
Los términos técnicos en español se traducen automáticamente con el mapa `TERM_EN`; si agregas uno nuevo en español, añádelo ahí.

### Pendiente antes de publicar

- [ ] Reemplazar `public/cv/CV_Jose_Urdaneta_EN.pdf` si prefieres otra versión del CV en inglés.
- [ ] Actualizar el CV en PDF para que refleje el énfasis en desarrollo (hoy la web lo dice y el CV no tanto).

## Los visuales animados

Cada proyecto tiene un SVG animado propio en `src/visuals.jsx`, y cada uno significa algo:

| Proyecto | Visual | Qué representa |
|---|---|---|
| Hero | la pila | Datos, servicios e inteligencia, con partículas subiendo por el sistema |
| Zona Barrica | `radar` | El perfil sensorial de 14 atributos, con el barrido del Sommelier IA leyéndolo |
| PulseAI | `pulse` | El orquestador emitiendo hacia los canales: CRM, core, móvil, web, WhatsApp |
| RunCoach AI | `rag` | El flujo RAG completo: consulta, orquestador, agentes y base vectorial |
| Onboarding Digital | `scan` | Documento + rostro + línea de escaneo + huella + sello de validación |
| Los Líderes | `route` | Un paquete cruzando la frontera de un pin al otro |
| Orienta & Loanware | `lake` | Datos cayendo al lago y saliendo convertidos en indicadores |
| Diseño y SEO | `funnel` | Muchos entran al embudo, pocos convierten, y el sello de la conversión |

Todo es SVG puro con animación CSS: cero imágenes, cero peso de red, nítido en cualquier
pantalla y con `prefers-reduced-motion` respetado (si el usuario pide menos movimiento, se
quedan quietos).

Cada visual lleva además una **leyenda bilingüe** que nombra sus partes en el lenguaje
del proyecto (`legend` en `content.js`): en RunCoach dice Consulta, Orquestador, RAG y
Respuesta validada; en Los Líderes dice Casillero en Maicao, Tránsito y Entrega en
Maracaibo. Así la animación no se lee como decoración genérica sino como el diagrama
de ese proyecto en concreto. En las tarjetas destacadas la leyenda va al lado del dibujo;
en las normales, debajo.

**Para agregar un visual a un proyecto nuevo:** escribe el componente en `visuals.jsx`,
regístralo en el objeto `VISUALS` del final, y pon `visual: 'tu-nombre'` y `legend`
en la ficha del proyecto en `content.js`. Las animaciones reutilizables (`v-dash`,
`v-lift`, `v-twinkle`, `v-ripple`...) ya están en `styles.css`.

### Sobre la puntuación

El texto del sitio no usa guiones largos. Si editas `content.js`, mantén ese criterio:
dos puntos, comas o paréntesis en lugar de rayas. Es una decisión deliberada de estilo.

### Si prefieres una imagen generada

Ver **`HERO-IMAGEN.md`**: trae tres prompts listos para DALL·E y el procedimiento para
reemplazar el visual del hero por una imagen.

---

## Despliegue en Railway

### 1. Repositorio

```bash
cd jutechnologies
git init
git add .
git commit -m "feat: sitio personal y portafolio JU Technologies"
git branch -M main
git remote add origin https://github.com/jfurdaneta/jutechnologies.git
git push -u origin main
```

> Usa `gh auth login` o SSH. **No** metas un token en la URL del remote.

### 2. Servicio en Railway

1. Railway → **New Project** → *Deploy from GitHub repo* → `jfurdaneta/jutechnologies`.
2. Railway detecta `nixpacks.toml` y `railway.json` solo. No hace falta configurar build ni start command.
3. El primer deploy tarda ~2 minutos. Verifica en la URL `*.up.railway.app` que genera.

**Importante:** `serve` está en `dependencies` (no en `devDependencies`) a propósito: Railway lo necesita en runtime.

### 3. Dominio propio

En Railway → tu servicio → **Settings → Networking → Custom Domain**:

- Agrega `www.jutechnologies.com`.
- Railway te da un destino CNAME, algo como `abc123.up.railway.app`. **Cópialo**, es único para tu servicio.

### 4. DNS en GoDaddy

GoDaddy → *Mis productos* → `jutechnologies.com` → **DNS** → *Administrar zonas*.

| Tipo | Nombre | Valor | TTL |
|---|---|---|---|
| CNAME | `www` | `el-destino-que-te-dio-railway.up.railway.app` | 1 hora |

Para el dominio raíz (`jutechnologies.com` sin `www`) tienes dos caminos:

**Opción A: reenvío (la más simple en GoDaddy).**
GoDaddy → DNS → **Reenvío de dominio** → reenviar `jutechnologies.com` a `https://www.jutechnologies.com`, tipo **permanente (301)**, con reenvío de ruta activado.

**Opción B: ALIAS/ANAME.**
Agrega también `jutechnologies.com` como Custom Domain en Railway. Si GoDaddy te ofrece registro tipo `ALIAS` o `ANAME` apuntando al destino de Railway, úsalo. GoDaddy no siempre lo expone; si no aparece, usa la Opción A.

⚠️ **No** uses un registro `A` con una IP fija de Railway: esas IPs cambian y el sitio se cae sin aviso.

### 5. Verificación

```bash
dig +short www.jutechnologies.com
curl -sI https://www.jutechnologies.com | head -3
```

La propagación DNS puede tardar de 10 minutos a 2 horas. Railway emite el certificado SSL automáticamente una vez el CNAME resuelve.

---

## El logo

El isotipo lo diseñaste tú. Yo lo **vectoricé**: la versión original era un PNG, y un PNG
no sirve como favicon ni escala para imprenta. Se trazó la silueta con potrace desde el
original a triple resolución, y se le aplicó el degradado azul-teal en SVG.

Archivos en `assets/logo/` (los que se publican están también en `public/`):

| Archivo | Uso |
|---|---|
| `ju-isotipo-color.svg` | Isotipo a color, fondo transparente. Es el del header. |
| `ju-isotipo-mono.svg` | Isotipo con `currentColor`: hereda el color del contexto. Para fondos oscuros o de un solo color. |
| `ju-icono-teja.svg` | Marca blanca sobre teja con degradado. **Es el favicon.** |
| `ju-logotipo.svg` | Lockup completo: isotipo + TECHNOLOGIES con la línea y el punto. |

### Por qué el favicon lleva teja y el header no

El isotipo a color sobre fondo blanco deja de leerse por debajo de unos 32 píxeles: los
trazos finos y el pliegue del cruce se pierden y queda una mancha. La misma silueta en
**blanco sobre la teja de color** sí aguanta 16 píxeles, porque el contraste es máximo y
la forma queda como una sola masa. Por eso son dos versiones del mismo trazo, no dos logos.

Regla práctica: **de 40px para arriba**, isotipo a color sobre fondo claro. **Por debajo
de 40px**, marca blanca sobre teja.

### Si cambias el logo

```bash
python3 - <<'EOF'
import cairosvg
from PIL import Image
cairosvg.svg2png(url='public/favicon.svg', write_to='public/apple-touch-icon.png', output_width=180, output_height=180)
cairosvg.svg2png(url='public/favicon.svg', write_to='public/favicon-32.png', output_width=32, output_height=32)
ims=[]
for s in (16,32,48):
    cairosvg.svg2png(url='public/favicon.svg', write_to=f'/tmp/i{s}.png', output_width=s, output_height=s)
    ims.append(Image.open(f'/tmp/i{s}.png').convert('RGBA'))
ims[1].save('public/favicon.ico', format='ICO', sizes=[(16,16),(32,32),(48,48)])
EOF
```

Y regenera `assets/banner-ju.svg` y `assets/og-image.svg`, que llevan el isotipo incrustado.

En `assets/logo/exploracion/` quedaron los descartes: los conceptos que probé antes de que
me pasaras el tuyo, incluido el que se leía como carita sonriente.

## El retrato

`public/perfil-ju.webp` es tu foto con el fondo recortado (transparente). El recorte se hizo
por conectividad desde los bordes, no por umbral de color, para que la camisa blanca no
desapareciera junto con el fondo; el borde lleva un desvanecido de un pixel para que no
se vea recortado a tijera.

Vive en la columna lateral de la sección Perfil, apoyado sobre un lienzo con degradado de
marca y trama de puntos. La foto sangra por abajo y el pie de foto se funde sobre ella:
se lee como un recorte apoyado, no como un cuadro pegado.

La misma foto está compuesta en `og-image.png`, que es lo que se ve cuando alguien comparte
el enlace por WhatsApp o LinkedIn. Si cambias de foto, regenera ambas.

## Notas de diseño

- Paleta y tipografía en `:root` de `styles.css`. Cambiar `--brand` reencadena todo el sitio.
- Tipografía Inter desde Google Fonts, con fallback a la fuente del sistema.
- El idioma inicial se detecta del navegador (`navigator.language`); el botón `ES`/`EN` del header lo cambia.
- Sin `localStorage`, sin analítica, sin cookies. Nada que declarar en un aviso de privacidad.
- Accesibilidad: contraste AA, `:focus-visible` visible, y `prefers-reduced-motion` respetado.
