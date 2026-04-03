export default function Skills() {
  const data = {
    Languages: ["C++", "Java", "Python"],
    Frontend: ["HTML", "CSS", "React", "Tailwind"],
    Backend: ["Node.js", "Express.js", "Firebase"],
    Tools: ["Git", "GitHub", "MySQL", "VS Code"]
  }

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        {Object.entries(data).map(([category, skills]) => (
          <div key={category} className="mb-6">
            <h3 className="font-semibold mb-3">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span key={skill} className="px-4 py-2 bg-white border rounded-full hover:shadow">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}