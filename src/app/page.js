import Hero from "./layout/Hero.jsx";
import AboutMe from "./layout/AboutMe";
import Projects from "./layout/Projects.jsx";
import Skills from "./layout/Skills.jsx";
import Experience from "./layout/Experience";
import Education from "./layout/Education";
import Footer from "./layout/Footer";
export default function Home() {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme") || "green";
    document.documentElement.setAttribute("data-theme", storedTheme);
  }
  return (
    <>
      <Hero />
      <main>
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
