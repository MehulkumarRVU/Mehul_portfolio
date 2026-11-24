import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Users, Zap, Target } from 'lucide-react'
import trinarixLogo from '../../../assets/TRINARIX_logo.png'

export function StartupSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="startups"
      className="theme-alt"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vh, 160px) clamp(20px, 5vw, 100px)',
        background: 'var(--surface-light-raised)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '-100px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, color-mix(in srgb, var(--accent-violet) 5%, transparent) 0%, transparent 70%)',
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
            color: 'var(--accent-creative-readable)',
            marginBottom: '48px',
          }}
        >
          03 — STARTUPS
        </motion.div>

        {/* Trinarix showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
          marginBottom: '80px',
        }}>
          {/* Left: Company info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'var(--accent-creative-readable)',
                marginBottom: '16px',
              }}>
                FOUNDED JUNE 2025
              </div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(40px, 7vw, 80px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                color: 'var(--text-primary)',
                marginBottom: '24px',
              }}>
                <img src={trinarixLogo} alt="" style={{ width: 'clamp(48px, 7vw, 76px)', height: 'clamp(48px, 7vw, 76px)', objectFit: 'contain', verticalAlign: 'middle', marginRight: '16px' }} />
                TRINARIX
              </h2>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(15px, 1.5vw, 17px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '32px',
              }}>
                A technology startup co-founded to build AI, software and technology products with real-world impact. We combine deep technical expertise with entrepreneurial thinking to develop products that are technically sophisticated, commercially viable and genuinely accessible.
              </p>

              {/* Co-founders */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'var(--accent-creative-readable)',
                  marginBottom: '16px',
                }}>
                  CO-FOUNDERS
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Mehul Kumar Choudhary', 'Dharini K H', 'Jathin Kirani Nagraj'].map((name) => (
                    <span
                      key={name}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '13px',
                        padding: '6px 16px',
                        background: 'color-mix(in srgb, var(--accent-violet) 10%, transparent)',
                        border: '1px solid color-mix(in srgb, var(--accent-violet) 30%, transparent)',
                        borderRadius: '2px',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Focus areas */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { icon: Zap, label: 'AI & Machine Learning Products' },
                  { icon: Target, label: 'Software & Technology Solutions' },
                  { icon: Users, label: 'Product-led Growth Strategy' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Icon size={14} color="var(--accent-creative-readable)" />
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: 'var(--text-secondary)' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* PocketCoach preview */}
            <div className="theme-dark" style={{
              background: 'linear-gradient(135deg, var(--surface-dark-raised) 0%, var(--obsidian) 100%)',
              border: '1px solid color-mix(in srgb, var(--accent-violet) 20%, transparent)',
              borderRadius: '8px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Grid overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(color-mix(in srgb, var(--accent-violet) 4%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--accent-violet) 4%, transparent) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }} />

              <div style={{ position: 'relative' }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  color: 'var(--accent-cyan)',
                  marginBottom: '16px',
                }}>
                  FLAGSHIP PRODUCT
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                }}>
                  PocketCoach AI
                </h3>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '32px',
                }}>
                  An AI-powered sports coaching platform using computer vision and pose estimation to analyze movement and provide technique feedback in real-time.
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '32px' }}>
                  {['React', 'Python', 'FastAPI', 'MediaPipe', 'PostgreSQL', 'Docker'].map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '9px',
                        letterSpacing: '0.1em',
                        padding: '4px 10px',
                        background: 'color-mix(in srgb, var(--text-primary) 5%, transparent)',
                        border: '1px solid color-mix(in srgb, var(--text-primary) 8%, transparent)',
                        borderRadius: '2px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://landing-page-pocket-coach.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="pocketcoach-link"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: 'var(--accent-cyan)',
                    padding: '12px 24px',
                    border: '1px solid color-mix(in srgb, var(--accent-cyan) 40%, transparent)',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'color-mix(in srgb, var(--accent-cyan) 10%, transparent)'
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-cyan) 80%, transparent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-cyan) 40%, transparent)'
                  }}
                >
                  VIEW LIVE
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
