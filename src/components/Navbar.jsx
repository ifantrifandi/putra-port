import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Portfolio', 'Photography', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-light/90 backdrop-blur-md shadow-sm py-3' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-2xl text-brand-dark tracking-wider hover:text-brand-orange transition-colors duration-300"
        >
          PUTRA<span className="text-brand-orange">.</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="nav-link relative font-heading text-sm font-500 text-brand-dark/70 hover:text-brand-dark transition-colors duration-300"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:sahputra.wijaya@gmail.com"
          className="hidden md:flex items-center gap-2 bg-brand-orange text-white font-heading text-sm px-5 py-2.5 hover:bg-brand-dark transition-colors duration-300"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-brand-light/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 border-t border-brand-cream">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-heading text-base text-brand-dark/80 text-left hover:text-brand-orange transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
