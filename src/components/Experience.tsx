import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectModal from './ProjectModal'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const experiences = [
    {
      title: "Assistant Lecturer | Routing & Switching Technology",
      company: "Institut Pertanian Bogor (IPB)",
      location: "Bogor, Indonesia",
      period: "Aug, 2024 - Present · 4 months",
      responsibilities: [
        "Assist in delivering lectures and practical sessions on Routing & Switching",
        "Instruct students in configuring Cisco devices, including Routers and Switches",
        "Guide students in using Cisco Packet Tracer and IOS for network simulations",
        "Support students in troubleshooting and resolving network issues",
        "Collaborate with lead lecturer to evaluate student performance and develop instructional materials"
      ]
    }
  ]

  const projects = [
    {
      title: "ZenithCare - Health Monitoring App",
      company: "Institut Pertanian Bogor (IPB)",
      location: "Jakarta, Indonesia",
      period: "Feb, 2024 - Jun, 2024",
      details: [
        "Developed a mobile application for comprehensive health monitoring, including BMI calculator, mental health assessments, and emergency services locator",
        "Utilized Kotlin for backend development and Figma for UI/UX design",
        "Integrated Sirkemkes API for emergency services and implemented data visualization features"
      ],
      tags: ["Kotlin", "Figma", "API Integration"]
    },
    {
      title: "Front End Developer Proclass",
      company: "Harisenin.com",
      location: "Bogor, Indonesia",
      period: "Jan, 2024 - Feb, 2024",
      details: [
        "Final Project: Designed and developed a website for an Food Company within two months",
        "Relevant Course works: HTML, CSS, JavaScript, React Js, Bootstrap",
        <>
          Certificate: <a 
            href="https://drive.google.com/file/d/1F53Vijh0XXssOsn4PSyxSuu_jyniadT9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700 underline inline-flex items-center gap-1"
          >
            View Certificate <ExternalLink className="w-4 h-4" />
          </a>
        </>
      ],
      tags: ["React", "Bootstrap", "JavaScript"]
    }
  ]

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="experience" className="scroll-mt-16 relative">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full filter blur-3xl opacity-30" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-indigo-600" />
            Experience
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
        </div>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Work Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-indigo-50 hover:shadow-indigo-100/50 transition-all duration-500"
              >
                <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.company} | {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-indigo-50 cursor-pointer hover:shadow-indigo-100/50 transition-all duration-500"
                  onClick={() => openProjectModal(project)}
                >
                  <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mt-2 text-gray-600 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-indigo-600 text-sm font-medium">
                    Click to view details →
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}
    </section>
  )
}

export default Experience