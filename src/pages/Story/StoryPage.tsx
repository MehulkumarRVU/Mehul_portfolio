import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowDown, ChevronRight } from 'lucide-react'
import { chapters } from '../../data/story'
import { ParticleCanvas } from '../../components/3d/ParticleCanvas'
import type { ParticleScene } from '../../components/3d/ParticleCanvas'
import casualPortrait from '../../../assets/Mehul_casual .jpeg'

const sceneMap: Record<string, ParticleScene> = {
  cluster: 'scatter',
  neural: 'neural',
  geometric: 'geometric',
  connected: 'geometric',
  aperture: 'aperture',
  universe: 'universe',
}

export function StoryPage() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [scrollLocked, setScrollLocked] = useState(false)
  const chapter = chapters[currentChapter]

  useEffect(() => {
    document.title = `Story — Mehul Kumar Choudhary`
    return () => { document.title = 'Mehul Kumar Choudhary' }
  }, [])

  const goToChapter = (index: number) => {
    if (scrollLocked) return
    if (index < 0 || index >= chapters.length) return
    setScrollLocked(true)
    setCurrentChapter(index)
    setTimeout(() => setScrollLocked(false), 1000)
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (e.deltaY > 50) goToChapter(currentChapter + 1)
      else if (e.deltaY < -50) goToChapter(currentChapter - 1)
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goToChapter(currentChapter + 1)
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') goToChapter(currentChapter - 1)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKey)
    }
  }, [currentChapter, scrollLocked])

  // Touch support
  const touchStartY = useRef<number>(0)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY
    if (Math.abs(delta) > 50) {
      if (delta > 0) goToChapter(currentChapter + 1)
      else goToChapter(currentChapter - 1)
    }
  }

  const isLast = currentChapter === chapters.length - 1

  return (
    <div
      className="theme-dark"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--obsidian)',
        overflow: 'hidden',
        userSelect: 'none',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Particle background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <ParticleCanvas scene={sceneMap[chapter.scene] || 'scatter'} />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, color-mix(in srgb, var(--obsidian) 90%, transparent) 0%, color-mix(in srgb, var(--obsidian) 40%, transparent) 50%, color-mix(in srgb, var(--obsidian) 20%, transparent) 100%)',
        zIndex: 1,
      }} />

      <img
        src={casualPortrait}
        alt="Mehul Kumar Choudhary, casual portrait"
        style={{
          position: 'absolute',
          right: 'clamp(24px, 8vw, 120px)',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(180px, 28vw, 360px)',
          height: 'min(62vh, 520px)',
          objectFit: 'cover',
          objectPosition: 'center 30%',
          borderRadius: '4px',
          opacity: 0.72,
          zIndex: 2,
          maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Back button */}
      <Link
        to="/"
        style={{
          position: 'absolute',
          top: '24px',
          left: 'clamp(20px, 4vw, 48px)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.15em',
          color: 'var(--text-secondary)',
          zIndex: 100,
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => ((e.currentTarget).style.color = 'var(--text-primary)')}
        onMouseLeave={(e) => ((e.currentTarget).style.color = 'var(--text-secondary)')}
      >
        <ArrowLeft size={14} />
        BACK
      </Link>

      {/* Chapter indicators */}
      <div style={{
        position: 'absolute',
        right: '32px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        {chapters.map((_, i) => (
          <button
            key={i}
            id={`chapter-dot-${i}`}
            onClick={() => goToChapter(i)}
            style={{
              width: '4px',
              height: i === currentChapter ? '24px' : '4px',
              borderRadius: '2px',
              background: i === currentChapter ? 'var(--accent-blue)' : 'color-mix(in srgb, var(--text-primary) 20%, transparent)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 clamp(20px, 6vw, 80px)',
        zIndex: 10,
        maxWidth: '700px',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Chapter number */}
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: 'var(--accent-blue)',
              marginBottom: '24px',
            }}>
              CHAPTER {chapter.number}
            </div>

            {/* Chapter title */}
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              color: 'var(--text-primary)',
              marginBottom: '32px',
            }}>
              {chapter.title}
            </h1>

            {/* Quote */}
            <blockquote style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '32px',
              paddingLeft: '24px',
              borderLeft: '2px solid color-mix(in srgb, var(--accent-blue) 40%, transparent)',
            }}>
              "{chapter.quote}"
            </blockquote>

            {/* Description */}
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              marginBottom: '40px',
            }}>
              {chapter.description}
            </p>

            {/* Keywords */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px' }}>
              {chapter.keywords.map((kw, i) => (
                <motion.span
                  key={kw}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '9px',
                    letterSpacing: '0.12em',
                    padding: '5px 12px',
                    background: 'color-mix(in srgb, var(--accent-blue) 10%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--accent-blue) 20%, transparent)',
                    borderRadius: '2px',
                    color: 'var(--accent-blue)',
                  }}
                >
                  {kw}
                </motion.span>
              ))}
            </div>

            {/* Navigation hint */}
            {!isLast ? (
              <div
                onClick={() => goToChapter(currentChapter + 1)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget).style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => ((e.currentTarget).style.color = 'var(--text-secondary)')}
              >
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowDown size={14} />
                </motion.div>
                NEXT CHAPTER
              </div>
            ) : (
              <div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(20px, 3vw, 32px)',
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontStyle: 'italic',
                }}>
                  "THE NEXT CHAPTER IS STILL BEING WRITTEN."
                </div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  color: 'var(--accent-blue)',
                  marginBottom: '32px',
                }}>
                  MEHUL KUMAR CHOUDHARY.
                </div>
                <Link
                  to="/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: 'var(--text-primary)',
                    padding: '14px 28px',
                    background: 'color-mix(in srgb, var(--accent-blue) 10%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--accent-blue) 40%, transparent)',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  EXPLORE THE PORTFOLIO
                  <ChevronRight size={12} />
                </Link>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Chapter counter */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: 'clamp(20px, 4vw, 48px)',
        fontFamily: "'Space Mono', monospace",
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: 'var(--text-secondary)',
        zIndex: 100,
      }}>
        {String(currentChapter + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        right: '32px',
        fontFamily: "'Space Mono', monospace",
        fontSize: '9px',
        letterSpacing: '0.15em',
        color: 'var(--text-secondary)',
        zIndex: 100,
        opacity: currentChapter === 0 ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}>
        SCROLL TO NAVIGATE
      </div>
    </div>
  )
}
