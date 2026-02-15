import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  // Add your links here; leave empty string if not ready
  const socialLinks = {
    github: "https://github.com/Mahalaxmi-Komuravelly",
    linkedin: "",
    
  };

  return (
    <footer className="py-5 border-tbg-gray-50 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <div className="container px-6 mx-auto flex flex-col items-center gap-4">

        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          )}

          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          )}

          
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-700 text-center">
          © {new Date().getFullYear()} Mahalaxmi Komuravelly. Built with React & Tailwind CSS.
        </p>

        {/* Optional Personality Line */}
        <p className="text-xs text-gray-600 dark:text-gray-500 text-center">
          Designed with 💜 and attention to detail.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
