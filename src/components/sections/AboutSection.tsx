import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase } from 'lucide-react'
import { personal } from '../../data/personal'
import portrait from '../../../assets/Mehul_professional.jpeg'

const interests = [
  'AI & Machine Learning',
  'Full-Stack Development', 
  'Software Engineering',
  'Entrepreneurship',
  'Photography',
  'Creative Design',
  'Branding & Marketing',
  'Business Strategy',
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      className="theme-alt"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vh, 160px) clamp(20px, 5vw, 100px)',
        background: 'var(--surface-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-200px',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, color-mix(in srgb, var(--accent-blue) 4%, transparent) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

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
            marginBottom: '48px',
          }}
        >
          01 — ABOUT
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'start',
        }}>
          {/* Left: Portrait + Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                width: '100%',
                aspectRatio: '4/5',
                maxWidth: '400px',
                background: 'linear-gradient(135deg, var(--surface-card) 0%, var(--surface-light-raised) 100%)',
                border: '1px solid color-mix(in srgb, var(--text-primary) 8%, transparent)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img src={portrait} alt="Mehul Kumar Choudhary" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={14} color="var(--accent-blue)" />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: 'var(--text-secondary)' }}>
                  {personal.location}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <GraduationCap size={14} color="var(--accent-violet)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: 'var(--text-primary)' }}>
                    {personal.education.degree}
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    {personal.education.university} · Major: {personal.education.major}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Briefcase size={14} color="var(--accent-cyan)" />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: 'var(--text-secondary)' }}>
                  {personal.company.role} @ {personal.company.name}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: 'var(--text-primary)',
                marginBottom: '32px',
              }}
            >
              Multidisciplinary<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-violet))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Technology
              </span>{' '}
              Entrepreneur.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(15px, 1.5vw, 17px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '32px',
              }}
            >
              {personal.intro}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '48px',
              }}
            >
              I don't limit myself to one discipline. I build, explore, create and turn ideas into reality — whether that means writing code, building a startup, designing a brand or capturing the world through a lens.
            </motion.p>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.2em',
                color: 'var(--accent-primary-readable)',
                marginBottom: '16px',
              }}>
                INTERESTS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {interests.map((interest) => (
                  <span
                    key={interest}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '12px',
                      padding: '6px 14px',
                      background: 'var(--surface-card)',
                      border: '1px solid color-mix(in srgb, var(--text-primary) 8%, transparent)',
                      borderRadius: '2px',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-primary-readable) 40%, transparent)'
                      e.currentTarget.style.color = 'var(--text-primary)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--text-primary) 8%, transparent)'
                      e.currentTarget.style.color = 'var(--text-secondary)'
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
