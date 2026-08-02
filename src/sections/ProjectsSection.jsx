function ProjectSection() {
  const projects1 = [
    {
      id: "1081",
      title: "E Commerce Tech Store",
      description: "A comprehensive tech store with real-time analytics, inventory management and order tracking — built with React and Tailwind.",
      tags: ["React", "Tailwind"],
      imageURL: "tech-store-screenshot-3.jpg",
      liveDemoURL: "https://ecommercetechstore.netlify.app/",
      sourceCodeURL: "https://github.com/abdulhaiabid/e-commerce-tech-store"
    },
  ];

  const projects = [
    {
      id: "1081",
      title: "E-Commerce Store",
      description:
        "A modern e-commerce application featuring product browsing, category filtering, shopping cart functionality, and a responsive user interface built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      imageURL: "tech-store-screenshot-3.jpg",
      liveDemoURL: "https://ecommercetechstore.netlify.app/",
      sourceCodeURL: "https://github.com/abdulhaiabid/e-commerce-tech-store",
    },
    {
      id: "1082",
      title: "Developer Portfolio",
      description:
        "A responsive personal portfolio showcasing projects, skills, and experience with smooth animations, dark/light mode, and a modern UI built using React.",
      tags: ["React", "Tailwind CSS"],
      imageURL: "portfolio-screenshot.jpeg",
      liveDemoURL: "https://profrontdev.netlify.app/",
      sourceCodeURL: "https://github.com/abdulhaiabid/portfolio-website",
    },
    {
      id: "1083",
      title: "Notes App",
      description:
        "A clean and intuitive note-taking application that allows users to create, edit, delete, and organize notes with a fast and responsive interface.",
      tags: ["React", "JavaScript", "CSS"],
      imageURL: "notes-app-screenshot-1.jpeg",
      liveDemoURL: "https://basicreactnotesapp.netlify.app/",
      sourceCodeURL: "https://github.com/abdulhaiabid/react-notes-app",
    },
    {
      id: "1084",
      title: "AI Background Remover",
      description:
        "An AI-powered web application that removes image backgrounds through API integration, providing a simple and seamless image editing experience.",
      tags: ["React", "Node.js", "API Integration"],
      imageURL: "bg-remover-screenshot- Copy.jpeg",
      liveDemoURL: "#",
      sourceCodeURL: "#"
    },
  ];
  return (
    <section className="w-full bg-background-secondary animate-fade-up">
      <div
        id="projects"
        className="max-w-7xl mx-auto px-4 py-30 flex flex-col items-center gap-4">
        <p className="text-section-eyebrow">
          Portfolio
        </p>
        <h1 className="text-section-heading">
          Featured Projects
        </h1>
        <p className="text-section-tagline">
          Selected work showcasing my frontend development capabilities.
        </p>
        <div className=" mt-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 sm:gap-4">
          {
            projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ id, title, description, tags, imageURL, liveDemoURL, sourceCodeURL, style = {}, className = "" }) {

  return (
    <div
      style={style}
      className={`group/card bg-background-tertiary [box-shadow:0px_0px_12px_2px_rgba(0,0,0,0.2)] rounded-xl overflow-clip ${className}`}>
      {/* Image */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src={imageURL}
          alt={title}
          className="size-full object-cover object-center group-hover/card:scale-110 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col">
        <h2 className="text-lg text-text-primary font-bold font-heading line-clamp-1">
          {title}
        </h2>
        <p className="flex-1 text-sm text-text-secondary font-normal line-clamp-3">
          {description}
        </p>
        <div>
          <div className="mt-4 flex flex-wrap gap-1 text-xs text-accent-tertiary dark:text-accent-secondary font-medium">
            {
              tags.map(tag => (
                <span
                  key={`${id}-${tag}`}
                  className="px-2.5 py-1 font-mono bg-accent-primary/10 border border-accent-primary/30 rounded-full">
                  {tag}
                </span>
              ))
            }
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs text-text-primary/80 font-medium">
            <a
              title="View Live Demo"
              href={liveDemoURL}
              className="ring ring-transparent transition-color duration-150 hover:text-accent-primary outline-none focus:ring-accent-primary">
              🔗 Live Demo
            </a>
            <span>|</span>
            <a
              title="View Source Code"
              href={sourceCodeURL}
              className="ring ring-transparent transition-color duration-150 hover:text-accent-primary outline-none focus:ring-accent-primary">
              📂 Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;