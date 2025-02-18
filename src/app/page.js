import Navbar from "./components/Navbar";
import Hero from "./layout/Hero.jsx";
import Heading from "./components/Heading";
import Projects from "./layout/Projects.jsx";

// import Experience from "./layout/Experience";
// import Education from "./layout/Education";
// import Contact from "./layout/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Heading word="Projects" />
      <Projects />
      {/* <Experience /> */}
      {/* <Education /> */}
      {/* <Contact /> */}
    </div>
  );
}
