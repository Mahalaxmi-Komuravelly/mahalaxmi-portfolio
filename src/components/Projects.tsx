import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiSupabase, SiPostgresql, SiExpress, SiStripe } from "react-icons/si";
import { FiBarChart, FiKey, FiLock, FiLayers } from 'react-icons/fi';

// Brand colors mapping
const brandColors = {
  HTML5: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  Firebase: "#FFCA28",
  React: "#61DAFB",
  "Node.js": "#339933",
  Stripe: "#635BFF",
  MongoDB: "#47A248",
  Express: "#000000",
  TailwindCSS: "#0EA5E9",
  Supabase: "#3ECF8E",
  PostgreSQL: "#336791",
  SocketIO: "#1E1E1E",
  "Chart.js": "#F7931E",     // FiBarChart
  JWT: "#FF6F61",            // FiKey
  bcrypt: "#4CAF50",         // FiLock
  "ShadCN UI": "#6366F1",    // FiLayers
};

const projects = [
  {
    title: "Social Media Schedular",
    desc: "Built a full-stack social media scheduling dashboard that allows users to create, schedule, and track posts with role-based access control (Admin, Manager, User). The platform features secure authentication, automated scheduling, and an analytics dashboard to measure engagement metrics.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "SocketIO","PostgreSQL","Chart.js","JWT","bcrypt","ShadCN UI"],
    techIcons: [FaReact, SiTailwindcss, FaNodeJs, SiExpress, SiSupabase, SiPostgresql,FiBarChart, FiKey, FiLock, FiLayers],
    live: "https://social-media-schedular-netlify.netlify.app/",
    github: {
      frontend: "https://github.com/Mahalaxmi-Komuravelly/social-media-schedular-frontend",
      backend: "https://github.com/Mahalaxmi-Komuravelly/social-media-schedular-backend",
    },
    screenshot: "/images/social-media-schedular.png",
  },
  {
    title: "Restoron",
    desc: "Full-stack restaurant reservation system with real-time table booking, dynamic menu, and backend validation to prevent overbooking. Responsive design with clean, modern UI.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "SocketIO","PostgreSQL"],
    techIcons: [FaReact, SiTailwindcss, FaNodeJs, SiExpress, SiSupabase,SiPostgresql],
    live: "https://restoron-client.vercel.app/",
    github: {
      frontend: "https://github.com/Mahalaxmi-Komuravelly/restoron-client",
      backend: "https://github.com/Mahalaxmi-Komuravelly/restoron-api",
    },
    screenshot: "/images/restoron.png",
  },
  {
    title: "TimeTrack AI",
    desc: "TimeTrack AI is a web-based time tracking application that allows users to log daily activities, track time spent in different categories, and visualize productivity through a detailed analytics dashboard.",
    tags: ["HTML5", "CSS", "JavaScript", "Firebase"],
    techIcons: [FaHtml5, FaCss3Alt, FaJs, SiFirebase],
    live: "https://time-tracking-system-data-analytics.vercel.app/",
    github: {
      frontend: "https://github.com/Mahalaxmi-Komuravelly/Time-Tracking-System-Data-Analytics"
    },
    screenshot: "/images/timetrack.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-gray-50">
      <div className="container px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            My <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all overflow-hidden"
            >
              {/* Left: Screenshot + Buttons */}
              <div className="md:w-1/2 flex flex-col justify-between overflow-hidden">
                <div className="w-full aspect-[16/9] md:aspect-auto">
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full object-cover rounded-t-xl md:rounded-l-xl"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 p-4">
                  <a
                    href={project.live}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  {project.github?.backend ? (
                    <>
                      <a
                        href={project.github.frontend}
                        target="_blank" rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors"
                      >
                        <Github size={14} /> Frontend
                      </a>
                      <a
                        href={project.github.backend}
                        target="_blank" rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors"
                      >
                        <Github size={14} /> Backend
                      </a>
                    </>
                  ) :
                    <a
                      href={project.github.frontend}
                      target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      <Github size={14} /> Github
                    </a>
                  }
                </div>
              </div>

              {/* Right: Title, Description, Tech Stack */}
              < div className="md:w-1/2 p-6 flex flex-col justify-center gap-4" >
                <h3 className="text-2xl font-semibold text-gray-900 text-center">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed">{project.desc}</p>

                {/* Tech Icons */}
                < div className="flex flex-wrap gap-3 mt-2 justify-center" >
                  {
                    project.techIcons.map((Icon, idx) => (
                      <div
                        key={idx}
                        className="relative group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-primary/20"
                        title={project.tags[idx]}
                        style={{ color: brandColors[project.tags[idx]] }}
                      >
                        <Icon size={28} />
                      </div>
                    ))
                  }
                </div>
              </div>
            </motion.div>
          ))
          }
        </div >
      </div >
    </section >
  );
};

export default Projects;
