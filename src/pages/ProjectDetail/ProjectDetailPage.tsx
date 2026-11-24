import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, GitBranch } from 'lucide-react'
import { projects } from '../../data/projects'
import { Navigation } from '../../components/navigation/Navigation'

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Mehul Kumar Choudhary`
    }
    return () => { document.title = 'Mehul Kumar Choudhary' }
  }, [project])

  if (!project) {
    return (
      <>
        <Navigation />
        <div className="theme-dark" style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--obsidian)',
          gap: '24px',
        }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', color: 'var(--text-primary)' }}>
            Project not found
          </div>
          <Link to="/" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>Return home</Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navigation />
      <div className="theme-dark" style={{ background: 'var(--obsidian)', minHeight: '100vh' }}>
        {/* Hero */}
        <div style={{
          padding: '120px clamp(20px, 5vw, 100px) 80px',
          borderBottom: '1px solid color-mix(in srgb, var(--text-primary) 6%, transparent)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '400px',
            background: `radial-gradient(ellipse at right top, color-mix(in srgb, ${project.coverColor} 8%, transparent) 0%, transparent 70%)`,
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            {/* Back */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ marginBottom: '48px' }}
            >
              <Link
                to="/#projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget).style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => ((e.currentTarget).style.color = 'var(--text-secondary)')}
              >
                <ArrowLeft size={14} />
                BACK TO PROJECTS
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '9px',
                  letterSpacing: '0.15em',
                  padding: '4px 12px',
                  background: `color-mix(in srgb, ${project.coverColor} 12%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${project.coverColor} 32%, transparent)`,
                  borderRadius: '2px',
                  color: project.coverColor,
                }}>
                  {project.category.toUpperCase()}
                </span>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '9px',
                  letterSpacing: '0.15em',
                  padding: '4px 12px',
                  background: 'color-mix(in srgb, var(--text-primary) 5%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--text-primary) 10%, transparent)',
                  borderRadius: '2px',
                  color: 'var(--text-secondary)',
                }}>
                  {project.year}
                </span>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '9px',
                  letterSpacing: '0.15em',
                  padding: '4px 12px',
                  background: 'color-mix(in srgb, var(--text-primary) 5%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--text-primary) 10%, transparent)',
                  borderRadius: '2px',
                  color: 'var(--text-secondary)',
                }}>
                  {project.status.toUpperCase()}
                </span>
              </div>

              <h1 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(36px, 7vw, 80px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}>
                {project.title}
              </h1>

              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(18px, 2vw, 24px)',
                fontWeight: 300,
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
                marginBottom: '32px',
                maxWidth: '600px',
              }}>
                {project.subtitle}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-live-${project.id}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      padding: '12px 24px',
                      background: `color-mix(in srgb, ${project.coverColor} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${project.coverColor} 32%, transparent)`,
                      borderRadius: '2px',
                      color: project.coverColor,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    VIEW LIVE <ExternalLink size={12} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      padding: '12px 24px',
                      background: 'color-mix(in srgb, var(--text-primary) 5%, transparent)',
                      border: '1px solid color-mix(in srgb, var(--text-primary) 10%, transparent)',
                      borderRadius: '2px',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    GITHUB <GitBranch size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '80px clamp(20px, 5vw, 100px)', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '64px',
            alignItems: 'start',
          }}>
            {/* Left */}
            <div>
              <div style={{ marginBottom: '48px' }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: project.coverColor,
                  marginBottom: '16px',
                }}>
                  OVERVIEW
                </div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                }}>
                  {project.longDescription}
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: project.coverColor,
                  marginBottom: '16px',
                }}>
                  MY ROLE
                </div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}>
                  {project.role}
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <div style={{ marginBottom: '40px' }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: project.coverColor,
                  marginBottom: '16px',
                }}>
                  TECHNOLOGIES
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '13px',
                      padding: '6px 14px',
                      background: 'var(--surface-dark-raised)',
                      border: '1px solid color-mix(in srgb, var(--text-primary) 8%, transparent)',
                      borderRadius: '2px',
                      color: 'var(--text-primary)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: project.coverColor,
                  marginBottom: '16px',
                }}>
                  TAGS
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '9px',
                      letterSpacing: '0.12em',
                      padding: '5px 12px',
                      background: `color-mix(in srgb, ${project.coverColor} 8%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${project.coverColor} 20%, transparent)`,
                      borderRadius: '2px',
                      color: project.coverColor,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div style={{
            marginTop: '80px',
            paddingTop: '48px',
            borderTop: '1px solid color-mix(in srgb, var(--text-primary) 6%, transparent)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Link
              to="/#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontFamily: "'Space Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease',
              }}
            >
              <ArrowLeft size={14} />
              ALL PROJECTS
            </Link>
            <Link
              to="/#contact"
              style={{
                textDecoration: 'none',
                fontFamily: "'Space Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: 'var(--accent-blue)',
                transition: 'opacity 0.2s ease',
              }}
            >
              DISCUSS THIS PROJECT →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
