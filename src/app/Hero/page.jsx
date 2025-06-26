"use client";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { FiChevronDown } from "react-icons/fi";
const kriOptions = ["KRI", "കൃ", "कृ"];
const shnaOptions = ["SHNA", "ഷ്ണ", "ष्ण"];

export default function HomePage() {
  const [kri, setKri] = useState("KRI");
  const [shna, setShna] = useState("SHNA");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setKri(kriOptions[Math.floor(Math.random() * kriOptions.length)]);
        setShna(shnaOptions[Math.floor(Math.random() * shnaOptions.length)]);
      }, 800);
      return () => clearInterval(interval);
    } else {
      setKri("KRI");
      setShna("SHNA");
    }
  }, [hovered]);

  const handleResumeDownload = () => {
    window.open("T_R_Krishna.pdf", "_blank"); // Make sure file is in /public
  };
   const scrollToNext = () => {
    const nextSection = document.getElementById("projects");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      <Spline
        scene="https://prod.spline.design/sEv3weyx1fdCEdCd/scene.splinecode"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
     <header className="w-full px-4 sm:px-6 py-4 flex items-center justify-between border-b border-white/10 sticky top-0 backdrop-blur-md z-50">
  <h1 className="text-lg sm:text-xl font-semibold tracking-tight whitespace-nowrap">
    T R KRISHNA
  </h1>

  <nav className=" sm:flex items-center space-x-4 sm:space-x-6 text-sm text-gray-300">
    <Link href="#hero" className="hover:text-white">About</Link>
    <button onClick={handleResumeDownload} className="hover:text-white">Resume</button>
    <Link href="#projects" className="hover:text-white">Projects</Link>
    <Link href="#contact" className="hover:text-white">Contact</Link>
  </nav>
</header>

 <section className="flex flex-col md:grid md:grid-cols-2 items-center gap-12 mt-16 px-6 md:px-20 py-16 text-center md:text-left">        <div
          className="py-10 md:py-0 cursor-pointer text-center select-none"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.h1
            key={kri + shna}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-7xl sm:text-6xl md:text-9xl font-bold text-white tracking-wide "
          >
            {kri}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-400 to-orange-100">{shna}</span>
          </motion.h1>
        </div>

        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-s sm:pt-10 md:text-6xl font-bold mb-6"
          >
            UI/UX Designer & Frontend Developer
          </motion.h2>

          <p className="text-gray-400 text-lg mb-8 max-w-xl sm:max-w-xl">
            — creative and thoughtful developer who mixes design and code to bring smart ideas to life..
          </p>
       </div>
      </section>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <button
          onClick={scrollToNext}
          className="animate-bounce p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          aria-label="Scroll to next section"
        >
          <FiChevronDown className="text-white text-2xl" />
        </button>
      </div>
    </main>
  );
}
