"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "RideScan AI",
    period: "Dec 2024 - Present",
    description: [
      "Working on enhancing frontend features by implementing user-friendly designs",
      "Using frontend frameworks like React and backend Flask together to test features",
    ],
  },
  {
    role: "UI/UX Designer Intern",
    company: "Obsidyne",
    period: "Sep 2024 - Dec 2024",
    description: [
      "Designed mobile and desktop versions of a college website",
      "Wireframing through Wix Studio and later design in Figma",
      "Created design theme based on a modern and user-friendly look",
    ],
  },
];

const roles = [
  { position: "Design Team Member", organization: "Build Club CET", period: "July 2024 - April 2025" },
  { position: "Program Head", organization: "Shastra CET", period: "July 2024 - April 2025" },
  { position: "Project Coordinator", organization: "ISTE SB CET", period: "June 2024 - April 2025" },
  { position: "Women in Tech Team Member", organization: "GDGC CET", period: "Nov 2024 - April 2025" },
  { position: "Outreach Team Member", organization: "TinkerHub CET", period: "Nov 2024 - April 2025" },
];

const skills = [
  { category: "Languages", items: ["Python", "Java", "C", "C++"] },
  { category: "Technologies", items: ["HTML", "CSS", "JavaScript", "React", "Next", "MySQL", "SupaBase", "Node", "PostgreSQL"] },
  { category: "Design Tools", items: ["Figma", "Wix Studio"] },
  { category: "Prototyping", items: ["Figma"] },
  { category: "Graphic Design", items: ["Spline", "Canva", "Krita"] },
];

const education = [
  {
    institution: "College of Engineering, Trivandrum",
    degree: "B.Tech in Computer Science",
    period: "2022 - 2026",
    details: "CGPA: 9.02",
  },
  {
    institution: "Kendriya Vidyalaya NAD Aluva",
    degree: "Higher Secondary Education",
    period: "2020 - 2022",
    details: "Grade 12: 95%",
  },
  {
    institution: "Kendriya Vidyalaya NAD Aluva",
    degree: "Secondary Education",
    period: "2020",
    details: "Grade 10: 95%",
  },
];

export default function ExperienceAndSkills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience-and-skills" ref={ref} className="md:p-30 py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-6  sm:px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={item}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-400 to-orange-100">
              Experience & Skillset
            </span>
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-2xl mx-auto">
            A blend of my journey, technical toolkit, and leadership roles
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="flex flex-col lg:flex-row gap-12"
        >
          {/* Experience Section - 3/4 */}
          <div className="md:w-3/4 space-y-10">
            {/* Experience */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.01 }}
                    className="transition duration-300 bg-gradient-to-br from-black-800/60 to-gray-900/60 shadow-xl rounded-3xl p-6 border border-gray-900 backdrop-blur-md"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-bold">
                        {exp.role} • <span className="text-red-300">{exp.company}</span>
                      </h4>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                    </div>
                    <ul className="text-gray-300 list-disc list-inside space-y-1 pl-2">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Roles */}
            <motion.div variants={item}>
              <h3 className="font-sans text-2xl font-semibold mb-4">Leadership Roles</h3>
              <div className="space-y-4">
                {roles.map((role, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="font-sans transition duration-300 bg-gradient-to-br from-black-800/60 to-gray-900/60 shadow-lg rounded-2xl p-4"
                  >
                    <h4 className="font-sans text-lg font-semibold">{role.position}</h4>
                    <p className="font-sans text-red-300">{role.organization}</p>
                    <p className="font-sans text-sm text-gray-400">{role.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills + Education Section - 1/4 */}
          <div className="md:w-1/4 space-y-8">
            {/* Skills */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              {skills.map((group, index) => (
                <div key={index}>
                  <h4 className="font-sans text-lg font-bold mb-2 mt-5">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="font-sans inline-block px-3 py-1.5 text-sm rounded-xl bg-black-800 text-red-400 border border-gray-800"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
              <div className="bg-white px-19"></div>
            {/* Education */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold mb-4 ">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-gradient-to-br from-black-800/60 to-gray-900/60 border border-gray-800 p-4"
                  >
                    <h4 className="text-lg font-semibold">{edu.institution}</h4>
                    <p className="text-sm text-red-300">{edu.degree}</p>
                    <p className="text-sm text-gray-400">{edu.period}</p>
                    <p className="text-sm text-gray-300 italic">{edu.details}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
