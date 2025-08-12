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
          className="rounded-md bg-gray-100 text-gray-800 font-medium px-4 py-2
  shadow-md shadow-gray-400
  hover:shadow-inner hover:shadow-gray-300
  active:shadow-inner active:shadow-gray-300
  focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          View Projects
        </a>
        <a
          href="https://drive.google.com/file/d/1iOS2g0JVX_9U70W_qfOYO7__tqgnirLT/view?usp=drivesdk"
          className="rounded-md bg-gray-100 text-gray-800 font-medium px-4 py-2
  shadow-md shadow-gray-400
  hover:shadow-inner hover:shadow-gray-300
  active:shadow-inner active:shadow-gray-300
  focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
