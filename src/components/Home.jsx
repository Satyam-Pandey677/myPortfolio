
import { SiLeetcode } from "react-icons/si";
import img1 from "../assets/imgs/img1.jpeg"
import TextType from '../react-bits/TextType'
import { DiGithubBadge } from "react-icons/di";
import { FaInstagram, FaLinkedin } from "react-icons/fa";




const Home = () => {
  return (
    <div className='container mx-auto md:mx-auto  '>
        <div className='lg:flex my-10 gap-11 md:'>    
            <img src={img1} alt="" className='w-[20rem] md:w-[30rem] rounded-full'/>
            <div className="my-auto pt-20">
            <TextType   
                text={["Welcome", "I'm Satyam Pandey", "I like Coding"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter='|'
                textColors={"black"}
                className="text-5xl md-10 md:my-2 md:items-center"
                />
                <p className="text-2xl sm:mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempora impedit, a id corrupti voluptatum quibusdam recusandae placeat, quaerat aspernatur, mollitia ipsam incidunt vitae dolorem explicabo officiis architecto ipsum aliquid.</p>

                <div className="flex gap-4 w-full  mt-20">
                    <a href="https://drive.google.com/file/d/1EAkZTQ8L6xvM-L5yPfPrao4wCMkh8poE/view?usp=drive_link" download><button className="px-6 py-4 bg-amber-300 text-3xl md:text-3xl rounded-full hover:cursor-pointer hover:bg-amber-400">Resume</button></a>
                    <a href="https://drive.google.com/file/d/1EAkZTQ8L6xvM-L5yPfPrao4wCMkh8poE/view?usp=drive_link" download><button className="px-6 py-3 pt-4  bg-black text-white text-3xl md:text-3xl rounded-full hover:cursor-pointer hover:bg-gray-800 flex"><DiGithubBadge size={40} className="pb-2"/> GitHub</button></a>
                </div>
                <div className="flex gap-3 mt-10">
                    <a href="www.linkedin.com/in/satyam-pandey-0b816a270" className="px-2 py-2 rounded-full text-black border "><FaLinkedin size={35} className="hover:text-blue-800"/></a>
                    <a href="www.linkedin.com/in/satyam-pandey-0b816a270" className="px-2 py-2 rounded-full text-black border "><SiLeetcode size={35} className="hover:text-amber-800"/></a>
                    <a href="www.linkedin.com/in/satyam-pandey-0b816a270" className="px-2 py-2 rounded-full text-black border "><FaInstagram size={35} className="hover:text-pink-800"/></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home