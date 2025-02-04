import { motion } from "framer-motion";
import { User } from "@phosphor-icons/react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-16 relative">
      {/* Modern decorative elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-red-400/20 rounded-full filter blur-3xl opacity-30 animate-pulse-soft" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-full filter blur-3xl opacity-30 animate-pulse-soft" />
      <div className="absolute inset-0 pattern-grid opacity-[0.02]" />

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
            <User className="w-8 h-8 text-indigo-600" weight="bold" />
            About Me
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>

        <motion.div
          className="modern-card p-8 relative overflow-hidden"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute -top-0.5 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          <div className="absolute -bottom-0.5 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />

          <p className="text-gray-700 leading-relaxed text-lg relative z-10">
            <span className="text-2xl font-semibold gradient-text-primary">
              Hello!{" "}
            </span>
            I am a sixth-semester Computer Engineering student at the College of
            Vocational Studies, IPB University.
            <span className="block mt-4">
              My journey in technology has equipped me with expertise in
              <span className="font-semibold text-indigo-600">
                {" "}
                Full-Stack Web Development
              </span>
              , mastering various technologies including:
            </span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Frontend",
                items: [
                  "HTML/CSS",
                  "React.js",
                  "Next.js",
                  "TailwindCSS",
                  "SASS",
                  "Bootstrap",
                ],
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                title: "Backend",
                items: [
                  "Node.js",
                  "PHP",
                  "Laravel",
                  "CodeIgniter",
                  "RESTful API",
                  "MongoDB",
                ],
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "Tools & Skills",
                items: [
                  "Git/GitHub",
                  "AJAX",
                  "TypeScript",
                  "Responsive Design",
                  "UI/UX",
                  "Testing",
                ],
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass-morphism p-6 hover-card-rise"
              >
                <div
                  className={`h-1 w-20 rounded-full bg-gradient-to-r ${category.gradient} mb-4`}
                />
                <h3 className="text-xl font-bold gradient-text-primary mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}
                      />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-gray-700 leading-relaxed"
          >
            Currently participating in multiple bootcamp programs to deepen my
            expertise, I am constantly expanding my skills across different
            domains of software development. My detail-oriented approach,
            combined with a passion for creating exceptional web experiences,
            drives me to deliver innovative solutions in every project I
            undertake.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
