import ContactForm from "../components/ContactForm";

function ContactSection() {

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

  function handleContactFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="w-full bg-background-primary [box-shadow:inset_0px_0px_20px_1px_rgba(0,0,0,0.2)]">
      <div
        id="contact"
        className="max-w-7xl mx-auto px-4 py-30 flex flex-col items-center gap-4">
        <p className="text-section-eyebrow">
          Get In Touch
        </p>
        <h1 className="text-section-heading">
          Contact Me
        </h1>
        <p className="text-section-tagline">
          Have a project in mind? Let's talk about how I can help.
        </p>
        <div className="mt-8 self-stretch grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-1 md:col-span-6 flex flex-col justify-center md:justify-start items-center md:items-start">
            <p className="px-4 py-1 flex items-center gap-3 text-[#34d399] font-medium bg-[#34d399]/10 border border-[#34d399]/30 rounded-full">
              <span className="inline-block size-2 bg-[#34d399] [box-shadow:0_0_0px_10px_#34d399] rounded-full animate-color-pulse"></span>
              Available for freelance
            </p>
            <h1 className="mt-8 text-2xl md:text-4xl text-center md:text-start text-text-primary font-heading font-bold">
              Let's build something <span className="text-accent-primary">extraordinary</span> together.
            </h1>
            <p className="mt-2 text-sm sm:text-base text-text-secondary text-center md:text-start leading-6 font-medium">
              Whether you're looking for a frontend developer, want to collaborate on a project, or simply want to connect, I'd love to hear from you. Let's create something impactful together.
            </p>
            <div className="mt-8 md:self-stretch flex flex-col gap-2 text-text-primary">
              <div className="flex items-center gap-2 font-heading">
                <span className="material-symbols-outlined size-8 md:size-12 text-sm! md:text-base! text-center content-center bg-background-secondary rounded-lg [font-variation-settings:'FILL'1]">
                  mail
                </span>
                <a
                  href="mailto:abdulhaiabid50@gmail.com"
                  className="flex items-center text-sm sm:text-base ring ring-transparent outline-none focus:ring-accent-primary">
                  abdulhaiabid50@gmail.com
                  <span className="material-symbols-outlined ml-2 text-sm! md:text-base! text-text-secondary">
                    open_in_new
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-2 font-heading">
                <span className="material-symbols-outlined size-8 md:size-12 text-sm! md:text-base! text-center content-center bg-background-secondary rounded-lg [font-variation-settings:'FILL'1]">
                  location_on
                </span>
                <a
                  href="#"
                  className="flex items-center text-sm sm:text-base ring ring-transparent outline-none focus:ring-accent-primary">
                  Rawalpindi, Pakistan
                  {/* <span class="material-symbols-outlined ml-2 text-sm! md:text-base! text-text-secondary">
                    open_in_new
                  </span> */}
                </a>
              </div>
            </div>
            {/* <ul className="mt-8 flex flex-wrap justify-center sm:justofy-start sm:items-center gap-2 text-text-primary">
              <li>
                <a
                  href="#"
                  className="px-4 py-2 inline-block bg-background-tertiary border border-border transition-color duration-150 ring ring-transparent rounded-full hover:bg-[oklch(from_var(--background-primary)_calc(l*1.8)_calc(c*1.5)_h)] outline-none focus:ring-accent-primary">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-2 inline-block bg-background-tertiary border border-border transition-color duration-150 ring ring-transparent rounded-full hover:bg-[oklch(from_var(--background-primary)_calc(l*1.8)_calc(c*1.5)_h)] outline-none focus:ring-accent-primary">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul> */}
          </div>
          <div className="col-span-1 md:col-span-6 text-text-primary">
            <ContactForm />
            {/* <form
              action=""
              onSubmit={handleContactFormSubmit}
              className="p-4 md:p-6 flex flex-col gap-4 bg-background-tertiary [box-shadow:0px_0px_20px_1px_rgba(0,0,0,0.2)] rounded-lg md:rounded-2xl">
              <h2 className="inline md:hidden text-3xl font-body font-bold">
                Contact Form
              </h2>
              <input
                title="Full Name"
                type="text"
                id="full-name"
                placeholder="Your Name"
                className="w-full p-3 md:p-4 text-text-primary bg-background-secondary rounded-lg transition-shadow duration-150 ring ring-transparent focus:ring-accent-primary outline-0" />
              <input
                title="Email"
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full p-3 md:p-4 text-text-primary bg-background-secondary rounded-lg transition-shadow duration-150 ring ring-transparent focus:ring-accent-primary outline-0" />
              <input
                title="Subject"
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full p-3 md:p-4 text-text-primary bg-background-secondary rounded-lg transition-shadow duration-150 ring ring-transparent focus:ring-accent-primary outline-0" />
              <textarea
                title="Type a message..."
                type="text"
                id="message"
                placeholder="Message"
                rows="5"
                className="w-full p-3 md:p-4 text-text-primary bg-background-secondary rounded-lg transition-shadow duration-150 ring ring-transparent focus:ring-accent-primary outline-0 resize-none"></textarea>
              <button
                title="Send E-mail"
                className="px-8 py-4 sm:py-4 flex justify-center items-center gap-1 text-sm text-background-primary dark:text-text-primary font-bold bg-linear-to-br from-accent-primary to-accent-secondary rounded-full transition-shadow duration-150 hover:bg-accent-primary/60 cursor-pointer hover:[box-shadow:0_0_16px_var(--accent-primary)] outline-none focus:[box-shadow:0_0_16px_var(--accent-primary)]">
                Send Message
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;