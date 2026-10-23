import React from 'react'
import Nav from '../components/Nav'
import * as motion from "motion/react-client"
import { FaGraduationCap } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";

const About = () => {
  return (
    <section 
      id='about'
      className='w-full min-h-screen justify-center flex flex-col bg-[#03060C] bg-cover text-white overflow-x-hidden'
    >
      <Nav />

      <div className='w-full h-full items-center justify-center gap-10 lg:gap-20 px-5 sm:8 lg:px-15 py-10 flex flex-col lg:flex-row text-sm sm:text-base font-medium mt-16 lg:mt-20'>
        
        {/* Content */}
          <div className='w-full lg:w-3/5 text-center lg:text-left font-normal'>

            <div className='mb-6 text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#60A5FA] from-8% via-[#3B82F6] via-35% to-[#234C90] to-60% bg-clip-text text-transparent'>
              <h1>About Me</h1>
            </div>

            <p className='mb-4'>
              I'm a Computer Science student with a growing interest in web development and software engineering. 
              My journey has been about exploring different areas of technology, building projects, and gradually 
              finding my direction in development.
            </p>

            <p className='mb-4'>
              I enjoy turning ideas into real, functional applications and paying attention to both how they work 
              and how they look. I'm currently focused on strengthening my JavaScript and MERN Stack skills while 
              continuing to learn through hands-on projects.
            </p>

            <p className='mb-4'>
              My goal is to grow into a well-rounded software developer who can build meaningful products, solve 
              real problems, and keep learning along the way.
            </p>
          </div>

          {/* Cards */}
          <div className='flex flex-col gap-4 w-full sm:w-4/5 lg:w-2/5'>
            <motion.div className='flex flex-col gap border border-white p-4 rounded-lg'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
              <p className='flex gap-2 text-xl sm:text-2xl mb-2'><FaGraduationCap size={26} className='text-blue-500 shrink-0 sm:w-7.5 sm:h-7.5' />Education</p>
              <p>B.Tech — Computer Science & Business Systems</p>
              <p>KITCOE, Kolhapur</p>
            </motion.div>
            <motion.div className='flex flex-col gap border border-white p-4 rounded-lg'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
              <p className='flex gap-2 text-xl sm:text-2xl mb-2'><GiLaptop size={26} className='text-blue-500 shrink-0 sm:w-7.5 sm:h-7.5' />Current Focus</p>
              <p>MERN Stack Development</p>
              <p>JavaScript · React · Node.js · MongoDB</p>

            </motion.div>
            <motion.div className='flex flex-col gap border border-white p-4 rounded-lg'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
              <p className='flex gap-2 text-xl sm:text-2xl mb-2'><IoRocketSharp size={26} className='text-blue-500 shrink-0 sm:w-7.5 sm:h-7.5' />Goal</p>
              <p className='font-bold text-lg'>Software Developer:</p>
              <p className='font-normal'>Building useful products and solving real-world problems.</p>
            </motion.div>
          </div>

      </div> 

    </section>
  )
}

export default About
