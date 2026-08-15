# Imagen del hero: prompts y cómo montarla

El sitio ya trae un hero con un visual vectorial animado propio (`HeroVisual` en
`src/visuals.jsx`): la pila de datos abajo, los servicios en medio y el núcleo de
inteligencia arriba, con partículas subiendo a través de las capas. Es nítido en cualquier
pantalla, pesa cero bytes de red y dice exactamente a qué te dedicas.

Si quieres reemplazarlo por una imagen generada, aquí están los prompts y el procedimiento.

---

## Antes de generar: dos advertencias

1. **Nada de texto en la imagen.** Los generadores escriben letras deformes. Todos los prompts
   de abajo lo prohíben explícitamente. El texto del hero ya lo pone el HTML.
2. **Nada de caras ni de personas.** Una foto de stock con gente sonriendo baja la credibilidad
   de un perfil técnico. Lo que suma es abstracción arquitectónica.

---

## Prompt 1. Arquitectura de agentes (el que recomiendo)

Es el más alineado con tu posicionamiento: sistemas de IA que razonan, no "IA" genérica.

```
A clean, minimalist 3D isometric illustration of a modern AI system architecture,
rendered on a pure white background. Floating translucent glass panels arranged in
layers connected by thin glowing lines: a single node at the top, three parallel
processing nodes in the middle layer, and a dense cluster of small glowing points
at the bottom representing a vector database. Soft indigo blue (#2C4BCE) and teal
(#0E9F9F) accent lighting, frosted glass materials, subtle depth of field, generous
negative space, very soft ambient shadows. Corporate, precise, calm. Editorial tech
illustration style, high detail, no text, no letters, no numbers, no logos, no people.
```

Ajustes útiles:

- Más frío y sobrio: cambia `soft ambient shadows` por `crisp studio lighting`.
- Más aire: agrega `composition weighted to the right side of the frame` (así el texto del hero respira a la izquierda).

---

## Prompt 2. Flujo de datos financieros

Si prefieres inclinarlo hacia el lado fintech en vez del lado IA.

```
Abstract minimalist 3D illustration of financial data flowing through a digital
lending pipeline, on a clean white background. Smooth translucent ribbons of light
moving left to right through a series of floating geometric checkpoints, each
checkpoint a simple rounded glass block. Indigo blue (#2C4BCE) and teal (#0E9F9F)
gradients, soft reflections, elegant negative space, shallow depth of field.
Premium enterprise software aesthetic, calm and precise, no text, no letters,
no numbers, no charts, no logos, no people.
```

---

## Prompt 3. Nodo de conocimiento

Más conceptual y más fácil de acertar a la primera. Buen plan B.

```
Minimalist abstract 3D render of a glowing knowledge network on a pure white
background. A central sphere of soft indigo light surrounded by orbiting rings of
tiny luminous particles at varying depths, connected by delicate thin lines. Indigo
blue (#2C4BCE) core fading to teal (#0E9F9F) at the edges. Frosted glass and soft
matte materials, gentle volumetric light, lots of white space, extremely clean.
Editorial illustration for a technology company, no text, no letters, no logos,
no people.
```

---

## Cómo montarla en el sitio

1. Genera la imagen y expórtala en **formato cuadrado o 4:5 vertical**, mínimo 1200 px de lado.
2. Conviértela a WebP para que pese poco:

   ```bash
   # macOS, con Homebrew: brew install webp
   cwebp -q 82 hero.png -o hero.webp
   ```

3. Guarda el archivo en `public/hero.webp`.
4. En `src/App.jsx`, dentro de `<Hero>`, cambia:

   ```jsx
   <HeroVisual />
   ```

   por:

   ```jsx
   <div className="hero-art">
     <img src="/hero.webp" alt="" className="hero-art-img" width="1200" height="1200" />
   </div>
   ```

   La clase `hero-art-img` ya existe en `styles.css` con bordes redondeados y sombra.

5. `npm run build` y listo.

> Si la imagen sale con fondo blanco puro, quítale la sombra: en `styles.css`, borra
> `box-shadow: var(--shadow-lg);` de `.hero-art-img`. Sobre fondo claro, una sombra
> alrededor de un cuadro blanco se ve sucia.

---

## Criterio para elegir entre las opciones

Si dudas, quédate con el visual vectorial que ya viene. Una imagen generada es más
vistosa el primer segundo; el visual animado comunica una arquitectura real, se mueve,
y sobrevive a la segunda mirada de alguien técnico. Y no envejece: cuando el estilo de
las imágenes de IA cambie :y va a cambiar:, un diagrama limpio seguirá viéndose bien.

También hay una razón práctica: el visual del hero y los siete de los proyectos forman
un sistema coherente. Meter una imagen fotorrealista en el hero y dejar vectores abajo
rompe esa unidad.
