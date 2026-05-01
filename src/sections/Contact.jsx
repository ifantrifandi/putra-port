import AnimatedSection from '../components/AnimatedSection'
import SectionTitle from '../components/SectionTitle'

const contacts = [
  { icon: '✉', label: 'Email', value: 'sahputra.wijaya@gmail.com', href: 'mailto:sahputra.wijaya@gmail.com' },
  { icon: '◎', label: 'Instagram', value: '@putrasawi', href: '#' },
  { icon: '✆', label: 'Phone', value: '0823 1060 8899', href: 'tel:+6282310608899' },
  { icon: '⊛', label: 'Location', value: 'Jl. Wedana, Jakarta Timur', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Big bg text */}
        <div className="relative">
          <span className="font-display text-[16vw] text-white/[0.02] absolute -top-16 right-0 select-none leading-none">
            CONTACT
          </span>
        </div>

        <SectionTitle
          label="Get In Touch"
          title="LET'S WORK TOGETHER"
          subtitle="Available for freelance projects, collaborations, and full-time opportunities in graphic design."
          light
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <div className="space-y-4">
            {contacts.map((c, i) => (
              <AnimatedSection key={c.label} animation="slide-right" delay={i * 100}>
                <a
                  href={c.href}
                  className="flex items-center gap-5 p-5 border border-white/10 hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 text-sm">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-heading text-xs text-white/30 uppercase tracking-widest">{c.label}</div>
                    <div className="font-body text-sm text-white/70 mt-0.5">{c.value}</div>
                  </div>
                  <div className="ml-auto text-white/20 group-hover:text-brand-orange group-hover:translate-x-1 transition-all duration-300">
                    →
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection animation="slide-left" delay={200}>
            <div className="p-8 md:p-12 bg-brand-orange">
              <span className="font-heading text-xs text-white/60 tracking-[0.3em] uppercase">Ready to collaborate?</span>
              <h3 className="font-display text-4xl md:text-5xl text-white mt-3 leading-none">
                HIRE ME FOR YOUR NEXT PROJECT
              </h3>
              <p className="font-body text-white/70 text-sm mt-4 leading-relaxed">
                From brand identity and social media to event campaigns and print materials — let's create something memorable together.
              </p>
              <a
                href="mailto:sahputra.wijaya@gmail.com"
                className="inline-flex items-center gap-3 mt-8 bg-white text-brand-dark font-heading text-sm px-8 py-4 hover:bg-brand-dark hover:text-white transition-all duration-300 group"
              >
                Send Message
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
