import { useState, useEffect } from "react";
import { portfolioData } from "../data";

export default function FeaturedProject() {
  const projects = portfolioData.featuredProjects?.length
    ? portfolioData.featuredProjects
    : [portfolioData.featuredProject];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMockups, setShowMockups] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setShowMockups(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  useEffect(() => {
    setShowMockups(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (showMockups) {
        setShowMockups(false);
      }
    };

    if (showMockups) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMockups]);

  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400 pb-2 inline-block">
          Proyectos Destacados
        </h2>
      </div>

      <div className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="text-[10px] font-bold bg-cyan-100 text-cyan-700 border border-cyan-200 px-3 py-1 rounded-full uppercase tracking-wider inline-block dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20">
            Garantía de Calidad & Desarrollo
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
              aria-label="Proyecto anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
              aria-label="Siguiente proyecto"
            >
              →
            </button>
          </div>
        </div>

        <div key={currentProject.name} className="project-card">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            {currentProject.name}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            {currentProject.description}
          </p>

          <div className="mb-6 bg-slate-100 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800/40">
            <span className="font-bold text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wide block mb-1">
              Rol Desempeñado:
            </span>
            <span className="text-sm text-slate-700 dark:text-slate-400 font-medium">{currentProject.role}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {currentProject.technologies.map((t, i) => (
              <span
                key={`${currentProject.name}-${i}`}
                className="bg-slate-100 text-cyan-700 border border-slate-200 text-xs px-3 py-1 rounded-lg font-semibold tracking-wide dark:bg-slate-950/80 dark:text-cyan-400 dark:border-slate-800/80"
              >
                {t}
              </span>
            ))}
          </div>

          {showMockups && currentProject.images?.length > 0 && (
            <div className="mb-8 p-5 bg-slate-100 dark:bg-slate-950/80 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-2xl animate-fadeIn">
              <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-4 uppercase tracking-wider">
                Capturas del Sistema
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentProject.images.map((imgUrl, index) => (
                  <div
                    key={`${currentProject.name}-image-${index}`}
                    className="group relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm aspect-video flex items-center justify-center dark:border-slate-800/80 dark:bg-slate-900"
                  >
                    <img
                      src={imgUrl}
                      alt={`Mockup ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <span className="absolute text-[11px] font-bold text-slate-500 pointer-events-none tracking-wide dark:text-slate-600">
                      Mockup #{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4 border-t border-slate-200 dark:border-slate-800/60 pt-6">
            {currentProject.images?.length > 0 && (
              <button
                type="button"
                onClick={() => setShowMockups(!showMockups)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 shadow-md ${
                  showMockups
                    ? "bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    : "bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-white dark:border-slate-800 dark:hover:border-slate-700"
                }`}
              >
                <span>{showMockups ? "Ocultar Capturas" : "Ver Capturas"}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${showMockups ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}

            {currentProject.githubUrl && (
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all shadow-md"
              >
                <span>Ver en GitHub</span>
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={`${project.name}-dot`}
              type="button"
              aria-label={`Ir al proyecto ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-cyan-500" : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
