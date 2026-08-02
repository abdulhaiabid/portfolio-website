import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import DevelopmentTimelineSection from "./sections/DevelopmentTimelineSection";
import ProjectSection from "./sections/ProjectsSection";
import WorkflowSection from "./sections/WorkflowSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <DevelopmentTimelineSection />
      <ProjectSection />
      <WorkflowSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </ThemeProvider>
  );
}

export default App;