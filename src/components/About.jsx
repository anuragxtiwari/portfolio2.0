import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-10">About</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Background</h3>
            <p>Pre-final year CSE student focused on backend engineering.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">What I Do</h3>
            <p>Design APIs, build scalable systems, and optimize performance.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Goals</h3>
            <p>Become a strong backend engineer and system designer.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}