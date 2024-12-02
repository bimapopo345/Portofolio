import { motion } from 'framer-motion'
import { Award, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Programming Training",
      organization: "Alkademi",
      location: "Bogor, Indonesia",
      date: "March, 2024",
      details: [
        "Completed an intensive training on full stack development with Jabar Digital Academy, Alkademi, and AWS InCommunities"
      ],
      certificate: "https://sidebar.jabarprov.go.id/v/B820BC3DAC",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Cloud (Talent Scouting Academy)",
      organization: "Digital Talent Scholarship",
      location: "Bogor, Indonesia",
      date: "March, 2024",
      details: [
        "Completed AWS Cloud Engineer training under the Talent Scouting Academy Digital Talent Scholarship 2024 by Pusbang Proserti"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend Developer",
      organization: "SMKDEV",
      location: "Bogor, Indonesia",
      date: "December, 2023",
      details: [
        "Completed an intensive backend development course focusing on Golang through SMKDEV Bootcamp Scholarship",
        "Gained hands-on experience and advanced programming skills in Go (Programming Language) and Back-End Web Development"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Certified Ethical Hacker & IT Countermeasures Specialist",
      organization: "Course-Net Indonesia",
      location: "Bogor, Indonesia",
      date: "October, 2023",
      details: [
        "Completed a 15-hour training in Ethical Hacking and IT Countermeasures from Course-Net, accredited by Prakerja",
        "Acquired advanced skills for Cyber Security, Pentesting, and White Hat Hacking",
        "Focus on critical SOC competencies as per SKKNI No. 391 of 2020"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Quality Assurance Top Participant - Batch 10",
      organization: "Talenthub Indonesia",
      location: "Bogor, Indonesia",
      date: "October, 2023",
      details: [
        "Certified Top Participant in Quality Assurance Class - Talent Class Batch 10",
        "Excelled in Quality Assurance, Testing, Software Quality Assurance, Postman API",
        "Mastered SDLC, Scrum, Agile Methodologies, and Report Writing"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Quality Assurance Automation",
      organization: "SanberCode",
      location: "Bogor, Indonesia",
      date: "October, 2023",
      details: [
        "Successfully completed a comprehensive Quality Assurance Automation course",
        "Enhanced skills in test automation and API testing"
      ],
      certificate: "https://sanbercode.com/certificate/em/de734b23-cc42-4e64-b997-cabf84ad98fe",
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Web Pentest & Bug Bounty",
      organization: "SanberCode",
      location: "Bogor, Indonesia",
      date: "October, 2023",
      details: [
        "Successfully completed an intensive Web Pentest & Bug Bounty program",
        "Mastered advanced cybersecurity techniques and tools"
      ],
      certificate: "https://sanbercode.com/certificate/in/1ad0d0ff-fa4d-4ad9-a243-ab3e15443789",
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Python Data Science",
      organization: "SanberCode",
      location: "Bogor, Indonesia",
      date: "September, 2023",
      details: [
        "Top Performer Award recipient in Data Science Bootcamp",
        "Mastered Python, data manipulation with Pandas, and machine learning with Scikit-Learn",
        "Excelled in data visualization using Matplotlib and Seaborn"
      ],
      certificate: "https://sanbercode.com/certificate/in/c71e8955-f2ea-45cd-8218-9583b51e212a",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quality Assurance Engineer",
      organization: "PINTAR",
      location: "Bogor, Indonesia",
      date: "September, 2023",
      details: [
        "Completed 113-day intensive online Quality Assurance course",
        "Certified by Certificate Organizing Body, verified by Pintar and Prakerja",
        "Enhanced software testing and quality assurance protocols"
      ],
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section id="certifications" className="scroll-mt-16 relative">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full filter blur-3xl opacity-30" />
      
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
            <Award className="w-8 h-8 text-indigo-600" />
            Certifications
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-indigo-50 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`} />
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{cert.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{cert.organization} | {cert.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {cert.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {cert.certificate && (
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                )}

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications