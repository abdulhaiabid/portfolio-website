function SkillsSection() {
  const skillSet = [
    {
      id: "1031",
      name: "HTML",
      description: "Semantic markup and accessible web structure",
      percentage: 98,
      icon: "html-5-svg.svg"
    },
    {
      id: "1032",
      name: "CSS",
      description: "Responsive layouts, Flexbox, Grid, and modern styling.",
      percentage: 98,
      icon: "css-3-svg.svg"
    },
    {
      id: "1033",
      name: "JavaScript",
      description: "Interactive web applications and dynamic user experiences.",
      percentage: 98,
      icon: "javascript-svg.svg"
    },
    {
      id: "1034",
      name: "React",
      description: "Component-based UI development with Hooks and state management.",
      percentage: 80,
      icon: "react-svg.svg"
    },
    {
      id: "1035",
      name: "Tailwind",
      description: "Utility-first CSS for rapid, responsive interface design.",
      percentage: 97,
      icon: "tailwind-svg.svg"
    },
  ];

  const learningSkillSet = [
    {
      id: "1061",
      name: "TypeScript",
      description:
        "Adding type safety to JavaScript",
      percentage: 70,
      icon: "typescript-svg.svg"
    },
    {
      id: "1062",
      name: "Next.js",
      description:
        "Building full-stack React applications",
      percentage: 50,
      icon: "nextjs-svg-2.svg"
    },
    {
      id: "1063",
      name: "Express.js",
      description:
        "Building RESTful APIs with Express",
      percentage: 40,
      icon: "express-svg-2.svg"
    },
    {
      id: "1064",
      name: "MongoDB",
      description:
        "NoSQL database design and queries",
      percentage: 20,
      icon: "mongodb-svg.svg"
    },
    {
      id: "1065",
      name: "Docker",
      description:
        "Containerizing applications for consistent development and deployment.",
      percentage: 10,
      icon: "docker-svg.svg"
    }
  ];

  return (
    <>
      <section className="w-full bg-background-secondary">
        <div
          id="skills"
          className={`max-w-7xl mx-auto px-4 py-30 space-y-10 md:space-y-20`}>
          <div className="p-4 md:py-10 flex flex-col items-center gap-4 ring-2 ring-accent-primary rounded-2xl">
            <p className="text-section-eyebrow">
              Tech Stack
            </p>
            <h1 className="text-section-heading">
              Skills & Expertise
            </h1>
            <p className="text-section-tagline">
              Technologies I work with daily to build exceptional digital products.
            </p>
            <div className="w-full mt-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
              {
                skillSet.map((skill, index) => (
                  <SkillCard
                    key={skill.id}
                    {...skill} />
                ))
              }
            </div>
          </div>

          <div className="md:p-0 w-full bg-background-secondary">
            <div
              className={`max-w-7xl mx-auto md:px-4 py-4 flex flex-col items-center gap-4`}>
              <h1 className="text-section-heading">
                Currently Learning
              </h1>
              <p className="text-section-tagline">
                Continuously exploring new technologies and improving my skills.
              </p>
              <div className="w-full mt-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                {
                  learningSkillSet.map((skill, index) => (
                    <LearningSkillCard
                      key={skill.id}
                      {...skill} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SkillCard({ name, description, percentage, icon, className = "", style = {} }) {
  return (
    <div
      style={style}
      className={`p-4 grid md:grid-rows-[1fr,auto] md:grid-cols-[1fr,auto] justify-center items-center gap-x-4 text-text-primary bg-background-secondary dark:bg-background-tertiary [box-shadow:0px_0px_12px_2px_rgba(0,0,0,0.2)] rounded-2xl ${className}`}>
      <img
        src={icon}
        className="size-20 col-span-1 self-center md:self-start" />
      <div className="col-start-2 self-start">
        <h2 className="text-lg font-semibold">
          {name}
        </h2>
        <p className="text-sm text-text-secondary">
          {description}
        </p>
      </div>
      <div className="md:mt-4 row-start-2 col-span-2 flex items-center gap-2 ">
        <div className="h-1.5 flex-1 bg-border rounded-full overflow-hidden">
          <div
            style={{ width: `${percentage}%` }}
            className="h-full bg-linear-to-r from-accent-primary to-accent-secondary rounded-full"></div>
        </div>
        <p>{percentage}%</p>
      </div>
    </div>
  );
}

function LearningSkillCard({ name, percentage, icon, className = "", style = {} }) {
  return (
    <div
      style={style}
      className={`md:aspect-square p-4 grid grid-rows-[auto_auto] grid-cols-[auto_1fr] md:flex md:flex-col md:justify-center md:items-center gap-x-2 md:gap-4 text-text-primary bg-background-secondary dark:bg-background-tertiary [box-shadow:0px_0px_12px_2px_rgba(0,0,0,0.2)] rounded-2xl ${className}`}>
      <img
        src={icon}
        className="size-10 md:size-20 row-span-2 cols-span-1 self-center" />
      <h2 className="text-lg font-semibold">
        {name}
      </h2>
      <div className="w-full md:mt-4 flex items-center gap-2">
        <div className="h-1.5 flex-1 bg-border rounded-full overflow-hidden">
          <div
            style={{ width: `${percentage}%` }}
            className="h-full bg-linear-to-r from-accent-primary to-accent-secondary rounded-full"></div>
        </div>
        <p className="inline md:hidden">{percentage}%</p>
      </div>
    </div>
  );
}

export default SkillsSection;