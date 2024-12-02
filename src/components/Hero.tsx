import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_600px_at_50%_50%,rgba(99,102,241,0.1),transparent)]" />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="mb-8 relative"
      >
        <div className="w-48 h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse" />
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQEICy7uAJnVmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726454284055?e=1738800000&v=beta&t=cj2ODyA0He1ua4fYG3WKDfjrsJ5qCnw7UW2KEsNHIo0"
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl relative z-10"
          />
        </div>
      </motion.div>
      
      <div className="h-[80px] mb-4">
        <TypeAnimation
          sequence={[
            'BIMA PRAWANG SAPUTRA',
            2000,
            '',
            500,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-5xl md:text-6xl font-bold heading-serif gradient-text"
        />
      </div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl md:text-3xl font-bold heading-serif mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
      >
        FULLSTACK DEVELOPER
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap justify-center gap-6 mb-12"
      >
        {[
          { icon: Phone, href: "tel:+6282275637656", text: "+62 822-7563-7656" },
          { icon: Mail, href: "mailto:bimapopo345@gmail.com", text: "bimapopo345@gmail.com" },
          { icon: Linkedin, href: "https://linkedin.com/in/bimaprawangsaputra", text: "LinkedIn" },
          { icon: Github, href: "https://github.com/bimapopo345", text: "GitHub" }
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.icon === Linkedin || item.icon === Github ? "_blank" : undefined}
            rel={item.icon === Linkedin || item.icon === Github ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -3 }}
          >
            <item.icon size={20} className="text-primary-600" />
            <span className="text-gray-700">{item.text}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8"
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-primary-600" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

export default Hero