import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../lottie/website design.json";


const roles = [
  "Full Stack Web Developer",
  "React & Node.js Developer",
  "Building REST APIs with Express",
  "Working with Supabase & PostgreSQL"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          30
        );
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Blurred Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-400/10 animate-pulse" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="container relative z-10 px-6 text-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            Hi, I'm Mahalaxmi Komuravelly
          </h1>

          {/* Dynamic Role Typing */}
          <div className="h-10 flex items-center justify-center mb-6">
            <span className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-semibold leading-snug sm:leading-snug md:leading-snug}">
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            </span>
          </div>

          {/* Hero Image Lottie Animation */}
          <div className="flex justify-center">
            <Player
              autoplay
              loop
              src={animationData}
              className="w-[300px] h-[300px]" 
            />
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={16} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/mahalaxmi-komuravelly-resume.pdf"
              download
              className="px-8 py-3.5 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted transition-all flex items-center gap-2 dark:bg-gray-100 dark:text-primary"
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
