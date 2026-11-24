import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown, Play } from 'lucide-react'
import { ParticleCanvas } from '../3d/ParticleCanvas'
import { personal } from '../../data/personal'

export function HeroSection() {

  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
    },
  }

  return (
    <section
      id="hero"
      className="theme-dark"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--obsidian)',
      }}
    >
      {/* Particle Canvas Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <ParticleCanvas scene="scatter" />
      </div>

      {/* Gradient overlays for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, transparent 0%, color-mix(in srgb, var(--obsidian) 60%, transparent) 100%)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to top, var(--obsidian), transparent)',
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 clamp(20px, 5vw, 60px)',
          maxWidth: '1000px',
          width: '100%',
        }}
      >
        {/* Eyebrow text */}
        <motion.div variants={itemVariants}>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(9px, 1.2vw, 11px)',
              letterSpacing: '0.3em',
              color: 'var(--accent-blue)',
              marginBottom: '32px',
              textTransform: 'uppercase',
            }}
          >
            EVERYTHING STARTS WITH AN IDEA.
          </div>
        </motion.div>

        {/* Hello text */}
        <motion.div variants={itemVariants}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(14px, 2vw, 18px)',
              color: 'var(--text-secondary)',
              fontWeight: 300,
              letterSpacing: '0.05em',
              marginBottom: '8px',
            }}
          >
            HELLO, I'M
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants}>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(52px, 10vw, 120px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: 'var(--text-primary)',
              marginBottom: '8px',
            }}
          >
            MEHUL
          </h1>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(28px, 5.5vw, 64px)',
              fontWeight: 300,
              letterSpacing: '0.02em',
              lineHeight: 1,
              background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-violet) 50%, var(--accent-cyan) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0',
            }}
          >
            KUMAR CHOUDHARY
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants}>
          <p
            style={{
              marginTop: '32px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(14px, 1.8vw, 18px)',
              color: 'var(--text-secondary)',
              fontWeight: 300,
              letterSpacing: '0.01em',
              maxWidth: '500px',
              margin: '32px auto 0',
              lineHeight: 1.5,
            }}
          >
            {personal.subIntro}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '48px',
          }}
        >
          <button
            onClick={scrollToContent}
            id="explore-btn"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.15em',
              padding: '14px 28px',
              background: 'color-mix(in srgb, var(--accent-blue) 15%, transparent)',
              border: '1px solid color-mix(in srgb, var(--accent-blue) 40%, transparent)',
              borderRadius: '2px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = 'color-mix(in srgb, var(--accent-blue) 25%, transparent)'
              el.style.borderColor = 'color-mix(in srgb, var(--accent-blue) 80%, transparent)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = 'color-mix(in srgb, var(--accent-blue) 15%, transparent)'
              el.style.borderColor = 'color-mix(in srgb, var(--accent-blue) 40%, transparent)'
            }}
          >
            EXPLORE MY WORLD
          </button>

          <Link
            to="/story"
            id="story-btn"
            style={{
              textDecoration: 'none',
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.15em',
              padding: '14px 28px',
              background: 'transparent',
              border: '1px solid color-mix(in srgb, var(--text-primary) 12%, transparent)',
              borderRadius: '2px',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'color-mix(in srgb, var(--text-primary) 30%, transparent)'
              el.style.color = 'var(--text-primary)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'color-mix(in srgb, var(--text-primary) 12%, transparent)'
              el.style.color = 'var(--text-secondary)'
            }}
          >
            <Play size={10} />
            EXPERIENCE MY STORY
          </Link>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} color="var(--accent-blue)" />
        </motion.div>
      </motion.div>

      {/* Location tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          right: 'clamp(20px, 4vw, 60px)',
          zIndex: 2,
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          letterSpacing: '0.15em',
          color: 'var(--text-secondary)',
        }}
      >
        BENGALURU, INDIA
      </motion.div>
    </section>
  )
}
