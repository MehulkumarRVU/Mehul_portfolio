// Personal data for Mehul Kumar Choudhary's portfolio
// Edit this file to update content across the entire website

export const personal = {
  name: {
    first: 'Mehul',
    middle: 'Kumar',
    last: 'Choudhary',
    full: 'Mehul Kumar Choudhary',
    display: ['MEHUL', 'KUMAR', 'CHOUDHARY'],
  },
  tagline: 'Building Ideas Into Technology, Businesses & Experiences.',
  intro: "I'm Mehul — a technology entrepreneur, AI/ML enthusiast, software developer and creative thinker. I work across engineering, entrepreneurship, business and design, turning ideas into products and experiences with real-world impact.",
  subIntro: 'Building technology. Creating businesses. Exploring creativity.',
  identity: 'Multidisciplinary Technology Entrepreneur & Creative Technologist',
  location: 'Bengaluru, India',
  year: '2026',

  education: {
    degree: 'B.Tech Computer Science and Engineering',
    university: 'RV University',
    major: 'Artificial Intelligence and Machine Learning',
    minor: 'Entrepreneurship',
  },

  company: {
    name: 'Trinarix',
    role: 'Co-founder',
    founded: 'June 2025',
    coFounders: ['Mehul Kumar Choudhary', 'Dharini K H', 'Jathin Kirani Nagraj'],
  },

  contact: {
    email: 'kumarmehulchoudhary@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mehul-kumar-choudhary-4987113a1/',
    github: 'https://github.com/MehulkumarRVU',
    instagram: 'https://instagram.com/kumar_.mehul',
  },

  resume: {
    onePage: '/resume/Mehul_Kumar_Choudhary_1Page.pdf',
    twoPage: '/resume/Mehul_Kumar_Choudhary_2page_resume.pdf',
  },

  about: `A multidisciplinary technology entrepreneur and creative technologist working across AI, software engineering, entrepreneurship, design and business. I don't limit myself to one discipline — I build, explore, create and turn ideas into reality.`,

  interests: [
    'AI and Machine Learning',
    'Full-Stack Development',
    'Software Engineering',
    'Entrepreneurship',
    'Startup Development',
    'Photography',
    'Creative Design',
    'Branding',
    'Marketing',
    'Business Strategy',
  ],

  loadingMessages: [
    'INITIALIZING EXPERIENCE',
    'LOADING DIGITAL IDENTITY',
    'BUILDING CONNECTIONS',
    'ENTERING THE UNIVERSE',
  ],
}

export type PersonalData = typeof personal
