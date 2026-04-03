import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      name: "OurLibrary",
      desc: "Library management system with tracking and users",
      tech: ["Node.js", "MySQL"]
    },
    {
      name: "ChurpApp",
      desc: "Real-time chat app using Firebase",
      tech: ["React", "Firebase"]
    },
    {
      name: "RootsNRoutes",
      desc: "Tourism web app for Jharkhand",
      tech: ["React", "Node.js"]
    }
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className="border p-6 rounded-xl hover:shadow-lg">
            <h3 className="font-bold text-xl mb-2">{p.name}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {p.tech.map(t => (
                <span key={t} className="text-sm bg-gray-100 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm text-accent">
              <a href="#">GitHub</a>
              <a href="#">Live</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
