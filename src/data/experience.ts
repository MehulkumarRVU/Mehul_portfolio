export interface Experience {
  id: string
  title: string
  company: string
  type: 'work' | 'internship' | 'project'
  description: string
  skills: string[]
  year: string
  current?: boolean
}

export const experience: Experience[] = [
  {
    id: 'trinarix',
    title: 'Co-founder',
    company: 'Trinarix',
    type: 'work',
    description: 'Co-founding and leading a technology startup focused on AI and software products. Building PocketCoach AI — an AI-powered sports coaching platform using computer vision and pose estimation.',
    skills: ['Leadership', 'Product Development', 'AI/ML', 'Business Strategy', 'Full-Stack Development'],
    year: '2025',
    current: true,
  },
  {
    id: 'dsmok',
    title: 'Startup Contributor',
    company: 'DSMOK Wellness Startup',
    type: 'work',
    description: 'Contributed to building and growing a wellness startup, gaining hands-on experience in startup operations, product development and business strategy.',
    skills: ['Business Development', 'Strategy', 'Operations'],
    year: '2024',
  },
  {
    id: 'emova',
    title: 'Frontend Developer',
    company: 'Emova Soft Toys',
    type: 'work',
    description: 'Developed frontend web experiences for a soft toy brand, focusing on user experience, visual design and responsive development.',
    skills: ['React', 'HTML/CSS', 'JavaScript', 'UI/UX'],
    year: '2024',
  },
  {
    id: 'audio-processing',
    title: 'Backend Developer',
    company: 'Audio Processing Web App',
    type: 'project',
    description: 'Built the backend infrastructure for an audio processing web application, implementing API design, data management and audio processing pipelines.',
    skills: ['Python', 'FastAPI', 'Backend Development', 'API Design'],
    year: '2024',
  },
  {
    id: 'mit-wpu',
    title: 'Winter Intern',
    company: 'MIT-WPU',
    type: 'internship',
    description: 'Completed a winter internship at MIT World Peace University, gaining academic and practical experience in technology and research.',
    skills: ['Research', 'Technology', 'Learning'],
    year: '2024',
  },
]

export interface Achievement {
  id: string
  title: string
  event: string
  description: string
  type: 'award' | 'selection' | 'participation' | 'publication' | 'competition'
  year: string
}

export const achievements: Achievement[] = [
  {
    id: 'myosa',
    title: 'Final Round Selection',
    event: 'MYOSA 4.0',
    description: 'Selected for the final round of MYOSA 4.0, a prestigious hardware innovation competition, for the MyOSA LifeSaver CPR assistance prototype.',
    type: 'selection',
    year: '2024',
  },
  {
    id: 'ieee-apscon',
    title: 'Project Opportunity',
    event: 'IEEE APSCON 2026',
    description: 'Participated in IEEE APSCON 2026, presenting project work in the domain of technology and engineering.',
    type: 'participation',
    year: '2026',
  },
  {
    id: 'darkroom-hackathon',
    title: 'Participant',
    event: 'Darkroom CV Hackathon 2026',
    description: 'Participated in the Darkroom Computer Vision Hackathon 2026, competing in computer vision challenges.',
    type: 'competition',
    year: '2026',
  },
  {
    id: 'tarang',
    title: 'Participant',
    event: 'Tarang 2026',
    description: 'Participated in Tarang 2026, an inter-university technical and cultural fest.',
    type: 'participation',
    year: '2026',
  },
  {
    id: 'spectra',
    title: 'Participant',
    event: 'SPECTRA — RV University',
    description: 'Participated in SPECTRA, a technical symposium at RV University showcasing engineering projects and innovations.',
    type: 'participation',
    year: '2024',
  },
  {
    id: 'rvu-fest',
    title: 'Participant',
    event: 'RVU Fest',
    description: 'Active participant in RVU Fest, the annual university festival combining technical and cultural events.',
    type: 'participation',
    year: '2024',
  },
  {
    id: 'rvu-santhe',
    title: 'Participant',
    event: 'RVU Santhe',
    description: 'Participated in RVU Santhe, a student entrepreneurship marketplace at RV University.',
    type: 'participation',
    year: '2024',
  },
  {
    id: 'quantora',
    title: 'Participant',
    event: 'Quantora',
    description: 'Participated in Quantora, a quantitative and analytical challenge event.',
    type: 'competition',
    year: '2024',
  },
  {
    id: 'innovitus',
    title: 'Participant',
    event: 'INNOVITUS',
    description: 'Participated in INNOVITUS, an innovation and entrepreneurship challenge.',
    type: 'competition',
    year: '2024',
  },
  {
    id: 'university-magazine',
    title: 'Featured',
    event: 'RV University Magazine',
    description: 'Featured in the RV University student magazine for academic and extracurricular contributions.',
    type: 'publication',
    year: '2024',
  },
]
