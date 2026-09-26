import { portfolioData } from "../data";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-600 text-center py-6 text-sm border-t border-slate-200 dark:bg-slate-950 dark:text-slate-500 dark:border-slate-900">
      <p>© {new Date().getFullYear()} - {portfolioData.personal.name}</p>
    </footer>
  );
}