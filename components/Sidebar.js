"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, User, Briefcase, Settings } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:hidden">       
      {/* Sidebar Toggle Button - Always Visible */}
      <button onClick={() => setIsOpen(true)} className={`${isOpen ? "hidden" : "fixed top-4 right-4 bg-gray-900 text-white p-2 rounded-lg"}`}      >
        <Menu size={24} />
      </button>
      {/* Sidebar - Only renders when isOpen is true */}
      {isOpen && (
        <div className="bg-gray-900 text-white h-screen p-5 w-64 fixed top-0 right-0 shadow-lg">
          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

          <nav className="flex flex-col space-y-4">
            <Link onClick={() => setIsOpen(false)} href="/" className="flex items-center space-x-3 hover:text-blue-400">
              <Home size={20} />
              <span>Home</span>
            </Link>

            <Link onClick={() => setIsOpen(false)} href="#skills" className="flex items-center space-x-3 hover:text-blue-400">
              <User size={20} />
              <span>Skills</span>
            </Link>

            <Link onClick={() => setIsOpen(false)} href="#projects" className="flex items-center space-x-3 hover:text-blue-400">
              <Briefcase size={20} />
              <span>Projects</span>
            </Link>

            <Link href="#contact" className="flex items-center space-x-3 hover:text-blue-400">
              <Settings size={20} />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      )}

    </div>
  );
};

export default Sidebar;
