import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { id: "121", name: "Home", link: "/" },
    { id: "122", name: "Projects", link: "/projects" },
    { id: "123", name: "Education", link: "/education" },
    { id: "124", name: "Contact", link: "/contact" },
    { id: "125", name: "About", link: "/about" }
  ];
  return (
    <header className="w-full border-b border-slate-600">
      <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Heading */}
        <h1 className="text-3xl tracking-wide font-bold">Portfolio</h1>
        {/* Nav Links */}
        <ul className="flex items-center gap-6">
          {
            navLinks.map(navLink => (
              <li key={navLink.id}>
                <NavLink
                  to={navLink.link}
                  className={
                    ({ isActive }) => isActive
                      ? "relative text-slate-400 after:content-[''] after:w-full after:absolute after:left-0 after:-bottom-2 after:border-2 after:border-slate-400 after:rounded-full"
                      : "transition-color duration-200 hover:text-slate-400"}>
                  {navLink.name}
                </NavLink>
              </li>
            ))
          }
        </ul>
        {/* Download CV Button */}
        <button className="px-3 py-1 flex items-center text-sm bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600">
          Download CV
          <span className="material-symbols-outlined text-xl!">
            download
          </span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;