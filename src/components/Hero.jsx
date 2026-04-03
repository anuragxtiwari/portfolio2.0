import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-4">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Anurag</h1>
        <p className="text-xl mb-2">Pre-final year CSE student</p>
        <p className="text-gray-600 mb-6">Building scalable backend systems</p>
        <a href="#projects" className="bg-accent text-white px-6 py-3 rounded-full hover:opacity-90">
          View Work
        </a>
      </motion.div>
    </section>
  )
}