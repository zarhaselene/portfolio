import Navbar from "./components/Navbar";
import Hero from "./layout/Hero.jsx";
import ProjectsAndSkills from "./layout/ProjectsAndSkills.jsx";
import ExperienceEducation from "./layout/ExperienceEducation";
import Footer from "./layout/Footer";
import BackToTopBtn from "./components/BackToTopBtn";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectsAndSkills />
      <ExperienceEducation />
      <Footer />
      <BackToTopBtn />
    </div>
  );
}
