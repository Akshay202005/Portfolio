import React, { useEffect, useState } from 'react'
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"
import { IoMenu, IoClose } from "react-icons/io5"

const Nav = () => {

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const navLinks = [
    { label: "Home", path: "#home" },
    { label: "About", path: "#about" },
    { label: "Skill", path: "#skill" },
    { label: "Project", path: "#project" },
    { label: "Contact", path: "#contact" },
  ];

  return (
    <div className={`w-full h-20 flex items-center justify-between md:justify-center gap-7.5 px-4 sm:px-5 py-5 fixed top-0 z-9999 overflow-visible 
      ${scrolled ? "bg-[#03060C]/95 backdrop-blur-md" : "bg-[#03060C]/70 backdrop-blur-md"}`}>
        <div className='w-full h-17.5 flex bg-transparent shadow-lg rounded-lg items-center justify-between md:justify-start gap-5 p-2 border-2 border-white/45'>

            {/* Logo */}
            <div className='pl-2 font-bold'>
              AKSHAY
            </div>

            {/* Navigation */}
            <div className='w-full h-full hidden md:flex items-center justify-center gap-5 p-2 bg-transparent'>
                {navLinks.map(({ label, path }) => {
                  const sectionId = path.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={path}
                      href={path}
                      className={`flex items-center gap-2 cursor-pointer relative space-between px-3 py-1 rounded-lg font-medium hover:text-blue-400 border-2 transition-colors duration-200
                        ${isActive
                          ? "border-blue-500 text-white"
                          : "border-transparent text-white"
                        }`}
                    >
                      {label}
                    </a>
                  );
                })}
            </div>

          {/* Resume */}
          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='hidden md:flex items-center gap-2 cursor-pointer absolute right-8 px-3 py-1 rounded-lg font-medium'
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.8 }}
          >
            <button className='cursor-pointer transition-colors duration-200 border-2 border-white rounded-lg px-2 py-1.25 bg-blue-500'>
              Resume
            </button>
          </motion.a>

          {/* Hamburger - Mobile */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className='md:hidden flex items-center justify-center text-white text-2xl pr-2 cursor-pointer'
            aria-label="Toggle menu"
          >
            { menuOpen ? (<IoClose size={26}/>) : (<IoMenu size={26}/>)}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className='md:hidden absolute top-20 left-4 right-4 bg-[#03060C]/95 backdrop-blur-md border-2 border-white/45 rounded-lg flex flex-col p-4 gap-2 shadow-lg'
            >
              {navLinks.map(({ label, path }) => {
                const sectionId = path.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={path}
                    href={path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center px-3 py-2 rounded-lg font-medium hover:text-blue-400 border-2 transition-colors duration-200
                      ${isActive
                        ? "border-blue-500 text-white"
                        : "border-transparent text-white"
                      }`}
                  >
                    {label}
                  </a>
                );
              })}
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className='flex items-center justify-center mt-2'
              >
                <button className='cursor-pointer transition-colors duration-200 border-2 border-white rounded-lg px-4 py-1.5 bg-blue-500 w-full'>
                  Resume
                </button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}

export default Nav