const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Provash Ray. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/provash-roy"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/provash-ray"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a href="mailto:provashray@example.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
