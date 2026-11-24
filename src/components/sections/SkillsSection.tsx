import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import { Code2, Layout, Server, Brain, Database, GitBranch, Cpu, Camera, TrendingUp } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Code2, Layout, Server, Brain, Database, GitBranch, Cpu, Camera, TrendingUp,
}

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const active = activeCategory
    ? skillCategories.find((c) => c.id === activeCategory)
    : null

  return (
    <section
      id="skills"
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
            color: 'var(--accent-blue)',
            marginBottom: '16px',
          }}
        >
          06 — ENGINEERING & SKILLS
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
          Technical Arsenal
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 160px), 1fr))',
          gap: '1px',
          background: 'color-mix(in srgb, var(--text-primary) 5%, transparent)',
          border: '1px solid color-mix(in srgb, var(--text-primary) 5%, transparent)',
          marginBottom: '48px',
        }}>
          {skillCategories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || Code2
            const isActive = activeCategory === cat.id
            return (
              <motion.button
                key={cat.id}
                id={`skill-cat-${cat.id}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => setActiveCategory(isActive ? null : cat.id)}
                style={{
                  background: isActive ? `color-mix(in srgb, ${cat.color} 14%, transparent)` : 'var(--surface-dark-raised)',
                  border: 'none',
                  borderBottom: isActive ? `2px solid ${cat.color}` : '2px solid transparent',
                  padding: '24px 20px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'var(--surface-dark-raised)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'var(--surface-dark-raised)'
                }}
              >
                <Icon size={20} color={isActive ? cat.color : 'var(--text-secondary)'} />
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '9px',
                  letterSpacing: '0.15em',
                  color: isActive ? cat.color : 'var(--text-secondary)',
                  transition: 'color 0.3s ease',
                }}>
                  {cat.name.toUpperCase()}
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Skills detail panel */}
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'var(--surface-dark-raised)',
              border: '1px solid color-mix(in srgb, var(--text-primary) 8%, transparent)',
              borderRadius: '4px',
              padding: 'clamp(24px, 4vw, 40px)',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px',
            }}>
              {(() => {
                const Icon = iconMap[active.icon] || Code2
                return <Icon size={16} color={active.color} />
              })()}
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}>
                {active.name}
              </h3>
            </div>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '14px',
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}>
              {active.description}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
              gap: '8px',
            }}>
              {active.skills.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    padding: '16px',
                    background: hoveredSkill === skill.name ? `color-mix(in srgb, ${active.color} 12%, transparent)` : 'color-mix(in srgb, var(--text-primary) 3%, transparent)',
                    border: hoveredSkill === skill.name ? `1px solid color-mix(in srgb, ${active.color} 40%, transparent)` : '1px solid color-mix(in srgb, var(--text-primary) 12%, transparent)',
                    borderRadius: '2px',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}>
                    {skill.name}
                  </div>
                  {skill.description && (
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.4,
                    }}>
                      {skill.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All skills flat view */}
        {!active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
          >
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <span
                  key={`${cat.id}-${skill.name}`}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '13px',
                    padding: '6px 14px',
                    background: 'color-mix(in srgb, var(--text-primary) 6%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--text-primary) 7%, transparent)',
                    borderRadius: '2px',
                    color: 'var(--text-secondary)',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `color-mix(in srgb, ${cat.color} 50%, transparent)`
                    e.currentTarget.style.color = 'var(--text-primary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--text-primary) 7%, transparent)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                >
                  {skill.name}
                </span>
              ))
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
