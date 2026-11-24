import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personal } from '../../data/personal'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState(0)
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  const messages = personal.loadingMessages

  useEffect(() => {
    // Simulate loading progress
    const startTime = Date.now()
    const duration = 3200

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const p = Math.min(elapsed / duration, 1)
      setProgress(p)

      // Update message
      const msgIndex = Math.floor(p * messages.length)
      setMessageIndex(Math.min(msgIndex, messages.length - 1))

      if (p >= 1) {
        clearInterval(intervalRef.current)
        // Brief pause then complete
        setTimeout(() => {
          setPhase(1)
          setTimeout(onComplete, 800)
        }, 400)
      }
    }

    intervalRef.current = setInterval(updateProgress, 16)
    return () => clearInterval(intervalRef.current)
  }, [onComplete, messages.length])

  return (
    <AnimatePresence>
      {phase === 0 && (
        <motion.div
          className="loader-container"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(color-mix(in srgb, var(--accent-blue) 3%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--accent-blue) 3%, transparent) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 'clamp(11px, 1.5vw, 13px)',
                letterSpacing: '0.3em',
                color: 'var(--accent-blue)',
                marginBottom: '12px',
              }}
            >
              MEHUL / 2026
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(28px, 5vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                lineHeight: 1,
              }}
            >
              MKC.
            </div>
          </motion.div>

          {/* Progress bar */}
          <div
            style={{
              width: '240px',
              marginBottom: '24px',
              position: 'relative',
            }}
          >
            <div
              style={{
                height: '1px',
                background: 'color-mix(in srgb, var(--text-primary) 8%, transparent)',
                borderRadius: '1px',
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-violet), var(--accent-cyan))',
                  transformOrigin: 'left',
                  scaleX: progress,
                }}
              />
            </div>
          </div>

          {/* Loading message */}
          <motion.div
            key={messageIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'var(--text-secondary)',
            }}
          >
            {messages[messageIndex]}
          </motion.div>

          {/* Progress percentage */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              color: 'color-mix(in srgb, var(--text-primary) 20%, transparent)',
              letterSpacing: '0.1em',
            }}
          >
            {Math.round(progress * 100)}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
