export const ALL_PROJECTS = [
  // Web Apps

  {
    title: 'Todorama',
    tags: ['shadcn', 'Google SSO', 'Next.js', 'Vercel', 'prisma'],
    description:
      'A task management app featuring Google SSO for seamless authentication and a clean, modern UI. The app allows users to organize and manage daily tasks within a simple, square container interface.',
    repo: 'https://github.com/rgcsekaraa/todorama',
    liveDemo: 'https://todorama.vercel.app',
    status: 'Completed',
    complexity: 'Medium',
    frontend: ['Next.js', 'shadcn'],
    backend: ['Next.js', 'prisma'],
    devOps: ['Vercel'],
    lastUpdated: '2024-09-15',
    license: 'MIT',
    category: 'Full-Stack Projects',
    features: [
      'Google SSO for authentication',
      'Task management',
      'Clean and modern UI with centered square container'
    ]
  },

  // Tools
  {
    title: 'Time Up?',
    tags: ['Chrome Extension', 'JavaScript', 'Node.js', 'CSV'],
    description:
      'A Chrome extension that allows users to browse Instagram profiles, download profile images to a predefined local path, and maintain a CSV file with profile links, profile names, and saved image names.',
    repo: 'https://github.com/rgcsekaraa/Time-Up-',
    liveDemo:
      'https://chromewebstore.google.com/detail/time-up-countdown-timer/annjhflndfaighcniclgfjojdbfjelmb?authuser=0&hl=en-GB',
    status: 'Completed',
    complexity: 'Easy',
    frontend: ['JavaScript', 'HTML', 'CSS'],
    backend: ['Node.js'],
    devOps: [],
    lastUpdated: '2024-09-28',
    license: 'MIT',
    category: 'Tools',
    features: [
      'Browse Instagram profiles',
      'Download profile images locally',
      'Maintain CSV of profile links, names, and saved images'
    ]
  },

  // Frontend Projects
  {
    title: 'Sekaraa Dev Portfolio',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel', 'TypeScript', 'shadcn'],
    description:
      'A personal portfolio website showcasing projects, skills, and achievements. Built with Next.js, Tailwind CSS, and shadcn, the portfolio provides a clean and professional design with easy navigation through different sections like projects, blog, and contact.',
    repo: 'https://github.com/rgcsekaraa/crg-portfolio',
    liveDemo: 'https://sekaraa.com',
    status: 'Completed',
    complexity: 'Medium',
    frontend: ['Next.js', 'Tailwind CSS', 'shadcn', 'TypeScript'],
    backend: [],
    devOps: ['Vercel'],
    lastUpdated: '2024-09-28',
    license: 'MIT',
    category: 'Frontend Projects',
    features: [
      'Showcase of personal projects and skills',
      'Responsive and professional design',
      'Blog section for technical posts',
      'Contact form with email integration'
    ]
  },

  {
    title: 'S2L (Speech-to-Language)',
    tags: ['AI', 'LLM', 'Next.js', 'Tailwind CSS'],
    description:
      'A speech-to-language translation app where users can translate spoken language in real-time using AI models and LLMs. The app supports multiple languages and provides an easy-to-use interface.',
    liveDemo: 'https://s2l.vercel.app',
    status: 'Completed',
    complexity: 'Medium',
    frontend: ['Next.js', 'Tailwind CSS'],
    backend: ['AI/LLM'],
    devOps: ['AWS', 'Docker'],
    lastUpdated: '2024-09-01',
    license: 'MIT',
    category: 'Frotend Projects',
    features: [
      'Real-time voice translation',
      'Supports multiple languages',
      'Clean and intuitive UI'
    ]
  },

  {
    title: 'FirePath',
    tags: ['Django', 'Leaflet.js', 'PostgreSQL'],
    description:
      'A full-stack project for real-time bushfire monitoring, integrating a map with alerts for bushfire activity. Developed as part of an industry project with real-time data integration.',
    status: 'Completed',
    complexity: 'High',
    frontend: ['Leaflet.js', 'Tailwind CSS'],
    backend: ['Django', 'PostgreSQL'],
    devOps: ['AWS', 'Docker'],
    lastUpdated: '2024-09-01',
    license: 'GPL',
    category: 'Full-Stack Projects',
    features: [
      'Real-time bushfire monitoring',
      'Map integration with alerts',
      'Industry-level data integration'
    ]
  },

  // Academic/Research Projects
  {
    title: 'Guardify',
    tags: ['eBPF', 'npm', 'pip', 'Security'],
    description:
      'A backend-focused security monitoring tool using eBPF for real-time package installation monitoring and suspicious activity detection.',
    status: 'Completed',
    complexity: 'High',
    backend: ['eBPF', 'Kernel'],
    devOps: ['Docker', 'AWS'],
    lastUpdated: '2024-09-01',
    license: 'MIT',
    category: 'Academic/Research Projects',
    features: [
      'Real-time security monitoring',
      'Package installation tracking',
      'eBPF integration'
    ]
  },
  {
    title: 'WexDB',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    description:
      'A website for all workouts and exercises with embedded YouTube links for quick reference.',
    repo: 'https://github.com/rgcsekaraa/wexdb',
    liveDemo: 'https://wexdb.vercel.app',
    status: 'Completed',
    category: 'Web Apps',
    complexity: 'Medium',
    frontend: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    backend: [],
    devOps: [],
    lastUpdated: '2024-09-01',
    license: 'MIT',
    features: [
      'Comprehensive workout database',
      'Embedded YouTube links for exercises',
      'User-friendly interface'
    ]
  },
  {
    title: 'CheckFace',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React Webcam'],
    description:
      'A real-time webcam app to check your face and appearance, with theme toggling and mirror options for enhanced user experience.',
    repo: 'https://github.com/rgcsekaraa/checkface',
    liveDemo: 'https://www.checkface.io',
    status: 'Completed',
    category: 'Web Apps',
    complexity: 'Easy',
    frontend: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React Webcam'],
    backend: [],
    devOps: [],
    lastUpdated: '2024-10-08',
    license: 'MIT',
    features: [
      'Real-time webcam feed with mirror toggle',
      'Dark and light theme switcher',
      'Mobile-friendly and responsive design',
      'Privacy-focused: no data recording or storage'
    ]
  },
  {
    title: 'Being Foodie',
    tags: [
      'Node.js',
      'Handlebars.js',
      'APIs',
      'Edamam API',
      'OpenWeather API',
      'OpenAI API'
    ],
    description:
      'Being Foodie is a web app designed for culinary exploration, helping users discover local cuisine. It integrates multiple APIs to provide accurate recipe measurements and real-time weather information for nearby restaurants.',
    repo: 'https://github.com/rgcsekaraa/BeingFoodie',
    status: 'Completed',
    complexity: 'Medium',
    frontend: ['Handlebars.js'],
    backend: ['Node.js'],
    devOps: [],
    lastUpdated: '2024-09-01',
    license: 'MIT',
    category: 'Web Apps',
    features: [
      'API integration with Edamam for recipe measurements',
      'Real-time weather info using Google Maps and OpenWeather API',
      'Recipe exploration and restaurant discovery'
    ]
  }
] as const
