import  { portfolioData } from "../data";

export default function Contact() {
  const c = portfolioData.contact;
  return (
    <section id="contact" className="py-16 bg-slate-900 text-white px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-slate-300 mb-8">{c.text}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a href={`mailto:${c.email}`} className="text-cyan-400 font-semibold hover:underline text-lg">{c.email}</a>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex gap-4">
            <a href={c.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors font-medium">LinkedIn</a>
            <a href={c.githubUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors font-medium">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}