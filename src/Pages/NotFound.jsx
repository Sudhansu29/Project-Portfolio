import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen pt-24 flex items-center justify-center px-6 bg-gray-950 text-white">

      <div className="text-center">

        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-4 mb-8">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Go Back Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;