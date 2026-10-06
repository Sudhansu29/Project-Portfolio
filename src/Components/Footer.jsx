function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT - SKILLS */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              My Skills
            </h3>

            <div className="space-y-3">
              <p className="hover:text-blue-600 transition duration-300">HTML</p>
              <p className="hover:text-blue-600 transition duration-300">CSS</p>
              <p className="hover:text-blue-600 transition duration-300">JavaScript</p>
              <p className="hover:text-blue-600 transition duration-300">React</p>
              <p className="hover:text-blue-600 transition duration-300">Tailwind CSS</p>
            </div>
          </div>


          {/* MIDDLE - PAGES */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Pages
            </h3>

            <div className="space-y-3">
              <p className="hover:text-blue-600 transition duration-300">
                <a href="./home">Home</a>
              </p>

              <p className="hover:text-blue-600 transition duration-300">
                <a href="/projects">Project</a>
              </p>

              <p className="hover:text-blue-600 transition duration-300">
                <a href="/contact">Contact</a>
              </p>
            </div>
          </div>


          {/* RIGHT - SOCIAL MEDIA */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Social Media
            </h3>

            <div className="space-y-3">

              <p className="hover:text-blue-600 transition duration-300">
                <a href="https://github.com/Sudhansu29" target="_blank">GitHub</a>
              </p>

              <p className="hover:text-blue-600 transition duration-300">
                <a href="https://www.linkedin.com/in/sudhansu-sahoo-odisha/" target="_blank">Linkedin</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">

          <p className="text-sm">
            © 2026 My Portfolio. All rights reserved.
          </p>

          <p className="text-sm mt-2">
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
