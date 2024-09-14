import React from "react";
import { GitHubIcon, LinkIcon, YouTubeIcon } from "@/components/icons";

// Define the types for project and modal props
interface Project {
  title: string;
  status?: string;
  repo?: string;
  video?: string;
  external?: string;
  description?: string;
  tags?: string[];
  features?: string[];
  frontend?: string[];
  backend?: string[];
  devOps?: string[];
  complexity?: string;
  lastUpdated?: string;
  license?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2 sm:p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 w-full max-w-md sm:max-w-lg md:max-w-2xl relative overflow-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white text-xl sm:text-2xl"
        >
          &times;
        </button>

        {/* Project Title and Status */}
        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            {project.title}
          </h2>
          {project.status && (
            <span
              className={`mt-2 mr-4 sm:mt-0 px-2 py-1 text-xs sm:text-sm md:text-base rounded-2xl ${
                project.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : project.status === "In Progress"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {project.status}
            </span>
          )}
        </div>

        {/* Project Links (GitHub, YouTube, Live Demo) */}
        <div className="flex space-x-4 mb-4 justify-center sm:justify-start">
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white" />
          </a>
          {project.video && (
            <a href={project.video} target="_blank" rel="noopener noreferrer">
              <YouTubeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-200 hover:text-red-600" />
            </a>
          )}
          {project.external && (
            <a href={project.external} target="_blank" rel="noopener noreferrer">
              <LinkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-200 hover:text-blue-600" />
            </a>
          )}
        </div>

        {/* Project Description */}
        {project.description && (
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">
            {project.description}
          </p>
        )}

        {/* Tags */}
        {project.tags && (
          <div className="mb-4">
            <h3 className="font-semibold text-sm sm:text-base mb-2">
              Technologies:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.features && (
          <div className="mb-4">
            <h3 className="font-semibold text-sm sm:text-base mb-2">
              Key Features:
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Frontend, Backend, DevOps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {project.frontend && (
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-2">
                Frontend:
              </h3>
              <div className="space-y-1">
                {project.frontend.map((tech, idx) => (
                  <span
                    key={idx}
                    className="block bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 px-3 py-1 rounded-md text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.backend && (
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-2">
                Backend:
              </h3>
              <div className="space-y-1">
                {project.backend.map((tech, idx) => (
                  <span
                    key={idx}
                    className="block bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-3 py-1 rounded-md text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.devOps && (
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-2">DevOps:</h3>
              <div className="space-y-1">
                {project.devOps.map((tool, idx) => (
                  <span
                    key={idx}
                    className="block bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 px-3 py-1 rounded-md text-xs sm:text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Complexity, Last Updated, License */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {project.complexity && (
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-2">
                Complexity:
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                {project.complexity}
              </p>
            </div>
          )}

          {project.lastUpdated && (
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-2">
                Last Updated:
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                {project.lastUpdated}
              </p>
            </div>
          )}

          {project.license && (
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-2">License:</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                {project.license}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
