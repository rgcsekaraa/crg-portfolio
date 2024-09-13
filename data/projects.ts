export const WEB_APPS = [
  {
    title: 'Mentor Labs',
    tags: ['Typescript', 'React', 'Redux Toolkit', 'Nodejs', 'PostgreSQL'],
    description:
      'Apply for mentorship to the top mentors recommended by our powerful algorithm based on your profile. Enjoy one-to-one live mentorship in our interactive video streaming labs for free.',
    thumbnail: '/_static/projects/mentorlabs.png',
    repo: 'https://github.com/adarshaacharya/MentorLabs',
    video: 'https://www.youtube.com/watch?v=3QJ1Jr6l3ZQ',
    liveDemo: 'https://mentorlabs.com',
    status: 'Completed',
    complexity: 'Medium',
    frontend: ['React', 'Typescript', 'Redux Toolkit'],
    backend: ['Nodejs', 'PostgreSQL'],
    devOps: ['Docker', 'Kubernetes'],
    lastUpdated: '2024-08-31',
    license: 'MIT',
    features: [
      'One-to-one video mentorship', 
      'Powerful recommendation algorithm', 
      'Interactive streaming'
    ]
  },
  {
    title: 'CS Overflow',
    repo: 'https://github.com/adarshaacharya/CsOverflow',
    thumbnail: '/_static/projects/csoverflow.png',
    description:
      'Q/A forum for Computer Science and Engineering students. Ask a question, contribute an answer and upvote your favourite one.',
    tags: ['Typescript', 'React', 'Redux', 'Nodejs', 'PostgreSQL'],
    status: 'In Progress',
    complexity: 'Low',
    lastUpdated: '2024-09-10',
    frontend: ['React', 'Typescript'],
    backend: ['Nodejs', 'PostgreSQL'],
    license: 'GPL',
    features: ['Q&A Forum', 'Upvote System', 'User Profiles']
  },
  {
    title: 'Pass Man',
    repo: 'https://github.com/adarshaacharya/PassMan',
    demo: 'https://passmanager.vercel.app/',
    thumbnail: '/_static/projects/passman.png',
    description:
      'Cloud-based password manager for personal and business use. Credentials are hashed using AES256 algorithm, and one-way hashing is done using Scrypt algorithm.',
    tags: ['Next.js', 'Next Auth', 'Prisma', 'Docker', 'Chakra UI'],
    status: 'Completed',
    complexity: 'High',
    frontend: ['Next.js', 'Chakra UI'],
    backend: ['Next Auth', 'Prisma'],
    devOps: ['Docker'],
    lastUpdated: '2024-08-01',
    license: 'MIT',
    features: [
      'AES256 Encryption', 
      'Scrypt Algorithm Hashing', 
      'Personal and Business Vaults'
    ]
  },
  {
    title: 'Code Treats',
    repo: 'https://github.com/adarshaacharya/CodeTreats',
    thumbnail: '/_static/projects/codetreats.png',
    description:
      'In-browser IDE for running, collaborating, and saving code snippets. Supports 10+ languages and multiple real-time collaboration features.',
    tags: ['Typescript', 'React', 'Nodejs', 'MongoDB', 'Socket'],
    status: 'Beta',
    complexity: 'High',
    frontend: ['React', 'Typescript'],
    backend: ['Nodejs', 'MongoDB'],
    devOps: ['Docker'],
    lastUpdated: '2024-07-15',
    license: 'GPL',
    features: [
      'Real-time Collaboration', 
      '10+ Languages Support', 
      'VS Code-like Editor'
    ]
  },
  {
    title: 'E-Complaints',
    repo: 'https://github.com/adarshaacharya/E-Complaints',
    thumbnail: '/_static/projects/ecomplaints.png',
    description:
      'A public complaint management app to send complaints to government departments. Admins filter & forward complaints to respective departments for resolution.',
    tags: ['Node.js', 'Express', 'Ejs', 'MongoDB'],
    status: 'Completed',
    complexity: 'Medium',
    frontend: ['Ejs'],
    backend: ['Node.js', 'MongoDB'],
    lastUpdated: '2024-06-21',
    license: 'Apache 2.0',
    features: [
      'Complaint Management', 
      'Admin Dashboard', 
      'Departmental Forwarding'
    ]
  },
  {
    title: 'Node.js Blog System',
    repo: 'https://github.com/adarshaacharya/NodejsBlogSystem',
    thumbnail: '/_static/projects/blog.png',
    description:
      'Boilerplate for blogging using Node.js, MongoDB, and Socket for real-time updates. Users can create profiles, post, and comment on posts.',
    tags: ['Node.js', 'Express', 'Ejs', 'MongoDB'],
    status: 'In Progress',
    complexity: 'Medium',
    frontend: ['Ejs'],
    backend: ['Node.js', 'MongoDB'],
    lastUpdated: '2024-05-10',
    license: 'MIT',
    features: [
      'User Profiles', 
      'Real-time Updates', 
      'Post & Comment System'
    ]
  },
  {
    title: 'Tour 360°',
    repo: 'https://github.com/adarshaacharya/Tour360',
    thumbnail: '/_static/projects/tour360.png',
    description:
      'Virtual reality viewing platform built for VisitNepal2020. Helps users view 360 thumbnails and book flights, hotels, and guides.',
    tags: ['Php', 'MySQL', 'Aws'],
    status: 'Completed',
    complexity: 'High',
    frontend: ['Php'],
    backend: ['MySQL'],
    devOps: ['Aws'],
    lastUpdated: '2024-01-01',
    license: 'GPL',
    features: [
      '360° VR Viewing', 
      'Flight & Hotel Booking', 
      'Guide Service'
    ]
  }
] as const;


export const TOOLS = [
  {
    title: 'states-nepal',
    repo: 'https://github.com/adarshaacharya/states-nepal',
    external: 'https://www.npmjs.com/package/states-nepal',
    description:
      'npm package to get the dataset about different administrative division of Nepal.',
    techs: ['npm-package'],
    status: 'Completed',
    lastUpdated: '2024-04-15',
    license: 'MIT'
  },
  {
    title: 'aaja (आज)',
    repo: 'https://github.com/adarshaacharya/aaja',
    external: 'https://www.npmjs.com/package/aaja',
    description:
      "CLI tool to get today's Nepali date, tithi, public events, and current time.",
    techs: ['npm-package'],
    status: 'Completed',
    lastUpdated: '2024-06-10',
    license: 'MIT'
  },
  {
    title: 'ApiHub',
    repo: 'https://github.com/adarshaacharya/ApiHub',
    external:
      'https://marketplace.visualstudio.com/items?itemName=AadarshaAcharya.api-hub',
    description:
      'VS Code extension to get free third-party API URLs on different categories.',
    techs: ['vscode-extension'],
    status: 'Completed',
    lastUpdated: '2024-02-28',
    license: 'Apache 2.0'
  },
  {
    title: 'shitcommits',
    repo: 'https://github.com/adarshaacharya/shitcommits',
    external: 'https://www.npmjs.com/package/shitcommits',
    description: 'CLI tool to make git commits with not-so-perfect messages.',
    techs: ['npm-package'],
    status: 'Completed',
    lastUpdated: '2024-03-22',
    license: 'GPL'
  }
] as const;
