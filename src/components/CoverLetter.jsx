import { useState } from "react";
import { portfolioData } from "../data";

export default function CoverLetter() {
  const [show, setShow] = useState(false);
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto text-center relative z-10">
      <div className="bg-slate-900/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-900 shadow-xl">
        <h2 className="text-xl font-bold text-slate-200 mb-1 tracking-wide">{portfolioData.presentation.title}</h2>
        <p className="text-sm text-slate-400 mb-6 font-medium">{portfolioData.presentation.intro}</p>
        <button 
          onClick={() => setShow(!show)} 
          className="bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 hover:border-cyan-500/30 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-inner"
        >
          {show ? "Cerrar Carta" : "Visualizar Carta Completa"}
        </button>
        {show && (
          <div className="mt-6 p-6 sm:p-8 bg-slate-950/80 border border-slate-800/80 rounded-xl text-left whitespace-pre-line text-slate-300 shadow-2xl leading-relaxed text-sm font-medium animate-fadeIn">
            {portfolioData.presentation.fullText}
          </div>
        )}
      </div>
    </section>
  );
}
