import { useState } from "react";
import { portfolioData } from "../data";

export default function Skills() {
  const { development, qa, softSkills } = portfolioData.skills;
  
  // Estado para controlar qué pestaña está activa: 'hard' o 'soft'
  const [activeTab, setActiveTab] = useState("hard");

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white px-6 transition-all duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Cabecera de la Sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-cyan-500 pb-2 inline-block">
            Competencias Profesionales
          </h2>
          <p className="text-slate-400 mt-4 text-md max-w-xl mx-auto">
            Descubre mi stack tecnológico y las metodologías que aplico para asegurar la calidad y el rendimiento del software.
          </p>
        </div>

        {/* --- SELECTOR INTERACTIVO (TABS) --- */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 p-1.5 rounded-2xl inline-flex gap-2 border border-slate-700/60 shadow-inner">
            <button
              onClick={() => setActiveTab("hard")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "hard"
                  ? "bg-cyan-600 text-white shadow-md scale-105"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <span>💻</span> Habilidades Técnicas
            </button>
            
            <button
              onClick={() => setActiveTab("soft")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "soft"
                  ? "bg-purple-600 text-white shadow-md scale-105"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <span>🤝</span> Soft Skills
            </button>
          </div>
        </div>

        {/* --- CONTENIDO DINÁMICO --- */}
        <div className="min-h-[400px]">
          {activeTab === "hard" ? (
            /* Vista de Hard Skills (Desarrollo + QA) */
            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
              {/* Columna Desarrollo */}
              <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/40 shadow-xl">
                <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                  Desarrollo Full Stack
                </h3>
                <div className="space-y-4">
                  {development.map((s, i) => (
                    <div key={i} className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-cyan-500/40 transition-colors">
                      <h4 className="font-semibold text-slate-100 text-sm">{s.name}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.useCase}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna QA */}
              <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/40 shadow-xl">
                <h3 className="text-xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
                  Quality Assurance (QA)
                </h3>
                <div className="space-y-4">
                  {qa.map((s, i) => (
                    <div key={i} className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-emerald-500/40 transition-colors">
                      <h4 className="font-semibold text-slate-100 text-sm">{s.name}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Vista de Soft Skills */
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fadeIn">
              {softSkills.map((s, i) => (
                <div 
                  key={i} 
                  className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/40 hover:border-purple-500/40 hover:bg-slate-800/70 transition-all flex flex-col gap-3 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="font-bold text-purple-300 text-md">{s.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-5">{s.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
