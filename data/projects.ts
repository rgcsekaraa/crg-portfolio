export const ALL_PROJECTS = [
  // Web Apps
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
  },
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

  // Backend Projects
  {
    title: 'Shak-AI',
    tags: ['T5 LLM', 'FastAPI', 'React', 'Vite'],
    description:
      'A real-time voice translation tool using T5 LLM. Users can upload files, query information through voice interaction, and get real-time results in their preferred language.',
    repo: 'https://github.com/rgcsekaraa/shak-ai',
    liveDemo: 'https://shak-ai.vercel.app',
    status: 'Completed',
    complexity: 'High',
    frontend: ['React', 'Vite'],
    backend: ['FastAPI', 'T5 LLM'],
    devOps: ['AWS', 'Docker'],
    lastUpdated: '2024-09-08',
    license: 'Apache 2.0',
    category: 'Backend Projects',
    features: [
      'Real-time voice translation',
      'File query via voice',
      'T5 LLM integration for accurate results'
    ]
  },

  // Full-Stack Projects
  {
    title: '2day Diary App',
    tags: ['Tailwind CSS', 'MongoDB', 'Next.js'],
    description:
      'A full-stack diary app with secure login, featuring a clean and minimalistic UI for daily entries. Users can write and store daily thoughts securely with biometric login.',
    repo: 'https://github.com/rgcsekaraa/2day-diary',
    liveDemo: 'https://2day-frontend.vercel.app',
    status: 'In Progress',
    complexity: 'Medium',
    frontend: ['Next.js', 'Tailwind CSS'],
    backend: ['MongoDB'],
    devOps: ['Docker', 'Vercel'],
    lastUpdated: '2024-09-01',
    license: 'MIT',
    category: 'Full-Stack Projects',
    features: [
      'Secure login with biometrics',
      'Daily diary entries',
      'Minimalistic and user-friendly UI'
    ]
  },
  {
    title: 'Grota (Gym + Rota)',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    description:
      'A full gym management platform that allows gym coaches to manage workout schedules, memberships, and fees. Includes a personal interaction approach and messaging service between coaches and members.',
    repo: 'https://github.com/rgcsekaraa/grota',
    status: 'In Progress',
    complexity: 'High',
    frontend: ['React', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'MongoDB'],
    devOps: ['AWS', 'Docker'],
    lastUpdated: '2024-09-01',
    license: 'MIT',
    category: 'Full-Stack Projects',
    features: [
      'Gym management for schedules and memberships',
      'Messaging service for personal interaction',
      'Admin controls for fee management'
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

  // Contributions/Open Source
  {
    title: 'fnfx - CLI Tool',
    tags: ['npm', 'CLI', 'Node.js', 'File System'],
    description:
      'fnfx is a CLI tool that generates a structured tree view of files and folders in a directory. It allows exporting the tree in various formats such as text, JSON, and HTML, with options for ignoring specific folders like node_modules or .next.',
    repo: 'https://github.com/rgcsekaraa/fnfx',
    liveDemo: 'https://www.npmjs.com/package/fnfx',
    status: 'Completed',
    complexity: 'Low',
    backend: ['Node.js', 'CLI'],
    devOps: [],
    lastUpdated: '2024-09-22',
    license: 'MIT',
    category: 'Contributions/Open Source',
    features: [
      'Generate a visual tree structure of your file system',
      'Export the tree to text, JSON, and HTML formats',
      'Ignore specific folders like node_modules or .next',
      'Output results directly in the terminal or save to a file'
    ]
  }
] as const
