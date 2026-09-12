import { useState, useMemo } from 'react';
import { projects, modules } from './data/projects';
import ProjectCard from './components/ProjectCard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModule, setActiveModule] = useState<string>('All');

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesModule =
        activeModule === 'All' || project.module === activeModule;

      return matchesSearch && matchesModule;
    });
  }, [searchQuery, activeModule]);

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
              <span className="text-white text-sm font-bold">G</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900 text-sm">GRC Portfolio</span>
              <p className="text-[10px] text-gray-400 leading-tight">Financial Services & Regulation</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </a>
            <a href="#modules" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Modules
            </a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-2xl">
          <p className="text-xs font-medium text-gray-400 mb-3 tracking-wider uppercase">
            Postgraduate Portfolio Project
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Information Systems &<br />
            <span className="text-gray-400">Financial Services Regulation</span>
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            A collection of applied research projects exploring governance, risk management,
            compliance and information security within financial services organisations.
            Each application demonstrates practical implementation of regulatory frameworks
            across Irish, UK and EU jurisdictions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white rounded-lg border border-gray-100 p-4">
            <div className="text-xl font-bold text-gray-900">{projects.length}</div>
            <div className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wide">Applications</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-4">
            <div className="text-xl font-bold text-gray-900">
              {projects.filter((p) => p.status === 'active').length}
            </div>
            <div className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wide">Production</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-4">
            <div className="text-xl font-bold text-gray-900">5</div>
            <div className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wide">Modules</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-4">
            <div className="text-xl font-bold text-gray-900">3</div>
            <div className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wide">Jurisdictions</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-16">
        {/* Search */}
        <div className="relative max-w-md mb-6">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search projects, frameworks, regulations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-300 transition-all"
          />
        </div>

        {/* Module filter */}
        <div id="modules" className="flex flex-wrap gap-2 mb-8">
          {modules.map((module) => (
            <button
              key={module}
              onClick={() => setActiveModule(module)}
              className={`text-[11px] font-medium px-3 py-1.5 rounded-lg transition-all ${
                activeModule === module
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {module}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-sm">No projects match your criteria.</p>
          </div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-gray-900 mb-3">About This Portfolio</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This portfolio demonstrates applied knowledge across postgraduate modules in
              Information Systems, Financial Services Regulation, IT Security & Compliance,
              and IT Governance & Risk Management. Each project represents a practical
              implementation addressing real-world challenges in financial services organisations.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              All applications are hosted on Vercel, demonstrating modern cloud deployment
              practices. The technology stack includes React, TypeScript, Next.js, Tailwind CSS
              and PostgreSQL, reflecting current industry standards for enterprise application development.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Vercel', 'Node.js', 'REST APIs'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-medium px-2.5 py-1 rounded bg-gray-50 text-gray-700 border border-gray-100"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Frameworks */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Regulatory Frameworks Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'DORA', desc: 'Digital Operational Resilience Act' },
              { name: 'ISO 27001', desc: 'Information Security' },
              { name: 'ISO 31000', desc: 'Risk Management' },
              { name: 'COSO ERM', desc: 'Enterprise Risk Management' },
              { name: 'GDPR', desc: 'Data Protection Regulation' },
              { name: 'CBI F&P', desc: 'Fitness & Probity Regime' },
              { name: 'MiFID II', desc: 'Markets in Financial Instruments' },
              { name: 'NIST', desc: 'Cybersecurity Framework' },
            ].map((framework) => (
              <div key={framework.name} className="p-3 rounded-lg bg-gray-50/50 border border-gray-100">
                <div className="text-sm font-semibold text-gray-900">{framework.name}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{framework.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded bg-gray-900 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">G</span>
            </div>
            <span className="text-xs text-gray-500">GRC Portfolio © 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:contact@example.com" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
