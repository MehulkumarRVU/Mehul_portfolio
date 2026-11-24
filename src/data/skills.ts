export interface SkillCategory {
  id: string
  name: string
  icon: string
  description: string
  skills: Skill[]
  color: string
}

export interface Skill {
  name: string
  description?: string
  relatedProjects?: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming',
    icon: 'Code2',
    description: 'Core programming languages for building robust, scalable systems.',
    color: 'var(--accent-blue)',
    skills: [
      { name: 'Python', description: 'Primary language for AI/ML, backend and automation', relatedProjects: ['pocketcoach-ai', 'myosa-lifesaver'] },
      { name: 'JavaScript', description: 'Full-stack web development and interactive experiences', relatedProjects: ['pocketcoach-ai', 'studio-h'] },
      { name: 'TypeScript', description: 'Type-safe JavaScript for scalable applications', relatedProjects: ['pocketcoach-ai'] },
      { name: 'Java', description: 'Object-oriented programming and enterprise applications' },
      { name: 'C', description: 'Systems programming and embedded development', relatedProjects: ['myosa-lifesaver'] },
      { name: 'C++', description: 'High-performance computing and competitive programming' },
      { name: 'SQL', description: 'Database querying and data management', relatedProjects: ['pocketcoach-ai'] },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'Layout',
    description: 'Building beautiful, performant user interfaces and web experiences.',
    color: 'var(--accent-violet)',
    skills: [
      { name: 'React', description: 'Primary framework for building dynamic web applications', relatedProjects: ['pocketcoach-ai', 'studio-h'] },
      { name: 'Next.js', description: 'Full-stack React framework for production applications' },
      { name: 'Vite', description: 'Modern build tooling for fast development', relatedProjects: ['pocketcoach-ai'] },
      { name: 'HTML', description: 'Semantic markup and accessibility' },
      { name: 'CSS', description: 'Styling, animations and responsive design' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development', relatedProjects: ['pocketcoach-ai'] },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'Server',
    description: 'Designing and building scalable server-side systems and APIs.',
    color: 'var(--accent-cyan)',
    skills: [
      { name: 'FastAPI', description: 'High-performance Python API framework', relatedProjects: ['pocketcoach-ai'] },
      { name: 'Node.js', description: 'JavaScript runtime for server-side development', relatedProjects: ['studio-h'] },
      { name: 'SQLAlchemy', description: 'Python ORM for database interactions', relatedProjects: ['pocketcoach-ai'] },
      { name: 'REST APIs', description: 'Designing and implementing RESTful services' },
    ],
  },
  {
    id: 'aiml',
    name: 'AI/ML',
    icon: 'Brain',
    description: 'Building intelligent systems with machine learning and computer vision.',
    color: 'var(--accent-blue)',
    skills: [
      { name: 'Computer Vision', description: 'Image analysis and visual intelligence', relatedProjects: ['pocketcoach-ai'] },
      { name: 'MediaPipe', description: 'Real-time pose estimation and landmark detection', relatedProjects: ['pocketcoach-ai'] },
      { name: 'Pose Estimation', description: '33-point body landmark tracking and analysis', relatedProjects: ['pocketcoach-ai'] },
      { name: 'NumPy', description: 'Numerical computing and array operations', relatedProjects: ['pocketcoach-ai'] },
      { name: 'Scikit-learn', description: 'Machine learning models and evaluation' },
      { name: 'Random Forest', description: 'Ensemble learning for classification and regression' },
      { name: 'SVM', description: 'Support vector machines for classification' },
      { name: 'Neural Networks', description: 'Deep learning architectures and training' },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'Database',
    description: 'Managing and optimizing data storage and retrieval systems.',
    color: 'var(--accent-violet)',
    skills: [
      { name: 'PostgreSQL', description: 'Primary relational database for production systems', relatedProjects: ['pocketcoach-ai'] },
      { name: 'SQLite', description: 'Lightweight database for local and embedded use' },
      { name: 'Firebase', description: 'Real-time database and authentication', relatedProjects: ['myosa-lifesaver'] },
      { name: 'Redis', description: 'In-memory caching and session management', relatedProjects: ['pocketcoach-ai'] },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: 'GitBranch',
    description: 'Deploying, managing and scaling applications in production.',
    color: 'var(--accent-cyan)',
    skills: [
      { name: 'Docker', description: 'Containerization for consistent deployments', relatedProjects: ['pocketcoach-ai'] },
      { name: 'Git', description: 'Version control and collaborative development' },
      { name: 'GitHub', description: 'Code hosting and CI/CD workflows' },
      { name: 'Nginx', description: 'Web server and reverse proxy configuration' },
    ],
  },
  {
    id: 'iot',
    name: 'IoT',
    icon: 'Cpu',
    description: 'Building connected hardware systems and embedded applications.',
    color: 'var(--accent-blue)',
    skills: [
      { name: 'ESP32', description: 'Microcontroller programming for IoT projects', relatedProjects: ['myosa-lifesaver'] },
      { name: 'Arduino', description: 'Rapid embedded system prototyping', relatedProjects: ['myosa-lifesaver'] },
      { name: 'MQTT', description: 'Lightweight messaging protocol for IoT', relatedProjects: ['myosa-lifesaver'] },
      { name: 'Node-RED', description: 'Visual data flow programming for IoT', relatedProjects: ['myosa-lifesaver'] },
      { name: 'Embedded Systems', description: 'Low-level hardware programming and interfacing', relatedProjects: ['myosa-lifesaver'] },
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    icon: 'Camera',
    description: 'Visual storytelling, design and creative expression across mediums.',
    color: 'var(--accent-violet)',
    skills: [
      { name: 'Photography', description: 'Street, urban, architectural and product photography' },
      { name: 'UI/UX Design', description: 'User interface design and experience research' },
      { name: 'Branding', description: 'Visual identity and brand strategy' },
      { name: 'Visual Storytelling', description: 'Narrative design through visual media' },
      { name: 'Image Editing', description: 'Post-processing and photo manipulation' },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: 'TrendingUp',
    description: 'Growth, strategy and building brands that connect with audiences.',
    color: 'var(--accent-cyan)',
    skills: [
      { name: 'Digital Marketing', description: 'Online marketing channels and strategy' },
      { name: 'Social Media', description: 'Content strategy and community building' },
      { name: 'Brand Strategy', description: 'Brand positioning and market differentiation' },
      { name: 'Marketing Analytics', description: 'Data-driven marketing decision making' },
    ],
  },
]
