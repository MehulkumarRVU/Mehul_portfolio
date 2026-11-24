import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoadingScreen } from './components/ui/LoadingScreen'
import { HomePage } from './pages/Home/HomePage'
import { StoryPage } from './pages/Story/StoryPage'
import { ProjectDetailPage } from './pages/ProjectDetail/ProjectDetailPage'
import { useWebGL } from './hooks/useWebGL'

// Custom cursor
function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ring, setRing] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Don't show on mobile/touch
    if ('ontouchstart' in window) return

    let animFrame: number
    let ringX = 0
    let ringY = 0

    const updateCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const animate = () => {
      setRing((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }))
      animFrame = requestAnimationFrame(animate)
    }

    const handleHover = () => setHovering(true)
    const handleLeave = () => setHovering(false)

    document.addEventListener('mousemove', updateCursor)
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    animFrame = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  if ('ontouchstart' in window) return null

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 2 : 1})`,
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: ring.x,
          top: ring.y,
          width: hovering ? '48px' : '32px',
          height: hovering ? '48px' : '32px',
          borderColor: hovering ? 'color-mix(in srgb, var(--accent-blue) 80%, transparent)' : 'color-mix(in srgb, var(--accent-blue) 40%, transparent)',
        }}
      />
    </>
  )
}

// Noise texture overlay
function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />
}

// WebGL fallback
function WebGLFallback() {
  return (
    <div className="theme-dark" style={{
      background: 'var(--obsidian)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      textAlign: 'center',
    }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '24px',
        fontWeight: 600,
        color: 'var(--text-primary)',
        marginBottom: '16px',
      }}>
        MEHUL KUMAR CHOUDHARY
      </div>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '16px',
        color: 'var(--text-secondary)',
        maxWidth: '500px',
        lineHeight: 1.6,
        marginBottom: '32px',
      }}>
        Your browser doesn't fully support WebGL, which powers the 3D experience on this site. 
        Please try a modern browser like Chrome, Firefox or Edge for the full experience.
      </div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href="mailto:kumarmehulchoudhary@gmail.com"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.15em',
            color: 'var(--accent-blue)',
            textDecoration: 'none',
            padding: '12px 24px',
            border: '1px solid color-mix(in srgb, var(--accent-blue) 40%, transparent)',
            borderRadius: '2px',
          }}
        >
          EMAIL ME
        </a>
        <a
          href="https://www.linkedin.com/in/mehul-kumar-choudhary-4987113a1/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.15em',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            padding: '12px 24px',
            border: '1px solid color-mix(in srgb, var(--text-primary) 12%, transparent)',
            borderRadius: '2px',
          }}
        >
          LINKEDIN
        </a>
      </div>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const hasWebGL = useWebGL()

  return (
    <BrowserRouter>
      <div style={{ position: 'relative' }}>
        <NoiseOverlay />
        <CustomCursor />

        {/* Loading screen */}
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

        {/* Main app - renders behind loading screen */}
        {!loading && (
          <>
            {hasWebGL ? (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/story" element={<StoryPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                <Route path="/photography" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            ) : (
              <WebGLFallback />
            )}
          </>
        )}
      </div>
    </BrowserRouter>
  )
}
