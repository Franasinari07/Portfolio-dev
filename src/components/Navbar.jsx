import { useState } from "react";
import { portfolioData } from "../data";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-white px-6 py-4 shadow-sm dark:shadow-md border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap">
        
        {/* Logo / Nombre */}
        <a href="#" className="z-50 flex items-center">
          <img 
            src="/logo.svg"
            alt="Logo" 
            className="h-8 w-auto object-contain transition-transform hover:scale-105 dark:invert-0"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="hidden text-xl font-bold tracking-wide whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-slate-800 dark:to-slate-100">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Sección Derecha: Links + Botón de Tema */}
        <div className="flex items-center gap-4 md:order-2">
          
          {/* --- BOTÓN INTERRUPTOR MODO CLARO / OSCURO --- */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 focus:outline-none shadow-sm"
            aria-label="Cambiar tema de color"
          >
            {darkMode ? (
              // Icono de Sol (Para pasar a modo claro)
              <svg className="w-5 h-5 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0 5 5 0 01-7.072 0z" />
              </svg>
            ) : (
              // Icono de Luna (Para pasar a modo oscuro)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Botón de Menú Hamburguesa Móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white md:hidden p-1 z-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Enlaces de Navegación */}
        <div className={`
          w-full md:w-auto md:flex gap-6 text-sm font-semibold items-center md:order-1
          transition-all duration-300 ease-in-out
          ${isOpen ? "block mt-4 md:mt-0" : "hidden md:flex"}
        `}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-2 md:pt-0">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-red-500 dark:hover:text-cyan-400 transition-colors py-1 border-b border-slate-200 dark:border-slate-800 md:border-none">Sobre mí</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-red-500 dark:hover:text-cyan-400 transition-colors py-1 border-b border-slate-200 dark:border-slate-800 md:border-none">Habilidades</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-red-500 dark:hover:text-cyan-400 transition-colors py-1 border-b border-slate-200 dark:border-slate-800 md:border-none">Experiencia</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-red-500 dark:hover:text-cyan-400 transition-colors py-1 border-b border-slate-200 dark:border-slate-800 md:border-none">Proyectos</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-red-500 dark:hover:text-cyan-400 transition-colors py-1">Contacto</a>
          </div>
        </div>

      </div>
    </nav>
  );
}
