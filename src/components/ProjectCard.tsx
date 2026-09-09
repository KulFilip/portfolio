import { useState } from 'react';
import { Project } from '../data/projects';
import AnimatedIcon from './AnimatedIcon';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    active: 'bg-emerald-100 text-emerald-700',
    beta: 'bg-amber-100 text-amber-700',
    archived: 'bg-gray-100 text-gray-500',
  };

  const statusLabels = {
    active: 'Active',
    beta: 'Beta',
    archived: 'Archived',
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-lg transition-all duration-300 ease-out">
      {/* Status badge */}
      <div className="absolute top-4 right-4">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </span>
      </div>

      {/* Icon */}
      <div className="mb-4">
        <AnimatedIcon name={project.icon} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 pr-16">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {isExpanded ? project.longDescription : project.description}
      </p>

      {/* Expand button */}
      {project.longDescription !== project.description && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors mb-4"
        >
          {isExpanded ? '↑ Zwiń' : '↓ Czytaj więcej'}
        </button>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md bg-gray-50 text-gray-600 border border-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Metrics */}
      {project.metrics && (
        <div className="grid grid-cols-3 gap-3 mb-5 pt-4 border-t border-gray-50">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-sm font-semibold text-gray-900">{metric.value}</div>
              <div className="text-xs text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Link */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors group/link"
      >
        Otwórz aplikację
        <svg
          className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  );
}
