import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProjectModalProps {
  isOpen: boolean
  closeModal: () => void
  project: {
    title: string
    company: string
    location: string
    period: string
    details: (string | JSX.Element)[]
  }
}

const ProjectModal = ({ isOpen, closeModal, project }: ProjectModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl glass-card p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold heading-serif gradient-text"
                  >
                    {project.title}
                  </Dialog.Title>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="mt-2">
                  <p className="text-primary-600 font-medium">{project.company}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {project.location} | {project.period}
                  </p>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Project Details:</h4>
                    <ul className="space-y-3">
                      {project.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                          <span>{typeof detail === 'string' ? detail : detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full inline-flex justify-center rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:from-primary-700 hover:to-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 transition-all duration-200"
                    onClick={closeModal}
                  >
                    Close
                  </motion.button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ProjectModal