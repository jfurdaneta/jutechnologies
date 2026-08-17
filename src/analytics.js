/* ---------------------------------------------------------------------------
 * Google Analytics 4.
 *
 * Solo se carga si existe la variable de entorno VITE_GA_ID y si estamos en
 * producción. En desarrollo no se carga nunca: si no, tus propias recargas
 * mientras programas ensucian las estadísticas.
 *
 * Para activarlo, define VITE_GA_ID en Railway con tu ID de medición (G-XXXXXXXXXX).
 * Sin esa variable el sitio funciona igual y no carga nada de Google.
 * ------------------------------------------------------------------------- */

export function initAnalytics() {
  const id = import.meta.env.VITE_GA_ID
  if (!id || import.meta.env.DEV) return

  // Respetar la señal "no rastrear" del navegador. No es obligatorio por ley
  // en la mayoría de países, pero es lo correcto y cuesta dos líneas.
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag

  gtag('js', new Date())
  gtag('config', id, {
    anonymize_ip: true,
    send_page_view: true,
  })
}

/* Registra un evento. Úsalo para medir lo que de verdad importa en un
 * portafolio: quién descarga el CV y quién escribe por WhatsApp.
 * Si GA no está activo, no hace nada. */
export function track(name, params = {}) {
  if (typeof window.gtag === 'function') window.gtag('event', name, params)
}
