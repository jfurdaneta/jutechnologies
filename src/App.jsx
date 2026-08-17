import { useEffect, useState, useCallback } from 'react'
import { content, profile, projectList, term } from './content.js'
import { HeroVisual, ProjectVisual } from './visuals.jsx'
import { track } from './analytics.js'

/* Renderiza **negrita** y `código` dentro de un texto plano. */
function rich(text) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>
    return part
  })
}

/* Glifo de WhatsApp. Es una forma rellena, no un trazo, así que va aparte
   del set de iconos de línea. */
const WhatsAppIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.885 3.4" />
  </svg>
)

/* ------------------------------------------------------------------ icons */
const Icon = ({ name }) => {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const paths = {
    credit: <><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M2 10h20M6 15h4" /></>,
    agent: <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="M6.8 6.8 9.9 9.9M17.2 6.8 14.1 9.9M6.8 17.2 9.9 14.1M17.2 17.2 14.1 14.1" /></>,
    id: <><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><circle cx="8.5" cy="11" r="2.2" /><path d="M5 16.2c.8-1.5 2-2.2 3.5-2.2s2.7.7 3.5 2.2M14.5 9.5h4M14.5 13h4" /></>,
    chart: <><path d="M3 3v18h18" /><path d="M7 15l3.5-4.5 3 3L20 7" /></>,
    code: <><path d="m8 6-6 6 6 6M16 6l6 6-6 6M13.5 4l-3 16" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.7-4.7" /></>,
    external: <><path d="M14 4h6v6M20 4l-9 9M18 14v5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5H10" /></>,
    mail: <><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
    phone: <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3z" />,
    pin: <><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></>,
    doc: <><path d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z" /><path d="M13.5 3v5.5H19M9 13h6M9 17h4" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" /></>,
    github: <path d="M9 19c-4 1.4-4-2.2-5.5-2.7M15 21v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.5 5.5 2.8 5.5 2.8a4.3 4.3 0 0 0-.1 3.3A4.7 4.7 0 0 0 4 9.4c0 4.6 2.8 5.6 5.5 6A3 3 0 0 0 8.7 18V21" />,
  }
  return <svg {...common} aria-hidden="true">{paths[name]}</svg>
}

