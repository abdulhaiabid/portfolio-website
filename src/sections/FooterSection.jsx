function FooterSection() {
  const footerNavLinks = [
    { id: "1161", name: "Home", href: "#home" },
    { id: "1162", name: "Skills", href: "#skills" },
    { id: "1163", name: "Development", href: "#development-journey" },
    { id: "1164", name: "Projects", href: "#projects" },
    { id: "1165", name: "Workflow", href: "#workflow" },
    { id: "1166", name: "About", href: "#about" },
    { id: "1167", name: "Contact", href: "#contact" },
  ];


  return (
    <section className="w-full bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 py-30 flex flex-col items-center">
        <h1 className="text-2xl text-text-primary tracking-tight font-heading font-bold">
          AH
          <span className="text-4xl text-accent-primary leading-0 tracking-tight">.</span>
        </h1>
        <p className="mt-1 text-center text-text-secondary/60">
          Frontend Developer · React Specialist · UI Engineer
        </p>
        <ul className="mt-12 flex flex-wrap justify-center sm:justofy-start sm:items-center gap-6">
          {
            footerNavLinks.map(({ id, name, href }) => (
              <li key={id}>
                <a
                  title={name}
                  href={href}
                  className="text-text-secondary font-medium ring ring-transparent transition-color duration-150 outline-none hover:text-accent-secondary focus:ring-accent-primary">
                  {name}
                </a>
              </li>
            ))
          }
        </ul>
        <ul className="mt-6 flex flex-wrap justify-center sm:justofy-start sm:items-center gap-4 text-text-primary">
          <li>
            <a
              title="GitHub"
              href="#"
              className="px-4 py-2 inline-block font-semibold bg-background-tertiary border border-border transition-color duration-150 ring ring-transparent rounded-full hover:bg-[oklch(from_var(--background-primary)_calc(l*1.8)_calc(c*1.5)_h)] outline-none focus:ring-accent-primary">GitHub</a>
          </li>
          <li>
            <a
              title="LinkedIn"
              href="#"
              className="px-4 py-2 inline-block font-semibold bg-background-tertiary border border-border transition-color duration-150 ring ring-transparent rounded-full hover:bg-[oklch(from_var(--background-primary)_calc(l*1.8)_calc(c*1.5)_h)] outline-none focus:ring-accent-primary">LinkedIn</a>
          </li>
        </ul>
        <p className="mt-12 text-center text-text-secondary/60">
          © 2026 Abdul Hai. All rights reserved. Built with Passion
        </p>
      </div>
    </section >
  );
}

export default FooterSection;