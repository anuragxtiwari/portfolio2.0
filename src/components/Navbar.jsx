import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-lg">Anurag</h1>

        <div className="hidden md:flex gap-6">
          {["About", "Skills", "Projects", "Contact"].map(i => (
            <a key={i} href={`#${i.toLowerCase()}`} className="hover:text-accent">
              {i}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden p-4">
          {["About", "Skills", "Projects", "Contact"].map(i => (
            <a key={i} href={`#${i.toLowerCase()}`} className="block py-2">
              {i}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  )
}