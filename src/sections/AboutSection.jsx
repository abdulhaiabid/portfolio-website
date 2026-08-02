function AboutSection() {
  const stats = [
    { id: "1151", digit: "4+", description: "Projects Completed" },
    { id: "1152", digit: "6+", description: "Web Technologies" },
    { id: "1153", digit: "3", description: "Core CS Subjects Mastered" }
  ];
  return (
    <section className="w-full bg-background-secondary">
      <div
        id="about"
        className="max-w-7xl mx-auto px-4 py-30 flex flex-col items-center gap-4">
        <p className="text-section-eyebrow">
          About Me
        </p>
        <h1 className="text-section-heading">
          The Developer Behind the Code
        </h1>
        <p className="text-section-tagline">
          A brief look into my background, philosophy, and what drives my work.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-6">
          <div className="sm:px-8 md:px-0 col-span-1 md:col-span-6 content-center md:content-start justify-items-center">
            <div className="aspect-6/5 bg-linear-to-br from-accent-primary to-accent-secondary rounded-4xl overflow-hidden">
              <img
                src="tech-orb-2.jpg"
                className="h-full object-cover object-center" />
            </div>
          </div>
          <div className="sm:px-4 md:px-0 col-span-1 md:col-span-6 flex flex-col gap-4">
            <h2 className="text-xl text-text-primary font-heading font-bold">
              Bridging Design & Engineering
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-6">
              I'm a Software Engineering student with a strong passion for frontend development and modern web technologies.
            </p>
            <p className="text-sm sm:text-base text-text-secondary leading-6">
              I enjoy transforming ideas into responsive, interactive, and visually appealing web applications using React, JavaScript, Tailwind CSS, and Node.js. Alongside frontend development, my university coursework has strengthened my understanding of Data Structures & Algorithms, Object-Oriented Programming, and Database Systems.
            </p>
            <p className="text-sm sm:text-base text-text-secondary leading-6">
              I'm constantly learning, building projects, and exploring new technologies to become a well-rounded software engineer who creates meaningful digital experiences.
            </p>
            <div className="grid grid-cols-3 items-stretch gap-2 sm:gap-4">
              {
                stats.map(({ id, digit, description }) => (
                  <StatsCard
                    key={id}
                    digit={digit}
                    description={description} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsCard({ digit, description }) {
  return (
    <div className="w-full aspect-4/3 sm:aspect-video md:aspect-4/3 lg:aspect-video p-4 md:p-2 flex flex-col justify-center items-center lg:gap-2 bg-background-tertiary border border-border rounded-2xl">
      <span className="text-base sm:text-3xl md:text-xl lg:text-3xl text-accent-secondary font-heading font-bold">
        {digit}
      </span>
      <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-center text-text-secondary font-medium">
        {description}
      </p>
    </div>
  );
}

export default AboutSection;