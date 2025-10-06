import { DiFirebase } from "react-icons/di";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiAppwrite, SiJsonwebtokens } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaReact size={60} color="#61DBFB" />, name: "React" },
    { icon: <SiJavascript size={60} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaNodeJs size={60} color="#3C873A" />, name: "Node.js" },
    { icon: <SiExpress size={60} color="#444" />, name: "Express" },
    { icon: <SiMongodb size={60} color="#4DB33D" />, name: "MongoDB" },
    { icon: <FaHtml5 size={60} color="#E44D26" />, name: "HTML5" },
    { icon: <FaCss3Alt size={60} color="#1572B6" />, name: "CSS3" },
    { icon: <SiTailwindcss size={60} color="#38BDF8" />, name: "Tailwind" },
    { icon: <SiAppwrite size={60} color="#F02E65" />, name: "Appwrite" },
    { icon: <FaGitAlt size={60} color="#F1502F" />, name: "Git" },
    { icon: <FaJava size={60} color="#F1502F" />, name: "Java" },
    { icon: <DiFirebase size={60} color="#F1502F" />, name: "Firebase" },
    { icon: <SiJsonwebtokens size={60} color="#F1502F" />, name: "JWT" },
  ];

  return (
    <div className="my-20 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">🚀 My Skills</h2>

      <div className="relative overflow-hidden">
        {/* Scrolling Row */}
        <div className="flex gap-10 animate-scroll py-10">
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[8rem] hover:scale-110 transition-transform"
            >
              {skill.icon}
              <p className="text-lg font-medium mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
