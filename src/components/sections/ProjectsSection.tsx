import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className="theme-dark"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vh, 160px) clamp(20px, 5vw, 100px)',
        background: 'var(--surface-dark)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.3em',
            color: 'var(--accent-cyan)',
            marginBottom: '16px',
          }}
        >
          04 — PROJECTS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--text-primary)',
            marginBottom: '64px',
          }}
        >
          Selected Work
        </motion.h2>

        {/* Featured Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', marginBottom: '80px' }}>
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                borderTop: '1px solid color-mix(in srgb, var(--text-primary) 8%, transparent)',
                padding: '32px 0',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '24px',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'clamp(80px, 12%, 140px) 1fr', gap: '24px', alignItems: 'center' }}>
                {/* Number */}
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  color: hoveredId === project.id ? project.coverColor : 'var(--text-secondary)',
                  transition: 'color 0.3s ease',
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 'clamp(20px, 2.5vw, 28px)',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: hoveredId === project.id ? 'var(--text-primary)' : 'var(--text-primary)',
                      transition: 'color 0.3s ease',
                    }}>
                      {project.title}
                    </h3>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '9px',
                      letterSpacing: '0.15em',
                      padding: '3px 10px',
                      background: `color-mix(in srgb, ${project.coverColor} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${project.coverColor} 32%, transparent)`,
                      borderRadius: '2px',
                      color: project.coverColor,
                    }}>
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    marginTop: '8px',
                    lineHeight: 1.5,
                  }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '9px',
                        letterSpacing: '0.1em',
                        color: 'var(--text-secondary)',
                        opacity: 0.7,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget).style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => ((e.currentTarget).style.color = 'var(--text-secondary)')}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
                <Link
                  to={`/projects/${project.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: hoveredId === project.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                  }}
                >
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid color-mix(in srgb, var(--text-primary) 8%, transparent)' }} />
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
          }}>
            MORE PROJECTS
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '1px',
            background: 'color-mix(in srgb, var(--text-primary) 5%, transparent)',
            border: '1px solid color-mix(in srgb, var(--text-primary) 5%, transparent)',
          }}>
            {others.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="theme-alt"
                style={{
                  textDecoration: 'none',
                  padding: '28px',
                  background: 'var(--surface-dark-raised)',
                  display: 'block',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget).style.background = 'var(--surface-light-raised)')}
                onMouseLeave={(e) => ((e.currentTarget).style.background = 'var(--surface-dark-raised)')}
              >
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '9px',
                  letterSpacing: '0.15em',
                  color: project.coverColor,
                  marginBottom: '12px',
                  opacity: 0.8,
                }}>
                  {project.year}
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}>
                  {project.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
