function DevelopmentTimelineSection() {
  const timelineElements = [
    {
      id: "1211",
      title: "React Development",
      listItems: [
        "Developed reusable component-based applications using React.",
        "Learned state management, routing, hooks, and responsive design.",
        "Built several real-world projects to strengthen practical skills."
      ],
      tags: ["Tailwind", "React", "JavaScript", "Responsive UI"],
      duration: "2025 – Present"
    },
    {
      id: "1212",
      title: "Started My Frontend Journey",
      listItems: [
        "Learned HTML, CSS, and modern JavaScript.",
        "Built responsive user interfaces and explored UI/UX principles.",
        "Focused on writing clean, semantic, and maintainable code."
      ],
      tags: ["HTML", "CSS", "JavaScript", "Git"],
      duration: "2025"
    },
    {
      id: "1213",
      title: "BS Software Engineering",
      listItems: [
        "Pursuing a BS in Software Engineering.",
        "Studying Data Structures & Algorithms, Object-Oriented Programming, Database Systems, and Software Engineering principles.",
        "Continuously applying academic concepts to personal projects."
      ],
      tags: ["OOP (Java)", "DSA (C++)", "Database (SQL)"],
      duration: "2024 – Present"
    },
  ];
  return (
    <section className="w-full bg-background-primary [box-shadow:inset_0px_0px_20px_1px_rgba(0,0,0,0.2)]">
      <div
        id="development-journey"
        className="max-w-7xl mx-auto px-4 py-30 flex flex-col items-center gap-4">
        <p className="text-section-eyebrow">
          DEVELOPMENT
        </p>
        <h1 className="text-section-heading">
          Development Journey
        </h1>
        <p className="text-section-tagline">
          Chronological timeline of my growth and experience as a frontend developer.
        </p>
        <div className="px-2 mt-8 w-full grid grid-cols-[auto_3fr] items-center">
          <div className="h-full w-0.5 mr-4 sm:mr-8 md:mr-12 col-span-1 bg-border"></div>
          <div className="col-span-1 flex flex-col gap-12">
            {
              timelineElements.map(element => (
                <TimelineCard
                  key={element.id}
                  {...element} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}


function TimelineCard({ id, title, listItems, tags, duration }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex justify-between items-center">
        <div className="w-3 aspect-square absolute top-1/2 -translate-y-1/2 -left-5.75 sm:-left-9.75 md:-left-13.75 bg-accent-primary [box-shadow:0px_0px_0px_3px_var(--background-secondary),0px_0px_0px_5px_var(--border)] rounded-full"></div>
        <div className="flex items-center gap-2">
          <div className="w-10 aspect-square text-center content-center text-white font-bold bg-linear-to-br from-accent-primary to-accent-secondary rounded-lg">
            {title.slice(0, 1)}
          </div>
          <h2 className="text-base sm:text-lg text-text-primary font-heading font-bold">
            {title}
          </h2>
        </div>
        <p className="text-sm text-text-secondary">
          {duration}
        </p>
      </div>
      <div>
        <ul className="mt-1 pl-5 text-sm text-text-secondary leading-6 list-disc">
          {
            listItems.map(item => (
              <li key={`${id}-${item}`}>
                {item}
              </li>
            ))
          }
        </ul>
        <div className="pt-4 flex flex-wrap gap-2 text-xs text-accent-primary font-medium">
          {
            tags.map(tag => (
              <span
                key={`${id}-${tag}`}
                className="inline-block px-3 py-1 font-mono bg-accent-primary/20 border border-accent-primary/30 rounded-full">
                {tag}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default DevelopmentTimelineSection;