export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display text-2xl text-white/30">
          PUTRA<span className="text-brand-orange">.</span>
        </div>
        <p className="font-body text-xs text-white/20 text-center">
          © 2026 Sahputra Wijaya — Graphic Designer, Jakarta
        </p>
        <div className="flex gap-4">
          {['Ai', 'Ps', 'Pr', 'Ae'].map((tool) => (
            <span key={tool} className="font-heading text-xs text-white/20">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
