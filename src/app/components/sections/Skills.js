"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const skills = [
  { category: "Languages", items: ["Python", "Java", "C", "C++"] },
  { category: "Technologies", items: ["HTML", "CSS", "JavaScript", "React", "Node", "PostgreSQL"] },
  { category: "Design Tools", items: ["Figma", "Wix Studio"] },
  { category: "Prototyping", items: ["Figma"] },
  { category: "Graphic Design", items: ["Spline", "Canva", "Krita"] }
];

export default function Skills() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={item}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-white">
              Skills & Passion
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A glimpse into what I do and why I love doing it
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
          {/* Left: About Me */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={item}
            className="lg:w-1/2 bg-gray-900 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a creative developer who blends logic and design to build things that are both functional and beautiful.
              I love solving problems through code, and design helps me tell that solution's story. 
              What drives me is the challenge of turning an idea into something real — intuitive, meaningful, and impactful.
            </p>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            className="lg:w-1/2 grid grid-cols-1 gap-6"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={item}
                className="p-6 rounded-2xl bg-gray-900 border border-gray-700 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 0, 0, 0.2)" }}
                      className="inline-block px-3 py-1.5 text-sm rounded-lg bg-gray-800 text-red-400 border border-gray-600"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
