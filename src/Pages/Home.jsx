import WhatsApp from "../Components/WhatsApp";

function Home() {
  return (
    <section className="min-h-screen pt-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">

      <div className="max-w-6xl mx-auto min-h-[calc(100vh-96px)] grid md:grid-cols-2 gap-3 items-center">

        {/* ================= LEFT SIDE ================= */}

        <div className="relative">

          {/* Small decorative circle */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-40">
          </div>


          {/* Greeting */}
          <p className="text-lg font-medium text-gray-500 mb-3">
            Hello, I'm
          </p>


          {/* Name */}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-tight">
            
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Sudhansu Sekhar Sahoo
            </span>

          </h1>


          {/* Profession */}

          <div className="flex items-center gap-3 mt-6 mb-6">

            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 px-34">
              Frontend Developer
            </h2>

          </div>


          {/* Description */}

          <p className="text-gray-600 text-lg leading-8 max-w-xl mb-8">

            I create clean, responsive and user-friendly
            web experiences with a focus on modern design
            and smooth interactions.

          </p>


          {/* Buttons */}

          <div className="flex flex-wrap gap-4 px-10">

            {/* Projects Button */}

            <a
              href="/projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 hover:shadow-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              View My Projects

              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>

            </a>


            {/* Contact Button */}

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 hover:shadow-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="relative flex justify-center md:justify-end">

          {/* Background glow */}

          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-400 rounded-full blur-3xl opacity-20">
          </div>


          {/* Photo Container */}

          <div className="relative w-64 h-64 md:w-80 md:h-80">

            {/* Animated Gradient Border */}

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-border-swing">
            </div>


            {/* White gap */}

            <div className="absolute inset-2 rounded-full bg-white">
            </div>


            {/* Static Photo */}

            <img
              src="public/profile.jpeg"
              alt="Profile"
              className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover rounded-full"
            />

          </div>

        </div>

      </div><br /><br />


{/*================= My Skills ==================*/}


          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-tight">
            
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              My Skills
            </span>

          </h1>

<div className="grid grid-cols-5 gap-5">

  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <img src="public/Html.png" className="w-14 h-14 object-contain mb-3" />
    <h3 className="font-semibold">HTML</h3>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <img src="public/Css.jpg" className="w-14 h-14 object-contain mb-3" />
    <h3 className="font-semibold">CSS</h3>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <img src="public/JS.png" className="w-14 h-14 object-contain mb-3" />
    <h3 className="font-semibold">JavaScript</h3>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <img src="public/React.png" className="w-14 h-14 object-contain mb-3" />
    <h3 className="font-semibold">React</h3>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <img src="public/Tailwind.png" className="w-14 h-14 object-contain mb-3" />
    <h3 className="font-semibold">Tailwind CSS</h3>
  </div>

</div><br /><br />  


{/* ================== My Projes ===================== */}


       
    </section>
  );
}

export default Home;