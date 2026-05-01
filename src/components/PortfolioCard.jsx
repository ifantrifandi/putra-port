import AnimatedSection from './AnimatedSection'

export default function PortfolioCard({ project, index, isActive, onClick }) {
  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <button
        onClick={onClick}
        className={`w-full text-left group relative overflow-hidden transition-all duration-500 ${
          isActive ? 'ring-2 ring-brand-orange' : 'hover:ring-1 hover:ring-brand-orange/30'
        }`}
        style={{ background: isActive ? project.bg : '#F4F1EC' }}
      >
        {/* Color bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-2"
          style={{ background: project.accent }}
        />

        <div className="pl-6 pr-5 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className="font-heading text-xs uppercase tracking-widest"
                style={{ color: isActive ? project.accent : '#8A8680' }}
              >
                {project.category}
              </span>
              <h3
                className={`font-display text-3xl md:text-4xl mt-1 leading-none ${
                  isActive ? 'text-white' : 'text-brand-dark'
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`font-body text-xs mt-1.5 ${
                  isActive ? 'text-white/50' : 'text-brand-gray'
                }`}
              >
                {project.subtitle}
              </p>
            </div>
            <div
              className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ${
                isActive ? 'bg-brand-orange text-white rotate-0' : 'bg-brand-cream text-brand-gray group-hover:bg-brand-orange group-hover:text-white'
              }`}
            >
              {isActive ? '−' : '+'}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`font-heading text-xs px-2.5 py-1 ${
                  isActive
                    ? 'bg-white/10 text-white/60'
                    : 'bg-white text-brand-gray'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>
    </AnimatedSection>
  )
}
