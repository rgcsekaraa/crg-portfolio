'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

// Section Components
const Summary = () => (
  <div className='space-y-6'>
    <p className='text-3xl font-extrabold text-left text-gray-800 dark:text-gray-100'>
      Chandrasekaraa Ramadoss Ganesh
    </p>
    <span>
      I know it&#39;s a quite long name 😅 you can call me <strong>Chan</strong>
    </span>


    <p className='text-xl text-Left font-medium text-slate-900 dark:text-slate-300'>
      IT Graduate | Full Stack Developer | Eager to Grow
    </p>

    <div className='flex flex-col items-center space-y-4'>
      <p className='text-justify max-w-3xl leading-relaxed'>
        <span className='font-bold text-gray-900 dark:text-gray-200'>Passionate Learner: </span> 
        Recent IT graduate from QUT with a Master’s in Software Development, eager to apply my skills and grow in the field of full-stack development.
      </p>

      <p className='text-justify max-w-3xl leading-relaxed'>
        <span className='font-bold text-gray-900 dark:text-gray-200'>Hands-On Skills: </span> 
        Developed foundational skills in JavaScript (React, Node.js) and Python through academic projects. Experienced with AWS and Docker, ready to contribute effectively to development teams.
      </p>

      <p className='text-justify max-w-3xl leading-relaxed'>
        <span className='font-bold text-gray-900 dark:text-gray-200'>Team-Oriented and Adaptive: </span> 
        Known for quick learning and adaptability, with a strong ability to grasp new concepts and work collaboratively. Seeking opportunities in Australia to bring enthusiasm and a fresh perspective to a dynamic full-stack development role.
      </p>
    </div>
  </div>
);



const Experience = () => (
  <div className='space-y-6'>
    {/* Experience details */}
    <div>
      <h3 className='mb-2 text-xl font-bold'>
        Software Research Intern - Trusted Networks Lab, QUT (Nov 2023 - Jun 2024)
      </h3>
      <p className='text-justify leading-relaxed'>
        Contributed to the development of a CLI-based prototype tool deployed on AWS. Leveraged eBPF to intercept system calls and gained significant Linux skills, enhancing proficiency in Linux environments and cloud-based solutions.
      </p>
    </div>
    <div>
      <h3 className='mb-2 text-xl font-bold'>
        Lead Developer - Industry IT Project, QUT (March 2024 - Aug 2024)
      </h3>
      <p className='text-justify leading-relaxed'>
        Led a team of 5 in developing a Django-based bushfire monitoring system for client Orefox. Managed source code, resolved conflicts, and ensured smooth team collaboration. Successfully built a comprehensive dashboard with real-time map integration and alerts within 2 months, demonstrating strong project management and technical skills.
      </p>
    </div>
    <div>
      <h3 className='mb-2 text-xl font-bold'>
        Full-Stack Developer - ClubSeeker, Brisbane (Feb 2024 - Mar 2024)
      </h3>
      <p className='text-justify leading-relaxed'>
        Built ClubSeeker MVP version 1.0 from scratch within 1 month, handling all aspects from development to deployment. Recommended by a QUT professor for a startup by QUT students. Managed the project independently and delivered a robust platform for club management.
      </p>
    </div>
    <div>
  <p>
    <a 
      href='/contact' 
      className='font-extralight text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-300'
    >
      ⦿ References available upon request 🤓
    </a>
  </p>
</div>

  </div>
);


const Education = () => (
  <div className='space-y-6'>
    {/* QUT Section */}
    <div className='p-6 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900'>
      <h3 className='mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100'>
        QUT (Queensland University of Technology)
        <div>
          <span className='text-lg font-extralight text-gray-700 dark:text-gray-300'>
            Brisbane, Australia
          </span>
        </div>
      </h3>
      <p className='text-xl text-gray-700 dark:text-gray-300'>
        Master of Information Technology, Software Development
      </p>
      <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
        July 2022 - July 2024
      </p>
    </div>

    {/* Panimalar Engineering College Section */}
    <div className='p-6 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900'>
      <h3 className='mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100'>
        Panimalar Engineering College
        <div>
          <span className='text-lg font-extralight text-gray-700 dark:text-gray-300'>
            Chennai, India
          </span>
        </div>
      </h3>
      <p className='text-xl text-gray-700 dark:text-gray-300'>
        Bachelor of Engineering - BE, Computer Software Engineering
      </p>
      <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
        2014 - 2020
      </p>
    </div>
  </div>
);



