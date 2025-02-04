import { motion } from "framer-motion";
import { GraduationCap, Medal, BookOpen } from "@phosphor-icons/react";

const Education = () => {
  return (
    <section id="education" className="scroll-mt-16 relative">
      {/* Modern gradient decorations */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-full filter blur-3xl opacity-30 animate-pulse-soft" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-red-400/20 rounded-full filter blur-3xl opacity-30 animate-pulse-soft" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          <h2 className="heading-serif text-4xl gradient-text-primary flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-indigo-600" weight="fill" />
            Education
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="modern-card p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                IPB University
              </h3>
              <p className="text-indigo-600 font-medium mt-1">
                Bogor, Indonesia | 2022 - 2026
              </p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 md:mt-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 text-green-700 rounded-full shadow-sm">
                <Medal className="w-5 h-5" weight="fill" />
                <span className="font-semibold">
                  GPA: 3.90/4.00 (Cum laude)
                </span>
              </div>
            </motion.div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Bachelor Degree of Computer Engineering
            </h4>

            <div className="mt-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-morphism p-6 hover-card-rise"
              >
                <h5 className="flex items-center gap-2 text-lg font-semibold gradient-text-primary mb-4">
                  <BookOpen className="w-5 h-5" weight="fill" />
                  Relevant Coursework
                </h5>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Advanced Web Development",
                    "Database Management",
                    "System Architecture",
                    "Cloud Computing",
                    "Network Security",
                    "Data Structures",
                    "Software Engineering",
                    "API Development",
                    "UI/UX Design",
                    "DevOps Practices",
                    "Agile Methodologies",
                    "Mobile Development",
                  ].map((course, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                      {course}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-morphism p-6 hover-card-rise"
              >
                <h5 className="text-lg font-semibold gradient-text-primary mb-3">
                  Thesis Project
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  A Sustainable Project-based Learning Methodology for Web
                  Programming - Developing an innovative approach to teaching
                  web development through hands-on, project-based learning
                  experiences. The methodology incorporates modern web
                  technologies and industry best practices to prepare students
                  for real-world development challenges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="glass-morphism p-6 hover-card-rise"
              >
                <h5 className="text-lg font-semibold gradient-text-primary mb-3">
                  Notable Projects
                </h5>
                <ul className="space-y-4">
                  <li className="text-gray-700">
                    <span className="font-medium text-indigo-600">
                      Full-Stack Web Application:
                    </span>
                    <br />
                    Developed a comprehensive business management system using
                    React.js, Node.js, and MongoDB, featuring real-time updates
                    and advanced data visualization.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-indigo-600">
                      IoT Integration Platform:
                    </span>
                    <br />
                    Created a web-based platform for IoT device management and
                    data analysis, implementing real-time monitoring and control
                    features.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
