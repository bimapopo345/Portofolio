import {
  Phone,
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  CaretDown,
} from "@phosphor-icons/react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center relative">
      {/* Modern background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_50%_50%,rgba(56,189,248,0.1),transparent)]" />
        <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl" />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="mb-12 relative"
      >
        <div className="w-48 h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse" />
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQEICy7uAJnVmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726454284055?e=1738800000&v=beta&t=cj2ODyA0He1ua4fYG3WKDfjrsJ5qCnw7UW2KEsNHIo0"
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl relative z-10"
          />
        </div>
      </motion.div>

      <div className="h-[80px] mb-4">
        <TypeAnimation
          sequence={["BIMA PRAWANG SAPUTRA", 2000, "", 500]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-5xl md:text-6xl font-bold heading-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl md:text-3xl font-bold heading-serif mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600"
      >
        FULLSTACK DEVELOPER
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {[
          {
            Icon: Phone,
            href: "tel:+6282275637656",
            text: "+62 822-7563-7656",
          },
          {
            Icon: EnvelopeSimple,
            href: "mailto:bimapopo345@gmail.com",
            text: "bimapopo345@gmail.com",
          },
          {
            Icon: LinkedinLogo,
            href: "https://linkedin.com/in/bimaprawangsaputra",
            text: "LinkedIn",
          },
          {
            Icon: GithubLogo,
            href: "https://github.com/bimapopo345",
            text: "GitHub",
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={
              item.Icon === LinkedinLogo || item.Icon === GithubLogo
                ? "_blank"
                : undefined
            }
            rel={
              item.Icon === LinkedinLogo || item.Icon === GithubLogo
                ? "noopener noreferrer"
                : undefined
            }
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/80 backdrop-blur-lg border border-blue-100
              hover:border-blue-200 hover:bg-white/90 hover:shadow-lg hover:shadow-blue-500/10 
              transition-all duration-300"
            whileHover={{ y: -3 }}
          >
            <item.Icon size={20} className="text-blue-600" weight="bold" />
            <span className="text-gray-700 font-medium">{item.text}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
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
            className="p-2 rounded-full bg-white/80 backdrop-blur-lg border border-blue-100
              hover:border-blue-200 hover:bg-white/90 transition-all duration-300"
          >
            <CaretDown size={24} className="text-blue-600" weight="bold" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
