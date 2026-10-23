import React, { useState } from 'react'
import Nav from '../components/Nav'
import * as motion from "motion/react-client"
import { IoLogoGithub } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  }

  return (
    <section 
      id='contact'
      className='w-full min-h-screen justify-center flex flex-col bg-[#03060C] bg-cover text-white overflow-x-hidden'
    >
      <Nav />

      <div className='flex flex-col lg:flex-row gap-4 mx-4 justify-center items-center py-10'>

        {/* Left */}
        <div className='w-full lg:w-1/2 h-full flex flex-col gap-6 p-4 sm:p-8 mt-4 lg:mt-8'>

          <div className='text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#60A5FA] from-5% via-[#3B82F6] via-30% to-[#234C90] to-55% bg-clip-text text-transparent text-center lg:text-left'>
            <h1>Contact</h1>
          </div>

          <div className='text-white opacity-50 text-sm sm:text-base text-center lg:text-left'>
            Let's build something together — have something in mind? Feel free to reach out.
          </div>

          {/* Form */}
          <form className='flex flex-col gap-4 sm:gap-6 p-4 sm:p-8 border-2 border-white/40 rounded-lg mt-2'>
            <div className='border-2 border-white/30 focus:border-blue-500 rounded-lg'>
              <input type="text" placeholder='Name' className='w-full h-full text-base sm:text-lg p-2' required/>
            </div>
            <div className='border-2 border-white/30 focus:border-blue-500 rounded-lg'>
              <input type="email" placeholder='Email' className='w-full h-full text-base sm:text-lg p-2' required/>
            </div>
            <div className='border-2 border-white/30 focus:border-blue-500 rounded-lg'>
              <input type="textarea" placeholder='Your Message...' className='w-full h-full text-base sm:text-lg p-2' required/>
            </div>
            <div className='items-center justify-center text-center'>
              <button className='cursor-pointer transition-colors duration-200 border-2 border-white rounded-lg px-4 py-1.25 bg-blue-500 hover:bg-blue-700 w-full sm:w-auto'
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </form>

          {showPopup && (
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <div className="w-full max-w-md rounded-2xl border border-blue-500/30 bg-[#03060C] p-6 sm:p-8 text-center shadow-2xl">

                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-3xl text-blue-400">
                  ✓
                </div>

                <h2 className="mb-2 text-xl sm:text-2xl font-semibold text-white">
                  Message Sent!
                </h2>

                <p className="mb-6 text-sm sm:text-base text-gray-400">
                  Thanks for reaching out. I'll get back to you soon.
                </p>

                <button
                  onClick={() => setShowPopup(false)}
                  className="rounded-lg bg-blue-600 px-6 py-2.5 text-white transition hover:bg-blue-500"
                >
                  Close
                </button>

              </div>
            </motion.div>
          )}
          
        </div>

        {/* Right */}
        {/* Attachments */}
        <div className='w-full lg:w-1/3 flex flex-col gap-4 sm:gap-6 p-4'>
          {/* Email */}
          <motion.a className='p-4 flex gap-2 border-2 border-white/40 rounded-lg text-sm sm:text-base'
            href='mailto:nakshay775@gmail.com' target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
            whileTap={{ scale: 0.9 }}
          >
            <div className='items-center justify-center mt-2 shrink-0'>
              <MdMailOutline size={26} className='text-blue-500 sm:w-7.5 sm:h-7.5'/>
            </div>
            <div className='flex flex-col min-w-0'>
              Email me
              <span className='text-white/70 truncate'>nakshay775@gmail.com</span>
            </div>
          </motion.a>
          {/* Phone */}
          <motion.a className='p-4 flex gap-2 border-2 border-white/40 rounded-lg text-sm sm:text-base'
            href='tel: 8446198220' target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
            whileTap={{ scale: 0.9 }}
          >
            <div className='items-center justify-center mt-2 shrink-0'>
              <FaPhone size={26} className='text-blue-500 sm:w-7.5 sm:h-7.5'/>
            </div>
            <div className='flex flex-col'>
              Call me
              <span className='text-white/70'>+91 8446198220</span>
            </div>
          </motion.a>
          {/* LinkedIn */}
          <motion.a className='p-4 flex gap-2 border-2 border-white/40 rounded-lg text-sm sm:text-base'
            href='https://www.linkedin.com/in/akshay-naik-2418b9317' target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
            whileTap={{ scale: 0.9 }}
          >
            <div className='items-center justify-center mt-2 shrink-0'>
              <FaLinkedin size={26}className='text-blue-500 sm:w-7.5 sm:h-7.5'/>
            </div>
            <div className='flex flex-col'>
              Connect to LinkedIn
              <span className='text-white/70'>akshay-naik</span>
            </div>
          </motion.a>
          {/* Github */}
          <motion.a className='p-4 flex gap-2 border-2 border-white/40 rounded-lg text-sm sm:text-base'
            href='https://github.com/Akshay202005' target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
            whileTap={{ scale: 0.9 }}
          >
            <div className='items-center justify-center mt-2 shrink-0'>
              <IoLogoGithub size={26}className='text-blue-500 sm:w-7.5 sm:h-7.5'/>
            </div>
            <div className='flex flex-col'>
              View on GitHub
              <span className='text-white/70'>Akshay202005</span>
            </div>
          </motion.a>
        </div>

      </div>
      

    </section>
  )
}

export default Contact