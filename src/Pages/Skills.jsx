function Skills() {
  return (
    <section className="min-h-screen pt-28 px-6 py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold mb-2">
            What I Know
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            My Skills
          </h1>

          <p className="text-gray-600 mt-4">
            Technologies I use to build modern websites.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {/* JavaScript */}

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 text-2xl font-bold mb-6">
              JS
            </div>

            <h2 className="text-2xl font-bold mb-3">
              JavaScript
            </h2>

            <p className="text-gray-600 leading-relaxed">
              I know JavaScript basics, arrays, objects,
              functions, DOM, events and asynchronous concepts.
            </p>

          </div>


          {/* React */}

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-2xl font-bold mb-6">
              R
            </div>

            <h2 className="text-2xl font-bold mb-3">
              React
            </h2>

            <p className="text-gray-600 leading-relaxed">
              I can create React components and work with
              props, state, events and React Router.
            </p>

          </div>


          {/* Tailwind */}

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 text-2xl font-bold mb-6">
              TW
            </div>

            <h2 className="text-2xl font-bold mb-3">
              Tailwind CSS
            </h2>

            <p className="text-gray-600 leading-relaxed">
              I use Tailwind CSS to create responsive,
              clean and modern user interfaces.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;