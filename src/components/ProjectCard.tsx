import { useState } from 'react';
import { Project } from '../data/projects';
import AnimatedIcon from './AnimatedIcon';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    active: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    beta: 'bg-amber-50 text-amber-700 border border-amber-200',
    research: 'bg-blue-50 text-blue-700 border border-blue-200',
  };

  const statusLabels = {
    active: 'Active',
    beta: 'Beta',
    research: 'Research',
  };

  return (
    <div className="group relative bg-white rounded-xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-md transition-all duration-300">
      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <AnimatedIcon name={project.icon} />
        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </span>
      </div>

      {/* Module tag */}
      <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-1.5">
        {project.module}
      </p>

      {/* Title & subtitle */}
      <h3 className="text-base font-semibold text-gray-900 mb-0.5">
        {project.title}
      </h3>
      <p className="text-xs text-gray-500 mb-3">{project.subtitle}</p>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {isExpanded ? project.longDescription : project.description}
      </p>

      {/* Expand toggle */}
      {project.longDescription !== project.description && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[11px] font-medium text-gray-400 hover:text-gray-900 transition-colors mb-4 block"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded bg-gray-50 text-gray-600 border border-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Metrics */}
      {project.metrics && (
        <div className="grid grid-cols-3 gap-2 mb-5 pt-4 border-t border-gray-50">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-sm font-semibold text-gray-900">{metric.value}</div>
              <div className="text-[10px] text-gray-400 leading-tight">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Link */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors group/link"
      >
        View application
        <svg
          className="w-3 h-3 transform group-hover/link:translate-x-0.5 transition-transform"
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
