import { useRef, useState, useEffect } from 'react'
import SectionTitle from '../components/SectionTitle'
import AnimatedSection from '../components/AnimatedSection'
import { useInView } from '../hooks/useInView'

const skills = [
  { name: 'Adobe Illustrator', short: 'Ai', level: 80, color: '#FF9A00' },
  { name: 'Adobe After Effects', short: 'Ae', level: 75, color: '#9999FF' },
  { name: 'Adobe Photoshop', short: 'Ps', level: 80, color: '#31A8FF' },
  { name: 'Adobe Lightroom', short: 'Lr', level: 75, color: '#31A8FF' },
  { name: 'Adobe Premiere Pro', short: 'Pr', level: 75, color: '#9999FF' },
  { name: 'Adobe InDesign', short: 'Id', level: 60, color: '#FF3366' },
]

const interests = [
  { icon: '✦', label: 'Illustration' },
  { icon: '◈', label: 'Art' },
  { icon: '▶', label: 'Video Editing' },
  { icon: '⬡', label: 'Photography' },
  { icon: '◉', label: 'Videography' },
  { icon: '⊕', label: 'Gaming' },
]

function SkillBar({ skill, animate }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span
            className="font-heading text-xs font-700 px-2 py-0.5 text-white"
            style={{ background: skill.color }}
          >
            {skill.short}
          </span>
          <span className="font-body text-sm text-brand-dark">{skill.name}</span>
        </div>
        <span className="font-display text-2xl text-brand-dark/20">{skill.level}%</span>
      </div>
      <div className="h-1 bg-brand-cream overflow-hidden">
        <div
          className="h-full skill-fill"
          style={{
            width: animate ? `${skill.level}%` : '0%',
            background: skill.color,
            transition: 'width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-28 md:py-36 bg-brand-dark overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Big bg text */}
        <div className="relative">
          <span className="font-display text-[20vw] text-white/[0.02] absolute -top-12 left-0 select-none leading-none">
            SKILLS
          </span>
        </div>

        <SectionTitle
          label="What I Do"
          title="SKILLS &amp; TOOLS"
          subtitle="Over 7 years working with Adobe Creative Suite across branding, social media, print, and motion."
          light
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Skill bars */}
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.name} animation="slide-right" delay={i * 80}>
                <SkillBar skill={skill} animate={inView} />
              </AnimatedSection>
            ))}
          </div>

          {/* Interests */}
          <div>
            <AnimatedSection animation="fade-up" delay={200}>
              <h3 className="font-heading text-xs text-brand-cream/30 tracking-[0.3em] uppercase mb-8">Interests</h3>
            </AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {interests.map((item, i) => (
                <AnimatedSection key={item.label} animation="scale-in" delay={300 + i * 60}>
                  <div className="border border-white/10 p-5 hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 group cursor-default">
                    <div className="text-brand-orange text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="font-heading text-sm text-brand-cream/70">{item.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Floating highlight box */}
            <AnimatedSection animation="fade-up" delay={700}>
              <div className="mt-8 p-6 bg-brand-orange">
                <div className="font-display text-5xl text-white">7+</div>
                <div className="font-body text-white/80 text-sm mt-1">Years crafting visual stories in Jakarta's competitive market</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
