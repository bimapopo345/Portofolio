import { motion } from 'framer-motion'
import { Cpu, Users, Languages, Code2 } from 'lucide-react'

const Skills = () => {
  const skills = {
    technical: [
      { name: "HTML/CSS", proficiency: "expert" },
      { name: "JavaScript", proficiency: "expert" },
      { name: "React.js", proficiency: "advanced" },
      { name: "Node.js", proficiency: "advanced" },
      { name: "PostgreSQL", proficiency: "intermediate" },
      { name: "Python", proficiency: "intermediate" },
      { name: "PHP/Laravel", proficiency: "advanced" },
      { name: "Git", proficiency: "advanced" },
    ],
    soft: [
      { name: "Problem Solving" },
      { name: "Time Management" },
      { name: "Orientation to Detail" },
      { name: "Analytical Thinking" },
      { name: "Teamwork" },
    ],
    languages: [
      { name: "Indonesian", level: "Native" },
      { name: "English", level: "Professional Working" },
      { name: "Japanese", level: "Basic" },
    ]
  }

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white';
      case 'advanced':
        return 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white';
      case 'intermediate':
        return 'bg-gradient-to-r from-indigo-400 to-purple-400 text-white';
      default:
        return 'bg-gradient-to-r from-indigo-300 to-purple-300 text-white';
    }
  }

  return (
    <section id="skills" className="scroll-mt-16 relative">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full filter blur-3xl opacity-30" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text flex items-center gap-3">
            <Code2 className="w-8 h-8 text-indigo-600" />
            Skills & Expertise
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-indigo-50"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-800">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${getProficiencyColor(skill.proficiency)}`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-indigo-50"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-indigo-50"
          >
            <div className="flex items-center gap-3 mb-6">
              <Languages className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">Languages</h3>
            </div>
            <div className="space-y-3">
              {skills.languages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-700 font-medium">{language.name}</span>
                  <span className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                    {language.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills