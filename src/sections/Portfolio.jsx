import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import PortfolioCard from '../components/PortfolioCard'
import AnimatedSection from '../components/AnimatedSection'
import { portfolioProjects } from '../data/portfolio'

function ProjectDetail({ project }) {
  if (!project) return null

  return (
    <div
      className="animate-fade-in h-full flex flex-col"
      style={{ background: project.bg }}
      key={project.id}
    >
      {/* Big number bg */}
      <div className="relative flex-1 p-8 md:p-12 overflow-hidden">
        <span
          className="font-display text-[12rem] leading-none absolute -right-4 -top-4 select-none"
          style={{ color: project.accent, opacity: 0.08 }}
        >
          {String(portfolioProjects.findIndex(p => p.id === project.id) + 1).padStart(2, '0')}
        </span>

        <div className="relative z-10">
          {/* Category */}
          <span
            className="font-heading text-xs tracking-[0.3em] uppercase"
            style={{ color: project.accent }}
          >
            {project.category}
          </span>

          {/* Title */}
          <h2 className="font-display text-5xl md:text-6xl text-white mt-2 leading-none">
            {project.title}
          </h2>
          <p className="font-body text-white/40 text-sm mt-1">{project.subtitle}</p>

          {/* Divider */}
          <div className="h-px w-12 mt-6 mb-6" style={{ background: project.accent }} />

          {/* Description */}
          <p className="font-body text-white/60 text-sm leading-relaxed max-w-sm">
            {project.description}
          </p>

          {/* Pieces */}
          <div className="mt-8 space-y-3">
            <h4 className="font-heading text-xs text-white/30 tracking-widest uppercase">Projects Include</h4>
            {project.pieces.map((piece, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 border border-white/10 hover:border-white/20 transition-colors"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                  style={{ background: project.accent }}
                />
                <div>
                  <div className="font-heading text-sm text-white">{piece.title}</div>
                  <div className="font-body text-xs text-white/40 mt-0.5">{piece.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-heading text-xs px-3 py-1.5 border"
                style={{ borderColor: `${project.accent}40`, color: project.accent }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeId, setActiveId] = useState(portfolioProjects[0].id)
  const activeProject = portfolioProjects.find(p => p.id === activeId)

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          label="My Work"
          title="PORTFOLIO"
          subtitle="Selected projects from 7+ years of design work across property, entertainment, and F&B industries."
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Left: List */}
          <div className="space-y-4">
            {portfolioProjects.map((project, i) => (
              <PortfolioCard
                key={project.id}
                project={project}
                index={i}
                isActive={activeId === project.id}
                onClick={() => setActiveId(project.id)}
              />
            ))}

            {/* Stats */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { n: '3+', l: 'Major Clients' },
                  { n: '50+', l: 'Campaigns' },
                  { n: '7+', l: 'Years' },
                ].map((s) => (
                  <div key={s.l} className="bg-brand-dark p-4 text-center">
                    <div className="font-display text-3xl text-brand-orange">{s.n}</div>
                    <div className="font-body text-xs text-white/40 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Detail */}
          <div className="sticky top-24">
            <AnimatedSection animation="scale-in" delay={200}>
              <div className="min-h-[500px]">
                <ProjectDetail project={activeProject} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
