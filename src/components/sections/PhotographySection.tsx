import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Grid, List } from 'lucide-react'
import bazaarPhoto from '../../../assets/The_Heart_of_the_Bazaar_1RUA24CSE0253_Mehul_Kumar_Choudhary_1 (1).jpg'
import devotionPhoto from '../../../assets/Devotion_in_the_Shadows_1RUA24CSE0253_Mehul_Kumar_Choudhary_2 (1).png'
import divinityPhoto from '../../../assets/Where_Earth_Meets_Divinity_1RUA24CSE0253_Mehul_Kumar_Choudhary_3 (1).jpg'
import woodsPhoto from '../../../assets/Whispers_of_the_Forgotten_Woods_1RUA24CSE0253_Mehul_Kumar_Choudhary_4 (1).jpg'
import junctionPhoto from '../../../assets/Whitefeild Junction_ Midnight Platform_1RUA24CSE0253_Mehul_Kumar_Choudhary_5 (1).jpg'
import cityPhoto from '../../../assets/When_the_City_Turns_Gold_1RUA24CSE0253_Mehul_Kumar_Choudhary_6jpg.png'

interface Photo {
  id: string
  src: string
  alt: string
  category: string
  caption: string
  size: 'normal' | 'wide' | 'tall'
}

const categories = ['ALL', 'STREET', 'ARCHITECTURE', 'NIGHT', 'CINEMATIC']

const photos: Photo[] = [
  { id: 'p1', src: bazaarPhoto, alt: 'The Heart of the Bazaar', category: 'STREET', caption: 'The Heart of the Bazaar', size: 'wide' },
  { id: 'p2', src: devotionPhoto, alt: 'Devotion in the Shadows', category: 'ARCHITECTURE', caption: 'Devotion in the Shadows', size: 'tall' },
  { id: 'p3', src: divinityPhoto, alt: 'Where Earth Meets Divinity', category: 'ARCHITECTURE', caption: 'Where Earth Meets Divinity', size: 'normal' },
  { id: 'p4', src: woodsPhoto, alt: 'Whispers of the Forgotten Woods', category: 'CINEMATIC', caption: 'Whispers of the Forgotten Woods', size: 'normal' },
  { id: 'p5', src: junctionPhoto, alt: 'Whitefield Junction: Midnight Platform', category: 'NIGHT', caption: 'Whitefield Junction: Midnight Platform', size: 'wide' },
  { id: 'p6', src: cityPhoto, alt: 'When the City Turns Gold', category: 'CINEMATIC', caption: 'When the City Turns Gold', size: 'tall' },
]

const gradients = [
  'linear-gradient(135deg, var(--obsidian), color-mix(in srgb, var(--accent-violet) 50%, var(--obsidian)))',
  'linear-gradient(135deg, var(--obsidian), color-mix(in srgb, var(--steel-grey) 45%, var(--obsidian)))',
  'linear-gradient(135deg, var(--obsidian), color-mix(in srgb, var(--accent-blue) 48%, var(--obsidian)))',
  'linear-gradient(135deg, var(--obsidian), color-mix(in srgb, var(--accent-cyan) 42%, var(--obsidian)))',
  'linear-gradient(135deg, var(--obsidian), color-mix(in srgb, var(--accent-violet) 68%, var(--obsidian)))',
  'linear-gradient(135deg, var(--obsidian), color-mix(in srgb, var(--steel-grey) 58%, var(--obsidian)))',
  'linear-gradient(135deg, var(--obsidian), color-mix(in srgb, var(--accent-blue) 62%, var(--obsidian)))',
  'linear-gradient(135deg, var(--obsidian), color-mix(in srgb, var(--accent-violet) 42%, var(--obsidian)))',
  'linear-gradient(135deg, var(--obsidian), color-mix(in srgb, var(--accent-cyan) 58%, var(--obsidian)))',
]

