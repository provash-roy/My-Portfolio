const Skills = () => {
  const skillList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "REST API",
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skillList.map((skill, index) => (
          <span
            key={index}
            className=" bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md shadow-sm hover:shadow-lg transition"
          >
            {/* bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-xl shadow-sm
            hover:shadow-lg transition */}
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
