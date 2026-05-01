import AnimatedSection from './AnimatedSection'

export default function SectionTitle({ label, title, subtitle, light = false }) {
  return (
    <div className="mb-16 md:mb-20">
      <AnimatedSection animation="slide-right" delay={0}>
        <span className={`font-heading text-xs tracking-[0.3em] uppercase font-500 ${light ? 'text-brand-cream/50' : 'text-brand-orange'}`}>
          {label}
        </span>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <h2 className={`font-display text-5xl md:text-7xl lg:text-8xl mt-2 leading-none ${light ? 'text-brand-cream' : 'text-brand-dark'}`}>
          {title}
        </h2>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection animation="fade-up" delay={200}>
          <p className={`font-body text-base mt-4 max-w-lg leading-relaxed ${light ? 'text-brand-cream/60' : 'text-brand-gray'}`}>
            {subtitle}
          </p>
        </AnimatedSection>
      )}
      <AnimatedSection animation="line-grow" delay={150}>
        <div className={`mt-6 h-px w-24 ${light ? 'bg-brand-orange/60' : 'bg-brand-orange'}`} />
      </AnimatedSection>
    </div>
  )
}
