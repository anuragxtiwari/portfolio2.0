// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleNav = () => setNavOpen(!navOpen);

  // Track scroll for shadow + active section
  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);

    const sections = ["hero", "about", "skills", "projects", "contact"];
    let current = "hero";

    const scrollPos = window.scrollY + window.innerHeight / 2; // center of viewport

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = id;
        }
      }
    });

    // If at bottom of page, always set last section active
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      current = "contact";
    }

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scroll function
  const scrollToSection = (e, href) => {
    e.preventDefault();
    setNavOpen(false);

    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Remove hash from URL
      window.history.replaceState(null, null, " ");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all backdrop-blur-md bg-white/30 ${
        scrolled ? "shadow-md" : ""
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center"
        >
          <img
            src="/logo.png" 
            alt="Anurag Logo"
            className="h-10 md:h-12 object-contain"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a
              href="/Anurag_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition transform hover:scale-105"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div
          className="md:hidden cursor-pointer text-gray-800"
          onClick={toggleNav}
        >
          {navOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <motion.ul
          className="md:hidden bg-white/70 backdrop-blur-md absolute w-full top-full left-0 flex flex-col items-center gap-4 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block py-2 transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Resume Button in Mobile */}
          <li>
            <a
              href="/Anurag_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition transform hover:scale-105"
            >
              Resume
            </a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;