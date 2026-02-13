import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919440283982"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-28 right-6 z-[9999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-wa-pulse group"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-8 h-8 filter brightness-0 invert"
      />
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-gray-800 text-xs font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with us!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;