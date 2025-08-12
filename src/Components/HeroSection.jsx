const HeroSection = () => {
  return (
    <section className="bg-gray-50 h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm Provash</h2>
      <p className="mt-4 text-lg text-gray-600">
        MERN Stack Developer | Problem Solver | Learner
      </p>
      <div className="mt-6 flex space-x-4">
        <a
          href="#projects"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="border border-indigo-600 px-6 py-3 rounded-md text-indigo-600 hover:bg-indigo-50"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
