import { motion } from "framer-motion";
import { X } from "@phosphor-icons/react";

interface ProjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
  project: {
    title: string;
    company: string;
    location: string;
    period: string;
    details: (string | JSX.Element)[];
  };
}

const ProjectModal = ({ isOpen, closeModal, project }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative max-w-2xl w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          <X size={24} className="text-gray-500" weight="bold" />
        </button>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {project.title}
          </h3>
          <div className="text-gray-600 mb-6">
            <p>{project.company}</p>
            <p>
              {project.location} | {project.period}
            </p>
          </div>

          <div className="space-y-4">
            {project.details.map((detail, index) => (
              <div key={index} className="text-gray-700">
                {detail}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
