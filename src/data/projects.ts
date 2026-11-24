export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  role: string
  status: 'completed' | 'in-progress' | 'concept'
  category: 'startup' | 'engineering' | 'creative' | 'product'
  tags: string[]
  technologies: string[]
  link?: string
  github?: string
  featured: boolean
  coverColor: string
  year: string
}

export const projects: Project[] = [
  {
    id: 'pocketcoach-ai',
    title: 'PocketCoach AI',
    subtitle: 'Coaching, Reimagined with AI.',
    description: 'An AI-powered sports coaching platform using computer vision and pose estimation to analyze movement and provide technique feedback.',
    longDescription: `PocketCoach AI is the flagship product of Trinarix — an AI-powered sports coaching platform that democratizes access to expert coaching through intelligent computer vision and biomechanical analysis.

The platform leverages MediaPipe's pose estimation to track 33 body landmarks in real-time, calculating joint angles, movement trajectories and technique accuracy. Athletes receive instant feedback on their form without needing a human coach present.

Supported training categories include boxing, table tennis, badminton, gym workouts, stretching, mobility training, rehabilitation, home workouts and calisthenics.`,
    role: 'Co-founder & Lead Developer',
    status: 'in-progress',
    category: 'startup',
    tags: ['AI/ML', 'Computer Vision', 'Sports Tech', 'Startup'],
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'MediaPipe', 'NumPy', 'PostgreSQL', 'Redis', 'Docker'],
    link: 'https://landing-page-pocket-coach.vercel.app/',
    featured: true,
    coverColor: 'var(--accent-blue)',
    year: '2025',
  },
  {
    id: 'trinarix',
    title: 'Trinarix',
    subtitle: 'Building the future of AI products.',
    description: 'A technology startup focused on building AI, software and technology products that solve real-world problems.',
    longDescription: `Trinarix is a technology startup co-founded by Mehul Kumar Choudhary, Dharini K H and Jathin Kirani Nagraj in June 2025. The company is focused on building AI, software and technology products with real-world impact.

The company's approach combines deep technical expertise with entrepreneurial thinking, developing products that are not just technically sophisticated but commercially viable and accessible.

Trinarix's first flagship product is PocketCoach AI — an AI-powered sports coaching platform that uses computer vision and pose estimation to democratize access to expert coaching.`,
    role: 'Co-founder',
    status: 'in-progress',
    category: 'startup',
    tags: ['Startup', 'AI', 'Entrepreneurship'],
    technologies: ['React', 'Python', 'AI/ML', 'FastAPI'],
    featured: true,
    coverColor: 'var(--accent-violet)',
    year: '2025',
  },
  {
    id: 'myosa-lifesaver',
    title: 'MyOSA LifeSaver / ResQPulse',
    subtitle: 'IoT-powered CPR assistance prototype.',
    description: 'An IoT-based CPR assistance prototype designed to guide users through proper CPR technique during emergencies.',
    longDescription: `MyOSA LifeSaver (also called ResQPulse) is an IoT-based CPR assistance prototype that uses sensors and feedback mechanisms to guide users through proper CPR technique during cardiac emergencies.

The system uses an ESP32 microcontroller with integrated sensors to measure compression depth and rate, an OLED display for real-time feedback, MQTT for communication, Node-RED for data flow orchestration, and Firebase for data storage and analysis.

This project was selected for the final round of MYOSA 4.0, a prestigious hardware innovation competition, recognizing its potential to save lives through accessible emergency response technology.`,
    role: 'Developer',
    status: 'completed',
    category: 'engineering',
    tags: ['IoT', 'Healthcare', 'Embedded Systems', 'Hardware'],
    technologies: ['ESP32', 'Arduino', 'MQTT', 'Node-RED', 'Firebase', 'OLED', 'Sensors'],
    featured: true,
    coverColor: 'var(--accent-cyan)',
    year: '2024',
  },
  {
    id: 'studio-h',
    title: 'Studio H',
    subtitle: 'Photography business management platform.',
    description: 'A comprehensive platform for managing a photography business, from client galleries to bookings and contracts.',
    longDescription: `Studio H is a photography business management platform designed to streamline operations for professional photographers. The platform handles everything from client galleries and bookings to contracts and payments.

Planned features include client galleries with AI-powered face search, booking management, admin dashboard, Razorpay payment integration, client messaging, automated contract generation and comprehensive business analytics.

The platform is built to serve both the operational needs of a photography business and the creative expression of a photographer's visual identity.`,
    role: 'Founder & Developer',
    status: 'in-progress',
    category: 'product',
    tags: ['SaaS', 'Photography', 'Business Management'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Razorpay', 'AI'],
    featured: false,
    coverColor: 'var(--accent-blue)',
    year: '2025',
  },
  {
    id: 'skyways',
    title: 'SkyWays',
    subtitle: 'Flight booking application concept.',
    description: 'A modern flight booking application concept with a focus on user experience and intuitive design.',
    longDescription: `SkyWays is a flight booking application concept that prioritizes user experience and intuitive design. The concept explores how modern web technologies can create a seamless travel booking experience.

The project demonstrates frontend development skills through a clean, responsive interface that makes searching, comparing and booking flights straightforward and enjoyable.`,
    role: 'Designer & Developer',
    status: 'concept',
    category: 'product',
    tags: ['UI/UX', 'Web App', 'Travel Tech'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    coverColor: 'var(--accent-violet)',
    year: '2024',
  },
  {
    id: 'gripmat',
    title: 'GripMat',
    subtitle: 'Yoga strap product concept.',
    description: 'A product concept exploring the intersection of fitness, design and business strategy.',
    longDescription: `GripMat is a yoga strap product concept that explores the intersection of fitness product design, branding and business strategy. The project involved market research, product design thinking and go-to-market strategy development.

This project demonstrates Mehul's interest in physical product development alongside digital entrepreneurship.`,
    role: 'Product Strategist',
    status: 'concept',
    category: 'product',
    tags: ['Product Design', 'Fitness', 'Business Strategy'],
    technologies: ['Product Strategy', 'Market Research', 'Branding'],
    featured: false,
    coverColor: 'var(--accent-cyan)',
    year: '2024',
  },
  {
    id: 'raagavista',
    title: 'RaagaVista',
    subtitle: 'Event management venture concept.',
    description: 'An event management venture concept focused on cultural and entertainment events.',
    longDescription: `RaagaVista is an event management venture concept focused on cultural and entertainment events. The project involved conceptualizing a business model for organizing and managing events, including marketing strategy, logistics planning and audience engagement.`,
    role: 'Concept & Strategy',
    status: 'concept',
    category: 'product',
    tags: ['Event Management', 'Business', 'Entertainment'],
    technologies: ['Business Strategy', 'Marketing', 'Operations'],
    featured: false,
    coverColor: 'var(--accent-blue)',
    year: '2024',
  },
  {
    id: 'unboxed',
    title: 'Unboxed',
    subtitle: 'Bridging unused tablets to community centres.',
    description: 'A branding and social-impact project addressing unused donated tablets at community centres.',
    longDescription: `Unboxed is a social impact project that addresses the problem of unused donated tablets sitting in storage at community centres, schools and NGOs. The project involved developing a strategy to identify, refurbish and redistribute these devices to maximize their educational impact.

The project demonstrates Mehul's commitment to using technology and business thinking to address real social challenges.`,
    role: 'Project Lead',
    status: 'concept',
    category: 'creative',
    tags: ['Social Impact', 'Branding', 'Technology for Good'],
    technologies: ['Branding', 'Strategy', 'Community Engagement'],
    featured: false,
    coverColor: 'var(--accent-violet)',
    year: '2024',
  },
]

export const featuredProjects = projects.filter(p => p.featured)
