import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedText({ text, className = "", delay = 0 }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => setAnimationComplete(true)}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`inline-block ${animationComplete ? '' : 'will-change-transform'}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}