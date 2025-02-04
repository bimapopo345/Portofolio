import React from "react";
import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin } from "lucide-react";

interface Award {
  title: string;
  organization: string;
  location: string;
  date: string;
  details: string[];
  color: string;
}

const Awards: React.FC = () => {
  const awards: Award[] = [
    {
      title: "First Place, NetAcad Riders 2024",
      organization: "Cisco Networking Academy",
      location: "Bogor, Indonesia",
      date: "April, 2024",
      details: [
        "Secured the top position in a prestigious competition focused on Computer Networking Skills",
        "Represented Indonesia in the Round 2 Asia Pacific Level, competing against top candidates from across the region",
        "Recognized for exceptional proficiency in network configuration, troubleshooting, and use of Cisco technologies",
      ],
      color: "from-amber-500 to-yellow-500",
    },
    {
      title: "Top Participant Award - Quality Assurance Class Batch 10",
      organization: "Talenthub Indonesia",
      location: "Bogor, Indonesia",
      date: "October, 2023",
      details: [
        "Certified Top Participant in Quality Assurance Class - Talent Class Batch 10",
        "Excelled in Quality Assurance, Testing, Software Quality Assurance, Postman API, SDLC, Scrum, Agile Methodologies",
        "Demonstrated strong skills in ensuring software quality and effective collaboration within Agile teams",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Python Data Science Top Performer Award",
      organization: "SanberCode",
      location: "Bogor, Indonesia",
      date: "September, 2023",
      details: [
        "Recipient of the Python Data Science Excellence Award",
        "Demonstrated superior mastery in Python and data analysis",
        "Excelled in model performance evaluation and advanced data transformation techniques",
      ],
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section id="awards" className="section-modern scroll-mt-16 py-20">
      <div className="pattern-grid absolute inset-0 opacity-[0.05]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          <h2 className="heading-serif text-4xl gradient-text-secondary flex items-center gap-3">
            <Trophy className="w-8 h-8 text-amber-600" />
            Awards & Honors
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="modern-card p-8 relative overflow-hidden">
                <div
                  className={`absolute -top-0.5 left-0 right-0 h-1.5 bg-gradient-to-r ${award.color}`}
                />
                <div
                  className={`absolute -bottom-0.5 left-0 right-0 h-1.5 bg-gradient-to-r ${award.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {award.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="badge-modern flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {award.organization} | {award.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="badge-modern flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {award.date}
                    </span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <ul className="space-y-3">
                    {award.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;
