import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, GitBranch, Globe, Mail, FileText, AlertCircle, CheckCircle, Download } from 'lucide-react'
import { personal } from '../../data/personal'

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address'
    if (!form.message.trim()) errs.message = 'Message is required'
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    // Form is validated — in production, connect to a backend or email service
    setSubmitted(true)
  }

  const inputStyle = (fieldName: string): React.CSSProperties => ({
    width: '100%',
    padding: '14px 16px',
    background: 'var(--surface-card)',
    border: `1px solid ${errors[fieldName] ? 'var(--status-error)' : 'color-mix(in srgb, var(--text-primary) 10%, transparent)'}`,
    borderRadius: '2px',
    color: 'var(--text-primary)',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  })

  return (
    <section
      id="contact"
      className="theme-alt"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vh, 160px) clamp(20px, 5vw, 100px)',
        background: 'var(--surface-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        bottom: '-200px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, color-mix(in srgb, var(--accent-blue) 6%, transparent) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
          09 — CONTACT
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(32px, 6vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}
        >
          Let's Build Something<br />
          <span style={{
            background: 'linear-gradient(135deg, var(--accent-primary-readable), var(--accent-creative-readable) 50%, var(--accent-innovation-readable))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Extraordinary.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(14px, 1.5vw, 17px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '500px',
            marginBottom: '64px',
          }}
        >
          Whether it's a startup idea, a collaboration, a project or just a conversation — I'd love to hear from you.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'start',
        }}>
          {/* Left: Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {[
                { icon: Mail, label: 'Email', href: `mailto:${personal.contact.email}`, value: personal.contact.email, color: 'var(--accent-blue)' },
                { icon: Globe, label: 'LinkedIn', href: personal.contact.linkedin, value: 'mehul-kumar-choudhary', color: 'var(--accent-blue)' },
                { icon: GitBranch, label: 'GitHub', href: personal.contact.github, value: 'MehulkumarRVU', color: 'var(--accent-violet)' },
                { icon: Globe, label: 'Instagram', href: personal.contact.instagram, value: '@kumar_.mehul', color: 'var(--accent-violet)' },
              ].map(({ icon: Icon, label, href, value, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  id={`contact-${label.toLowerCase()}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    background: 'var(--surface-card)',
                    border: '1px solid color-mix(in srgb, var(--text-primary) 8%, transparent)',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `color-mix(in srgb, ${color} 40%, transparent)`
                    e.currentTarget.style.background = `color-mix(in srgb, ${color} 8%, transparent)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--text-primary) 8%, transparent)'
                    e.currentTarget.style.background = 'var(--surface-card)'
                  }}
                >
                  <Icon size={18} color={color} />
                  <div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: '3px' }}>
                      {label.toUpperCase()}
                    </div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: 'var(--text-primary)' }}>
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume download */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="/resume/Mehul_Kumar_Choudhary_1Page.pdf"
                download
                id="resume-1page"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 24px',
                  background: 'color-mix(in srgb, var(--accent-blue) 10%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--accent-blue) 30%, transparent)',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'var(--accent-primary-readable)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'color-mix(in srgb, var(--accent-blue) 20%, transparent)'
                  e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-blue) 60%, transparent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'color-mix(in srgb, var(--accent-blue) 10%, transparent)'
                  e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-blue) 30%, transparent)'
                }}
              >
                <Download size={14} />
                1-PAGE RESUME
              </a>
              <a
                href="/resume/Mehul_Kumar_Choudhary_2page_resume.pdf"
                download
                id="resume-2page"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 24px',
                  background: 'color-mix(in srgb, var(--accent-violet) 10%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--accent-violet) 30%, transparent)',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'var(--accent-creative-readable)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'color-mix(in srgb, var(--accent-violet) 20%, transparent)'
                  e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-violet) 60%, transparent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'color-mix(in srgb, var(--accent-violet) 10%, transparent)'
                  e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-violet) 30%, transparent)'
                }}
              >
                <FileText size={14} />
                2-PAGE RESUME
              </a>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {submitted ? (
              <div style={{
                padding: '48px',
                background: 'color-mix(in srgb, var(--text-primary) 60%, transparent)',
                border: '1px solid color-mix(in srgb, var(--accent-blue) 30%, transparent)',
                borderRadius: '4px',
                textAlign: 'center',
              }}>
                <CheckCircle size={48} color="var(--accent-blue)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
                  Message received!
                </h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: 'var(--text-secondary)' }}>
                  Note: This form requires a backend to send messages. Please reach out via email or LinkedIn directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      style={inputStyle('name')}
                      onFocus={(e) => (e.target.style.borderColor = errors.name ? 'var(--status-error)' : 'color-mix(in srgb, var(--accent-blue) 50%, transparent)')}
                      onBlur={(e) => (e.target.style.borderColor = errors.name ? 'var(--status-error)' : 'color-mix(in srgb, var(--text-primary) 10%, transparent)')}
                    />
                    {errors.name && <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', color: 'var(--status-error)', marginTop: '4px' }}>{errors.name}</div>}
                  </div>
                  <div>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      style={inputStyle('email')}
                      onFocus={(e) => (e.target.style.borderColor = errors.email ? 'var(--status-error)' : 'color-mix(in srgb, var(--accent-blue) 50%, transparent)')}
                      onBlur={(e) => (e.target.style.borderColor = errors.email ? 'var(--status-error)' : 'color-mix(in srgb, var(--text-primary) 10%, transparent)')}
                    />
                    {errors.email && <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', color: 'var(--status-error)', marginTop: '4px' }}>{errors.email}</div>}
                  </div>
                </div>

                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Subject (optional)"
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  style={inputStyle('subject')}
                  onFocus={(e) => (e.target.style.borderColor = 'color-mix(in srgb, var(--accent-blue) 50%, transparent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'color-mix(in srgb, var(--text-primary) 10%, transparent)')}
                />

                <div>
                  <textarea
                    id="contact-message"
                    placeholder="Tell me about your project, idea or just say hello..."
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '140px' }}
                    onFocus={(e) => (e.target.style.borderColor = errors.message ? 'var(--status-error)' : 'color-mix(in srgb, var(--accent-blue) 50%, transparent)')}
                    onBlur={(e) => (e.target.style.borderColor = errors.message ? 'var(--status-error)' : 'color-mix(in srgb, var(--text-primary) 10%, transparent)')}
                  />
                  {errors.message && <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', color: 'var(--status-error)', marginTop: '4px' }}>{errors.message}</div>}
                </div>

                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  padding: '12px',
                  background: 'color-mix(in srgb, var(--text-primary) 3%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--text-primary) 6%, transparent)',
                  borderRadius: '2px',
                }}>
                  <AlertCircle size={14} color="var(--text-secondary)" style={{ flexShrink: 0, marginTop: '1px' }} />
                  This form is for demonstration. To send actual messages, please email directly or connect on LinkedIn.
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  style={{
                    padding: '16px 32px',
                    background: 'color-mix(in srgb, var(--accent-blue) 18%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--accent-blue) 55%, transparent)',
                    borderRadius: '2px',
                    color: 'var(--text-primary)',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.3s ease',
                    width: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'color-mix(in srgb, var(--accent-blue) 28%, transparent)'
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-blue) 85%, transparent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'color-mix(in srgb, var(--accent-blue) 18%, transparent)'
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-blue) 55%, transparent)'
                  }}
                >
                  SEND MESSAGE
                  <Send size={12} />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="theme-dark"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            margin: '80px calc(-1 * clamp(20px, 5vw, 100px)) 0',
            padding: '32px clamp(20px, 5vw, 100px)',
            background: 'var(--surface-dark)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px',
            color: 'var(--text-secondary)',
          }}>
            © 2026 Mehul Kumar Choudhary. All rights reserved.
          </div>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: 'var(--text-secondary)',
          }}>
            BENGALURU, INDIA
          </div>
        </motion.div>
      </div>
    </section>
  )
}
