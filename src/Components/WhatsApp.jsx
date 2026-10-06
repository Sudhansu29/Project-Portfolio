import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  const phoneNumber = "916371533192";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 
                 bg-green-500 hover:bg-green-600
                 text-white w-14 h-14
                 rounded-full
                 flex items-center justify-center
                 shadow-lg
                 transition duration-300
                 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}

export default WhatsApp;