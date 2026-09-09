import { portfolioData } from "../data";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 pb-2 inline-block">
          Sobre Mí
        </h2>
      </div>
      
      <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-800/80 shadow-2xl mb-10 text-slate-300 leading-relaxed font-medium space-y-4">
        <p className="text-base sm:text-lg">{portfolioData.about.text1}</p>
        <p className="text-base sm:text-lg">{portfolioData.about.text2}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {portfolioData.about.highlights.map((h, i) => (
          <div 
            key={i} 
            className="p-4 bg-slate-950/60 rounded-xl flex items-center gap-3 border border-slate-800/60 hover:border-cyan-500/40 hover:bg-slate-900/40 transition-all duration-300 transform hover:-translate-y-1 shadow-md group"
          >
            <span className="text-cyan-400 font-bold group-hover:scale-125 transition-transform">✦</span>
            <span className="font-bold text-slate-200 text-xs sm:text-sm tracking-wide">{h.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
