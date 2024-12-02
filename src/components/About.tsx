import { motion } from 'framer-motion'
import { UserCircle2 } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="scroll-mt-16 relative">
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full filter blur-3xl opacity-30" />

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
            <UserCircle2 className="w-8 h-8 text-indigo-600" />
            About Me
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
        </div>

        <motion.div
          className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-indigo-50 hover:shadow-indigo-100/50 transition-all duration-500"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-gray-700 leading-relaxed text-lg relative z-10">
            <span className="text-2xl font-semibold text-indigo-600">Hello! </span>
            I am a fifth-semester Computer Engineering student at the College of Vocational Studies, IPB University. 
            <span className="block mt-4">
              My journey in technology has equipped me with expertise in
              <span className="font-semibold text-indigo-600"> Full-Stack Web Development</span>, mastering various technologies including:
            </span>
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              { title: "Frontend", items: ["HTML/CSS", "React.js", "Next.js"] },
              { title: "Backend", items: ["Node.js", "PHP", "Laravel"] },
              { title: "Other", items: ["RESTful API", "SASS", "Tailwind"] }
            ].map((category, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-gradient-to-br from-white to-indigo-50 shadow-sm"
              >
                <h3 className="text-indigo-600 font-semibold mb-2">{category.title}</h3>
                <ul className="space-y-1 text-gray-600">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-700 leading-relaxed"
          >
            Currently participating in a Full-Stack Web Developer bootcamp program, 
            I am constantly expanding my skills and seeking new challenges. 
            My detail-oriented approach and passion for creating exceptional web experiences 
            drive me to excel in every project I undertake.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About