export function PhotographySection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'ALL'
    ? photos
    : photos.filter((p) => p.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevPhoto = () => setLightboxIndex((i) => i !== null ? Math.max(0, i - 1) : null)
  const nextPhoto = () => setLightboxIndex((i) => i !== null ? Math.min(filtered.length - 1, i + 1) : null)

  return (
    <section
      id="creative"
      className="theme-dark"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vh, 160px) clamp(20px, 5vw, 100px)',
        background: 'var(--surface-dark)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.3em',
            color: 'var(--accent-violet)',
            marginBottom: '16px',
          }}
        >
          08 — PHOTOGRAPHY & CREATIVE
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', gap: '24px', flexWrap: 'wrap' }}>
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
            }}
          >
            Through the Lens
          </motion.h2>

          <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                id={`photo-cat-${cat}`}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '9px',
                  letterSpacing: '0.12em',
                  padding: '8px 14px',
                  background: activeCategory === cat ? 'color-mix(in srgb, var(--accent-violet) 15%, transparent)' : 'transparent',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'color-mix(in srgb, var(--accent-violet) 40%, transparent)' : 'color-mix(in srgb, var(--text-primary) 8%, transparent)',
                  borderRadius: '0',
                  color: activeCategory === cat ? 'var(--accent-violet)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  marginLeft: '-1px',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          marginBottom: '32px',
          padding: '12px 20px',
          background: 'color-mix(in srgb, var(--accent-violet) 6%, transparent)',
          border: '1px solid color-mix(in srgb, var(--accent-violet) 20%, transparent)',
          borderRadius: '2px',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '13px',
          color: 'var(--text-secondary)',
        }}>
          A collection of photographs by Mehul Kumar Choudhary.
        </div>

        {/* Masonry Grid */}
        <div style={{
          columns: 'clamp(2, calc((100vw - 40px) / 300px), 4)',
          columnGap: '12px',
          lineHeight: 0,
        }}>
          {filtered.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              style={{
                display: 'inline-block',
                width: '100%',
                marginBottom: '12px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '2px',
                border: '1px solid color-mix(in srgb, var(--text-primary) 6%, transparent)',
              }}
            >
              <div style={{
                width: '100%',
                paddingBottom: photo.size === 'wide' ? '56%' : photo.size === 'tall' ? '130%' : '80%',
                background: gradients[index % gradients.length],
                position: 'relative',
                transition: 'transform 0.4s ease',
              }}
                onMouseEnter={(e) => ((e.currentTarget).style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => ((e.currentTarget).style.transform = 'scale(1)')}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '16px',
                  background: 'linear-gradient(to top, color-mix(in srgb, var(--obsidian) 75%, transparent) 0%, transparent 65%)',
                }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px',
                    letterSpacing: '0.15em',
                    color: 'var(--accent-violet)',
                    marginBottom: '4px',
                  }}>
                    {photo.category}
                  </div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '12px',
                    color: 'var(--warm-ivory)',
                    lineHeight: 1.3,
                  }}>
                    {photo.caption}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'color-mix(in srgb, var(--obsidian) 95%, transparent)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(20px)',
            }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox() }}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto() }}
              disabled={lightboxIndex === 0}
              style={{ position: 'absolute', left: '24px', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', opacity: lightboxIndex === 0 ? 0.3 : 1 }}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto() }}
              disabled={lightboxIndex === filtered.length - 1}
              style={{ position: 'absolute', right: '24px', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', opacity: lightboxIndex === filtered.length - 1 ? 0.3 : 1 }}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '800px',
                width: '90vw',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid color-mix(in srgb, var(--text-primary) 10%, transparent)',
              }}
            >
              <div style={{
                width: '100%',
                paddingBottom: '65%',
                background: gradients[lightboxIndex % gradients.length],
                position: 'relative',
              }}>
                <img src={filtered[lightboxIndex]?.src} alt={filtered[lightboxIndex]?.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                </div>
              </div>
              <div style={{ padding: '20px', background: 'var(--surface-card)' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'var(--accent-violet)', letterSpacing: '0.15em', marginBottom: '6px' }}>
                  {filtered[lightboxIndex]?.category}
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', color: 'var(--text-primary)' }}>
                  {filtered[lightboxIndex]?.caption}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
