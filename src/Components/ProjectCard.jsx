const ProjectCard = ({ title, description, tech, link, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded text-sm"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          className="mt-4 inline-block text-indigo-600 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
