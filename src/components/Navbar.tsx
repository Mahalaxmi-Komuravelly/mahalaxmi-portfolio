import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  //{ label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const handleClick = (href: string) => {
  setMobileOpen(false);

  // wait for DOM to be ready and layout to be stable
  setTimeout(() => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar?.clientHeight || 90; // adjust fallback

      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementTop - navbarHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }, 50); // 50ms timeout ensures Framer Motion layout is applied
};




  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled ? "glass border-border" : "bg-transparent border-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-foreground tracking-tight">
          Mahalaxmi<span className="text-gradient">.</span>
        </a>

        {/* Desktop Nav Links + Resume + Dark Mode */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative text-sm font-medium dark:text-gray-100  transition-colors duration-200 ${activeSection === link.href.slice(1)
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </button>
          ))}

          {/* Resume Button */}
          <a
            href="/mahalaxmi-komuravelly-resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl 
             bg-primary text-white font-medium text-sm
             shadow-md hover:shadow-lg 
             hover:scale-105 active:scale-95
             transition-all duration-300"          >
            <Download size={16} /> Resume
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`text-left text-sm font-medium py-2 transition-colors ${activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </button>
              ))}

              {/* Resume Button Mobile */}
              <a
                href="/mahalaxmi-komuravelly-resume.pdf"
                download
                className="text-left text-green-800 text-sm font-medium py-1 border border-border rounded-lg bg-card text-foreground hover:bg-muted transition-colors flex items-center gap-2"
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