/* ------------------------------------------------------------------ header */
function Header({ t, lang, toggleLang }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['about', t.nav.about], ['work', t.nav.work], ['stack', t.nav.stack],
    ['services', t.nav.services], ['experience', t.nav.experience], ['contact', t.nav.contact],
  ]

  return (
    <header className={`site-header${solid ? ' is-solid' : ''}`}>
      <div className="wrap header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <img className="brand-mark" src="/logo-ju.svg" alt="" width="107" height="100" />
          <span className="brand-text">
            <strong>{profile.brand}</strong>
            <small>{profile.name}</small>
          </span>
        </a>

        <nav className={`site-nav${open ? ' is-open' : ''}`} aria-label="Principal">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <button type="button" className="lang-btn" onClick={toggleLang} aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}>
            {t.langToggle}
          </button>
        </nav>

        <button
          type="button"
          className={`burger${open ? ' is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

/* -------------------------------------------------------------------- hero */
function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">{t.hero.eyebrow}</p>
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-lead">{t.hero.lead}</p>

            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">{t.hero.ctaWork}</a>
              <a href="#contact" className="btn btn-ghost">{t.hero.ctaContact}</a>
              <a href={t.lang === 'es' ? '/cv/CV_Jose_Urdaneta_ES.pdf' : '/cv/CV_Jose_Urdaneta_EN.pdf'}
                 className="btn btn-quiet" download
                 onClick={() => track('descarga_cv', { idioma: t.lang, lugar: 'hero' })}>
                <Icon name="doc" /> {t.hero.ctaCv}
              </a>
            </div>

            <p className="hero-status"><span className="dot" aria-hidden="true" />{t.hero.available}</p>
          </div>

          <HeroVisual legend={t.heroLegend} />
        </div>

        <ul className="metrics">
          {t.metrics.map((m) => (
            <li key={m.label}>
              <span className="metric-value">{m.value}</span>
              <span className="metric-label">{m.label}</span>
              <span className="metric-sub">{m.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------- about */
function About({ t }) {
  const a = t.about
  return (
    <section className="section" id="about">
      <div className="wrap">
        <p className="kicker">{a.kicker}</p>
        <h2 className="section-title">{a.title}</h2>
        <div className="about-grid">
          <div className="about-body">
            {a.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <aside className="about-side">
            <figure className="portrait">
              <img
                src="/perfil-ju.webp"
                alt={`${profile.name}, ${t.hero.eyebrow}`}
                width="900" height="900" loading="lazy" decoding="async"
              />
              <figcaption>
                <strong>{profile.name}</strong>
                <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer"
                   onClick={() => track('contacto_whatsapp', { lugar: 'retrato' })}>
                  <WhatsAppIcon className="wa-glyph" /> {profile.phone}
                </a>
                <span>{profile.location}</span>
              </figcaption>
            </figure>

            <div className="side-block">
              <p className="kicker sm">{a.education.kicker}</p>
              {a.education.items.map((e) => (
                <div className="edu" key={e.title}>
                  <strong>{e.title}</strong>
                  <span>{e.org}</span>
                  <small>{e.note}</small>
                </div>
              ))}
            </div>
            <div className="side-block">
              <p className="kicker sm">{a.languages.kicker}</p>
              <ul className="plain">
                {a.languages.items.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------- work */
function Work({ t }) {
  const lang = t.lang
  const pick = (v) => (typeof v === 'string' ? v : v?.[lang])

  return (
    <section className="section section-alt" id="work">
      <div className="wrap">
        <p className="kicker">{t.work.kicker}</p>
        <h2 className="section-title">{t.work.title}</h2>
        <p className="section-lead">{t.work.lead}</p>

        <div className="project-grid">
          {projectList.map((p) => (
            <article className={`project${p.featured ? ' is-featured' : ''}`} key={p.id}>
              <ProjectVisual name={p.visual} legend={p.legend?.[lang]} />

              <div className="project-head">
                <span className="pill">{pick(p.tag)}</span>
                <span className="project-year">{p.year}</span>
              </div>

              <h3 className="project-name">{pick(p.name)}</h3>
              <p className="project-org">{pick(p.org)}</p>
              <p className="project-role"><span>{t.work.roleLabel}</span> {pick(p.role)}</p>
              <p className="project-body">{rich(p[lang])}</p>

              {p.metrics?.length > 0 && (
                <ul className="project-metrics">
                  {p.metrics.map((m) => (
                    <li key={m.value + m[lang]}>
                      <strong>{m.value}</strong>
                      <span>{m[lang]}</span>
                    </li>
                  ))}
                </ul>
              )}

              <ul className="chips">
                {p.tech.map((tech) => <li key={tech}>{term(tech, lang)}</li>)}
              </ul>

              {(p.url || p.links) && (
                <div className="project-links">
                  {p.url && (
                    <a className="project-link" href={p.url} target="_blank" rel="noopener noreferrer">
                      {t.work.visit} <Icon name="external" />
                    </a>
                  )}
                  {p.links?.map((l) => (
                    <a className="project-link" key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.label} <Icon name="external" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------- stack */
function Stack({ t }) {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <p className="kicker">{t.stack.kicker}</p>
        <h2 className="section-title">{t.stack.title}</h2>
        <p className="section-lead">{t.stack.lead}</p>

        <div className="stack-grid">
          {t.stack.groups.map((g) => (
            <div className="stack-group" key={g.id}>
              <h3>{g.title}</h3>
              <ul className="chips">
                {g.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- services */
function Services({ t }) {
  return (
    <section className="section section-alt" id="services">
      <div className="wrap">
        <p className="kicker">{t.services.kicker}</p>
        <h2 className="section-title">{t.services.title}</h2>
        <p className="section-lead">{t.services.lead}</p>

        <div className="service-grid">
          {t.services.items.map((s) => (
            <article className="service" key={s.title}>
              <span className="service-icon"><Icon name={s.icon} /></span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>

        <a href="#contact" className="btn btn-primary center-btn">{t.services.cta}</a>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- experience */
function Experience({ t }) {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <p className="kicker">{t.experience.kicker}</p>
        <h2 className="section-title">{t.experience.title}</h2>

        <ol className="timeline">
          {t.experience.items.map((e) => (
            <li key={e.org + e.period}>
              <div className="tl-head">
                <h3>{e.org}</h3>
                <span className="tl-period">{e.period}</span>
              </div>
              <p className="tl-roles">{e.roles}</p>
              <p className="tl-place">{e.place}</p>
              <ul className="tl-bullets">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- contact */
function Contact({ t }) {
  const c = t.contact
  return (
    <section className="section section-dark" id="contact">
      <div className="wrap">
        <p className="kicker on-dark">{c.kicker}</p>
        <h2 className="section-title on-dark">{c.title}</h2>
        <p className="section-lead on-dark">{c.lead}</p>

        <div className="contact-grid">
          <a className="contact-card" href={`mailto:${profile.email}`}
             onClick={() => track('contacto_email')}>
            <Icon name="mail" />
            <span className="cc-label">{c.emailLabel}</span>
            <strong>{profile.email}</strong>
          </a>
          <a className="contact-card" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer"
             onClick={() => track('contacto_whatsapp', { lugar: 'contacto' })}>
            <WhatsAppIcon className="wa-glyph cc-icon" />
            <span className="cc-label">{c.phoneLabel}</span>
            <strong>{profile.phone}</strong>
          </a>
          <a className="contact-card" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" />
            <span className="cc-label">LinkedIn</span>
            <strong>{profile.linkedinHandle}</strong>
          </a>
          <a className="contact-card" href={profile.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" />
            <span className="cc-label">GitHub</span>
            <strong>@jfurdaneta</strong>
          </a>
        </div>

        <div className="cv-row">
          <a className="btn btn-light" href="/cv/CV_Jose_Urdaneta_ES.pdf" download
             onClick={() => track('descarga_cv', { idioma: 'es', lugar: 'contacto' })}><Icon name="doc" /> {c.cvEs}</a>
          <a className="btn btn-outline-light" href="/cv/CV_Jose_Urdaneta_EN.pdf" download
             onClick={() => track('descarga_cv', { idioma: 'en', lugar: 'contacto' })}><Icon name="doc" /> {c.cvEn}</a>
        </div>

        <p className="contact-location"><Icon name="pin" /> {c.locationLabel}: {profile.location}</p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ footer */
function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {profile.brand} · {profile.name}. {t.footer.rights}</p>
        <p className="footer-built">{t.footer.built}</p>
      </div>
    </footer>
  )
}

/* --------------------------------------------------------------------- app */
export default function App() {
  const [lang, setLang] = useState(() => {
    if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('en')) return 'en'
    return 'es'
  })

  const t = content[lang]

  const toggleLang = useCallback(() => setLang((l) => (l === 'es' ? 'en' : 'es')), [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'es'
      ? `${profile.name} · Director de Operaciones Tecnológicas · ${profile.brand}`
      : `${profile.name} · Director of Technology Operations · ${profile.brand}`
  }, [lang])

  return (
    <>
      <Header t={t} lang={lang} toggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Work t={t} />
        <Stack t={t} />
        <Services t={t} />
        <Experience t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  )
}
