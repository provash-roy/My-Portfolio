const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-indigo-600">Provash Ray</h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="rounded-md bg-gray-100 text-gray-800 font-medium px-4 py-2
  shadow-md shadow-gray-400
  hover:shadow-inner hover:shadow-gray-300
  active:shadow-inner active:shadow-gray-300
  focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="rounded-md bg-gray-100 text-gray-800 font-medium px-4 py-2
  shadow-md shadow-gray-400
  hover:shadow-inner hover:shadow-gray-300
  active:shadow-inner active:shadow-gray-300
  focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="rounded-md bg-gray-100 text-gray-800 font-medium px-4 py-2
  shadow-md shadow-gray-400
  hover:shadow-inner hover:shadow-gray-300
  active:shadow-inner active:shadow-gray-300
  focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-md bg-gray-100 text-gray-800 font-medium px-4 py-2
  shadow-md shadow-gray-400
  hover:shadow-inner hover:shadow-gray-300
  active:shadow-inner active:shadow-gray-300
  focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
