import { portfolioData } from "../data";

export default function GithubProjects() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Proyectos en GitHub</h2>
      <p className="text-slate-600 mb-6">Puedes revisar todos mis repositorios en mi perfil público</p>
      <a
        href={`https://github.com/${portfolioData.github.githubUsername}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors font-medium"
      >
        Ir a @{portfolioData.github.githubUsername}
      </a>
    </section>
  );
}