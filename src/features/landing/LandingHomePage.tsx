import './styles/index.css'

import Architecture from './sections/architecture'
import ClientExpansion from './sections/client-expansion'
import Hero from './sections/hero'
import ProductsDetail from './sections/products-detail'
import VentureDetail from './sections/venture-detail'
import Ventures from './sections/ventures'
import WhatSaikanIs from './sections/what-saikan-is'
import FixedFooter from './shared/ui/FixedFooter'
import Footer from './shared/ui/Footer'
import Navbar from './shared/ui/Navbar'

function LandingSections() {
  return (
    <>
      <div className="phone-frame hero-frame">
        <Hero />
      </div>

      <div className="bf-scope">
        <div className="outer">
          <main className="stage">
            <WhatSaikanIs />
          </main>
        </div>
      </div>

      <div className="phone-frame">
        <Architecture />
        <Ventures />
      </div>

      <div className="bf-scope">
        <div className="outer">
          <main className="stage">
            <ClientExpansion />
            <ProductsDetail />
            <VentureDetail />
          </main>
        </div>
      </div>
    </>
  )
}

export default function LandingHomePage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none bg-ambient z-0" />
      <Navbar />
      <main className="relative z-10">
        <LandingSections />
      </main>
      <Footer />
      <FixedFooter />
    </>
  )
}
