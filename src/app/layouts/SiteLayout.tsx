import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { navigation } from '@/content/home'

function Brand({ onClick, className = '' }: { onClick?: () => void; className?: string }) {
  return (
    <Link to="/" className={`site-logo ${className}`} onClick={onClick}>
      <img src="/assets/sketch/brand-mark.png" alt="Saikan" className="saikan-mark" />
      <span>Saikan</span>
    </Link>
  )
}

export function SiteLayout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isContact = pathname === '/contact'

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-ambient" />
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Brand onClick={() => setOpen(false)} />
          <div className="site-menu">
            {navigation.map((item) => <a key={item.href} href={`/${item.href}`}>{item.label}</a>)}
            <Button href="/contact" variant="secondary">Book a Call</Button>
          </div>
          <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
        </nav>
        {open ? (
          <div className="mobile-menu">
            {navigation.map((item) => <a key={item.href} href={`/${item.href}`} onClick={() => setOpen(false)}>{item.label}</a>)}
            <Button href="/contact" variant="primary">Book a Call</Button>
          </div>
        ) : null}
      </header>
      <main className="relative z-10"><Outlet /></main>
      {!isContact ? (
        <div className="mobile-cta-bar" aria-label="Quick actions">
          <Brand />
          <Button href="#operating-model" variant="secondary">Explore Solutions</Button>
          <Button href="/contact" variant="primary">Book a Call</Button>
        </div>
      ) : null}
    </>
  )
}
