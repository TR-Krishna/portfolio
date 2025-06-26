"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CardHoverEffect({ project }) {
  return (
    <Link href={project.link} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm h-full"
      >
        <motion.div
          variants={{
            hover: { scale: 1.03 },
            rest: { scale: 1 }
          }}
          transition={{ type: "spring", damping: 10 }}
          className="h-64 w-full overflow-hidden"
        >
          <motion.div
            className="w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center"
            variants={{
              hover: { opacity: 0.8 },
              rest: { opacity: 1 }
            }}
          >
            <motion.h3 
              className="text-2xl font-bold text-center text-white px-4"
              variants={{
                hover: { scale: 1.05 },
                rest: { scale: 1 }
              }}
            >
              {project.title}
            </motion.h3>
          </motion.div>
        </motion.div>
        
        <div className="p-6">
          <motion.p
            variants={{
              hover: { y: -3 },
              rest: { y: 0 }
            }}
            transition={{ type: "spring", damping: 10, delay: 0.05 }}
            className="text-gray-300 mb-4"
          >
            {project.description}
          </motion.p>
          <motion.div
            variants={{
              hover: { y: -3 },
              rest: { y: 0 }
            }}
            transition={{ type: "spring", damping: 10, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-purple-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          
          {project.result && (
            <motion.div
              variants={{
                hover: { y: -3 },
                rest: { y: 0 }
              }}
              className="text-sm text-purple-300 font-medium"
            >
              🏆 {project.result}
            </motion.div>
          )}
        </div>
        
        <motion.div
          variants={{
            hover: { opacity: 1, y: 0 },
            rest: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 right-6"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}