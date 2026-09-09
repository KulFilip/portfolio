import { useState, useMemo } from 'react';
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesFilter =
        activeFilter === 'all' || project.tags.includes(activeFilter);

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
              <span className="text-white text-sm font-bold">G</span>
            </div>
            <span className="font-semibold text-gray-900">GRC Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Projekty
            </a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              O mnie
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-gray-500 mb-3 tracking-wide uppercase">
            Portfolio projektowe
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Rozwiązania GRC &<br />
            <span className="text-gray-400">Zarządzania Ryzykiem</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Zestaw aplikacji webowych wspierających procesy Governance, Risk Management
            i Compliance. Od rejestru ryzyk po monitoring zgodności z DORA i ISO 27001.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="text-2xl font-bold text-gray-900">{projects.length}</div>
            <div className="text-xs text-gray-500 mt-0.5">Aplikacji</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="text-2xl font-bold text-gray-900">
              {projects.filter((p) => p.status === 'active').length}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">Aktywnych</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="text-2xl font-bold text-gray-900">12+</div>
            <div className="text-xs text-gray-500 mt-0.5">Organizacji</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="text-2xl font-bold text-gray-900">99.9%</div>
            <div className="text-xs text-gray-500 mt-0.5">Śr. Uptime</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-20">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Szukaj projektów..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-300 transition-all"
            />
          </div>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
              activeFilter === 'all'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
            }`}
          >
            Wszystkie
          </button>
          {allTags.slice(0, 12).map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(activeFilter === tag ? 'all' : tag)}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === tag
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500">Nie znaleziono projektów spełniających kryteria.</p>
          </div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">O portfolio</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Portfolio prezentuje zestaw autorskich aplikacji webowych zaprojektowanych i wdrożonych
              z myślą o profesjonalistach z obszaru GRC, zarządzania ryzykiem i compliance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Każda aplikacja jest hostowana na platformie Vercel, co zapewnia wysoką dostępność,
              szybkie ładowanie i automatyczne wdrożenia. Technologie: React, TypeScript, Next.js,
              Tailwind CSS, PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Vercel', 'Node.js'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-50 text-gray-700 border border-gray-100"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gray-900 flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="text-sm text-gray-500">GRC Portfolio © 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:contact@example.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
