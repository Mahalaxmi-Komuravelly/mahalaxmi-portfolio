import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, FileText } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "mahalaxmikomuravelly@gmail.com",
    href: "mailto:mahalaxmikomuravelly@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Mahalaxmi-Komuravelly",
    href: "https://github.com/Mahalaxmi-Komuravelly/",
  },
  // {
  //   icon: Linkedin,
  //   label: "LinkedIn",
  //   value: "linkedin.com/in/mahalaxmi",
  //   href: "https://linkedin.com/in/mahalaxmi",
  // },
//   {
//   icon: FileText,
//   label: "Resume",
//   value: "Download Resume",
//   href: "/Mahalaxmi-Resume.pdf",
// }

];

const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            I'm always open to new opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto space-y-4">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-shadow">
                <social.icon size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{social.label}</p>
                <p className="text-sm text-muted-foreground">{social.value}</p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
