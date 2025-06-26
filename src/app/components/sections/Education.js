"use client";

import React from "react";
import { motion } from "framer-motion";

const education = [
  {
        institution: "College of Engineering, Trivandrum",
        degree: "B.Tech in Computer Science",
        period: "2022 - 2026",
        details: "CGPA: 9.02"
      },
      {
        institution: "Kendriya Vidyalaya NAD Aluva",
        degree: "Higher Secondary Education",
        period: "2020 - 2022",
        details: "Grade 12: 95.8%"
      },
      {
        institution: "Kendriya Vidyalaya NAD Aluva",
        degree: "Secondary Education",
        period: "2020",
        details: "Grade 10: 95%"
      }
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-20 py-24 relative"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold mb-12 text-[#e60023]"
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                
              </h3>
              <p className="text-2xl text-gray-400 mt-1 mb-3">{edu.degree}</p>
              <p className="text-lg font-medium text-white/90 mb-2">
                {edu.period}
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// "use client";
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';

// const education = [
//   {
//     institution: "College of Engineering, Trivandrum",
//     degree: "B.Tech in Computer Science",
//     period: "2022 - 2026",
//     details: "CGPA: 9.02"
//   },
//   {
//     institution: "Kendriya Vidyalaya NAD Aluva",
//     degree: "Higher Secondary Education",
//     period: "2020 - 2022",
//     details: "Grade 12: 95%"
//   },
//   {
//     institution: "Kendriya Vidyalaya NAD Aluva",
//     degree: "Secondary Education",
//     period: "2020",
//     details: "Grade 10: 95%"
//   }
// ];

// const languages = [
//   { name: "English", proficiency: "Fluent" },
//   { name: "Hindi", proficiency: "Fluent" },
//   { name: "Malayalam", proficiency: "Native" }
// ];

// export default function Education() {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: false,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section id="education" ref={ref} className="py-20 bg-gray-900/50 relative overflow-hidden">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={controls}
//           variants={item}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//               Education & Languages
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             My academic background and language proficiency
//           </p>
//         </motion.div>
        
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate={controls}
//           className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
//         >
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            
//             <div className="space-y-6">
//               {education.map((edu, index) => (
//                 <motion.div 
//                   key={index} 
//                   variants={item}
//                   className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
//                 >
//                   <h4 className="text-xl font-bold text-white mb-1">{edu.institution}</h4>
//                   <p className="text-purple-300 mb-2">{edu.degree}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-400">{edu.period}</span>
//                     <span className="px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 text-sm">
//                       {edu.details}
//                     </span>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-8">Languages</h3>
            
//             <div className="grid grid-cols-1 gap-4">
//               {languages.map((lang, index) => (
//                 <motion.div 
//                   key={index} 
//                   variants={item}
//                   className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
//                 >
//                   <div className="flex justify-between items-center">
//                     <h4 className="text-lg font-bold text-white">{lang.name}</h4>
//                     <span className="text-gray-400">{lang.proficiency}</span>
//                   </div>
//                   <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
//                     <div 
//                       className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full" 
//                       style={{ width: lang.proficiency === "Native" ? "100%" : "90%" }}
//                     ></div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }