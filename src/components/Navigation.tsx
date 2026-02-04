import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "./ThemeContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // ✅ Access theme context

  const links = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter text-white group"
          >
            VOID
            <span className="text-cyan-400 group-hover:text-magenta-500 transition-colors duration-300">
              .AGENCY
            </span>
          </a>

          {/* Desktop Links + Theme Button */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] border ${
                theme === "light"
                  ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                  : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
              }`}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

            {/* Start Project Button */}
            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:border-cyan-400/50">
              Start Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 p-6 backdrop-blur-xl bg-black/90 border border-white/10 rounded-2xl md:hidden flex flex-col space-y-4"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-300 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              theme === "light"
                ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
            }`}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
