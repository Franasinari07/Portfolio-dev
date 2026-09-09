import { portfolioData } from "../data";

export default function EducationExperience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
      
      {/* Columna Experiencia */}
      <div>
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8 pb-2 border-b border-slate-800 inline-block">
          Trayectoria Laboral
        </h2>
        <div className="space-y-8 relative border-l border-slate-800 pl-5 ml-2">
          {portfolioData.experience.map((e, i) => (
            <div key={i} className="relative group">
              {/* Nodo brillante de la línea */}
              <span className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-colors"></span>
              
              <div className="bg-slate-900/30 backdrop-blur-sm p-5 rounded-xl border border-slate-800/60 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-400 transition-colors tracking-wide">{e.title}</h3>
                <p className="text-xs font-semibold text-slate-400 mt-0.5">{e.institution} • <span className="text-cyan-500/80">{e.period}</span></p>
                <p className="text-slate-400 my-3 text-xs leading-relaxed font-medium">{e.description}</p>
                <ul className="list-disc list-inside text-[11px] text-slate-500 space-y-1.5 font-medium pl-1">
                  {e.responsibilities.map((r, idx) => <li key={idx}>{r}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Columna Educación */}
      <div>
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-8 pb-2 border-b border-slate-800 inline-block">
          Formación Académica
        </h2>
        <div className="space-y-8 relative border-l border-slate-800 pl-5 ml-2">
          {portfolioData.education.map((e, i) => (
            <div key={i} className="relative group">
              {/* Nodo brillante de la línea */}
              <span className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] transition-colors"></span>
              
              <div className="bg-slate-900/30 backdrop-blur-sm p-5 rounded-xl border border-slate-800/60 hover:border-emerald-500/30 transition-all duration-300">
                <h3 className="font-bold text-base text-slate-100 group-hover:text-emerald-400 transition-colors tracking-wide">{e.title}</h3>
                <p className="text-xs font-semibold text-slate-400 mt-0.5">{e.institution} • <span className="text-emerald-500/80">{e.period}</span></p>
                <p className="text-slate-400 mt-3 text-xs leading-relaxed font-medium">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
