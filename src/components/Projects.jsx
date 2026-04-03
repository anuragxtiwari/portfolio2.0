import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      name: "OurLibrary",
      desc: "Library management system with tracking and users",
      tech: ["Node.js", "MySQL"],
      github: "https://github.com/anuragxtiwari/ourlibrary",
      live: "https://anuragxtiwari.github.io/OurLibrary/"
    },
    {
      name: "ChurpApp",
      desc: "Real-time chat app using Firebase",
      tech: ["React", "Firebase"],
      github: "https://github.com/anuragxtiwari/churpapp",
      live: "https://anuragxtiwari.github.io/ChurpApp/"
    },
    {
      name: "RootsNRoutes",
      desc: "Tourism web app for Jharkhand",
      tech: ["React", "Node.js"],
      github: "https://github.com/anuragxtiwari/RnR",
      live: "https://roots-n-routes.web.app/"
    }
  ];

  const badgeColors = {
    "React": "bg-blue-100 text-blue-700",
    "Node.js": "bg-green-100 text-green-700",
    "Firebase": "bg-yellow-100 text-yellow-700",
    "MySQL": "bg-teal-100 text-teal-700"
  };

  return (
    <section id="projects" className="min-h-screen relative px-4 py-20 max-w-6xl mx-auto overflow-hidden">
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const size = Math.random() * 15 + 15;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const bgColors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-gray-200"];
          const color = bgColors[Math.floor(Math.random() * bgColors.length)];
          return (
            <div
              key={i}
              className={`absolute rounded-full ${color} opacity-60`}
              style={{
                width: size,
                height: size,
                top: `${top}%`,
                left: `${left}%`,
                transform: `translate(-50%, -50%)`,
              }}
            />
          );
        })}
      </div>

      <h2 className="text-4xl font-bold mb-12 text-center relative z-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-2xl mb-3">{p.name}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map(t => (
                <span
                  key={t}
                  className={`text-sm font-medium px-3 py-1 rounded-full ${badgeColors[t] || "bg-gray-100 text-gray-700"} hover:scale-105 transition-transform`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline transition-colors"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}