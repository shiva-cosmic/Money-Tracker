import React, { useState, useEffect, forwardRef, useRef } from 'react';

function Select({ label, className, onChange, options, placeholder = 'Select Your Preferred Option', ...props }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Detect mobile view (adjust breakpoint as needed)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width <= 768px
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen) return;
      if (event.key === 'Escape') setIsOpen(false);
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const currentIndex = selected ? options.findIndex(opt => opt.value === selected.value) : -1;
        const nextIndex = event.key === 'ArrowDown' ? Math.min(currentIndex + 1, options.length - 1) : Math.max(currentIndex - 1, 0);
        handleSelect(options[nextIndex]);
      }
      if (event.key === 'Enter' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selected, options]);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange({ target: { value: option.value } }); // Mimic event object
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col space-y-2" ref={dropdownRef}>
      {label && <label className="text-white font-extralight text-lg">{label}</label>}
      
      <button
        onClick={toggleDropdown}
        className={`p-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white border border-gray-600 rounded-xl shadow-md focus:ring-4 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${className}`}
        {...props}
        ref={(el) => {
          buttonRef.current = el;
          if (ref) ref.current = el;
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center justify-between">
          {selected ? selected.label : placeholder}
          <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      {isOpen && (
        isMobile ? (
          // Mobile: Full-screen modal
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300" onClick={() => setIsOpen(false)}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-11/12 max-w-lg rounded-2xl p-4 shadow-2xl border border-gray-600 animate-fadeIn" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-extralight text-white">Select Your Preferred Option</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="space-y-2 max-h-64 overflow-y-auto" role="listbox">
                {options.map((option, index) => (
                  <li
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    className={`p-3 cursor-pointer rounded-xl border transition-all duration-200 ${
                      selected && selected.value === option.value
                        ? 'bg-gray-700 border-gray-500 text-white shadow-md'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-sm'
                    }`}
                    role="option"
                    aria-selected={selected && selected.value === option.value}
                  >
                    <span className="font-medium">{option.label}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full p-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl font-semibold shadow-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          // Desktop: Floating dropdown
          <div className="absolute top-full mt-2 w-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-xl shadow-xl z-10 max-h-64 overflow-y-auto transition-all duration-300 ease-in-out" role="listbox">
            {options.map((option, index) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`p-3 cursor-pointer transition-all duration-200 ${
                  selected && selected.value === option.value
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                role="option"
                aria-selected={selected && selected.value === option.value}
              >
                <span className="font-medium">{option.label}</span>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default forwardRef(Select);
