// src/components/Skills.jsx
export default function Skills() {
  const data = {
    Languages: ["C++", "Java", "Python"],
    Frontend: ["HTML", "CSS", "React", "Tailwind"],
    Backend: ["Node.js", "Express.js", "Firebase"],
    Tools: ["Git", "GitHub", "MySQL", "VS Code"]
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Pattern Layer */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 0 L0 0 0 30"
              fill="none"
              stroke="rgba(0,0,0,0.03)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Skills
        </h2>

        {Object.entries(data).map(([category, skills]) => (
          <div key={category} className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-800">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white border rounded-full hover:shadow transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}