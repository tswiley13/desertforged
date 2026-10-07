import { useEffect, useState } from 'react'
import { company, founder, services, process, faq, stack, projects, CONTACT_FORM_EMAIL } from './data'
import './App.css'

const NAV = [
  ['work', 'Our Work'],
  ['services', 'Services'],
  ['process', 'Process'],
  ['about', 'About'],
  ['faq', 'FAQ'],
]

// Fade sections in as they scroll into view.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const YEAR = new Date().getFullYear()

function useTyped(text, speed = 45) {
  const [out, setOut] = useState(reducedMotion ? text : '')
  useEffect(() => {
    if (reducedMotion) return
    let i = 0
    const id = setInterval(() => {
      i++
      setOut(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return out
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <a href="#top" className="logo" aria-label="Desert Forged home">
        <img className="logo-icon" src={`${import.meta.env.BASE_URL}icon.svg`} alt="" width="34" height="34" />
        <span className="logo-text">DESERT <span className="logo-accent">FORGED</span></span>
      </a>
      <button className="nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <nav className={open ? 'open' : ''}>
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="btn btn-sm" href="#contact" onClick={() => setOpen(false)}>Start a project</a>
      </nav>
    </header>
  )
}

function Hero() {
  const typed = useTyped(company.platforms)
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden />
      <h1>{company.headline}</h1>
      <p className="typed">
        {typed}<span className="caret" aria-hidden>_</span>
      </p>
      <p className="lead">{company.pitch}</p>
      <div className="cta">
        <a className="btn" href="#contact">Start a project</a>
        <a className="btn btn-ghost" href="#work">See our work</a>
      </div>
      <div className="terminal" aria-hidden>
        <div className="term-bar"><i /><i /><i /><span>~/desertforged — zsh</span></div>
        <pre>
          <span className="c-dim">$</span> ls ~/shipped{'\n'}
          <span className="c-acc">stryde/</span>{'  '}<span className="c-acc">fitcrew/</span>{'  '}<span className="c-dim">your-app/</span>{'\n'}
          <span className="c-dim">$</span> cat stack.json{'\n'}
          {'{ '}<span className="c-key">"apps"</span>: [<span className="c-str">"React"</span>, <span className="c-str">"React Native"</span>, <span className="c-str">"SwiftUI"</span>],{'\n'}
          {'  '}<span className="c-key">"backend"</span>: [<span className="c-str">"Supabase"</span>, <span className="c-str">"Postgres"</span>]{' }'}{'\n'}
          <span className="c-dim">$</span> <span className="caret">▋</span>
        </pre>
      </div>
    </section>
  )
}

function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section reveal">
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
      {children}
    </section>
  )
}

function Services() {
  return (
    <Section id="services" title="What We Build" intro="Custom software for startups and small businesses, built on the same stack behind our own products.">
      <div className="services">
        {services.map((s) => (
          <div className="card service" key={s.title}>
            <span className="icon" aria-hidden>{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <ul className="chips stack" aria-label="Technologies">{stack.map((t) => <li key={t}>{t}</li>)}</ul>
    </Section>
  )
}

function Process() {
  return (
    <Section id="process" title="How We Work">
      <ol className="process">
        {process.map((step, i) => (
          <li key={step.title}>
            <span className="step mono">0{i + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Faq() {
  return (
    <Section id="faq" title="Questions">
      <div className="faq">
        {faq.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

function About() {
  const { linkedin, github, resume } = founder.links
  return (
    <Section id="about" title="About">
      <div className="founder">
        <div className="founder-card card">
          <span className="avatar mono" aria-hidden>TW</span>
          <div>
            <h3>{founder.name}</h3>
            <p className="mono sub">{founder.title}</p>
          </div>
          <ul className="founder-links mono">
            <li><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
            <li><a href={github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
            {resume && <li><a href={resume} target="_blank" rel="noreferrer">Résumé ↗</a></li>}
          </ul>
        </div>
        <div className="founder-bio">{founder.bio.map((p) => <p key={p}>{p}</p>)}</div>
      </div>
    </Section>
  )
}

function ProjectMedia({ media }) {
  if (media.layout === 'browser') {
    const [shot] = media.images
    return (
      <div className="browser">
        <div className="term-bar"><i /><i /><i /></div>
        <img src={shot.src} alt={shot.alt} loading="lazy" />
      </div>
    )
  }
  return (
    <div className="phones">
      {media.images.map((im) => <img key={im.src} src={im.src} alt={im.alt} loading="lazy" />)}
    </div>
  )
}

function Projects() {
  return (
    <Section id="work" title="Our Work" intro="Three products we designed, built and launched ourselves.">
      <div className="projects">
        {projects.map((p, i) => (
          <article key={p.name} className={`project ${i % 2 ? 'flip' : ''}`}>
            <div className="project-body">
              <div className="project-head">
                <img className="app-icon" src={p.icon} alt="" width="56" height="56" />
                <div>
                  <h3>{p.name}</h3>
                  <p className="mono sub">{p.tagline}</p>
                </div>
              </div>
              <p className="status mono">● {p.status}</p>
              <p className="desc">{p.description}</p>
              <ul className="highlights">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              <dl className="stats">
                {p.stats.map(([v, l]) => <div key={l}><dt>{v}</dt><dd>{l}</dd></div>)}
              </dl>
              <ul className="chips small">{p.stack.map((t) => <li key={t}>{t}</li>)}</ul>
              <p className="platforms mono">{p.platforms.join(' · ')}</p>
              <div className="project-links">
                {p.url && <a className="btn btn-sm" href={p.url} target="_blank" rel="noreferrer">Visit {p.name} ↗</a>}
              </div>
            </div>
            <ProjectMedia media={p.media} />
          </article>
        ))}
      </div>
    </Section>
  )
}

function ContactForm() {
  const [state, setState] = useState('idle') // idle | sending | sent | error
  async function onSubmit(e) {
    e.preventDefault()
    setState('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_FORM_EMAIL}`, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error()
      e.target.reset()
      setState('sent')
    } catch {
      setState('error')
    }
  }
  if (state === 'sent') return <p className="card success">Thanks! Your message is on its way. We’ll get back to you within two business days.</p>
  return (
    <form className="card form" onSubmit={onSubmit}>
      <div className="row">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className="row">
        <label>Project type
          <select name="project_type" defaultValue="Mobile app">
            <option>Mobile app</option><option>Web app</option><option>Mobile + web</option><option>Not sure yet</option>
          </select>
        </label>
        <label>Budget
          <select name="budget" defaultValue="Not sure yet">
            <option>Under $5k</option><option>$5k – $15k</option><option>$15k – $50k</option><option>$50k+</option><option>Not sure yet</option>
          </select>
        </label>
      </div>
      <input type="hidden" name="_subject" value="New project inquiry from desertforged.com" />
      <input type="text" name="_honey" className="honeypot" tabIndex="-1" autoComplete="off" aria-hidden />
      <label>Tell us about your project<textarea name="message" rows="5" required /></label>
      <button className="btn" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {state === 'error' && <p className="error">Something went wrong. Please try again, or reach out on LinkedIn.</p>}
    </form>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Start a Project">
      <div className="contact">
        <div>
          <p className="lead">Have an app idea or a product that needs building? Tell us what you have in mind and we’ll follow up to talk it through.</p>
          <p className="contact-note">No commitment. The first call is free.</p>
          {!CONTACT_FORM_EMAIL && (
            <ul className="contact-links">
              <li><a href={founder.links.linkedin} target="_blank" rel="noreferrer">Message us on LinkedIn ↗</a></li>
            </ul>
          )}
        </div>
        {CONTACT_FORM_EMAIL ? <ContactForm /> : null}
      </div>
    </Section>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <footer className="mono">
        © {YEAR} {company.name}
      </footer>
    </>
  )
}
