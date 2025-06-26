"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
  return (
    <div className="bg-[#0f0f0f] text-white font-sans relative overflow-hidden">
        <section className="relative overflow-hidden py-10">
  <motion.div
    animate={{ x: ['0%', '-100%'] }}
    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
    className="whitespace-nowrap text-3xl md:text-3xl font-bold text-white flex gap-2bg-gradient-to-r from-red-600 via-red-400 to-orange-300"
  >
    {Array(100).fill(null)
    .map((_, idx) => (
              <span key={idx} className="flex gap-2">
                <span className=" gap-2 text-red-500">Design</span>
                <span>Develop</span>
                <span>Repeat</span>
              </span>
            ))}
  </motion.div>
</section>

    </div>
  );
}