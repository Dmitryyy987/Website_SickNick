import React, { useState, useMemo } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Cartonize",
      category: "web",
      description: "E-commerce platform for custom packaging solutions.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
      image: "https://placehold.co/800x600/0f172a/3b82f6?text=Cartonize",
      link: "https://cartonize.vercel.app/",
      featured: true,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "ArcadiaX",
      category: "web",
      description: "Gaming platform with multiplayer experiences.",
      tech: ["React", "Node.js", "WebSocket", "MongoDB"],
      image: "https://placehold.co/800x600/0f172a/06b6d4?text=ArcadiaX",
      link: "https://arcadiax.vercel.app/",
      featured: true,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 3,
      title: "Gen-AI Engineer",
      category: "web",
      description: "AI-powered platform showcasing generative AI.",
      tech: ["React", "Node.js", "AI Tools"],
      image: "https://placehold.co/800x600/0f172a/06b6d4?text=Gen-AI",
      link: "https://gen-ai.engineer/",
      featured: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Weather Application",
      category: "web",
      description: "Responsive weather app with accurate forecasts.",
      tech: ["React", "Weather API", "Chart.js"],
      image: "https://placehold.co/800x600/0f172a/06b6d4?text=Weather",
      link: "https://react-weather-app.netlify.app/",
      featured: true,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 5,
      title: "Brainwave",
      category: "web",
      description: "Modern AI landing page with interactive elements.",
      tech: ["React", "Framer Motion", "Three.js"],
      image: "https://placehold.co/800x600/0f172a/06b6d4?text=Brainwave",
      link: "https://ai-landing-page.netlify.app/",
      featured: true,
      color: "from-violet-500 to-purple-500",
    },
    {
      id: 6,
      title: "Nike Frontend",
      category: "web",
      description: "Nike-inspired e-commerce frontend.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "https://placehold.co/800x600/0f172a/000000?text=Nike",
      link: "https://nike-frontend.netlify.app/",
      featured: true,
      color: "from-black to-gray-800",
    },
  ];

  const filters = [
    { id: "all", label: "All", icon: "🎯" },
    { id: "web", label: "Web", icon: "💻" },
    { id: "mobile", label: "Mobile", icon: "📱" },
    { id: "ai", label: "AI", icon: "🤖" },
  ];

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  // Memoized particles to prevent recreation on each render
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        color: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#06b6d4" : "#8b5cf6",
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 20,
      })),
    []
  );

  return (
    <section
      id="portfolio"
      className="relative py-20 md:py-28 bg-slate-950 overflow-hidden"
    >
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      {/* Reduced particles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Subtle gradient orbs - reduced count */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-medium text-blue-400">
              Portfolio Showcase
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                  : "bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>

                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold rounded-lg flex items-center gap-1.5">
                    <span>⭐</span>
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-blue-400 hover:text-cyan-400 transition-colors"
                  >
                    ↗
                  </a>
                </div>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800/80 text-blue-400 text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Count */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-slate-800/40 backdrop-blur-sm rounded-full">
            <span className="text-slate-400 text-sm">Showing</span>
            <span className="font-bold text-blue-400">{filteredProjects.length}</span>
            <span className="text-slate-400 text-sm">of</span>
            <span className="font-bold text-blue-400">{projects.length}</span>
            <span className="text-slate-400 text-sm">projects</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;