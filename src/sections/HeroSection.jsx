import { useTheme } from "../components/ThemeProvider";

function HeroSection() {
  const { isDarkMode } = useTheme();

  return (
    <section className="w-full bg-background-primary [box-shadow:inset_0px_0px_20px_1px_rgba(0,0,0,0.2)]">
      <div
        id="home"
        className="min-h-150 max-w-7xl mx-auto px-8 py-30 relative grid grid-rows-[auto,1fr] md:grid-rows-1 grid-cols-1 md:grid-cols-12 mg:gap-6 text-text-primary">
        <div className="absolute left-1/2 bottom-2 -translate-x-1/2 ">
          <span className="material-symbols-outlined text-text-secondary animate-bounce">
            arrow_downward
          </span>
        </div>
        <div className="mt-6 md:mt-0 row-start-2 row-end-3 md:row-start-1 md:row-end-2 col-span-1 md:col-span-6 flex flex-col justify-center items-center md:items-start font-medium">
          <p className="text-text-secondary font-medium">
            <span className="mx-1 inline-block animate-shake">👋</span>
            Hello, I'm
          </p>
          {/* Gradient */}
          {/* <h1 className="pt-4 md:self-start text-6xl text-transparent font-heading font-bold bg-linear-[135deg] from-accent-primary to-accent-secondary bg-clip-text">Abdul Hai</h1> */}
          {/* Non Gradient */}
          <h1 className="pt-4 md:self-start text-5xl sm:text-6xl text-text-primary uppercase font-heading font-bold">Abdul Hai</h1>
          <h2 className="pt-2 text-xl sm:text-3xl text-text-tertiary font-mono font-semibold">Frontend Developer</h2>
          <p className="py-4 text-base sm:text-lg text-center md:text-start text-text-secondary leading-7">
            I build modern, responsive, and user-friendly web applications using React, JavaScript, Tailwind CSS, and Node.js. As a Software Engineering student, I'm passionate about creating clean interfaces, solving real-world problems, and continuously expanding my full-stack development skills.
          </p>
          <div className="pt-2 self-stretch sm:self-center md:self-start flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-2">
            <a
              title="View Projects"
              href="#projects"
              className="px-8 py-3 sm:py-4 flex justify-center items-center gap-1 text-sm text-background-secondary dark:text-text-primary font-bold bg-linear-to-br from-accent-primary to-accent-secondary rounded-full transition-shadow duration-150 hover:bg-accent-primary/60 cursor-pointer hover:[box-shadow:0_0_16px_var(--accent-primary)] outline-none focus:[box-shadow:0_0_16px_var(--accent-primary)]">
              View My Work
            </a>
            <a
              title="Contact Details"
              href="#contact"
              className="px-8 py-3 sm:py-4 flex justify-center items-center gap-1 text-sm font-bold bg-background-secondary border border-border ring ring-transparent rounded-full transition-color duration-150 hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] dark:hover:bg-background-secondary/60 cursor-pointer outline-none focus:ring-accent-primary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="px-10 col-span-1 md:col-span-6 md:-col-end-1 md:content-center justify-items-center">
          <div className="w-full aspect-6/5 rounded-4xl overflow-hidden">
            <img
              src={isDarkMode ? "/hero-section-image-2.jpg" : "/hero-section-image-1.jpg"}
              className="size-full object-cover dark:mix-blend-screen" />
          </div>
        </div>


      </div>
    </section>
  );
}

export default HeroSection;