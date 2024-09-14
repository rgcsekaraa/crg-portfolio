'use client';
import React, { useState } from "react";
import { WEB_APPS, TOOLS } from "@/data/projects";
import { Input } from "@/components/ui/input";
import { SocialLink } from "@/components/social-link";
import { GitHubIcon, LinkIcon, YouTubeIcon } from "@/components/icons";
import { FiChevronDown } from 'react-icons/fi';
import Modal from "@/components/modal"; // Import the modal component
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";


const categories = [
  "Web Apps",
  "Tools",
  "Frontend Projects",
  "Backend Projects",
  "Full-Stack Projects",
  "Academic/Research Projects",
  "Contributions/Open Source",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Web Apps");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterProjects = (category: string) => {
    switch (category) {
      case "Web Apps":
        return WEB_APPS;
      case "Tools":
        return TOOLS;
      default:
        return [];
    }
  };

  const filteredProjects = filterProjects(selectedCategory).filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen rounded-lg">
      <aside className="w-full lg:w-1/4 bg-gray-100 dark:bg-slate-800  text-black dark:text-white p-4 lg:p-6 lg:min-h-screen rounded-l-lg">
        <h2 className="text-3xl font-semibold mb-6 hidden lg:block">Categories</h2>

        <div className="block lg:hidden mt-2 mb-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{selectedCategory}</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
  <button className='bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center'>
    <FiChevronDown className='text-white' />
  </button>
</DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onSelect={() => setSelectedCategory(category)}
                    className={`cursor-pointer px-4 py-2 rounded-lg ${
                      selectedCategory === category ? "bg-gray-600 text-white" : "dark:hover:bg-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <ul className="space-y-4 hidden lg:block">
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer px-3 py-2 rounded-lg ${
                selectedCategory === category ? "bg-gray-700 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-4 lg:p-6 bg-gray-50 dark:bg-slate-900 text-black dark:text-white rounded-r-lg">
        <div className="hidden lg:flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{selectedCategory}</h2>
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 lg:w-1/3 dark:bg-slate-700 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-102 flex flex-col justify-between"
              onClick={() => openModal(project)} // Open modal on click
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.status && (
                    <span
                      className={`px-2 py-1 text-sm rounded-2xl ${
                        project.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : project.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-4 overflow-hidden">
                  {project.description}
                </p>
              </div>
              <div className="flex space-x-2 mt-4 justify-end">
                <SocialLink
                  href={project.repo}
                  className="h-6 w-6"
                  icon={GitHubIcon}
                />
                {project.liveDemo && (
                  <SocialLink
                    href={project.liveDemo ?? "#"}
                    className="h-6 w-6"
                    icon={LinkIcon}
                  />
                )}
                {project.video && (
                  <SocialLink
                    href={project.video}
                    className="h-6 w-6"
                    icon={YouTubeIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </div>
  );
}
