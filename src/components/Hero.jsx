import { portfolioData } from "../data";

export default function Hero() {
  const p = portfolioData.personal;
  return (
    <section className="relative pt-32 pb-24 px-6 text-center">
      <div className="max-w-3xl mx-auto relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-700 border border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 mb-6 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
          Disponible para Nuevos Desafíos
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
          Hola, soy{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500">
            {p.name}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-200 font-bold mb-3 tracking-wide">{p.role}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium mb-8">{p.title}</p>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          {p.shortDescription}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href={p.linkedinUrl} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-7 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(6,182,212,0.3)] text-sm">
            Conectar en LinkedIn
          </a>
          <a href={portfolioData.cv.cvUrl} download className="bg-white hover:bg-slate-100 text-slate-800 px-7 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 border border-slate-200 hover:border-slate-300 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-800 dark:hover:border-slate-700">
            Descargar CV
          </a>
          <a href={p.githubUsername ? `https://github.com${p.githubUsername}` : "#"} target="_blank" rel="noreferrer" className="bg-slate-100/90 backdrop-blur-md hover:bg-slate-200/90 text-slate-600 hover:text-slate-900 p-3 rounded-xl transition-colors border border-slate-200 dark:bg-slate-900/40 dark:hover:bg-slate-800/40 dark:text-slate-400 dark:hover:text-slate-200 dark:border-slate-800/80">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
