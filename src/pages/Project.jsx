import React, { useState } from 'react'
import Nav from '../components/Nav'
import { FaGithub } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { FaCircle } from "react-icons/fa6";

  const turboBasketImages = [
    "/imgs/TurboBasket/User1.jpg",
    "/imgs/TurboBasket/User2.jpg",
    "/imgs/TurboBasket/Shop1.jpg",
    "/imgs/TurboBasket/Shop2.jpg",
    "/imgs/TurboBasket/DelBoy1.jpg",
    "/imgs/TurboBasket/DelBoy2.jpg",
  ];

  const jerseyStoreImages = [
    "/imgs/Jersey_Store/Home.png",
    "/imgs/Jersey_Store/Shop.png",
    "/imgs/Jersey_Store/Cart.png",
  ];

  const dharmaAiImages = [
    "/imgs/Dharma_Ai/Home.png",
    "/imgs/Dharma_Ai/Chat_Sidebar.png",
    "/imgs/Dharma_Ai/Profile.png",
  ];

const Project = () => {

  const [showPopup, setShowPopup] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  }

  const [turboImage, setTurboImage] = useState(0);
  const [turboDirection, setTurboDirection] = useState(1);

  const [jerseyImage, setJerseyImage] = useState(0);
  const [jerseyDirection, setJerseyDirection] = useState(1);

  const [dharmaImage, setDharmaImage] = useState(0);
  const [dharmaDirection, setDharmaDirection] = useState(1);

  // TurboBasket
  const nextTurboImage = () => {
    setTurboDirection(1);
    setTurboImage((prev) =>
      (prev + 1) % turboBasketImages.length
    );
  };
  const prevTurboImage = () => {
    setTurboDirection(-1);
    setTurboImage((prev) =>
      prev === 0 ? turboBasketImages.length - 1 : prev - 1
    );
  };

  // Jersey Store
  const nextJerseyImage = () => {
    setJerseyDirection(1);
    setJerseyImage((prev) =>
      (prev + 1) % jerseyStoreImages.length
    );
  };
  const prevJerseyImage = () => {
    setJerseyDirection(-1);
    setJerseyImage((prev) =>
      prev === 0 ? jerseyStoreImages.length - 1 : prev - 1
    );
  };

  // Dharma AI
  const nextDharmaImage = () => {
    setDharmaDirection(1);
    setDharmaImage((prev) =>
      (prev + 1) % dharmaAiImages.length
    );
  };
  const prevDharmaImage = () => {
    setDharmaDirection(-1);
    setDharmaImage((prev) =>
      prev === 0 ? dharmaAiImages.length - 1 : prev - 1
    );
  };

  return (
    <section 
      id='project'
      className='w-full min-h-screen justify-center flex flex-col bg-[#03060C] bg-cover text-white overflow-x-hidden'
    >
      <Nav />

      <div className='w-full h-full gap-10 sm:gap-20 px-5 sm:px-8 lg:px-15 py-10 flex flex-col text-sm sm:text-base font-medium mt-10'>
        
        {/* Content */}
        <div className='w-full font-normal'>

          {/* Heading */}
          <div className='mb-6 w-full text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-normal pb-2 bg-linear-to-r from-[#60A5FA] from-5% via-[#3B82F6] via-25% to-[#234C90] to-50% bg-clip-text text-transparent'>
            <h1>My Projects</h1>
          </div>

          {/* Projects */}
          <div className='grid grid-cols-1 lg:grid-cols-2 mt-2 justify-center gap-6 items-stretch'>
            
            {/* TurboBasket - Food Delivery App */}
            <div className='border border-white/40 rounded-2xl p-4 h-full flex flex-col'>
              
              {/* Slideshow */}
              <div className='relative w-full sm:w-[80%] mx-auto h-44 sm:h-56 overflow-hidden rounded-xl mb-4'>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={turboImage}
                    src={turboBasketImages[turboImage]}
                    alt="TurboBasket"
                    className='absolute inset-0 w-full h-full object-contain'
                    initial={{
                      x: turboDirection === 1 ? "100%" : "-100%"
                    }}
                    animate={{
                      x: 0
                    }}
                    exit={{
                      x: turboDirection === 1 ? "-100%" : "100%"
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  />
                </AnimatePresence>
                <motion.button
                  onClick={prevTurboImage}
                  whileTap={{ scale: 0.85 }}
                  whileFocus={{ scale: 1.05 }}
                  className='cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/70 hover:text-white transition-all duration-300'
                >
                  <GrLinkPrevious size={20}/>
                </motion.button>
                <motion.button
                  onClick={nextTurboImage}
                  whileTap={{ scale: 0.85 }}
                  whileFocus={{ scale: 1.05 }}
                  className='cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/70 hover:text-white transition-all duration-300'
                >
                  <GrLinkNext size={20}/>
                </motion.button>
              </div>

              <span className='text-2xl sm:text-3xl font-bold'>TurboBasket</span>
              <div className='flex flex-col flex-1 mt-4 text-white/50 text-sm sm:text-base'>
                A full-stack food ordering platform built with the MERN Stack, featuring authentication, 
                real-time order updates, online payments, and location-based services.
                <span className='text-base sm:text-lg font-bold mt-2'>Tech Stack</span>
                <span>Frontend: JavaScript, React.js, Tailwind CSS</span>
                <span>Backend: Node.js, Express.js</span>
                <span>Database: MongoDB, Mongoose</span>
                <span>Tools: VS Code, Socket.io, GeoApify, Firebase, Nodemailer</span>
              </div>
              <div className='flex gap-3 mx-8'>
                <motion.a
                  href='https://github.com/Akshay202005/TurboBasket-Food-Delivery'
                  className='w-1/4 sm:w-[50%] h-10 mx-auto flex gap-2 items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-2xl p-2 mt-5 transition-all duration-300'
                >
                  <span>View on GitHub</span><FaGithub size={25}/>
                </motion.a>
                <motion.a
                  href='https://turbobasket-food-delivery.vercel.app'
                  className='w-1/4 sm:w-[50%] h-10 mx-auto flex gap-2 items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-2xl p-2 mt-5 transition-all duration-300'
                >
                  <span>Live Demo</span><FaCircle className='text-[#FF2200]' size={12}/>
                </motion.a>                
              </div>
            </div>

            {/* Jersey Store */}
            <div className='border border-white/40 rounded-2xl p-4 h-full flex flex-col'>

              {/* SlideShow */}
              <div className='relative w-full sm:w-[80%] mx-auto h-44 sm:h-56 overflow-hidden rounded-xl mb-4'>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={jerseyImage}
                    src={jerseyStoreImages[jerseyImage]}
                    alt="Jersey Store"
                    className='absolute inset-0 w-full h-full object-contain'
                    initial={{
                      x: jerseyDirection === 1 ? "100%" : "-100%"
                    }}
                    animate={{
                      x: 0
                    }}
                    exit={{
                      x: jerseyDirection === 1 ? "-100%" : "100%"
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  />
               </AnimatePresence>
                <motion.button
                  onClick={prevJerseyImage}
                  whileTap={{ scale: 0.85 }}
                  whileFocus={{ scale: 1.05 }}
                  className='cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/70 hover:text-white transition-all duration-300'
                >
                  <GrLinkPrevious size={20}/>
                </motion.button>
                <motion.button
                  onClick={nextJerseyImage}
                  whileTap={{ scale: 0.85 }}
                  whileFocus={{ scale: 1.05 }}
                  className='cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/70 hover:text-white transition-all duration-300'
                >
                  <GrLinkNext size={20}/>
                </motion.button>
              </div>

              <span className='text-2xl sm:text-3xl font-bold'>Jersey Store</span>
              <div className='flex flex-col flex-1 mt-4 text-white/50 text-sm sm:text-base'>
                A responsive football jersey e-commerce interface designed to provide a clean and engaging shopping experience.
                <span className='text-base sm:text-lg font-bold mt-2'>Tech Stack</span>
                <span>  HTML</span>
                <span>  CSS</span>
                <span>  JavaScript</span>
              </div>
              <div className='flex gap-3 mx-8'>
                <motion.a
                  href='https://github.com/Akshay202005/Jersey-Store'
                  className='w-1/4 sm:w-[50%] h-10 mx-auto flex gap-2 items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-2xl p-2 mt-5 transition-all duration-300'
                >
                  <span>View on GitHub</span><FaGithub size={25}/>
                </motion.a>
                <motion.a
                  href='https://akshay202005.github.io/Jersey-Store/JSHtml.html'
                  className='w-1/4 sm:w-[50%] h-10 mx-auto flex gap-2 items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-2xl p-2 mt-5 transition-all duration-300'
                >
                  <span>Live Demo</span><FaCircle className='text-[#FF2200]' size={12}/>
                </motion.a>                
              </div>
            </div>
          </div>

          {/* In progress projects */}
          <div className='text-xl sm:text-2xl text-white my-6'>
            In progress...
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 mt-2 justify-center gap-6 items-stretch'>

            {/* Dharma AI */}
            <div className='border border-white/40 rounded-2xl p-4 h-full flex flex-col'>
              
              {/* Slideshow */}
              <div className='relative w-[80%] mx-auto h-56 overflow-hidden rounded-xl mb-4'>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={dharmaImage}
                    src={dharmaAiImages[dharmaImage]}
                    alt="Dharma AI"
                    className='absolute inset-0 w-full h-full object-contain'
                    initial={{
                      x: dharmaDirection === 1 ? "100%" : "-100%"
                    }}
                    animate={{
                      x: 0
                    }}
                    exit={{
                      x: dharmaDirection === 1 ? "-100%" : "100%"
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  />
                </AnimatePresence>
                <motion.button
                  onClick={prevDharmaImage}
                  whileTap={{ scale: 0.85 }}
                  whileFocus={{ scale: 1.05 }}
                  className='cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/70 hover:text-white transition-all duration-300'
                >
                  <GrLinkPrevious size={20}/>
                </motion.button>
                <motion.button
                  onClick={nextDharmaImage}
                  whileTap={{ scale: 0.85 }}
                  whileFocus={{ scale: 1.05 }}
                  className='cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/70 hover:text-white transition-all duration-300'
                >
                  <GrLinkNext size={20}/>
                </motion.button>
              </div>

              <span className='text-2xl sm:text-3xl font-bold'>Dharma AI</span>
              <div className='flex flex-col flex-1 mt-4 text-white/50 text-sm sm:text-base'>
                Dharma AI is an AI-powered emotional guidance platform that uses conversational AI and 
                virtual character interactions to provide personalized guidance and support based on the 
                user's emotions and situations.
                <span className='text-base sm:text-lg font-bold mt-2'>Tech Stack</span>
                <span>Frontend: JavaScript, React.js, Tailwind CSS</span>
                <span>Backend: Node.js, Express.js</span>
                <span>Database: MongoDB, Mongoose</span>
                <span>Tools: VS Code, Socket.io, Firebase, Nodemailer</span>
                <span>AI: OpenAI, RAG</span>
              </div>
              <div className='flex gap-3 mx-8'>
                <motion.a
                  href='#'
                  className='w-full sm:w-[50%] h-10 mx-auto flex gap-2 items-center justify-center bg-gray-500 rounded-2xl p-2 mt-5 transition-all duration-300 cursor-pointer'
                  onClick={handleSubmit}
                >
                  <span>View on GitHub</span><FaGithub size={25}/>
                </motion.a>
                <motion.a
                  href='#'
                  className='w-full sm:w-[50%] h-10 mx-auto flex gap-2 items-center justify-center bg-gray-500 rounded-2xl p-2 mt-5 transition-all duration-300 cursor-pointer'
                  onClick={handleSubmit}
                >
                  <span>Live Demo</span><FaCircle className='text-[#FF2200]' size={12}/>
                </motion.a>               
              </div>
              
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
              
                    {/* <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-3xl text-blue-400">
                      ✓
                    </div> */}

                    <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", padding: "40px", borderRadius: "8px" }}>
                      <motion.div
                        style={{ width: "50px", height: "50px", borderRadius: "50%", border: "4px solid #1E3A8A", borderTopColor: "#60A5FA", willChange: "transform" }}
                        animate={{ transform: "rotate(360deg)" }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
              
                    <h2 className="mb-2 text-xl sm:text-2xl font-semibold text-white">
                      Still in progress!
                    </h2>
              
                    <p className="mb-6 text-sm sm:text-base text-gray-400">
                      Coming soon...
                    </p>
              
                    <button
                      onClick={() => setShowPopup(false)}
                      className="rounded-lg bg-blue-600 px-6 py-2.5 text-white transition hover:bg-blue-500 cursor-pointer"
                    >
                      Close
                    </button>
              
                  </div>
                </motion.div>
              )}
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Project
