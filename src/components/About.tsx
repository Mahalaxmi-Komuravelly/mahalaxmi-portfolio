import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 dark:text-gray-100">
            About <span className="text-primary">Me</span>
          </h2>

        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-48 h-60 sm:w-56 sm:h-72 rounded-xl overflow-hidden shadow-card-hover ring-4 ring-primary/40"
            >
              <img
                src="/images/profile.jpg"
                alt="Mahalaxmi - Full Stack Developer"
                className="w-full h-full  object-cover"
              />
            </motion.div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-200">
              I'm a full-stack web developer with a strong passion for creating clean, modern, and user-friendly web applications.
              I focus on building responsive interfaces with React and crafting robust backend systems with Node.js.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-200">
              Through hands-on project development, I have worked with Firebase, Supabase, and REST APIs to build complete web applications that integrate authentication, backend services, and databases. I enjoy turning ideas into functional products and continuously improving my technical skills.
            </p>
            <p className="text-gray-700 leading-relaxed dark:text-gray-200">
              I am currently seeking an opportunity as a Full Stack Developer where I can apply my skills, contribute to meaningful projects, and grow within a collaborative team environment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
