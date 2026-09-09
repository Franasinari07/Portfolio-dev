import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoverLetter from "./components/CoverLetter";
import About from "./components/About";
import Skills from "./components/Skills";
import EducationExperience from "./components/EducationExperience";
import FeaturedProject from "./components/FeaturedProject";
import GithubProjects from "./components/GithubProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Inicializamos el estado leyendo la preferencia del sistema o guardada previamente
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // Por defecto inicia en oscuro
  });

  // Cada vez que cambie el tema, añadimos/quitamos la clase 'dark' en el documento de forma global
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-100 selection:bg-cyan-500 selection:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Luces Ambientales Globales (Solo visibles o con opacidad reducida según el modo) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[30%] right-10 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Pasamos el estado y la función para cambiarlo al Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="space-y-4">
          <Hero />
          <CoverLetter />
          <About />
          <Skills />
          <EducationExperience />
          <FeaturedProject />
          <GithubProjects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
