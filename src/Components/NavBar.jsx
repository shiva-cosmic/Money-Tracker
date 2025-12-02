import React, { useState } from "react";
import { Button } from "./index";
import { useNavigate } from "react-router-dom";

function NavBar({ className }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleHome = () => {
    navigate("/");
    setIsOpen(false);
  };
  const handleAbout = () => {
    navigate("/about");
    setIsOpen(false);
  };
  const handleContact = () => {
    navigate("/contact");
    setIsOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`${className} flex justify-between items-center w-full p-5 bg-gradient-to-r from-gray-900 via-slate-800 to-indigo-900 shadow-xl border-b border-indigo-700/30`}
      >
       <h1 className="flex items-center gap-2  text-white font-extralight text-2xl  tracking-wide drop-shadow-sm">
  <img src="/icons8-money-100.png" alt="icon" className="w-6 h-6" />
  Money Tracker
</h1>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Button
            onClick={handleHome}
            name="Home"
            className="text-white font-medium px-8 py-3 rounded-full bg-indigo-800/20 border border-indigo-600/50 hover:bg-indigo-700/40 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
          />
          <Button
            onClick={handleAbout}
            name="About"
            className="text-white font-medium px-8 py-3 rounded-full bg-indigo-800/20 border border-indigo-600/50 hover:bg-indigo-700/40 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
          />
          <Button
            onClick={handleContact}
            name="Contact"
            className="text-white font-medium px-8 py-3 rounded-full bg-indigo-800/20 border border-indigo-600/50 hover:bg-indigo-700/40 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
          />
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-white text-3xl hover:text-indigo-200 transition-colors duration-200"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Overlay (semi-transparent background) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Right Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 via-slate-800 to-indigo-900 text-white shadow-2xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 z-50 border-l border-indigo-700/30`}
      >
        {/* Close Button */}
        <button
          className="text-white text-3xl p-6 hover:text-indigo-200 transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* Menu Options */}
        <div className="flex flex-col gap-8 px-8 mt-8">
          <Button
            onClick={handleHome}
            name="Home"
            className="text-white font-medium py-4 px-6 rounded-full bg-indigo-800/20 border border-indigo-600/50 hover:bg-indigo-700/40 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
          />
          <Button
            onClick={handleAbout}
            name="About"
            className="text-white font-medium py-4 px-6 rounded-full bg-indigo-800/20 border border-indigo-600/50 hover:bg-indigo-700/40 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
          />
          <Button
            onClick={handleContact}
            name="Contact"
            className="text-white font-medium py-4 px-6 rounded-full bg-indigo-800/20 border border-indigo-600/50 hover:bg-indigo-700/40 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;
