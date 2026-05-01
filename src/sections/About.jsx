import AnimatedSection from '../components/AnimatedSection'
import SectionTitle from '../components/SectionTitle'

const experiences = [
  { period: '2021 — Now', role: 'Senior Graphic Designer', company: 'Agung Sedayu Group (MarComm)', type: 'current' },
  { period: '2019 — 2021', role: 'Marketing Support Staff', company: 'Agung Sedayu Group (Sedayu City)', type: '' },
  { period: '2016 — 2018', role: 'Graphic Designer', company: 'Hellow Big Circle', type: '' },
  { period: '2017', role: 'Internship Animator', company: 'Mocca Animation', type: '' },
]

const education = [
  { period: '2014 — 2018', name: 'Bina Nusantara University', detail: 'Design Communication Visual — Animation' },
  { period: '2011 — 2014', name: 'Fons Vitae 1', detail: 'Senior Highschool' },
  { period: '2008 — 2011', name: 'Santa Maria Fatima', detail: 'Junior Highschool' },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <SectionTitle
              label="About Me"
              title="HELLO, I'M PUTRA"
              subtitle="A graphic designer based in Jakarta, Indonesia with a bachelor of Visual Communication Design from BINUS University. Passionate about visual design, art, illustration, and photography."
            />

            {/* Info grid */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Location', value: 'Jakarta, Indonesia' },
                  { label: 'Born', value: '12 September 1996' },
                  { label: 'Phone', value: '0823 1060 8899' },
                  { label: 'Email', value: 'sahputra.wijaya@gmail.com' },
                  { label: 'Instagram', value: '@putrasawi' },
                  { label: 'Status', value: 'Open to Work' },
                ].map((item) => (
                  <div key={item.label} className="py-3 border-b border-brand-cream">
                    <div className="font-heading text-xs text-brand-gray uppercase tracking-widest">{item.label}</div>
                    <div className="font-body text-sm text-brand-dark mt-1 font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Languages */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="mt-8 flex gap-4">
                {['Indonesia', 'English'].map((lang) => (
                  <span key={lang} className="font-heading text-xs border border-brand-orange/30 text-brand-orange px-4 py-2 uppercase tracking-wider">
                    {lang}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right */}
          <div>
            {/* Experience */}
            <AnimatedSection animation="slide-left" delay={100}>
              <h3 className="font-heading text-xs text-brand-gray tracking-[0.3em] uppercase mb-6">Experience</h3>
            </AnimatedSection>
            <div className="space-y-4 mb-14">
              {experiences.map((exp, i) => (
                <AnimatedSection key={exp.company} animation="fade-up" delay={150 + i * 80}>
                  <div className={`flex gap-4 p-4 transition-colors duration-300 hover:bg-brand-cream group ${exp.type === 'current' ? 'bg-brand-dark' : ''}`}>
                    <div className={`font-body text-xs whitespace-nowrap pt-0.5 ${exp.type === 'current' ? 'text-brand-orange' : 'text-brand-gray'}`}>
                      {exp.period}
                    </div>
                    <div>
                      <div className={`font-heading text-sm font-600 ${exp.type === 'current' ? 'text-brand-cream' : 'text-brand-dark'}`}>
                        {exp.role}
                      </div>
                      <div className={`font-body text-xs mt-0.5 ${exp.type === 'current' ? 'text-brand-cream/50' : 'text-brand-gray'}`}>
                        {exp.company}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Education */}
            <AnimatedSection animation="slide-left" delay={500}>
              <h3 className="font-heading text-xs text-brand-gray tracking-[0.3em] uppercase mb-6">Education</h3>
            </AnimatedSection>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <AnimatedSection key={edu.name} animation="fade-up" delay={550 + i * 80}>
                  <div className="flex gap-4 border-b border-brand-cream pb-4">
                    <div className="font-body text-xs text-brand-gray whitespace-nowrap pt-0.5">{edu.period}</div>
                    <div>
                      <div className="font-heading text-sm font-600 text-brand-dark">{edu.name}</div>
                      <div className="font-body text-xs text-brand-gray mt-0.5">{edu.detail}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
