import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const Education = () => {
  return (
    <section id="education" className="scroll-mt-16 relative">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full filter blur-3xl opacity-30" />
      
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
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            Education
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-indigo-50 hover:shadow-indigo-100/50 transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">IPB University</h3>
              <p className="text-indigo-600 font-medium mt-1">Bogor, Indonesia | 2022 - 2026</p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 md:mt-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full">
                <Award className="w-5 h-5" />
                <span className="font-semibold">GPA: 3.44/4.00 (Cum laude)</span>
              </div>
            </motion.div>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Bachelor Degree of Computer Engineering
            </h4>
            
            <div className="mt-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl"
              >
                <h5 className="flex items-center gap-2 text-lg font-semibold text-indigo-700 mb-3">
                  <BookOpen className="w-5 h-5" />
                  Relevant Coursework
                </h5>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Database Management",
                    "Web Development",
                    "System Architecture",
                    "HTML & CSS",
                    "JavaScript",
                    "Network Security"
                  ].map((course, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                      {course}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl"
              >
                <h5 className="text-lg font-semibold text-indigo-700 mb-3">Thesis</h5>
                <p className="text-gray-700">
                  A Sustainable Project-based Learning Methodology for Web Programming
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl"
              >
                <h5 className="text-lg font-semibold text-indigo-700 mb-3">Additional Project</h5>
                <p className="text-gray-700">
                  Developed a dynamic web application for a local business, utilizing React.js 
                  and Node.js to enhance user interaction and backend efficiency. The project 
                  showcased practical application of coursework concepts in a real-world scenario.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Education