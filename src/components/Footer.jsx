import { portfolioData } from "../data";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 text-center py-6 text-sm border-t border-slate-900">
      <p>© {new Date().getFullYear()} - {portfolioData.personal.name}</p>
    </footer>
  );
}