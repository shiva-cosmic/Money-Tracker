import React from "react";

function Container({ children, className = "" }) {
  return (
    <div
      className={`
        ${className}
        p-2 sm:p-4 md:p-6 lg:p-8 
        max-w-4xl mx-auto
        bg-gradient-to-br from-gray-800 via-gray-900 to-black
        border border-gray-600
        rounded-xl
        shadow-md
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 hover:border-gray-500
        animate-fadeIn
      `}
    >
      {children}
    </div>
  );
}

export default Container;
