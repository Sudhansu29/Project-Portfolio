import WhatsApp from "../Components/WhatsApp";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="min-h-screen pt-28 px-6 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>

          <p className="text-gray-600 mt-3 text-base md:text-lg">
            Have a project or opportunity? Let's talk.
          </p>

        </div>


        {/* Contact Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">

          <form
            action="https://formsubmit.co/sahoo.sudhansubalia29@gmail.com"
            method="POST"
            className="space-y-5"
          >

            {/* FormSubmit Settings */}
            <input
              type="hidden"
              name="_subject"
              value="New Contact Message from Portfolio"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />


            {/* Name */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5
                text-gray-800 placeholder-gray-400
                outline-none
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                transition duration-200"
              />

            </div>


            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5
                text-gray-800 placeholder-gray-400
                outline-none
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                transition duration-200"
              />

            </div>


            {/* Message */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your message..."
                required
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5
                text-gray-800 placeholder-gray-400
                outline-none resize-none
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                transition duration-200"
              ></textarea>

            </div>


            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg
              font-semibold
              hover:bg-blue-700
              hover:shadow-md
              active:scale-[0.98]
              transition duration-200"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;