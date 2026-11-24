import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience, achievements } from '../../data/experience'
import { Briefcase, GraduationCap, Award, Trophy, Users, BookOpen } from 'lucide-react'

function typeIcon(type: string) {
  switch (type) {
    case 'award': return <Trophy size={14} color="var(--accent-primary-readable)" />
    case 'selection': return <Award size={14} color="var(--accent-violet)" />
    case 'competition': return <Trophy size={14} color="var(--accent-cyan)" />
    case 'publication': return <BookOpen size={14} color="var(--accent-primary-readable)" />
    default: return <Users size={14} color="var(--text-secondary)" />
  }
}

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [tab, setTab] = useState<'experience' | 'achievements'>('experience')

  return (
    <section
      id="experience"
      className="theme-alt"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vh, 160px) clamp(20px, 5vw, 100px)',
        background: 'var(--surface-light-raised)',
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
            color: 'var(--accent-primary-readable)',
            marginBottom: '16px',
          }}
        >
          07 — EXPERIENCE & ACHIEVEMENTS
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
            marginBottom: '48px',
          }}
        >
          Journey
        </motion.h2>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0', marginBottom: '48px', borderBottom: '1px solid color-mix(in srgb, var(--text-primary) 8%, transparent)' }}>
          {(['experience', 'achievements'] as const).map((t) => (
            <button
              key={t}
              id={`tab-${t}`}
              onClick={() => setTab(t)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.15em',
                padding: '14px 24px',
                background: 'none',
                border: 'none',
                borderBottom: tab === t ? '2px solid var(--accent-primary-readable)' : '2px solid transparent',
                color: tab === t ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginBottom: '-1px',
                textTransform: 'uppercase',
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Experience list */}
        {tab === 'experience' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'clamp(80px, 12%, 140px) 1fr',
                  gap: '24px',
                  padding: '28px 0',
                  borderBottom: '1px solid color-mix(in srgb, var(--text-primary) 6%, transparent)',
                  alignItems: 'start',
                }}
              >
                {/* Year */}
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: 'var(--text-secondary)',
                  paddingTop: '3px',
                }}>
                  {item.year}
                  {item.current && (
                    <span style={{
                      display: 'block',
                      marginTop: '4px',
                      fontSize: '9px',
                      color: 'var(--accent-primary-readable)',
                      letterSpacing: '0.15em',
                    }}>
                      CURRENT
                    </span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 'clamp(16px, 2vw, 20px)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}>
                      {item.title}
                    </span>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '9px',
                      letterSpacing: '0.15em',
                      padding: '3px 10px',
                      background: item.type === 'work' ? 'color-mix(in srgb, var(--accent-blue) 10%, transparent)' : item.type === 'internship' ? 'color-mix(in srgb, var(--accent-cyan) 10%, transparent)' : 'color-mix(in srgb, var(--accent-violet) 10%, transparent)',
                      border: `1px solid ${item.type === 'work' ? 'color-mix(in srgb, var(--accent-blue) 30%, transparent)' : item.type === 'internship' ? 'color-mix(in srgb, var(--accent-cyan) 30%, transparent)' : 'color-mix(in srgb, var(--accent-violet) 30%, transparent)'}`,
                      borderRadius: '2px',
                      color: item.type === 'work' ? 'var(--accent-blue)' : item.type === 'internship' ? 'var(--accent-cyan)' : 'var(--accent-violet)',
                    }}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '14px',
                    color: 'var(--accent-primary-readable)',
                    marginBottom: '10px',
                    fontWeight: 500,
                  }}>
                    {item.company}
                  </div>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '12px',
                  }}>
                    {item.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.skills.map((skill) => (
                      <span key={skill} style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '9px',
                        letterSpacing: '0.08em',
                        padding: '3px 8px',
                        background: 'color-mix(in srgb, var(--text-primary) 4%, transparent)',
                        border: '1px solid color-mix(in srgb, var(--text-primary) 8%, transparent)',
                        borderRadius: '2px',
                        color: 'var(--text-secondary)',
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Achievements list */}
        {tab === 'achievements' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1px',
            background: 'color-mix(in srgb, var(--text-primary) 5%, transparent)',
            border: '1px solid color-mix(in srgb, var(--text-primary) 5%, transparent)',
          }}>
            {achievements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                style={{
                  padding: '24px',
                  background: 'var(--surface-light-raised)',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget).style.background = 'var(--surface-card)')}
                onMouseLeave={(e) => ((e.currentTarget).style.background = 'var(--surface-light-raised)')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  {typeIcon(item.type)}
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '9px',
                    letterSpacing: '0.15em',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                  }}>
                    {item.year} · {item.type}
                  </span>
                </div>
                <h4 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                }}>
                  {item.title}
                </h4>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '13px',
                  color: 'var(--accent-blue)',
                  marginBottom: '8px',
                  fontWeight: 500,
                }}>
                  {item.event}
                </div>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55,
                }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
