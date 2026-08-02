function WorkflowSection() {

  const workflowSteps = [
    {
      id: "1141",
      step: 1,
      heading: "Discover",
      description: "Research, requirements gathering, and stakeholder alignment."
    },
    {
      id: "1142",
      step: 2,
      heading: "Design",
      description: "Wireframes, prototypes, and design system planning."
    },
    {
      id: "1143",
      step: 3,
      heading: "Develop",
      description: "Iterative coding with regular demos and feedback loops."
    },
    {
      id: "1144",
      step: 4,
      heading: "Test",
      description: "Unit, integration, and E2E testing plus accessibility audits."
    },
    {
      id: "1145",
      step: 5,
      heading: "Deploy & Support",
      description: "CI/CD deployment, monitoring, and ongoing maintenance."
    }
  ];

  return (
    <section className="w-full bg-background-primary [box-shadow:inset_0px_0px_20px_1px_rgba(0,0,0,0.2)]">
      <div
        id="workflow"
        className="max-w-7xl mx-auto px-4 py-30 flex flex-col items-center gap-4">
        <p className="text-section-eyebrow">
          Workflow
        </p>
        <h1 className="text-section-heading">
          How I Work
        </h1>
        <p className="text-section-tagline">
          A structured approach to deliver consistent, high-quality results.
        </p>
        <div className="mt-8">
          <div className="w-[80%] h-1 mx-auto self-center hidden md:block bg-border bg-linear-to-r from-accent-primary to-accent-secondary translate-y-8.5"></div>
          <div className="relative grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 gap-4 md:gap-0">
            {
              workflowSteps.map((workflowStep) => (
                <WorkflowCard
                  key={workflowStep.id}
                  step={workflowStep.step}
                  heading={workflowStep.heading}
                  description={workflowStep.description} />
              ))
            }

          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowCard({ step, heading, description }) {
  return (
    <div className="group/card md:px-6 flex flex-row md:flex-col items-center gap-4 md:gap-2 text-text-primary">
      <div className="size-12 md:size-16 aspect-square flex justify-center items-center md:text-xl text-accent-secondary font-bold bg-background-secondary border-2 border-border transition-shadow duration-150 rounded-full group-hover/card:[box-shadow:0_0_24px_var(--accent-primary)]">
        <span>
          {step}
        </span>
      </div>
      <div className="md:mt-2">
        <h2 className="md:text-center font-mono font-bold">
          {heading}
        </h2>
        <p className="text-sm md:text-center text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}

export default WorkflowSection;