// src/components/About.jsx
import { motion } from 'framer-motion';

export default function About() {
  const aboutColumns = [
    {
      title: "Background",
      content: [
        "Pre-final year CSE student",
        "Passionate about backend development and scalable systems",
        "Always exploring new technologies to improve efficiency"
      ]
    },
    {
      title: "What I Do",
      content: [
        "Build robust backend systems",
        "Design APIs & database schemas",
        "Collaborate on full-stack projects with React & Node.js"
      ]
    },
    {
      title: "Education Background",
      content: [
        "B.Tech CSE, Lloyd College (2023–2027)",
        "12th CBSE, SBV-1 Yamuna Vihar, 72%",
        "10th CBSE, RPVV Yamuna Vihar, 78%"
      ]
    }
  ];

  return (
      <section
    id="about"
    className="min-h-screen max-w-6xl mx-auto px-4 py-20 relative overflow-hidden about-pattern"
  >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.02)1px,transparent 1px)] bg-[length:20px_20px] pointer-events-none"></div>

      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Columns */}
      <div className="grid md:grid-cols-3 gap-8">
        {aboutColumns.map((col, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative bg-white/80 backdrop-blur-md border rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-transform"
          >
            {/* Column Title with optional icon */}
            <h3 className="font-heading font-semibold text-2xl mb-4 text-gray-900 flex items-center gap-2">
              {i === 0 && "🏷️"} {i === 1 && "💻"} {i === 2 && "🎯"} {col.title}
            </h3>

            {/* List Items */}
            <ul className="list-disc list-inside text-gray-700 space-y-2 font-body">
              {col.content.map((item, idx) => {
                // Highlight keywords with accent color
                const highlighted = item.replace(
                  /(backend systems|APIs|full-stack projects|open-source projects)/gi,
                  (match) => `<span class="text-accent font-semibold">${match}</span>`
                );
                return (
                  <li
                    key={idx}
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: highlighted }}
                  />
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}