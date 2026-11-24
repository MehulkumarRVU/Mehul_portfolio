export interface Chapter {
  id: string
  number: string
  title: string
  quote: string
  description: string
  keywords: string[]
  scene: 'cluster' | 'neural' | 'geometric' | 'connected' | 'aperture' | 'universe'
}

export const chapters: Chapter[] = [
  {
    id: 'beginning',
    number: '00',
    title: 'THE BEGINNING',
    quote: 'Every journey begins with curiosity.',
    description: 'A spark of curiosity that refused to be ignored. From the first line of code to the first business idea — everything started with asking \'why\' and then asking \'how\'.',
    keywords: ['Curiosity', 'Learning', 'Beginning', 'Ideas'],
    scene: 'cluster',
  },
  {
    id: 'engineer',
    number: '01',
    title: 'THE ENGINEER',
    quote: 'I wanted to understand how technology works. Eventually, I wanted to build it.',
    description: 'Deep-diving into computer science, AI and machine learning. Building systems, understanding algorithms and learning to turn abstract concepts into working technology.',
    keywords: ['Computer Science', 'AI', 'Machine Learning', 'Software Engineering', 'Full-Stack Development', 'Computer Vision', 'IoT'],
    scene: 'neural',
  },
  {
    id: 'builder',
    number: '02',
    title: 'THE BUILDER',
    quote: 'Learning was never enough. I wanted to create.',
    description: 'From CPR assistance devices to photography platforms — transforming ideas into actual products that solve real problems for real people.',
    keywords: ['PocketCoach AI', 'MyOSA LifeSaver', 'Studio H', 'SkyWays', 'GripMat'],
    scene: 'geometric',
  },
  {
    id: 'founder',
    number: '03',
    title: 'THE FOUNDER',
    quote: 'Some ideas deserve to become businesses.',
    description: 'Co-founding Trinarix to build technology products with real-world impact. Learning what it means to lead, to sell, to grow and to build something from nothing.',
    keywords: ['Trinarix', 'Entrepreneurship', 'Co-founders', 'Product Strategy', 'Business Models', 'Startup'],
    scene: 'connected',
  },
  {
    id: 'creative',
    number: '04',
    title: 'THE CREATIVE',
    quote: 'Not everything is built with code.',
    description: 'Photography, design and visual storytelling as a parallel language. Seeing the world through a lens — finding beauty in architecture, streets and everyday moments.',
    keywords: ['Photography', 'Product Photography', 'Visual Storytelling', 'Design', 'Branding', 'Studio H'],
    scene: 'aperture',
  },
  {
    id: 'strategist',
    number: '05',
    title: 'THE STRATEGIST',
    quote: 'Building a product is only the beginning.',
    description: 'Understanding markets, positioning products and building brands that connect. Strategy as the bridge between vision and reality.',
    keywords: ['Marketing', 'Business Strategy', 'Leadership', 'Growth', 'Brand Strategy'],
    scene: 'geometric',
  },
  {
    id: 'future',
    number: '06',
    title: 'WHAT\'S NEXT',
    quote: "I'm just getting started.",
    description: 'Growing Trinarix. Building PocketCoach into a recognized platform. Developing advanced AI products. Building multiple businesses. Strengthening engineering depth. Becoming financially independent. Building a recognizable personal brand.',
    keywords: ['Trinarix Growth', 'PocketCoach AI', 'Advanced AI Products', 'Multiple Businesses', 'Engineering', 'Personal Brand'],
    scene: 'universe',
  },
]
