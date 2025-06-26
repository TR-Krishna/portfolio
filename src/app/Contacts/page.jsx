"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
const contactInfo = [
  {
    type: "Email",
    value: "trkrishna2004@gmail.com",
    icon: <FaEnvelope className="text-red-400" />,
  },
  {
    type: "Phone",
    value: "+91 8891332245",
    icon: <FaPhoneAlt className="text-red-400" />,
  },
  {
    type: "GitHub",
    value: "github.com/TR-Krishna",
    icon: <FaGithub className="text-red-400" />,
    link: "https://github.com/TR-Krishna",
  },
  {
    type: "LinkedIn",
    value: "www.linkedin.com/in/t-r-krishna-b8a345296",
    icon: <FaLinkedin className="text-red-400" />,
    link: "https://www.linkedin.com/in/t-r-krishna-b8a345296/",
  },
];

export default function Contact() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
   const scrollToNext = () => {
    const nextSection = document.getElementById("hero" ) || document.body;
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="font-sans px-6 md:px-20 py-20 bg-[#0f0f0f] text-white"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={container}
        className="text-center mb-16"
      >
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-400 to-orange-100">
            Contact Me
          </span>
        </motion.h2>
        <motion.p
          variants={item}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Let’s connect — feel free to reach out!
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="font-sans grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto bg-white/5 p-8 shadow-lg rounded-lg backdrop-blur-md"
      >
        {contactInfo.map((info, index) => (
          <motion.a
            key={index}
            variants={item}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 cursor-pointer"
          >
            <div className="text-xl">{info.icon}</div>
            <div>
              <h4 className="text-lg font-semibold text-white">{info.type}</h4>
              <p className="text-sm text-gray-300">{info.value}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
        <div className=" bottom-8 left-0 right-0 flex justify-center z-20">
              <button
                onClick={scrollToNext}
                className="animate-bounce p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="Scroll to next section"
              >
                <FiChevronUp className="text-white text-2xl" />
              </button>
            </div>
    </section>
  );
}
