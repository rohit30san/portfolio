import useScrollSpy from "react-use-scrollspy";

const sections = ["home", "aboutme", "projects", "about", "contact"]; // ✅ use 'about' here

const Navbar = ({ sectionRefs }) => {
  const activeId = useScrollSpy({
    sectionElementRefs: sectionRefs.current,
    offsetPx: -100,
  });

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-primary/80 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-accent tracking-wide">{`</>`}</h1>

        {/* Nav Links */}
        <ul className="flex gap-6 text-sm text-gray-300 font-medium">
          {sections.map((id, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`hover:text-white transition-all ${
                  activeId === i ? "text-white underline underline-offset-4" : ""
                }`}
              >
                {id === "aboutme"
                  ? "About Me"
                  : id === "about"
                  ? "Skills" // ✅ Custom label
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
