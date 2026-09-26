import { useState } from "react";
import { portfolioData } from "../data";

export default function Skills() {
  const { development, qa, softSkills } = portfolioData.skills;

  const [activeTab, setActiveTab] = useState("hard");

  return (
    <section id="skills" className="py-20 bg-slate-100 text-slate-800 px-6 transition-all duration-300 dark:bg-slate-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-cyan-500 pb-2 inline-block">
            Competencias Profesionales
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-md max-w-xl mx-auto">
            Descubre mi stack tecnológico y las metodologías que aplico para asegurar la calidad y el rendimiento del software.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-slate-200/80 p-1.5 rounded-2xl inline-flex gap-2 border border-slate-200 dark:bg-slate-800 dark:border-slate-700/60 shadow-inner">
            <button
              onClick={() => setActiveTab("hard")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "hard"
                  ? "bg-cyan-600 text-white shadow-md scale-105"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <span>💻</span> Habilidades Técnicas
            </button>

            <button
              onClick={() => setActiveTab("soft")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "soft"
                  ? "bg-purple-600 text-white shadow-md scale-105"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <span>🤝</span> Soft Skills
            </button>
          </div>
        </div>

        <div className="min-h-[400px]">
          {activeTab === "hard" ? (
            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
              <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-xl dark:bg-slate-800/40 dark:border-slate-700/40">
                <h3 className="text-xl font-bold mb-6 text-cyan-600 flex items-center gap-2 dark:text-cyan-400">
                  Desarrollo Full Stack
                </h3>
                <div className="space-y-4">
                  {development.map((s, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-cyan-500/40 transition-colors dark:bg-slate-800 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-800 text-sm dark:text-slate-100">{s.name}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed dark:text-slate-400">{s.useCase}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-xl dark:bg-slate-800/40 dark:border-slate-700/40">
                <h3 className="text-xl font-bold mb-6 text-emerald-600 flex items-center gap-2 dark:text-emerald-400">
                  Quality Assurance (QA)
                </h3>
                <div className="space-y-4">
                  {qa.map((s, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-emerald-500/40 transition-colors dark:bg-slate-800 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-800 text-sm dark:text-slate-100">{s.name}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed dark:text-slate-400">{s.useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fadeIn">
              {softSkills.map((s, i) => (
                <div
                  key={i}
                  className="p-6 bg-white/80 rounded-2xl border border-slate-200 hover:border-purple-500/40 hover:bg-white transition-all flex flex-col gap-3 shadow-md dark:bg-slate-800/40 dark:border-slate-700/40 dark:hover:bg-slate-800/70"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="font-bold text-purple-600 text-md dark:text-purple-300">{s.name}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-5 dark:text-slate-400">{s.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
