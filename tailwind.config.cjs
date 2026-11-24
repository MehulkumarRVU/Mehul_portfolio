/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--obsidian)',
        'bg-secondary': 'var(--surface-dark-raised)',
        'bg-card': 'var(--surface-light-raised)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'accent-blue': 'var(--accent-blue)',
        'accent-violet': 'var(--accent-violet)',
        'steel-grey': 'var(--steel-grey)',
        'accent-cyan': 'var(--accent-cyan)',
      },
    },
  },
  plugins: [],
}
