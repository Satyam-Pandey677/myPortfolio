import React from 'react'
import project1_img from "../assets/imgs/project1.png"
import project2_img from "../assets/imgs/project2.png"
import project3_img from "../assets/imgs/image.png"

const Project = () => {
  const projects = [
  {
    title: "Snapgram",
    desc: "A social media app built with React, Appwrite & Tailwind — users can post, like, and share images instantly.",
    tech: ["React", "Appwrite", "Tailwind", "TypeScript"],
    link: "https://snapgram.appwrite.network/",
    img:project1_img
  },
  {
    title: "FarmConnect",
    desc: "A MERN-based bidding platform for farmers and drivers to connect for delivery jobs at lowest bids.",
    tech: ["MongoDB", "Express", "React", "Node.js","Redux"],
    link: "https://store-1-y4sw.onrender.com/",
    img:project2_img
  },
  {
    title: "Mojito Restront Landing Page",
    desc: "A Mojito drink landing page created using react & GSAP.",
    tech: ["React", "Gsap"],
    link: "https://kaleidoscopic-cactus-ce2759.netlify.app/",
    img:project3_img
  },
];
  return (
    <div className='container mx-auto' id='project'>
       <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mt-2">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          🚀 My Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white shadow-lg hover:shadow-xl border border-gray-100 rounded-2xl p-6 transition-transform transform hover:-translate-y-2"
            >
              <img src={p.img} alt=""  className='w-full mb-2'/>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Project