const Skills = () => (
  <div className='space-y-6'>
    {/* Industry Knowledge Section */}
    <div>
      <h3 className='mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100'>
        Industry Knowledge
      </h3>
      <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
        Full-Stack Development, MERN Stack, Cloud Computing, Software Engineering, Agile Methodologies, REST APIs, eBPF.
      </p>
    </div>

    {/* Tools & Technologies Section */}
    <div>
      <h3 className='mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100'>
        Tools & Technologies
      </h3>
      <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
        Python, Node.js, React, TypeScript, Docker, AWS, Django, MongoDB, MySQL, Git, GitHub, Postman, CI/CD, Tailwind CSS, HTML5, CSS3
      </p>
    </div>

    {/* Interpersonal Skills Section */}
    <div>
      <h3 className='mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100'>
        Interpersonal Skills
      </h3>
      <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
        Teamwork, Leadership, Fast Learner, Adaptability, Problem Solving, Communication, Multitasking
      </p>
    </div>

    {/* Databases Section */}
    <div>
      <h3 className='mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100'>
        Databases
      </h3>
      <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
        MongoDB, MySQL, SQLite
      </p>
    </div>
  </div>
);


const Certifications = () => (
  <div className='space-y-6'>
    {/* Certification 1 */}
    <div className='p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900'>
      <h3 className='mb-2 text-xl font-bold text-gray-800 dark:text-gray-100'>
        NDG Linux Essentials
      </h3>
      <p className='text-md text-gray-600 dark:text-gray-400'>
        Cisco Virtual Academy
      </p>
      <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
        Issued: January 2024
      </p>
      <p className='text-md mt-2 text-gray-700 dark:text-gray-300'>
        Linux Kernel
      </p>
    </div>

    {/* Certification 2 */}
    <div className='p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900'>
      <h3 className='mb-2 text-xl font-bold text-gray-800 dark:text-gray-100'>
        Programming with JavaScript
      </h3>
      <p className='text-md text-gray-600 dark:text-gray-400'>
        Coursera
      </p>
      <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
        Issued: June 2023
      </p>
      <p className='text-sm text-gray-500 dark:text-gray-400'>
        Credential ID: FUEV39E6W92L
      </p>
    </div>
  </div>
);

const HonorsAndAwards = () => (
  <div className='space-y-6'>
    {/* Cover Image Section */}
    <div className='w-full h-60 overflow-hidden rounded-lg shadow-md'>
      <Image
        src='/_static/docs/1701064565603.png'
        alt='Best Paper Award Cover'
        className='w-full h-full object-cover'
      />
    </div>

    {/* Description Section */}
    <div className='text-center'>
      <h3 className='mb-2 text-2xl font-bold'>
        Best Paper Award - Queensland University of Technology (Dec 2023)
      </h3>
      <p className='leading-relaxed max-w-3xl mx-auto'>
       I was honored with the Best Paper Award for my project, &quot;Guardify: An eBPF-Based Real-Time Defense Mechanism for Secure PyPi and Npm Package Installations.&quot;
      </p>
    </div>

    {/* PDF Download Section */}
    <div className='flex justify-center'>
      <a
        href='/_static/docs/1701934996222.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block mt-4 px-3 py-1 text-white bg-slate-600 rounded-lg hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-600'
      >
        View Certificate (PDF)
      </a>
    </div>
  </div>
);


const TickIcon = () => (
  <svg
    className='w-6 h-6 text-green-600'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M9 12l2 2l4-4' />
  </svg>
);

const Status = () => (
  <div className='space-y-4'>
    <h3 className='text-xl font-bold text-gray-800 dark:text-gray-100'>
      Visa Status & Availability
    </h3>

    {/* Small Card 1 */}
    <div className='p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900 flex items-center space-x-3'>
      <TickIcon />
      <p className='text-gray-700 dark:text-gray-300'>
        Holding an Australian Temporary Graduate Visa (TR 485).
      </p>
    </div>

    {/* Small Card 2 */}
    <div className='p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900 flex items-center space-x-3'>
      <TickIcon />
      <p className='text-gray-700 dark:text-gray-300'>
        Available to start immediately.
      </p>
    </div>

    {/* Small Card 3 */}
    <div className='p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900 flex items-center space-x-3'>
      <TickIcon />
      <p className='text-gray-700 dark:text-gray-300'>
        Open to relocating within Australia for the right opportunity.
      </p>
    </div>
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
          <h2 className='text-2xl font-bold'>My {selectedSection}</h2>
        </div>

        <div className='p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md'>
          {currentSection.component}
        </div>
      </main>
    </div>
  );
}
