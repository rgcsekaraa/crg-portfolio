'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';

// Section Components
const Summary = () => (
  <div>
    <p className='mb-4 text-2xl font-bold'>
      Chandrasekaraa Ramadoss Ganesh (He/Him)
    </p>
    <p className='mb-4 text-lg font-semibold'>
      Recent IT Graduate | Eager Full Stack Developer | Seeking Opportunities in Software Development
    </p>
    <p className='text-justify leading-relaxed'>
      As a recent Master of Information Technology graduate from QUT, my passion for software development has been channeled into creating impactful solutions, exemplified by my role at Trusted Networks Lab, where I spearheaded the development of a prototype tool hosted on AWS. My work at ClubSeeker further demonstrates my full-stack development skills, using the MERN stack to deliver a responsive PaaS platform that elevates club management experiences. My dedication to innovation and security in software is underscored by a Best Paper Award for my project "Guardify."
    </p>
  </div>
);

const Experience = () => (
  <div className='space-y-6'>
    {/* Experience details */}
    <div>
      <h3 className='mb-2 text-xl font-bold'>
        Software Engineer - LifeShape Clinic (April 2023 - Present)
      </h3>
      <p className='text-justify leading-relaxed'>
        Details about the work done at LifeShape Clinic...
      </p>
    </div>
    <div>
      <h3 className='mb-2 text-xl font-bold'>
        Research Development Software Engineer - Trusted Networks Lab, QUT (Nov 2023 - Jun 2024)
      </h3>
      <p className='text-justify leading-relaxed'>
        Details about the work done at Trusted Networks Lab...
      </p>
    </div>
    <div>
      <h3 className='mb-2 text-xl font-bold'>
        Full-stack Developer - ClubSeeker (Feb 2024 - Mar 2024)
      </h3>
      <p className='text-justify leading-relaxed'>
        Details about the work done at ClubSeeker...
      </p>
    </div>
  </div>
);

const Education = () => (
  <div className='space-y-6'>
    <div>
      <h3 className='mb-2 text-xl font-bold'>
        QUT (Queensland University of Technology)
      </h3>
      <p className='leading-relaxed'>
        Master of Information Technology, Software Development (Jul 2022 - Jul 2024)
      </p>
    </div>
    <div>
      <h3 className='mb-2 text-xl font-bold'>Panimalar Engineering College</h3>
      <p className='leading-relaxed'>
        Bachelor of Engineering - BE, Computer Software Engineering (2014 - 2018)
      </p>
    </div>
  </div>
);

const Skills = () => (
  <div className='space-y-4'>
    <div>
      <h3 className='mb-2 text-xl font-bold'>Backend Development</h3>
      <p className='leading-relaxed'>
        Python, Node.js, PHP, REST API, Laravel, Firebase, C#
      </p>
    </div>
    <div>
      <h3 className='mb-2 text-xl font-bold'>Frontend Development</h3>
      <p className='leading-relaxed'>
        React, Flutter, JavaScript, TypeScript, Bootstrap, Tailwind CSS, HTML, CSS
      </p>
    </div>
    <div>
      <h3 className='mb-2 text-xl font-bold'>Machine Learning</h3>
      <p className='leading-relaxed'>
        Python, Pandas, NumPy, Scikit-learn, Hugging Face, Large Language Models, Natural Language Processing
      </p>
    </div>
    <div>
      <h3 className='mb-2 text-xl font-bold'>Other</h3>
      <p className='leading-relaxed'>
        Git, GitHub, UI/UX, UML, WordPress, CI/CD, Cypress
      </p>
    </div>
  </div>
);

const Certifications = () => (
  <div className='space-y-6'>
    <div>
      <h3 className='mb-2 text-xl font-bold'>
        NDG Linux Essentials - Cisco Virtual Academy (Issued Jan 2024)
      </h3>
      <p className='leading-relaxed'>Linux Kernel</p>
    </div>
    <div>
      <h3 className='mb-2 text-xl font-bold'>
        Programming with JavaScript - Coursera (Issued Jun 2023)
      </h3>
      <p className='leading-relaxed'>Credential ID FUEV39E6W92L</p>
    </div>
  </div>
);

const HonorsAndAwards = () => (
  <div>
    <h3 className='mb-2 text-xl font-bold'>
      Best Paper Award - Queensland University of Technology (Dec 2023)
    </h3>
    <p className='leading-relaxed'>
      "Guardify: An eBPF-Based Real-Time Defense Mechanism for Secure PyPi and Npm Package Installations"
    </p>
  </div>
);

const Status = () => (
  <div>
    <p className='text-justify leading-relaxed'>
      I am on an Australian Temporary Graduate Visa (TR 485) and available immediately.
    </p>
  </div>
);

// Mapping sections to components
const sections = [
  { name: 'Summary', component: <Summary /> },
  { name: 'Experience', component: <Experience /> },
  { name: 'Education', component: <Education /> },
  { name: 'Skills', component: <Skills /> },
  { name: 'Certifications', component: <Certifications /> },
  { name: 'Honors & Awards', component: <HonorsAndAwards /> },
  { name: 'Status', component: <Status /> },
];

export default function About() {
  const [selectedSection, setSelectedSection] = useState('Summary');
  const navRefs = useRef([]);

  const handleSectionChange = (sectionName) => {
    setSelectedSection(sectionName);
  };

  // Arrow key navigation
  const handleKeyDown = (e) => {
    const currentIndex = sections.findIndex(
      (section) => section.name === selectedSection
    );
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % sections.length;
      setSelectedSection(sections[nextIndex].name);
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
      setSelectedSection(sections[prevIndex].name);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSection]);

  const currentSection = sections.find(
    (section) => section.name === selectedSection
  );

  return (
    
    <div className='flex flex-col min-h-screen rounded-lg'>
      {/* Navigation Bar */}
      <nav className='bg-gray-200 dark:bg-slate-700 text-black dark:text-white px-4 lg:px-6 py-2 rounded-lg'>
        <div className='flex justify-between items-center'>
          {/* Mobile Dropdown Menu */}
          <div className='block lg:hidden w-full'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-bold'>{selectedSection}</h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className='bg-gray-600 text-white px-4 py-2 rounded-lg'>
                    Select Section
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-full'>
                  {sections.map(({ name }) => (
                    <DropdownMenuItem
                      key={name}
                      onSelect={() => handleSectionChange(name)}
                      className={`cursor-pointer px-4 py-2 rounded-lg ${
                        selectedSection === name
                          ? 'bg-gray-600 text-white'
                          : 'dark:hover:bg-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Horizontal Navigation for Large Screens */}
          <ul className="hidden lg:flex space-x-4 w-full justify-center items-center text-center">
            {sections.map(({ name }, index) => (
              <li
                key={name}
                ref={(el) => (navRefs.current[index] = el)}
                className={`cursor-pointer px-3 py-2 rounded-3xl ${
                  selectedSection === name
                    ? 'bg-gray-700 text-white dark:bg-gray-500 dark:text-white'
                    : 'hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                onClick={() => handleSectionChange(name)}
              >
                {name}
              </li>
            ))}
          </ul>
          {/* Empty div to align the dropdown in the center */}
          <div className='hidden lg:block w-16'></div>
        </div>
      </nav>

      {/* Main Content */}
      <main className='flex-1 p-4 lg:p-6 bg-gray-50 dark:bg-slate-900 text-black dark:text-white rounded-b-lg'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold'>{selectedSection}</h2>
        </div>

        <div className='p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md'>
          {currentSection.component}
        </div>
      </main>
    </div>
  );
}
