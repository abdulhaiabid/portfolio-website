function CurrentlyLearningSection() {
  const skillSet = [
    {
      id: "1061",
      name: "MongoDB",
      description:
        "NoSQL database design and queries",
      percentage: 98,
      icon: "html-5-svg.svg"
    },
    {
      id: "1062",
      name: "Express.js",
      description:
        "Building RESTful APIs with Express",
      percentage: 98,
      icon: "css-3-svg.svg"
    },
    {
      id: "1063",
      name: "TypeScript",
      description:
        "Adding type safety to JavaScript",
      percentage: 98,
      icon: "javascript-svg.svg"
    },
    {
      id: "1064",
      name: "Git & GitHub",
      description:
        "Advanced workflows and best practices",
      percentage: 80,
      icon: "react-svg.svg"
    },
    {
      id: "1065",
      name: "Next.js",
      description:
        "Building full-stack React applications",
      percentage: 97,
      icon: "tailwind-svg.svg"
    },
  ];

  return (
    <>
      <section className="p-4 md:p-0 w-full bg-background-secondary">
        <div
          className={`max-w-7xl mx-auto px-4 py-4 flex flex-col items-center gap-4 border border-accent-primary rounded-2xl`}>
          <h1 className="text-section-heading">
            Currently Learning
          </h1>
          <p className="text-section-tagline">
            Continuously exploring new technologies and improving my skills.
          </p>
          <div className="w-full mt-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            {
              skillSet.map((skill, index) => (
                <LearningSkillCard
                  key={skill.id}
                  {...skill} />
              ))
            }
          </div>
        </div>
      </section>
    </>
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

export default CurrentlyLearningSection;