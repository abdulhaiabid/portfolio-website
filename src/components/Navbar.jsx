import { NavLink } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { useTheme } from "./ThemeProvider";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.height = "100dvh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isNavbarOpen]);

  const navLinks = [
    { id: "111", name: "Home", href: "/", tooltip: "Home" },
    { id: "112", name: "Skills", href: "#skills", tooltip: "Skills" },
    { id: "113", name: "Projects", href: "#projects", tooltip: "Projects" },
    { id: "114", name: "Contact", href: "#contact", tooltip: "Contact" },
    { id: "115", name: "About", href: "#about", tooltip: "About" }
  ];

  function toggleSidebar() {
    setIsNavbarOpen(current => !current);
  }

  return (
    <>
      {
        isNavbarOpen && (
          <div
            onClick={toggleSidebar}
            className="fixed inset-0 z-20 md:hidden backdrop-blur transition-opacity starting:opacity-0 opacity-100"></div>
        )
      }
      <header className="w-full fixed z-20 text-text-primary bg-background-secondary [box-shadow:0px_0px_20px_1px_rgba(0,0,0,0.2)]">
        <nav className="max-w-7xl px-4 py-4 m-auto flex flex-col md:flex-row justify-between md:items-center">
          <div className="flex justify-between items-center">
            <h1>
              <a
                href="/"
                title={"Abdul Hai"}
                className="text-2xl font-bold tracking-tight ring ring-transparent outline-none focus:ring-accent-primary">
                AH
              </a>
              <span className="text-4xl text-accent-primary leading-0 tracking-tight">.</span>
            </h1>
            <button
              title="Toggle Navbar"
              onClick={toggleSidebar}
              className="md:hidden p-2 flex rounded-full transition-color duration-150 cursor-pointer hover:text-text-primary hover:bg-background-tertiary">
              <span className="material-symbols-outlined">
                {isNavbarOpen ? "close" : "menu"}
              </span>
            </button>
          </div>


          <div className={`grid ${isNavbarOpen ? "py-4 md:py-0 grid-rows-[1fr]" : "grid-rows-[0fr]"} md:grid-rows-[1fr] transition-[grid-template-rows]`}>
            <ul className={`flex flex-col md:flex-row md:items-center gap-4 ${isNavbarOpen ? "p-1 overflow-auto scrollbar-none" : "overflow-hidden"} md:p-0 md:overflow-visible`}>
              {
                navLinks.map(link => (
                  <li
                    key={link.id}>
                    <a
                      href={link.href}
                      title={link.name}
                      className="w-full inline-block px-4 py-2 text-base text-text-secondary font-medium border border-transparent rounded-full transition-color duration-150 hover:text-text-primary hover:bg-background-tertiary hover:border-border ring ring-transparent outline-none focus:ring-accent-primary">
                      {link.name}
                    </a>
                  </li>
                ))
              }
              <li className="flex items-center gap-2">
                {/* Unable this button to implement themes */}
                <button
                  title="Switch Theme"
                  onClick={toggleTheme}
                  className="px-2.5 self-stretch flex-1 flex justify-center items-center text-sm font-bold bg-background-tertiary dark:bg-background-on-surface border border-border ring ring-transparent rounded-full transition-color duration-150 cursor-pointer hover:bg-accent-primary/20 dark:hover:bg-background-on-surface/60 outline-none focus:ring-accent-primary">
                  <span className="material-symbols-outlined text-base! leading-0! [font-variation-settings:'FILL'1]">
                    {isDarkMode ? "light_mode" : "dark_mode"}
                  </span>
                </button>
                <a
                  title="Download Resume"
                  href="resume.pdf"
                  className="px-4 py-3 md:py-2 flex-1 flex justify-center items-center gap-1 text-sm text-background-primary dark:text-text-primary font-bold bg-linear-to-br from-accent-primary to-accent-secondary rounded-full ring ring-transparent transition-color duration-150 cursor-pointer hover:bg-accent-primary/60 hover:[box-shadow:0_0_16px_var(--accent-primary)] outline-none focus:ring-accent-primary">
                  <span className="material-symbols-outlined text-base! leading-0! [font-variation-settings:'FILL'1]">
                    article
                  </span>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;