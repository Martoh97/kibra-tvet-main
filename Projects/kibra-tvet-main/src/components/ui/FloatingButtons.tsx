import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "254716066759";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I'd like to inquire about your services. Could you please assist me?",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
          w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg
          flex items-center justify-center
          text-gray-600 hover:text-gray-900 hover:shadow-xl hover:-translate-y-0.5
          transition-all duration-300 ease-in-out
          ${showScrollTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        {/* Up Arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          w-14 h-14 rounded-full shadow-lg
          flex items-center justify-center
          hover:shadow-xl hover:-translate-y-0.5 hover:scale-105
          transition-all duration-300 ease-in-out
          bg-[#25D366]
        "
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 48 48"
          fill="white"
        >
          <path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6.1-.8-8.7-2.4l-.6-.4-6.2 1.6 1.6-6-.4-.6C8.1 30.3 7.3 27.2 7.3 24 7.3 14.8 14.8 7.3 24 7.3S40.7 14.8 40.7 24 33.2 40 24 40zm10.9-14.4c-.6-.3-3.5-1.7-4-1.9-.6-.2-1-.3-1.4.3-.4.6-1.5 1.9-1.9 2.3-.3.4-.7.4-1.3.1-.6-.3-2.5-.9-4.8-2.9-1.8-1.6-3-3.5-3.3-4.1-.3-.6 0-.9.3-1.2.3-.3.6-.7.9-1.1.3-.4.4-.6.6-1 .2-.4.1-.8-.1-1.1-.2-.3-1.4-3.4-1.9-4.6-.5-1.2-1-1-1.4-1h-1.2c-.4 0-1 .1-1.6.8-.5.6-2 2-2 4.9s2.1 5.6 2.4 6c.3.4 4.1 6.3 10 8.8 1.4.6 2.5 1 3.4 1.2 1.4.4 2.7.3 3.7.2 1.1-.2 3.5-1.4 4-2.8.5-1.4.5-2.5.3-2.8-.1-.3-.5-.4-1.1-.7z" />
        </svg>
      </a>
    </div>
  );
}
