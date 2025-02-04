import React from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
};

type Project = {
  title: string;
  company: string;
  location: string;
  period: string;
  details: (string | JSX.Element)[];
  tags?: string[];
};

const Experience = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const experiences: Experience[] = [
    {
      title: "Intern | Full-Stack IoT Engineer",
      company: "Badan Standardisasi Instrumen Pertanian (BPSIP)",
      location: "Bogor, Indonesia",
      period: "Jan, 2025 - June, 2025 · 6 months",
      responsibilities: [
        "Developed an IoT-based Fish Feeder system, integrating sensors and actuators with a web interface for real-time monitoring and control",
        "Designed and implemented the web application for user interaction with the IoT system, allowing easy scheduling and monitoring of feeding times and amounts",
        "Collaborated with the backend team to implement data storage, management, and analysis features for optimal system performance",
        "Integrated various IoT devices, such as temperature and humidity sensors, to optimize feeding conditions and improve aquaculture productivity",
        "Supported the testing and debugging of the IoT system to ensure seamless operation across hardware and software components",
        "Worked with senior engineers to gather user feedback and refine system design for improved usability and reliability",
      ],
    },
    {
      title: "Assistant Lecturer | PLC Systems (Omron PLC)",
      company: "Institut Pertanian Bogor (IPB)",
      location: "Bogor, Indonesia",
      period: "Jan, 2025 - July, 2025 · 6 months",
      responsibilities: [
        "Collaborate with the lead lecturer to deliver high-quality instruction and support to students",
        "Teach the fundamentals of PLC programming and guide students in configuring and troubleshooting Omron PLC devices",
        "Provide hands-on experience in integrating PLC systems within industrial settings",
        "Develop and deliver 10+ hands-on workshops on PLC programming and automation concepts, improving student practical skills by 30%",
        "Instruct students on configuring Omron PLC devices, including I/O modules and communication protocols",
        "Guide students in using Omron CX-Programmer for programming, simulation, and system testing",
        "Support students in diagnosing and resolving PLC-related issues through practical troubleshooting exercises",
        "Collaborate with the lead lecturer to assess student performance and develop instructional materials tailored to real-world industrial automation scenarios",
      ],
    },
    {
      title: "Assistant Lecturer | Routing & Switching Technology",
      company: "Institut Pertanian Bogor (IPB)",
      location: "Bogor, Indonesia",
      period: "Aug, 2024 - Jan, 2025 · 6 months",
      responsibilities: [
        "Assist in delivering lectures and practical sessions on Routing & Switching",
        "Instruct students in configuring Cisco devices, including Routers and Switches",
        "Guide students in using Cisco Packet Tracer and IOS for network simulations",
        "Support students in troubleshooting and resolving network issues",
        "Collaborate with lead lecturer to evaluate student performance and develop instructional materials",
      ],
    },
  ];

  const projects: Project[] = [
    {
      title: "ZenithCare - Comprehensive Health Monitoring App",
      company: "Institut Pertanian Bogor (IPB)",
      location: "Jakarta, Indonesia",
      period: "Feb, 2024 - Jun, 2024",
      details: [
        "Developed a mobile application for comprehensive health monitoring, including BMI calculator, mental health assessments, and emergency services locator",
        "Utilized Kotlin for backend development and Figma for UI/UX design",
        "Integrated Sirkemkes API for emergency services and implemented data visualization features",
      ],
      tags: ["Kotlin", "Figma", "API Integration"],
    },
    {
      title: "Front End Developer Proclass",
      company: "Harisenin.com",
      location: "Bogor, Indonesia",
      period: "Jan, 2024 - Feb, 2024",
      details: [
        "Final Project: Designed and developed a website for an Food Company within two months",
        "Relevant Course works: HTML, CSS, JavaScript, React Js, Bootstrap",
        <React.Fragment key="certificate">
          Certificate:{" "}
          <a
            href="https://drive.google.com/file/d/1F53Vijh0XXssOsn4PSyxSuu_jyniadT9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700 underline inline-flex items-center gap-1"
          >
            View Certificate <ExternalLink className="w-4 h-4" />
          </a>
        </React.Fragment>,
      ],
      tags: ["React", "Bootstrap", "JavaScript"],
    },
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="experience" className="section-modern scroll-mt-16 py-20">
      <div className="pattern-grid absolute inset-0 opacity-[0.05]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          <h2 className="heading-serif text-4xl gradient-text-primary flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-indigo-600" />
            Experience
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 gradient-text-secondary">
              Work Experience
            </h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="modern-card hover-card-rise mb-6 p-8"
              >
                <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                <div className="flex flex-wrap gap-4 mt-3 text-gray-600">
                  <span className="flex items-center gap-1.5 badge-modern">
                    <MapPin className="w-4 h-4" />
                    {exp.company} | {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5 badge-modern">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex-shrink-0" />
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 gradient-text-secondary">
              Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-morphism p-6 cursor-pointer hover-card-rise"
                  onClick={() => openProjectModal(project)}
                >
                  <h4 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="flex items-center gap-1.5 badge-modern">
                      <MapPin className="w-4 h-4" />
                      {project.company}
                    </span>
                    <span className="flex items-center gap-1.5 badge-modern">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm font-medium rounded-full
                          bg-gradient-to-r from-indigo-50 to-purple-50
                          text-indigo-700 border border-indigo-100/50"
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
  );
};

export default Experience;
