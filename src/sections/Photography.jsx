import { useRef, useEffect } from 'react'
import SectionTitle from '../components/SectionTitle'
import AnimatedSection from '../components/AnimatedSection'

// Placeholder image patterns for the photography grid
const photos = [
  { label: 'Forest Portrait', type: 'portrait', aspect: 'tall', bg: '#2D4A2A' },
  { label: 'Food Photography', type: 'food', aspect: 'square', bg: '#6B3A1F' },
  { label: 'Cultural Event', type: 'event', aspect: 'wide', bg: '#3A1A1A' },
  { label: 'Kecak Dance', type: 'event', aspect: 'square', bg: '#4A2010' },
  { label: 'Wildlife — Ostrich', type: 'nature', aspect: 'square', bg: '#2A3A2A' },
  { label: 'Camel Close-up', type: 'nature', aspect: 'square', bg: '#5A3A1A' },
  { label: 'Hobbit House', type: 'travel', aspect: 'wide', bg: '#2A3A1A' },
  { label: 'Mount Bromo', type: 'landscape', aspect: 'wide', bg: '#1A1A2A' },
  { label: 'Flower Macro', type: 'nature', aspect: 'square', bg: '#2A4A1A' },
  { label: 'Owl Portrait', type: 'nature', aspect: 'square', bg: '#1A1A1A' },
]

const colorMap = {
  portrait: '#4A7A3A',
  food: '#8A4A1A',
  event: '#6A1A1A',
  nature: '#3A5A2A',
  travel: '#2A4A3A',
  landscape: '#2A2A4A',
}

function PhotoPlaceholder({ photo, delay }) {
  return (
    <AnimatedSection animation="scale-in" delay={delay}>
      <div
        className={`relative overflow-hidden group cursor-pointer ${
          photo.aspect === 'tall' ? 'row-span-2' : ''
        } ${photo.aspect === 'wide' ? 'col-span-2' : ''}`}
        style={{
          background: photo.bg,
          aspectRatio: photo.aspect === 'tall' ? '3/4' : photo.aspect === 'wide' ? '16/7' : '1/1',
        }}
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(${colorMap[photo.type]} 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <p className="font-heading text-white text-sm">{photo.label}</p>
          <p className="font-body text-white/50 text-xs capitalize">{photo.type}</p>
        </div>
        {/* Type tag */}
        <div className="absolute top-3 right-3 font-heading text-xs text-white/30 uppercase tracking-wider">
          {photo.type}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Photography() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const el = parallaxRef.current
    if (!el) return

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const distance = viewportCenter - elementCenter
      el.style.transform = `translateY(${distance * 0.08}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="photography" className="py-28 md:py-36 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          label="Section 04"
          title="PHOTOGRAPHY"
          subtitle="Both digital and analog — capturing moments, people, nature, and culture across Indonesia."
        />

        {/* Digital Photos */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 bg-brand-orange rounded-full" />
            <span className="font-heading text-xs text-brand-gray tracking-[0.3em] uppercase">Digital Photos</span>
            <div className="flex-1 h-px bg-brand-cream" />
          </div>
        </AnimatedSection>

        <div ref={parallaxRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 will-change-transform">
          {photos.slice(0, 6).map((photo, i) => (
            <PhotoPlaceholder key={photo.label} photo={photo} delay={i * 80} />
          ))}
        </div>

        {/* Analog Photos */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="flex items-center gap-4 mt-16 mb-8">
            <div className="w-2 h-2 border border-brand-orange rounded-full" />
            <span className="font-heading text-xs text-brand-gray tracking-[0.3em] uppercase">Analog Photos</span>
            <div className="flex-1 h-px bg-brand-cream" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.slice(4).map((photo, i) => (
            <PhotoPlaceholder key={`analog-${photo.label}`} photo={{ ...photo, bg: photo.bg + '99' }} delay={i * 80} />
          ))}
        </div>

        {/* Note */}
        <AnimatedSection animation="fade-in" delay={600}>
          <p className="mt-8 font-body text-xs text-brand-gray/50 text-center italic">
            Visual representations shown — actual photography portfolio available upon request via @putrasawi
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
