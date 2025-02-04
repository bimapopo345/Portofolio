import { motion } from "framer-motion";
import { Desktop, Users, Translate, Brain } from "@phosphor-icons/react";

const Skills = () => {
  const skills = {
    technical: [
      { name: "HTML/CSS", proficiency: "expert" },
      { name: "JavaScript", proficiency: "expert" },
      { name: "TypeScript", proficiency: "advanced" },
      { name: "React.js", proficiency: "expert" },
      { name: "Next.js", proficiency: "advanced" },
      { name: "Node.js", proficiency: "advanced" },
      { name: "PHP", proficiency: "advanced" },
      { name: "Laravel", proficiency: "advanced" },
      { name: "CodeIgniter", proficiency: "intermediate" },
      { name: "PostgreSQL", proficiency: "advanced" },
      { name: "MongoDB", proficiency: "intermediate" },
      { name: "MySQL", proficiency: "advanced" },
      { name: "TailwindCSS", proficiency: "expert" },
      { name: "Bootstrap", proficiency: "expert" },
      { name: "SASS", proficiency: "advanced" },
      { name: "Git/GitHub", proficiency: "expert" },
      { name: "RESTful API", proficiency: "expert" },
      { name: "Docker", proficiency: "intermediate" },
    ],
    frameworks: [
      { name: "React.js", type: "frontend" },
      { name: "Next.js", type: "frontend" },
      { name: "Laravel", type: "backend" },
      { name: "Express.js", type: "backend" },
      { name: "CodeIgniter", type: "backend" },
      { name: "TailwindCSS", type: "styling" },
      { name: "Bootstrap", type: "styling" },
    ],
    soft: [
      { name: "Problem Solving" },
      { name: "Time Management" },
      { name: "Detail Oriented" },
      { name: "Analytical Thinking" },
      { name: "Team Collaboration" },
      { name: "Project Leadership" },
    ],
    languages: [
      { name: "Indonesian", level: "Native" },
      { name: "English", level: "Intermediate" },
      { name: "Japanese", level: "Beginner" },
    ],
  };

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "expert":
        return "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20";
      case "advanced":
        return "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20";
      case "intermediate":
        return "bg-gradient-to-r from-sky-400 to-blue-400 text-white shadow-lg shadow-sky-500/20";
      default:
        return "bg-gradient-to-r from-gray-400 to-slate-400 text-white";
    }
  };

  const getFrameworkColor = (type: string) => {
    switch (type) {
      case "frontend":
        return "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/20";
      case "backend":
        return "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/20";
      case "styling":
        return "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/20";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500 text-white";
    }
  };

  return (
    <section id="skills" className="scroll-mt-16 relative">
      {/* Modern gradient decorations */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-purple-400/20 via-indigo-400/20 to-blue-400/20 rounded-full filter blur-3xl opacity-30 animate-pulse-soft" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-full filter blur-3xl opacity-30 animate-pulse-soft" />

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
            <Brain className="w-8 h-8 text-indigo-600" weight="fill" />
            Skills & Expertise
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="modern-card hover-card-rise">
              <div className="flex items-center gap-3 mb-6">
                <Desktop className="w-6 h-6 text-indigo-600" weight="fill" />
                <h3 className="text-xl font-bold gradient-text-primary">
                  Technical Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${getProficiencyColor(
                      skill.proficiency
                    )}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="modern-card hover-card-rise">
              <div className="flex items-center gap-3 mb-6">
                <Desktop className="w-6 h-6 text-pink-600" weight="fill" />
                <h3 className="text-xl font-bold gradient-text-secondary">
                  Frameworks & Libraries
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((framework, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${getFrameworkColor(
                      framework.type
                    )}`}
                  >
                    {framework.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="modern-card hover-card-rise"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-emerald-600" weight="fill" />
                <h3 className="text-xl font-bold text-gray-800">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.soft.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="modern-card hover-card-rise"
            >
              <div className="flex items-center gap-3 mb-6">
                <Translate className="w-6 h-6 text-blue-600" weight="fill" />
                <h3 className="text-xl font-bold text-gray-800">Languages</h3>
              </div>
              <div className="space-y-4">
                {skills.languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50"
                  >
                    <span className="text-gray-700 font-medium">
                      {language.name}
                    </span>
                    <span className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/20">
                      {language.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
