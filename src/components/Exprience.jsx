import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Code2, Rocket } from 'lucide-react'

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Anishree Technology, Nagpur',
    duration: 'Jan 2025 – Jun 2025',
    points: [
      'Built responsive UI components using React.js, JavaScript, and CSS.',
      'Integrated REST APIs for dynamic content rendering.',
      'Styled modern interfaces using Tailwind CSS & Bootstrap.',
    ],
    icon: <Code2 size={28} />,
  },
]

const Experience = () => {
  return (
    <section className="container mx-auto my-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" text-gray-200 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-800"
      >
        <h2 className="text-4xl font-bold mb-10 text-black flex items-center gap-3">
          <Briefcase className="text-yellow-500 " size={30} /> Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className=" rounded-xl p-6    transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-yellow-400">{exp.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
              </div>
              <p className="text-3xl text-black mb-2 font-medium">{exp.company}</p>
              <p className="text-lg text-gray-500 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-500 space-y-1">
                {exp.points.map((p, idx) => (
                  <li key={idx} className=" transition-colors">
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
