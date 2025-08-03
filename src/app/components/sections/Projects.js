"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "CBS - Core Bank ERP System",
    description: "A core banking system is the primary software platform that allows banks to conduct and record their fundamental activities. It's essentially the technological backbone of a bank's operations.",
    tags: ["NextJS", "NodeJS", "Supabase", "TailwindCSS"],
    link: "https://github.com/jiyarosejoshy/CBS",
    result: "Minor Project",
    image: "CBS.svg"
  },
  {
    id: 2,
    title: "Color Picker Chrome Extension",
    description: "Developed a Chrome extension that allows users to pick colors from any webpage and save them for later use",
    tags: ["JavaScript", "Chrome Extension"],
    link: "https://github.com/TR-Krishna/color-picker-extension",
    result: "Personal Project",
    image: "/Colorpicker.svg"
  },
  {
    id: 3,
    title: "Hyato Dynasty",
    description: "A Japanese-themed immersive website created for the Wix Studio Monthly Design Challenge. The project focused on integrating traditional Japanese aesthetics with modern web UI patterns. The homepage featured animated hero banners, parallax effects, and stylized typography to reflect cultural motifs. Emphasis was placed on storytelling through design, responsive layouts, and smooth page transitions to enhance user engagement and visual narrative.",
    tags: ["Wix Studio", "UI Design", "Responsive Design", "Parallax", "Thematic UX"],
    link: "https://2004newbee.wixstudio.com/hayatodynasty",
    result: "Design Challenge Entry",
    image: "/Hyato.svg"
  },
  {
    id: 4,
    title: "College Website Revamp",
    description: "Redesigned the official website of the college as part of an internship with Obsidyne. Focused on enhancing user experience, improving navigation flow, and creating a consistent design system across pages. Built responsive layouts tailored for both mobile and desktop users using Figma. Collaborated with developers and stakeholders to ensure brand alignment and functional accessibility throughout the design.",
    tags: ["Figma", "Responsive Design", "UI/UX"],
    link: "https://sbce.ac.in/",
    result: "Internship Project",
    image: "/SBCET.svg"
  },
  {
    id: 5,
    title: "3D Car Simulator",
    description: "A chaotic and playful 3D car simulator built using the Godot Engine. Unlike traditional simulators, this game embraces randomness and unpredictability. The controls are inverted—press left, and the car turns right; press right, and it veers left. Every key press sends the car in a new, random direction. There are no levels, no goals, and no scores—just pure, lighthearted fun. Designed with a minimalist environment, the focus remains on the car’s absurd and spontaneous movements.",
    tags: ["Godot", "3D Simulation", "Game Development"],
    link: "https://github.com/TR-Krishna/Car_simulation-using-Godot/tree/main/krish",
    result: "Personal Project",
    image: "Godot.svg"
  }
];

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="px-4 sm:px-6 md:px-20 py-20 bg-[#0f0f0f] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        variants={item}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-400 to-orange-100">
            Projects
          </span>
        </h2>
        <p className="font-sans text-xl text-gray-300 max-w-2xl mx-auto">
          My design and development work.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className=" space-y-28"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="font-sans flex flex-col md:flex-row items-center gap-10 border border-gray-700 p-6 sm:p-8 rounded-xl bg-black-900 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Left: Text */}
            <div className="md:w-1/2">
             <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
              <h3 className="font-sans text-3xl font-semibold mb-3">{project.title}</h3>
              </a>
              <p className="font-sans text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1.5 text-sm rounded-xl bg-black-800 text-red-400 border border-gray-800"
              >
                {tag}
              </span>
            ))}
              </div>
              <p className="text-sm text-gray-400 italic mb-2">{project.result}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#e60023] hover:underline text-sm"
                >
                  Visit project ↗
                </a>
              )}
            </div>

            {/* Right: Image */}
           
            <div className="w-full md:w-1/2 flex justify-center">
             <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-xl object-contain w-full"
                />
              )}
              </a>
            </div>
            
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
