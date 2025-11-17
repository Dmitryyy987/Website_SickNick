import React, { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Cartonize",
      category: "web",
      description:
        "A modern e-commerce platform specializing in custom packaging solutions with real-time pricing calculations, interactive design previews, and seamless checkout experience. Features a user-friendly interface for creating custom carton designs with various size and material options.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      image:
        "https://placehold.co/800x600/0f172a/3b82f6?text=Cartonize+E-commerce",
      link: "https://cartonize.vercel.app/",
      featured: true,
      color: "from-blue-500 to-cyan-500",
      stats: { clients: "50+", rating: "4.8", completion: "100%" },
    },
    {
      id: 2,
      title: "ArcadiaX",
      category: "web",
      description:
        "Cutting-edge gaming platform offering immersive multiplayer experiences with real-time connectivity. Includes user profiles, game lobbies, live chat, and competitive gaming features for an engaging community-driven platform.",
      tech: ["React", "Node.js", "WebSocket", "MongoDB"],
      image: "https://placehold.co/800x600/0f172a/06b6d4?text=ArcadiaX+Gaming",
      link: "https://arcadiax.vercel.app/",
      featured: true,
      color: "from-cyan-500 to-blue-500",
      stats: { clients: "30+", rating: "4.7", completion: "100%" },
    },
    {
      id: 3,
      title: "Gen-AI Engineer",
      category: "web",
      description:
        "AI-powered platform showcasing generative AI capabilities, featuring AI model demonstrations, interactive AI tools, and educational content about artificial intelligence engineering and applications.",
      tech: ["React", "Node.js", "WebSocket", "MongoDB"],
      image: "https://placehold.co/800x600/0f172a/06b6d4?text=Gen-AI+Engineer",
      link: "https://gen-ai.engineer/",
      featured: true,
      color: "from-purple-500 to-pink-500",
      stats: { clients: "30+", rating: "4.6", completion: "100%" },
    },
    {
      id: 4,
      title: "Weather Application",
      category: "web",
      description:
        "Responsive weather application providing accurate forecasts, location-based weather data, interactive maps, and detailed meteorological information with clean, intuitive user interface design.",
      tech: ["React", "Weather API", "Chart.js", "Tailwind"],
      image: "https://placehold.co/800x600/0f172a/06b6d4?text=Weather+App",
      link: "https://react-vite-weather-app.netlify.app/",
      featured: true,
      color: "from-emerald-500 to-teal-500",
      stats: { clients: "30+", rating: "4.5", completion: "100%" },
    },
    {
      id: 5,
      title: "Brainwave",
      category: "web",
      description:
        "Modern AI landing page featuring sleek design, interactive elements, and compelling presentation of artificial intelligence services or products. Focuses on user engagement and conversion optimization.",
      tech: ["React", "Framer Motion", "GSAP", "Three.js"],
      image: "https://placehold.co/800x600/0f172a/06b6d4?text=Brainwave+AI",
      link: "https://modern-ai-landing-page.netlify.app/",
      featured: true,
      color: "from-violet-500 to-purple-500",
      stats: { clients: "30+", rating: "4.7", completion: "100%" },
    },
    {
      id: 6,
      title: "Nike Frontend",
      category: "web",
      description:
        "Modern Nike-inspired e-commerce frontend featuring sleek product showcases, responsive design, and intuitive user interface. Implements smooth animations and professional product presentation.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "https://placehold.co/800x600/0f172a/000000?text=Nike+Frontend",
      link: "https://nike-front-page.netlify.app/",
      featured: true,
      color: "from-black to-gray-800",
      stats: { clients: "25+", rating: "4.6", completion: "100%" },
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: "🎯" },
    { id: "web", label: "Web Apps", icon: "💻" },
    { id: "mobile", label: "Mobile", icon: "📱" },
    { id: "ai", label: "AI/ML", icon: "🤖" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-float-slow"></div>
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-float-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px] animate-float-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgb(59, 130, 246) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(59, 130, 246) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Floating Particles - Enhanced */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background:
                i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#06b6d4" : "#8b5cf6",
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-950/50 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-xl mb-8 animate-fade-in-down shadow-lg shadow-blue-500/10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up">
            Featured{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                Projects
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full animate-gradient-x"></div>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light">
            Transforming ideas into exceptional digital experiences with
            cutting-edge technology
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative px-8 py-3.5 rounded-2xl font-semibold transition-all duration-500 overflow-hidden ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white shadow-2xl shadow-blue-500/40 scale-105"
                  : "bg-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/50 backdrop-blur-xl"
              }`}
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Active background animation */}
              {activeFilter === filter.id && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 animate-gradient-x"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 blur-2xl opacity-50"></div>
                </>
              )}

              {/* Hover effect for inactive buttons */}
              {activeFilter !== filter.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-cyan-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-cyan-600/10 group-hover:to-blue-600/10 transition-all duration-500"></div>
              )}

              <span className="relative flex items-center gap-2.5">
                <span className="text-xl transform group-hover:scale-110 transition-transform duration-300">
                  {filter.icon}
                </span>
                <span className="tracking-wide">{filter.label}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-800/50 hover:border-blue-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{
                animation: `fade-in-scale 0.8s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Glass morphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Enhanced Featured Badge */}
              {project.featured && (
                <div className="absolute top-5 left-5 z-20 px-4 py-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white text-xs font-bold rounded-xl shadow-2xl shadow-blue-500/50 flex items-center gap-2 animate-bounce-subtle backdrop-blur-sm">
                  <svg
                    className="w-4 h-4 animate-spin-slow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </div>
              )}

              {/* Enhanced Image Section */}
              <div className="relative h-72 overflow-hidden bg-slate-900/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Multi-layer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-all duration-700 mix-blend-overlay`}
                ></div>

                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/98 to-slate-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-6 backdrop-blur-sm">
                  <div className="flex items-center gap-8 scale-90 group-hover:scale-100 transition-transform duration-500">
                    <div className="text-center transform hover:scale-110 transition-transform duration-300">
                      <div
                        className={`text-3xl font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-1`}
                      >
                        {project.stats.clients}
                      </div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                        Clients
                      </div>
                    </div>

                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>

                    <div className="text-center transform hover:scale-110 transition-transform duration-300">
                      <div className="text-3xl font-black text-white mb-1 flex items-center gap-1.5">
                        {project.stats.rating}
                        <svg
                          className="w-5 h-5 text-yellow-400 animate-pulse-slow"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                        Rating
                      </div>
                    </div>

                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>

                    <div className="text-center transform hover:scale-110 transition-transform duration-300">
                      <div
                        className={`text-3xl font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-1`}
                      >
                        {project.stats.completion}
                      </div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                        Complete
                      </div>
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn relative px-8 py-3.5 bg-gradient-to-r ${project.color} text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative">View Live Site</span>
                    <svg
                      className="relative w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* Animated border glow */}
                {hoveredProject === project.id && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-30 blur-3xl animate-pulse-glow`}
                  ></div>
                )}
              </div>

              {/* Enhanced Content Section */}
              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500">
                    {project.title}
                  </h3>
                  <div
                    className={`p-3 bg-gradient-to-br ${project.color} bg-opacity-10 rounded-xl border border-slate-700 group-hover:border-blue-500/70 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}
                  >
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-5 leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2.5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-800/60 text-blue-400 text-xs font-semibold rounded-lg border border-slate-700/70 hover:border-blue-500/70 hover:bg-slate-800 hover:scale-105 transition-all duration-300 backdrop-blur-sm cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced corner accent with animation */}
              <div
                className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${project.color} opacity-0 group-hover:opacity-20 rounded-tl-[100px] transition-all duration-700 animate-corner-glow`}
              ></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-20 blur-xl`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Project Count with animation */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/40 backdrop-blur-xl rounded-full border border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-sm text-slate-400">Showing</span>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {filteredProjects.length}
              </span>
              <span className="text-sm text-slate-400">of</span>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {projects.length}
              </span>
              <span className="text-sm text-slate-400">projects</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(50px, -50px);
          }
          50% {
            transform: translate(0, -100px);
          }
          75% {
            transform: translate(-50px, -50px);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(80px, 80px);
          }
        }

        @keyframes corner-glow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in-up 1.2s ease-out 0.2s both;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-corner-glow {
          animation: corner-glow 3s ease-in-out infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
