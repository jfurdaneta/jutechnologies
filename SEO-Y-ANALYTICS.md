# SEO y analítica

Qué quedó configurado, qué tienes que hacer tú, y qué falta para posicionar de verdad.

---

## Parte 1. Lo que ya está en el código

| Archivo | Qué hace |
|---|---|
| `public/robots.txt` | Permite el rastreo completo y declara dónde está el sitemap |
| `public/sitemap.xml` | Le dice a Google qué URL indexar y cuándo cambió |
| `src/analytics.js` | Carga Google Analytics 4, solo en producción y solo si hay ID |
| `index.html` | `canonical`, Open Graph, Twitter Card y datos estructurados `schema.org/Person` |

**El sitemap tiene una sola URL** porque el sitio es una sola página. Eso no es un descuido, es la realidad de lo que hay hoy, y es justo el límite del que hablo en la parte 4.

---

## Parte 2. Activar Google Analytics

### Crear la propiedad

1. Entra a [analytics.google.com](https://analytics.google.com) con tu cuenta de Google.
2. **Administrar** (el engranaje abajo a la izquierda) → **Crear** → **Propiedad**.
3. Nombre: `jutechnologies.com`. Zona horaria: Colombia. Moneda: COP o USD, da igual para un portafolio.
4. Responde el cuestionario de objetivos (elige "Generar clientes potenciales").
5. Plataforma: **Web**. URL: `https://www.jutechnologies.com`. Nombre del flujo: `Sitio principal`.
6. Al terminar te muestra el **ID de medición**, con formato `G-XXXXXXXXXX`. Cópialo.

### Conectarlo al sitio

En Railway → tu servicio → pestaña **Variables** → **New Variable**:

```
VITE_GA_ID = G-XXXXXXXXXX
```

Railway redespliega solo al guardar una variable. Es importante que sea una variable de Railway y no un archivo en el repo: así el ID no queda en GitHub y puedes cambiarlo sin tocar código.

> Ojo con el prefijo `VITE_`. Vite solo expone al navegador las variables que empiezan así. Si le pones otro nombre, no llega.

> **Detalle importante:** Vite sustituye esta variable **al construir**, no al ejecutar. O sea que Railway tiene que tener la variable puesta *antes* de compilar. Por eso hay que redesplegar cuando la agregas o la cambias, cosa que Railway hace solo. Si el sitio se construyó sin la variable, el código de Analytics ni siquiera queda en el bundle: lo verifiqué, y sin `VITE_GA_ID` no se envía un solo byte a Google.

### Comprobar que funciona

Abre `https://www.jutechnologies.com` y, en Analytics, ve a **Informes → Tiempo real**. Deberías verte a ti mismo en menos de un minuto.

Si no apareces, revisa en esta orden:

1. Que la variable en Railway se llame exactamente `VITE_GA_ID`.
2. Que Railway haya terminado de redesplegar después de guardarla.
3. Que no tengas un bloqueador de anuncios activo, porque bloquean GA.
4. Que no tengas activada la opción "No rastrear" del navegador: el código la respeta a propósito y no carga nada.

### Lo que vas a poder medir

Además de las visitas, dejé instrumentados los eventos que de verdad importan en un portafolio:

| Evento | Cuándo se dispara | Parámetros |
|---|---|---|
| `descarga_cv` | Alguien descarga tu hoja de vida | `idioma` (es/en), `lugar` (hero/contacto) |
| `contacto_whatsapp` | Alguien toca tu número | `lugar` (retrato/contacto) |
| `contacto_email` | Alguien hace clic en tu correo | |

En Analytics aparecen en **Informes → Interacción → Eventos**, con hasta 24 horas de retraso la primera vez.

Un consejo: **márcalos como conversiones**. En **Administrar → Eventos**, activa el interruptor de `descarga_cv` y `contacto_whatsapp`. Así Analytics te reporta cuántas visitas terminan en algo útil, que es la única métrica que importa. Mil visitas sin una descarga de CV no valen nada; veinte visitas con tres descargas sí.

### Sobre a quién vas a ver

Analytics **no te dice quién te visitó por nombre**. Te da país, ciudad, dispositivo, de dónde llegó y qué hizo. Los nombres de personas o empresas no los da ninguna herramienta legal de analítica web; lo que prometen eso son servicios de identificación de IP corporativas, caros y de precisión discutible.

Si quieres saber quién específicamente te está mirando, la herramienta correcta es **LinkedIn**: "Quién ha visto tu perfil" sí te da nombres. Combínalo con esto: pones el enlace del sitio en tu LinkedIn, y cuando veas un pico de visitas en Analytics, cruzas contra quién vio tu perfil ese día.

---

## Parte 3. Google Search Console

Analytics te dice quién ya llegó. Search Console te dice **por qué búsquedas apareces** y si Google tiene problemas para leerte. Para posicionar, esta es la herramienta importante.

1. Entra a [search.google.com/search-console](https://search.google.com/search-console).
2. **Agregar propiedad** → elige **Prefijo de URL** → `https://www.jutechnologies.com`.
3. Para verificar, la vía más fácil es **Google Analytics**, que ya tendrás conectado. Si no la ofrece, usa el método de **etiqueta HTML** y me pasas la etiqueta para agregarla al `index.html`.
4. Ya dentro: menú **Sitemaps** → escribe `sitemap.xml` → **Enviar**.
5. Menú **Inspección de URL** → pega `https://www.jutechnologies.com/` → **Solicitar indexación**.

Ese último paso adelanta el proceso. Sin él, Google puede tardar semanas en pasar por un dominio nuevo.

**Lo primero que debes revisar ahí**, en unos días: la sección de inspección te muestra el HTML que Google ve renderizado. Si tu contenido aparece, la SPA no es problema. Si aparece vacío, hay que prerenderizar. Es la única forma de saberlo con certeza en vez de suponer.

---

## Parte 4. Lo que falta para posicionar de verdad

Aquí viene la parte honesta.

### Vas a rankear por tu nombre, y poco más

Con lo que hay hoy, buscar "José Francisco Urdaneta" te va a encontrar en cuestión de días. Eso ya es valioso: es lo que teclea un recruiter que recibió tu CV y quiere verificarte.

Pero buscar "desarrollador IA Barranquilla" o "consultor crédito digital Colombia" no te va a encontrar, y no es por configuración: **es porque una sola página no puede competir por términos genéricos.** Google reparte posiciones entre páginas, no entre sitios, y tú tienes una.

### El problema de la SPA

Tu sitio pinta todo con JavaScript. Google lo indexa igual en la mayoría de casos, pero con retraso y sin garantías. Otros rastreadores que sí importan —el de LinkedIn cuando alguien comparte tu enlace, el de Bing, los de las herramientas de IA— son bastante peores ejecutando JS.

Hay dos formas de arreglarlo:

- **Prerenderizar en el build**: generar el HTML completo al construir y servirlo ya pintado. Es la solución correcta y no cambia nada de cómo trabajas. Añade un paso al build, así que prefiero hacerlo cuando me digas, y no meterlo por sorpresa en un despliegue que ya te dio problemas.
- **No hacer nada** y verificar en Search Console si Google te está leyendo bien. Si te lee, no hay urgencia.

Mi recomendación: espera a ver el informe de Search Console. Si el HTML renderizado se ve completo, ahorraste trabajo. Si no, prerenderizamos.

### El problema del idioma en una sola URL

Español e inglés viven en la misma dirección y cambian con un botón. Para un visitante está bien; para Google es un problema, porque solo puede indexar una versión y no sabe cuál mostrar a quién.

La solución correcta son dos rutas, `/es` y `/en`, con etiquetas `hreflang` cruzadas. Es un cambio de arquitectura, no un ajuste.

### El camino que sí funciona

Si en serio quieres tráfico de búsqueda, el orden es este:

1. **Convierte cada proyecto en su propia página.** `/proyectos/runcoach-ai`, `/proyectos/zona-barrica`. Ya tienes el contenido escrito y es bueno; hoy está comprimido en una tarjeta. Cada página es una entrada más en Google y puede posicionar por su tema.
2. **Escribe.** El caso de RunCoach —cómo pasaste de un agente con una regla escrita a mano a un sistema RAG con métricas de recuperación medidas— es un artículo que la gente busca de verdad. "Cómo evaluar un sistema RAG" tiene búsquedas. Tu perfil, no.
3. **Consigue enlaces.** Tu GitHub ya apunta al sitio. Agrega el enlace a tu LinkedIn, a Medium si publicas, y a cualquier charla o comunidad donde participes.

Los puntos 1 y 2 son trabajo de contenido, no de configuración. Ahí está el 90% del resultado. Todo lo que hice en la parte 1 es la condición necesaria, no la suficiente.
