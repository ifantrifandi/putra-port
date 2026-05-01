import { useInView } from '../hooks/useInView'

const animations = {
  'fade-up': 'animate-fade-up',
  'fade-in': 'animate-fade-in',
  'slide-left': 'animate-slide-left',
  'slide-right': 'animate-slide-right',
  'scale-in': 'animate-scale-in',
}

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  tag: Tag = 'div',
}) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`opacity-0 ${inView ? animations[animation] : ''} ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </Tag>
  )
}
