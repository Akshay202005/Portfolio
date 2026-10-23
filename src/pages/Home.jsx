import React from 'react'
import Nav from '../components/Nav'
import { IoLogoGithub } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import * as motion from "motion/react-client"

const Home = () => {
  return (
    <section 
      id='home'
      className='w-full min-h-screen justify-center flex flex-col bg-[#03060C] bg-cover text-white overflow-x-hidden'
    >

      <Nav />

      {/* Main Content */}
      <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-5 py-10 mt-16 lg:mt-20'>

        {/* Left Side Content */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <div className='text-4xl sm:text-5xl md:text-6xl font-bold'>
            <h2>Hi, I'm</h2>
          </div>
          <div className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-normal pb-2 bg-linear-to-r from-[#60A5FA] from-10% via-[#3B82F6] via-40% to-[#234C90] to-70% bg-clip-text text-transparent'>
            <h1>Akshay Naik</h1>
          </div>
          <div className='text-lg sm:text-xl md:text-2xl font-medium mt-2'>
            <h3>Frontend Developer <span className='text-2xl sm:text-3xl text-blue-400 font-bold'>|</span> MERN Stack Developer</h3>
          </div>
          <div className='text-sm sm:text-base font-medium mt-4 w-full sm:w-4/5 mx-auto lg:mx-0'>
            <p>I build modern, responsive, user-friendly web applications while continuously growing my expertise in the MERN Stack.</p>
          </div>
          <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-5'>
            <a href="#project" className='cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg border-2 border-white transition-colors duration-200'>
              View Projects
            </a>
            <a href="#contact" className='cursor-pointer bg-transparent hover:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg border-2 border-white transition-colors duration-200'>
              Contact Me
            </a>
          </div>

          {/* Contact */}
      <div className='w-full h-full mt-10'>
        <div className='text-lg sm:text-xl font-bold text-[#6d6d6c]'>
          Let's Connect
        </div>
        <div className='flex justify-center lg:justify-start items-center gap-8 sm:gap-10 mt-3 text-3xl text-white'>
          <motion.a href="https://github.com/Akshay202005" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <IoLogoGithub size={28} className='hover:text-blue-500 transition-colors duration-200 sm:w-7.5 sm:h-7.5'/>
          </motion.a>
          <motion.a href="mailto:nakshay775@gmail.com" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <MdMailOutline size={28} className='hover:text-blue-500 transition-colors duration-200 sm:w-7.5 sm:h-7.5'/>
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/akshay-naik-2418b9317" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaLinkedin size={28} className='hover:text-blue-500 transition-colors duration-200 sm:w-7.5 sm:h-7.5'/>
          </motion.a>
        </div>
      </div>
        </div>

        {/* Right Side Content */}
        <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-90 lg:h-90 rounded-full overflow-hidden border-12 sm:border-20 lg:border-30 bg-clip-border border-transparent bg-[radial-gradient(circle,#1E3A8A80_40%,#0B112080_100%)] shrink-0">
          <div className='border border-[#03060C] rounded-full overflow-hidden w-full h-full'>
            <img src={`${import.meta.env.BASE_URL}imgs/hero.png`} alt="Akshay Naik" className="w-auto h-auto object-cover bg-[#03060C]"/>
          </div>
        </div>
        
      </div>

    </section>
  )
}

export default Home
