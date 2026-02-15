import React from "react";
import { FaReact, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiPostgresql, SiExpress, SiSupabase, SiVercel } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

import "./Skills.css"; 
const skills = [
  { name: "React", icon: <FaReact color="#61DBFB" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { name: "Express", icon: <SiExpress color="#000000" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
  { name: "GitHub", icon: <FaGithub color="#181717" /> },
  { name: "VS Code", icon: <VscCode color="#007ACC" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
  { name: "Vercel", icon: <SiVercel color="#000000" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-14 dark:text-gray-100">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 justify-items-center">

          {skills.map((skill) => (
            <div key={skill.name} className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full perspective">
              {/* Front side */}
              <div className="absolute inset-0 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-700 transform-style-3d backface-hidden heads">
                <span className="text-4xl sm:text-5xl">{skill.icon}</span>
              </div>
              {/* Back side */}
              <div className="absolute inset-0 rounded-full bg-gray-800 flex items-center justify-center text-white text-lg font-semibold transition-transform duration-700 transform-style-3d backface-hidden rotate-y-180 tails">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
