import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaLaptopCode } from 'react-icons/fa'

const About = () => {
  const [showFull, setShowFull] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

  const toggleContent = () => setShowFull(!showFull)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="container mx-auto my-16 px-6 md:px-12" id='about'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-gray-100 rounded-2xl shadow-lg p-8 md:p-12"
      >
        <h2 className="text-4xl font-bold mb-6 text-indigo-400">👨‍💻 About Me</h2>

        <p className="text-2xl leading-relaxed mb-6 text-gray-300">
          Hey there! I’m <span className="font-semibold text-white">Satyam Pandey</span>, 
          a full-stack web developer who lives and breathes clean UI and efficient code.
          I love turning complex ideas into fast, interactive web apps — React on the front, 
          Node.js on the back, and MongoDB holding it all together.
        </p>

        <AnimatePresence>
          {(showFull || isDesktop) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-2xl leading-relaxed mb-6 text-gray-300">
                I’ve built everything from <span className="text-indigo-300">social media apps (Snapgram)</span> 
                to <span className="text-indigo-300">E-commerce dashboards</span>, and I’m always looking for 
                ways to push the limits of what’s possible with the MERN stack. My time at 
                <span className="font-semibold text-white"> Anishree Technology </span>
                taught me how to ship production-ready features, integrate real APIs, 
                and collaborate like a pro.
              </p>

              <p className="text-2xl leading-relaxed mb-6 text-gray-300">
                I’m big on writing maintainable code, learning new frameworks, 
                and experimenting with tools like <span className="text-indigo-300">Appwrite</span>, 
                <span className="text-indigo-300"> Redux</span>, and 
                <span className="text-indigo-300"> React Query</span>. If I’m not coding, 
                I’m probably tweaking UI components till they <span className="italic">feel just right</span>.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                I’m all about building products that are 
                <span className="text-indigo-300"> fast</span>, 
                <span className="text-indigo-300"> functional</span>, 
                and <span className="text-indigo-300"> fun to use</span> — 
                and I’m always open to new challenges that help me level up as a dev 🚀
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read More / Less Button */}
        {!isDesktop && (
          <div className="mt-4 text-center">
            <button
              onClick={toggleContent}
              className="bg-indigo-500 hover:bg-indigo-600 transition text-white px-6 py-2 rounded-full font-semibold"
            >
              {showFull ? 'Read Less' : 'Read More'}
            </button>
          </div>
        )}

        {/* Icons */}
        <div className="flex flex-wrap gap-6 mt-8 text-3xl text-indigo-400 justify-center md:justify-start">
          <FaReact />
          <FaNodeJs />
          <FaDatabase />
          <FaLaptopCode />
        </div>
      </motion.div>
    </section>
  )
}

export default About
