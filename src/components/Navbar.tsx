import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Certifications", to: "certifications" },
    { name: "Skills", to: "skills" },
    { name: "Awards", to: "awards" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-morphism shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold heading-serif gradient-text-primary"
          >
            BPS
          </motion.span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                className="relative px-4 py-2 group cursor-pointer"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative z-10 text-gray-600 group-hover:text-indigo-600 transition-colors duration-200"
                >
                  {item.name}
                </motion.span>
                <motion.span
                  className="absolute inset-0 bg-indigo-50/50 rounded-lg z-0 scale-0 group-hover:scale-100 transition-transform duration-200"
                  initial={false}
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-indigo-600" weight="bold" />
            ) : (
              <List className="h-6 w-6 text-indigo-600" weight="bold" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                className="block px-3 py-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
