import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/#hero", label: "Home" },
  { href: "/#thesis", label: "Our Thesis" },
  { href: "/#operating-model", label: "How The System Works" },
  { href: "/#ecosystem", label: "Our Business Lines" },
  { href: "/#saikan-client-detail", label: "Client Solutions" },
  { href: "/#saikan-products-detail", label: "Our Stack" },
  { href: "/#saikan-venture-detail", label: "Venture Studio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="mx-auto flex bg-black h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="/" className="flex items-center group">
          <img
            src="/assets/Ventures/Banner Saikan No BG.png"
            alt="Saikan"
            className="h-auto w-[104px] transition-opacity group-hover:opacity-80"
          />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-ink transition-colors hover:text-muted"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-5 rounded-lg border border-white/10 bg-black/90 backdrop-blur md:mx-auto md:max-w-6xl">
          <div className="space-y-4 px-4 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
