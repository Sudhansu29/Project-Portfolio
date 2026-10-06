function Projects() {
  const projects = [
    {
      title: "Calculator",
      description:
        "A responsive portfolio website built using React and Tailwind CSS.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sudhansu29/Calculator",
    },

    {
      title: "Digital Marketing Website",
      description:
        "A simple calculator application built using JavaScript.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://pixlgrove.com/",
    },

    {
      title: "Todo App",
      description:
        "A simple todo application created using React.",
      tech: ["React", "JavaScript"],
      github: "https://github.com/Sudhansu29/My_VLC",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-6 py-20 pt-28">

      {/* Background Decorations */}
      <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl"></div>

      <div className="absolute right-10 top-72 h-52 w-52 rounded-full bg-blue-200/40 blur-3xl"></div>

      <div className="absolute bottom-10 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-pink-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <p className="mb-4 inline-block rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-600">
            ✦ My Work
          </p>

          <h1 className="text-4xl font-bold text-gray-900 md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-6xl text-lg leading-8 text-gray-600">
            Some of the projects I have created using HTML, CSS,
            JavaScript, React and Tailwind CSS.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-lg shadow-gray-200/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Card Number */}
              <div className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-gray-800 shadow-md">
                0{index + 1}
              </div>

              {/* Project Preview */}
              <div className="relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">

                {/* Decorative Circles */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/20"></div>

                <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-white/10"></div>

                {/* Center Content */}
                <div className="relative flex h-full flex-col items-center justify-center">

                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                    <span className="text-2xl text-white">
                      &lt;/&gt;
                    </span>
                  </div>

                  <span className="text-xl font-bold text-white">
                    Project
                  </span>

                </div>

              </div>

              {/* Project Content */}
              <div className="px-2 pt-6">

                <h2 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-purple-600">
                  {project.title}
                </h2>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tech.map((technology) => (

                    <span
                      key={technology}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 transition duration-300 group-hover:bg-purple-100 group-hover:text-purple-600"
                    >
                      {technology}
                    </span>

                  ))}

                </div>

                {/* View Project Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-fit items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-lg"
                >
                  View Project

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 text-center">

          <p className="text-sm text-gray-500">
            More projects coming soon...
          </p>

        </div>

      </div>

    </section>
  );
}

export default Projects;