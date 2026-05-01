import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const bgRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Parallax BG */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: '-20%', height: '140%' }}
      >
        {/* Grain texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#2a1a10] to-brand-dark" />
        {/* Orange accent glow */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #E8491D 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #E8491D 0%, transparent 70%)' }}
        />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, #F4F1EC 1px, transparent 1px), linear-gradient(to bottom, #F4F1EC 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-12 lg:gap-0">
          <div className="flex-1">
            {/* Tag */}
            <div
              className={`inline-flex items-center gap-3 mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-8 h-px bg-brand-orange" />
              <span className="font-heading text-xs text-brand-cream/50 tracking-[0.3em] uppercase">
                Portfolio 2026
              </span>
            </div>

            {/* Name */}
            <div className="overflow-hidden">
              <h1
                className={`font-display text-[clamp(4rem,12vw,10rem)] leading-none text-brand-cream transition-all duration-900 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
                style={{ transitionDelay: '300ms' }}
              >
                SAHPUTRA
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                className={`font-display text-[clamp(4rem,12vw,10rem)] leading-none text-brand-orange transition-all duration-900 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
                style={{ transitionDelay: '450ms' }}
              >
                WIJAYA
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className={`font-body text-brand-cream/50 text-lg mt-6 max-w-sm leading-relaxed transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '600ms' }}
            >
              Senior Graphic Designer at Agung Sedayu Group — crafting visual identities, campaigns & brands in Jakarta.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-wrap gap-4 mt-10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '750ms' }}
            >
              <button
                onClick={scrollToAbout}
                className="bg-brand-orange text-white font-heading text-sm px-8 py-4 hover:bg-white hover:text-brand-dark transition-all duration-300 group flex items-center gap-3"
              >
                View Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              <a
                href="mailto:sahputra.wijaya@gmail.com"
                className="border border-brand-cream/20 text-brand-cream/70 font-heading text-sm px-8 py-4 hover:border-brand-orange hover:text-brand-orange transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div
            className={`lg:w-64 flex lg:flex-col gap-8 lg:gap-6 lg:pb-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '800ms' }}
          >
            {[
              { num: '7+', label: 'Years Experience' },
              { num: '4', label: 'Major Brands' },
              { num: '100+', label: 'Projects Done' },
            ].map((stat) => (
              <div key={stat.label} className="border-l border-brand-orange/30 pl-4">
                <div className="font-display text-4xl text-brand-cream">{stat.num}</div>
                <div className="font-body text-xs text-brand-cream/40 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1200ms' }}
        >
          <span className="font-heading text-xs text-brand-cream/30 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-orange/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
