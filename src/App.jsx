import { useRef, createRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollFadeSection from "./components/ScrollFadeSection";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const sectionRefs = useRef([
    createRef(), // home
    createRef(), // aboutme
    createRef(), // projects
    createRef(), // about
    createRef(), // contact
  ]);

  return (
    <div className="relative bg-primary text-white font-sans scroll-smooth overflow-hidden min-h-screen">
      {/* Background blobs with subtle pulse animations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[350px] h-[350px] bg-accent opacity-20 rounded-full blur-[120px] top-[-100px] left-[-100px] animate-pulse-slower"
        />
        <div
          className="absolute w-[300px] h-[300px] bg-blue-500 opacity-20 rounded-full blur-[100px] bottom-[100px] right-[50px] animate-pulse-slower-delay"
        />
      </div>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <Navbar sectionRefs={sectionRefs} />

      {/* Sections */}
      <main className="relative z-20">
        <ScrollFadeSection
          id="home"
          ref={sectionRefs.current[0]}
          className="scroll-mt-12 pt-12 pb-20"
        >
          <Hero />
        </ScrollFadeSection>
        <ScrollFadeSection
          id="aboutme"
          ref={sectionRefs.current[1]}
          className="scroll-mt-12 pt-12 pb-20"
        >
          <AboutMe />
        </ScrollFadeSection>
        <ScrollFadeSection
          id="projects"
          ref={sectionRefs.current[2]}
          className="scroll-mt-12 pt-12 pb-20"
        >
          <Projects />
        </ScrollFadeSection>
        <ScrollFadeSection
          id="about"
          ref={sectionRefs.current[3]}
          className="scroll-mt-12 pt-12 pb-20"
        >
          <About />
        </ScrollFadeSection>
        <ScrollFadeSection
          id="contact"
          ref={sectionRefs.current[4]}
          className="scroll-mt-12 pt-12 pb-20"
        >
          <Contact />
        </ScrollFadeSection>
      </main>
    </div>
  );
};

export default App;
