import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { navigation } from '@/content/home'

export function SiteLayout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isContact = pathname === '/contact'
  return <>
    <div className="fixed inset-0 -z-10 bg-ambient" />
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3 font-semibold tracking-tight" onClick={() => setOpen(false)}><img src="/assets/sketch/brand-mark.png" alt="Saikan" className="h-8 w-8 object-contain" /><span>Saikan</span></Link>
        <div className="hidden items-center gap-7 md:flex">{navigation.map((item) => <a key={item.href} href={`/${item.href}`} className="text-sm text-muted transition hover:text-white">{item.label}</a>)}<Button href="/contact" variant="secondary">Book a Call</Button></div>
        <button className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 md:hidden" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </nav>
      {open ? <div className="border-t border-white/10 bg-black/95 px-4 py-4 md:hidden"><div className="flex flex-col gap-3">{navigation.map((item) => <a key={item.href} href={`/${item.href}`} onClick={() => setOpen(false)} className="rounded-2xl px-3 py-3 text-sm text-muted hover:bg-white/5 hover:text-white">{item.label}</a>)}<Button href="/contact" variant="primary" className="mt-2">Book a Call</Button></div></div> : null}
    </header>
    <main className="relative z-10"><Outlet /></main>
    {!isContact ? <footer className="border-t border-white/10 py-10 text-center text-sm text-muted"><p>© {new Date().getFullYear()} Saikan. AI operating systems.</p></footer> : null}
  </>
}
