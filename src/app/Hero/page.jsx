"use client";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
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

  // ✅ One click = one download + opens in new tab
  const handleResumeDownload = () => {
    window.open("T_R_Krishna.pdf", "_blank"); // Make sure file is in /public
  };

  return (
    <main className="relative min-h-screen bg-[#0f0f0f] text-white font-sans overflow-hidden">
  {/* Spline BG */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/sEv3weyx1fdCEdCd/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10">
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-white/10 sticky top-0 backdrop-blur-md z-50">
        <h1 className="text-xl font-semibold tracking-tight">T R KRISHNA</h1>
        <nav className="space-x-6 text-sm text-gray-300">
          <Link href="#hero" className="hover:text-white">About</Link>
          <button onClick={handleResumeDownload} className="hover:text-white">Resume</button>
          <Link href="#projects" className="hover:text-white">Projects</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </nav>
      </header>

      <section className="grid md:grid-cols-2 items-center mt-20 px-10 md:px-20 py-24">
        <div
          className="cursor-pointer text-center select-none"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.h1
            key={kri + shna}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-9xl md:text-9xl font-bold text-white tracking-wide"
          >
            {kri}
            <span className="text-[#e60023]">{shna}</span>
          </motion.h1>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-6xl font-bold mb-6"
          >
            UI/UX Designer & Frontend Developer
          </motion.h2>

          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            — creative and thoughtful developer who mixes design and code to bring smart ideas to life..
          </p>

          <div className="flex gap-4">
            <Link
              href="#projects"
              className="bg-[#e60023] text-white px-5 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="border border-white/10 px-5 py-3 rounded-full text-white/80 hover:bg-white/5 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
