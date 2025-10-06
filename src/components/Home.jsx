
import { SiLeetcode } from "react-icons/si";
import img1 from "../assets/imgs/img1.jpeg"
import TextType from '../react-bits/TextType'
import { DiGithubBadge } from "react-icons/di";
import { FaInstagram, FaLinkedin } from "react-icons/fa";




const Home = () => {
  return (
     <div className="container mx-auto px-4 md:px-10">
      <div className="flex flex-col lg:flex-row items-center justify-center my-10 gap-10">
        {/* Profile Image */}
        <img
          src={img1}
          alt="profile"
          className="w-48 sm:w-64 md:w-80 lg:w-[30rem] rounded-full shadow-lg"
        />

        {/* Text Section */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <TextType
            text={["Welcome", "I'm Satyam Pandey", "I like Coding"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={"black"}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-6"
          />

          <p className="text-base sm:text-lg md:text-xl mt-6 max-w-xl text-gray-700">
            a full-stack dev who loves messing around with React, Node.js, and all things web. Coding for me isn’t just about solving problems—it’s about building cool stuff and trying out new ideas. I like keeping things chill while making stuff that actually works.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1EAkZTQ8L6xvM-L5yPfPrao4wCMkh8poE/view?usp=drive_link"
              download
            >
              <button className="px-6 py-3 bg-amber-300 text-xl rounded-full hover:bg-amber-400 transition-all">
                Resume
              </button>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-black text-white text-xl rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                <DiGithubBadge size={30} /> GitHub
              </button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/satyam-pandey-0b816a270"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border hover:scale-110 transition-transform"
            >
              <FaLinkedin size={30} className="hover:text-blue-700" />
            </a>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border hover:scale-110 transition-transform"
            >
              <SiLeetcode size={30} className="hover:text-amber-700" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border hover:scale-110 transition-transform"
            >
              <FaInstagram size={30} className="hover:text-pink-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home