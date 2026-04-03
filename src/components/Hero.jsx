// src/components/Hero.jsx
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden hero-pattern">
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        className="max-w-2xl"
      >
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading mb-4 text-gray-900"
        >
          Hi, I'm Anurag
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
          className="text-xl mb-2 text-gray-700"
        >
          Pre-final year CSE student
        </motion.p>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 mb-6"
        >
          Building scalable backend systems
        </motion.p>

        <motion.a
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
          href="#about"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:opacity-90 hover:scale-105 transition-transform"
        >
          let's go
        </motion.a>
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.div
        className="absolute bottom-10 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FaArrowDown size={20} />
      </motion.div>
    </section>
  );
}