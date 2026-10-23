import React from 'react'
import Nav from '../components/Nav'
import * as motion from "motion/react-client"
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import { RiFigmaLine } from "react-icons/ri";

const Skill = () => {
  return (
    <section 
      id='skill'
      className='w-full min-h-screen justify-center flex flex-col bg-[#03060C] bg-cover text-white overflow-x-hidden'
    >
      
      <Nav />

      <div className='w-full h-full gap-10 lg:gap-20 px-5 sm:px-8 lg:px-15 py-10 flex flex-col text-sm sm:text-base font-medium mt-10'>
        
        {/* Content */}
        <div className='w-full font-normal'>

          {/* Heading */}
          <div className='mb-6 w-full sm:w-3/5 text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#60A5FA] from-5% via-[#3B82F6] via-25% to-[#234C90] to-50% bg-clip-text text-transparent'>
            <h1>Skills</h1>
          </div>

          <div className='w-full h-full gap-4 sm:gap-6 grid grid-cols-1 lg:grid-cols-2'>

          {/* Frontend Card */}
          <div className='border-2 border-white/40 rounded-2xl gap-4 mt-4'>
            <div className='mb-4 flex flex-col gap-2 p-3 sm:p-4'>
              <h2 className='text-2xl sm:text-3xl mb-4'>Frontend</h2>
              <div className='grid grid-cols-2 sm:grid-cols-3 items-center justify-center text-center gap-4 sm:gap-8'>
                <motion.div className='flex flex-col p-3 sm:p-4 border border-white/60 rounded-2xl justify-center items-center'
                  whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TiHtml5 size={32} className='mb-2 sm:w-10 sm:h-10'/>
                  <span className='text-white/50 text-xs sm:text-sm'>HTML</span>
                  <span className='text-white/50 text-xs sm:text-sm'>Intermediate</span>
                </motion.div>
                <motion.div className='flex flex-col p-3 sm:p-4 border border-white/60 rounded-2xl justify-center items-center'
                  whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoLogoCss3 size={32} className='mb-2 sm:w-10 sm:h-10'/>
                  <span className='text-white/50 text-xs sm:text-sm'>CSS</span>
                  <span className='text-white/50 text-xs sm:text-sm'>Intermediate</span>
                </motion.div>
                <motion.div className='flex flex-col p-3 sm:p-4 border border-white/60 rounded-2xl justify-center items-center'
                  whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaJs size={32} className='mb-2 sm:w-10 sm:h-10'/>
                  <span className='text-white/50 text-xs sm:text-sm'>JavaScript</span>
                  <span className='text-white/50 text-xs sm:text-sm'>Intermediate</span>
                </motion.div>
                <motion.div className='flex flex-col p-3 sm:p-4 border border-white/60 rounded-2xl justify-center items-center'
                  whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaReact size={32} className='mb-2 sm:w-10 sm:h-10'/>
                  <span className='text-white/50 text-xs sm:text-sm'>React JS</span>
                  <span className='text-white/50 text-xs sm:text-sm'>Intermediate</span>
                </motion.div>
                <motion.div className='flex flex-col p-3 sm:p-4 border border-white/60 rounded-2xl justify-center items-center'
                  whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SiTailwindcss size={32} className='mb-2 sm:w-10 sm:h-10'/>
                  <span className='text-white/50 text-xs sm:text-sm'>Tailwind CSS</span>
                  <span className='text-white/50 text-xs sm:text-sm'>Intermediate</span>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Backend Card */}
          <div className='border-2 border-white/40 rounded-2xl gap-4 mt-4'>
            <div className='mb-4 flex flex-col gap-2 p-3 sm:p-4'>
              <h2 className='text-2xl sm:text-3xl mb-4'>Backend</h2>
              <div className='grid grid-cols-2 sm:grid-cols-3 items-center justify-center text-center gap-4'>
                <motion.div className='flex flex-col p-3 sm:p-4 border border-white/60 rounded-2xl justify-center items-center'
                  whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaNodeJs size={32} className='mb-2 sm:w-10 sm:h-10'/>
                  <span className='text-white/50 text-xs sm:text-sm'>Node JS</span>
                  <span className='text-white/50 text-xs sm:text-sm'>Basic</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Database Card */}
          <div className='border-2 border-white/40 rounded-2xl gap-4 mt-4'>
            <div className='mb-4 flex flex-col gap-2 p-4'>
              <h2 className='text-2xl sm:text-3xl mb-4'>Database</h2>
              <div className='grid grid-cols-2 items-center justify-center text-center gap-4'>
                <motion.div className='flex flex-col p-3 sm:p-4 border border-white/60 rounded-2xl justify-center items-center'
                  whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SiMongodb size={32} className='mb-2 sm:w-10 sm:h-10'/>
                  <span className='text-white/50 text-xs sm:text-sm'>MongoDB</span>
                  <span className='text-white/50 text-xs sm:text-sm'>Basic</span>
                </motion.div>
                <motion.div className='flex flex-col p-3 sm:p-4 border border-white/60 rounded-2xl justify-center items-center'
                  whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SiMysql size={32} className='mb-2 sm:w-10 sm:h-10'/>
                  <span className='text-white/50 text-xs sm:text-sm'>MySQL</span>
                  <span className='text-white/50 text-xs sm:text-sm'>Basic</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Tools Card */}
          <div className='border-2 border-white/40 rounded-2xl gap-4 mt-4'>
            <div className='mb-4 flex flex-col gap-2 p-4'>
              <h2 className='text-2xl sm:text-3xl mb-4'>Tools</h2>
              <div className='grid grid-cols-2 sm:grid-cols-3 items-center justify-center text-center gap-4'>
                <motion.div className='flex flex-col p-3 sm:p-4 border border-white/60 rounded-2xl justify-center items-center'
                  whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <VscVscode size={32} className='mb-2 sm:w-10 sm:h-10'/>
                  <span className='text-white/50 text-xs sm:text-sm'>VS Code</span>
                  <span className='text-white/50 text-xs sm:text-sm'>Intermediate</span>
                </motion.div>
                <motion.div className='flex flex-col p-3 sm:p-4 border border-white/60 rounded-2xl justify-center items-center'
                  whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={32} className='mb-2 sm:w-10 sm:h-10'/>
                  <span className='text-white/50 text-xs sm:text-sm'>GitHub</span>
                  <span className='text-white/50 text-xs sm:text-sm'>Basic</span>
                </motion.div>
                <motion.div className='flex flex-col p-3 sm:p-4 border border-white/60 rounded-2xl justify-center items-center'
                  whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <RiFigmaLine size={32} className='mb-2 sm:w-10 sm:h-10'/>
                  <span className='text-white/50 text-xs sm:text-sm'>Figma</span>
                  <span className='text-white/50 text-xs sm:text-sm'>Basic</span>
                </motion.div>
              </div>
            </div>
          </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Skill
