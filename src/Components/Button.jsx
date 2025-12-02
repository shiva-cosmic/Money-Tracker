import React from 'react';

function Button({ className, onClick, name, ...props }) {
  return (
    <div>
      <button
        className={`
          ${className}
          px-6 py-3
          rounded-xl
          bg-gradient-to-r from-slate-800 via-indigo-900 to-slate-900
          hover:from-indigo-800 hover:via-indigo-700 hover:to-slate-800
          text-white font-extralight
          shadow-lg shadow-indigo-900/50
          hover:shadow-xl hover:shadow-indigo-700/60
          hover:ring-2 hover:ring-indigo-400/50
          transition-all duration-300 ease-out
          transform hover:scale-105 active:scale-95
          focus:outline-none focus:ring-4 focus:ring-indigo-300/70
          relative overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
          before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500
        `}
        onClick={onClick}
        {...props}
      >
        <span className="relative z-10">{name}</span>
      </button>
    </div>
  );
}

export default Button;
