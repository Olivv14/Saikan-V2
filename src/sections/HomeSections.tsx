import type { CSSProperties } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Box,
  Check,
  RefreshCw,
  Search,
  X,
} from 'lucide-react'
import { Carousel } from '@/components/carousel/Carousel'
import { Button } from '@/components/ui/Button'
import { architecture, businessLines, clientSolutions, hero, products, thesis, ventureStudio } from '@/content/home'

type StyleVars = CSSProperties & Record<'--accent', string>

function Mark({ className = '' }: { className?: string }) {
  return <img src="/assets/sketch/brand-mark.png" alt="Saikan" className={`saikan-mark ${className}`} />
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

function Headline({ lines, blue = [] }: { lines: string[]; blue?: string[] }) {
  return (
    <h2 className="section-title">
      {lines.map((line) => (
        <span key={line} className={blue.includes(line) ? 'text-blue' : undefined}>
          {line}
        </span>
      ))}
    </h2>
  )
}

function GlowIcon({ children, accent = '#6fa0ff' }: { children: React.ReactNode; accent?: string }) {
  return (
    <span className="glow-icon" style={{ '--accent': accent } as StyleVars}>
      {children}
    </span>
  )
}

export function Hero() {
  return (
    <section id="hero" className="home-section hero-section">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="hero-title">
            <span>Your</span>
            <span>operations.</span>
            <span className="text-blue">Smarter.</span>
            <span>Always.</span>
          </h1>
          <p className="hero-lead">{hero.description}</p>
          <div className="hero-actions">
            <Button href="#operating-model" variant="secondary">Explore Solutions</Button>
            <Button href="/contact" variant="primary">Book a Call <ArrowRight size={14} /></Button>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-orb" />
          <img src={hero.image} alt="" />
        </div>
      </div>
    </section>
  )
}

function ThesisFlow({ mode }: { mode: 'inputs' | 'capabilities' | 'outcomes' }) {
  if (mode === 'capabilities') {
    return (
      <div className="capability-grid">
        {thesis.capabilities.map(([title, desc, accent, Icon]) => (
          <div className="mini-card" key={String(title)} style={{ '--accent': String(accent) } as StyleVars}>
            <GlowIcon accent={String(accent)}>{Icon ? <Icon size={17} /> : <span className="tiny-247">24/7</span>}</GlowIcon>
            <h3>{String(title)}</h3>
            <p>{String(desc)}</p>
          </div>
        ))}
      </div>
    )
  }

  const items = mode === 'inputs' ? thesis.inputs : thesis.outcomes
  return (
    <div className={`flow-visual ${mode}`}>
      <div className="flow-core">
        <span>saikan</span>
        <small>OS</small>
      </div>
      <div className="flow-list">
        {items.map((item, index) => {
          const label = String(item[0])
          const accent = mode === 'inputs' ? String(item[2]) : String(item[2])
          const Icon = mode === 'inputs' ? item[1] : item[3]
          return (
            <div className="flow-item" style={{ '--accent': accent } as StyleVars} key={label}>
              <GlowIcon accent={accent}>{Icon ? <Icon size={18} /> : null}</GlowIcon>
              <span>{label}</span>
              <i className={`connector c${index + 1}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Thesis() {
  const thesisSlides = [
    <ThesisFlow key="inputs" mode="inputs" />,
    <ThesisFlow key="capabilities" mode="capabilities" />,
    <ThesisFlow key="outcomes" mode="outcomes" />,
  ]

  return (
    <section id="operating-model" className="home-section thesis-section">
      <div className="page-shell">
        <Eyebrow>{thesis.eyebrow}</Eyebrow>
        <Headline lines={thesis.titleLines} />
        <div className="section-copy">{thesis.description.map((line) => <p key={line}>{line}</p>)}</div>
        <div className="mobile-carousel thesis-carousel">
          <Carousel items={thesisSlides} ariaLabel="Saikan thesis visuals" renderItem={(slide) => slide} />
        </div>
        <div className="desktop-triad">
          <ThesisFlow mode="inputs" />
          <ThesisFlow mode="capabilities" />
          <ThesisFlow mode="outcomes" />
        </div>
      </div>
    </section>
  )
}

function LayerDeck() {
  return (
    <div className="layer-deck-card">
      <img src="/assets/sketch/system-stack.webp" alt="" />
      <div className="layer-list">
        {architecture.layers.map((layer) => (
          <a href={`#layer-${layer.id}`} key={layer.id} style={{ '--accent': layer.accent } as StyleVars}>
            <GlowIcon accent={layer.accent}><layer.Icon size={16} /></GlowIcon>
            <span>{layer.title}</span>
            <ArrowRight size={14} />
          </a>
        ))}
      </div>
    </div>
  )
}

function LayerFeature({ layer }: { layer: typeof architecture.layers[number] }) {
  return (
    <article id={`layer-${layer.id}`} className="layer-feature" style={{ '--accent': layer.accent } as StyleVars}>
      <div className="layer-feature-copy">
        <h3><layer.Icon size={16} /> <span>{layer.title}</span></h3>
        <p>{layer.lead}</p>
        <div className="pill-stack">{layer.points.map((point) => <span key={point}>{point}</span>)}</div>
      </div>
      <img src={layer.image} alt="" />
    </article>
  )
}

export function Architecture() {
  const architectureSlides = [
    <LayerDeck key="deck" />,
    ...architecture.layers.map((layer) => <LayerFeature key={layer.id} layer={layer} />),
  ]

  return (
    <section id="architecture" className="home-section architecture-section">
      <div className="page-shell">
        <Eyebrow>{architecture.eyebrow}</Eyebrow>
        <Headline lines={architecture.title} blue={['four layers.']} />
        <div className="section-copy">{architecture.description.map((line) => <p key={line}>{line}</p>)}</div>
        <div className="mobile-carousel architecture-carousel">
          <Carousel items={architectureSlides} ariaLabel="Saikan architecture layers" renderItem={(slide) => slide} />
        </div>
        <div className="desktop-architecture">
          <LayerDeck />
          {architecture.layers.map((layer) => <LayerFeature key={layer.id} layer={layer} />)}
        </div>
      </div>
    </section>
  )
}

export function BusinessLines() {
  return (
    <section id="business-lines" className="home-section business-section">
      <div className="page-shell">
        <Eyebrow>{businessLines.eyebrow}</Eyebrow>
        <Headline lines={businessLines.titleLines} />
        <p className="section-copy single">{businessLines.description}</p>
        <div className="business-grid">
          {businessLines.items.map((item) => (
            <article className={`business-card ${item.key}`} key={item.key}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <img src={item.asset} alt="" />
              <a href={`#${item.targetId}`}>{item.cta} <ArrowRight size={13} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CompareCard({ title, items, negative, image }: { title: string; items: string[]; negative?: boolean; image: string }) {
  return (
    <article className={`compare-card ${negative ? 'negative' : 'positive'}`}>
      <div>
        <p>{title}</p>
        <ul>
          {items.map((item) => (
            <li key={item}>{negative ? <X size={13} /> : <Check size={13} />}<span>{item}</span></li>
          ))}
        </ul>
      </div>
      <img src={image} alt="" />
    </article>
  )
}

function ProcessCard() {
  const icons = [Search, Box, RefreshCw]
  return (
    <article className="process-card">
      <Eyebrow>Our Process</Eyebrow>
      <h3>From discovery to operational intelligence.</h3>
      <div className="process-list">
        {clientSolutions.steps.map(([number, title, body], index) => {
          const Icon = icons[index]
          return (
            <div className="process-step" key={String(number)}>
              <span className="step-number">{String(number)}</span>
              <GlowIcon><Icon size={21} /></GlowIcon>
              <div>
                <strong>{String(title)}</strong>
                <p>{String(body)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export function ClientSolutions() {
  const slides = [
    <div className="compare-pair" key="compare">
      <CompareCard title="Before Saikan" items={clientSolutions.beforeItems} negative image="/assets/sketch/client-before.png" />
      <div className="down-badge"><ArrowDown size={22} /></div>
      <CompareCard title="After Saikan" items={clientSolutions.afterItems} image="/assets/sketch/client-after.png" />
    </div>,
    <ProcessCard key="process" />,
  ]

  return (
    <section id="client-solutions" className="home-section client-section">
      <div className="page-shell">
        <Eyebrow>{clientSolutions.eyebrow}</Eyebrow>
        <Headline lines={clientSolutions.titleLines} />
        <p className="section-copy single">{clientSolutions.description}</p>
        <div className="mobile-carousel client-carousel"><Carousel items={slides} ariaLabel="Client solution process" renderItem={(slide) => slide} /></div>
        <div className="desktop-client">
          <div className="compare-pair">{slides[0]}</div>
          <ProcessCard />
        </div>
      </div>
    </section>
  )
}

function ProductCard({ item, compact = false }: { item: typeof products.items[number]; compact?: boolean }) {
  const [name, audience, body, logo, accent, points] = item
  return (
    <article className={`product-card ${compact ? 'compact' : ''}`} style={{ '--accent': String(accent) } as StyleVars}>
      <div>
        <p className="tag">{String(audience)}</p>
        <h3>{String(name)}</h3>
        <p>{String(body)}</p>
        <div className="pill-stack">{(points as string[]).map((point) => <span key={point}>{point}</span>)}</div>
      </div>
      <img src={String(logo)} alt={`${String(name)} logo`} />
    </article>
  )
}

export function Products() {
  const slides = [
    <div className="product-grid" key="grid">{products.items.map((item) => <ProductCard key={String(item[0])} item={item} compact />)}</div>,
    ...products.items.map((item) => <ProductCard key={String(item[0])} item={item} />),
  ]

  return (
    <section id="products" className="home-section products-section">
      <div className="page-shell">
        <div className="product-hero">
          <div>
            <Eyebrow>{products.eyebrow}</Eyebrow>
            <Headline lines={products.titleLines} blue={products.highlightedLines} />
            <p className="section-copy single">{products.description}</p>
          </div>
          <img src="/assets/sketch/products-hero-art.webp" alt="" />
        </div>
        <div className="mobile-carousel products-carousel"><Carousel items={slides} ariaLabel="Saikan products" renderItem={(slide) => slide} /></div>
        <div className="desktop-products product-grid">{products.items.map((item) => <ProductCard key={String(item[0])} item={item} compact />)}</div>
      </div>
    </section>
  )
}

function VentureOrbit() {
  return <img src="/assets/sketch/venture-orbit-art.webp" alt="" className="venture-orbit" />
}

function VentureCard({ item, compact = false }: { item: typeof ventureStudio.items[number]; compact?: boolean }) {
  const [name, eyebrow, body, logo, accent] = item
  const tags = String(eyebrow).split(' ')
  return (
    <article className={`venture-card ${compact ? 'compact' : ''}`} style={{ '--accent': String(accent) } as StyleVars}>
      <div>
        <h3>{String(name)}</h3>
        <p className="tag">{String(eyebrow)}</p>
        <p>{String(body)}</p>
        <div className="pill-stack">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <img src={String(logo)} alt={`${String(name)} logo`} />
      <ArrowRight size={14} className="card-arrow" />
    </article>
  )
}

function VentureFeature({ item }: { item: typeof ventureStudio.items[number] }) {
  const [, eyebrow, body, logo] = item
  const titleMap: Record<string, string> = {
    'Research Lab': 'Applied research for the next operating systems.',
    'Consumer AI': 'A lightweight system for everyday momentum.',
    'Food Venture': 'A venture built from one shared stack.',
  }
  return (
    <div className="venture-feature">
      <div>
        <Eyebrow>{String(eyebrow)}</Eyebrow>
        <h3>{titleMap[String(eyebrow)]}</h3>
        <p>{String(body)}</p>
        <div className="pill-stack">{String(eyebrow).split(' ').map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <img src={String(logo)} alt="" />
    </div>
  )
}

export function VentureStudio() {
  const more = ['More', 'Venture Studio', 'Explore the companies built from the Saikan operating stack.', '/assets/sketch/logo-nest.png', '#82a5ff'] as typeof ventureStudio.items[number]
  const slides = [
    <div className="venture-grid" key="grid">
      {ventureStudio.items.map((item) => <VentureCard item={item} key={String(item[0])} compact />)}
      <VentureCard item={more} compact />
    </div>,
    ...ventureStudio.items.map((item) => <VentureFeature key={String(item[0])} item={item} />),
  ]

  return (
    <section id="venture-studio" className="home-section venture-section">
      <div className="page-shell">
        <div className="venture-hero">
          <div>
            <Eyebrow>{ventureStudio.eyebrow}</Eyebrow>
            <Headline lines={ventureStudio.titleLines} blue={ventureStudio.highlightedLines} />
            <p className="section-copy single">{ventureStudio.description}</p>
          </div>
          <VentureOrbit />
        </div>
        <div className="mobile-carousel venture-carousel"><Carousel items={slides} ariaLabel="Saikan venture studio" renderItem={(slide) => slide} /></div>
        <div className="desktop-ventures venture-grid">
          {ventureStudio.items.map((item) => <VentureCard item={item} key={String(item[0])} compact />)}
          <VentureCard item={more} compact />
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section id="final-cta" className="home-section final-section">
      <div className="page-shell final-shell">
        <Mark />
        <h2>Built to scale.<br />Designed to compound.</h2>
        <p>One system. Three business lines.<br />Infinite potential.</p>
        <div className="final-actions">
          <Button href="#operating-model" variant="secondary">Explore Solutions</Button>
          <Button href="/contact" variant="primary">Book a Call <ArrowRight size={13} /></Button>
        </div>
        <div className="planet-line" />
        <footer>© 2026 SAIKAN HOLDINGS<br /><span>8 ventures under management</span><br /><span>Terms · Privacy</span></footer>
      </div>
    </section>
  )
}
