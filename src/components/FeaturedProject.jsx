import { useState, useEffect } from "react";
import { portfolioData } from "../data";

export default function FeaturedProject() {
  const fp = portfolioData.featuredProject;
  const [showMockups, setShowMockups] = useState(false);

  // Escuchador de scroll para el cierre automático
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

  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto relative z-10">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 pb-2 inline-block">
          Proyecto Destacado
        </h2>
      </div>

      {/* Tarjeta con Efecto Cristal (Glassmorphism) */}
      <div className="bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-2xl relative overflow-hidden group">
        {/* Borde superior de neón cyan */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        
        <span className="text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
          Garantía de Calidad & Desarrollo
        </span>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">{fp.name}</h3>
        <p className="text-sm sm:text-base text-slate-400 mb-6 leading-relaxed font-medium">{fp.description}</p>
        
        <div className="mb-6 bg-slate-950/40 p-4 rounded-xl border border-slate-800/40">
          <span className="font-bold text-xs text-slate-300 uppercase tracking-wide block mb-1">Rol Desempeñado:</span>
          <span className="text-sm text-slate-400 font-medium">{fp.role}</span>
        </div>

        {/* Tecnologías en formato pastilla tecnológica */}
        <div className="flex flex-wrap gap-2 mb-8">
          {fp.technologies.map((t, i) => (
            <span key={i} className="bg-slate-950/80 text-cyan-400 border border-slate-800/80 text-xs px-3 py-1 rounded-lg font-semibold tracking-wide">
              {t}
            </span>
          ))}
        </div>

        {/* Panel Desplegable de Mockups */}
        {showMockups && (
          <div className="mb-8 p-5 bg-slate-950/80 rounded-xl border border-slate-800/80 shadow-2xl animate-fadeIn">
            <h4 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">Capturas del Sistema (Interfaz Anonimizada):</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {fp.images && fp.images.map((imgUrl, index) => (
                <div key={index} className="group relative rounded-xl overflow-hidden border border-slate-800/80 bg-slate-900 shadow-sm aspect-video flex items-center justify-center">
                  <img 
                    src={imgUrl} 
                    alt={`Mockup ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className="absolute text-[11px] font-bold text-slate-600 pointer-events-none tracking-wide">
                    Mockup #{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enlaces inferiores */}
        <div className="flex flex-wrap gap-4 border-t border-slate-800/60 pt-6">
          <button 
            onClick={() => setShowMockups(!showMockups)} 
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 shadow-md ${
              showMockups 
                ? "bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]" 
                : "bg-slate-950 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
            }`}
          >
            <span>{showMockups ? "Ocultar Capturas" : "Ver Capturas (Mockups)"}</span>
            <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${showMockups ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          {fp.githubUrl && (
            <a 
              href={fp.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all shadow-md"
            >
              <span>Ver Documentación</span>
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
