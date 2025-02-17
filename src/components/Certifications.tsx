import React from "react";
import { motion } from "framer-motion";
import {
  Certificate,
  Calendar,
  MapPin,
  ArrowSquareOut,
} from "@phosphor-icons/react";

interface Certification {
  title: string;
  organization: string;
  location: string;
  date: string;
  details: string[];
  certificate?: string;
  color: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Mini Bootcamp: QA Engineer",
      organization: "Digital Skola",
      location: "Bogor, Indonesia",
      date: "September, 2024",
      details: [
        "Completed an intensive QA Bootcamp focusing on Quality Assurance Fundamentals, Testing & Bug Management",
        "Learned Programming Fundamentals, Advanced Programming, GIT, API Testing and Automation",
        "Mastered Load Testing, Web UI Automation, and project implementation",
        'Graduated with an "Excellent" rating and a final score of 93.7',
      ],
      certificate:
        "https://drive.google.com/drive/folders/1zaGQXiSgh2M2qPdUw8_bMp4wjJoqiz-a?hl=id",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Mini Bootcamp: DevOps Engineer",
      organization: "Digital Skola",
      location: "Bogor, Indonesia",
      date: "September, 2024",
      details: [
        "Completed a comprehensive DevOps Bootcamp focusing on Linux/Unix Administration, Docker, Kubernetes",
        "Mastered CI/CD with Jenkins, Bash Scripting, Git & GitHub, Networking Fundamentals, and Ansible",
        'Graduated with an "Excellent" rating and a final score of 98.3',
      ],
      certificate:
        "https://s3-bucket-public.sgp1.digitaloceanspaces.com/certificates/MB/DOE/003-MB-CPN-DOE-IX-2024.png",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Full Stack Programming Training",
      organization: "Alkademi",
      location: "Bogor, Indonesia",
      date: "March, 2024",
      details: [
        "Completed an intensive training on full stack development with Jabar Digital Academy, Alkademi, and AWS InCommunities",
        "Mastered modern web development technologies and cloud integration practices",
        "Developed real-world projects using industry-standard tools and methodologies",
      ],
      certificate: "https://sidebar.jabarprov.go.id/v/B820BC3DAC",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Cloud (Talent Scouting Academy)",
      organization: "Digital Talent Scholarship",
      location: "Bogor, Indonesia",
      date: "March, 2024",
      details: [
        "Completed AWS Cloud Engineer training under the Talent Scouting Academy Digital Talent Scholarship 2024",
        "Mastered cloud infrastructure, deployment, and management using AWS services",
        "Developed practical skills in cloud architecture and solutions design",
      ],
      certificate:
        "https://drive.google.com/drive/folders/1EYMtgCATVS6Kdh_caUF7GxSyyuiUQWX1?hl=id",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "DATA ANALYSIS: FULLSTACK INTENSIVE BOOTCAMP",
      organization: "MySkill",
      location: "Bogor, Indonesia",
      date: "March, 2024",
      details: [
        "Completed intensive training focusing on Data Analysis, Basic Statistics, Data Formatting & Cleansing",
        "Mastered SQL, Python, and Data Visualization techniques",
        "Applied analytical skills to real-world data scenarios and business cases",
      ],
      certificate:
        "https://drive.google.com/drive/folders/15JYMjybPeQB4IIQLRfTJdZhqAkVKVC1u?hl=id",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend Developer",
      organization: "SMKDEV",
      location: "Bogor, Indonesia",
      date: "December, 2023",
      details: [
        "Completed an intensive backend development course focusing on Golang through SMKDEV Bootcamp Scholarship",
        "Gained hands-on experience and advanced programming skills in Go (Programming Language)",
        "Developed robust backend systems and RESTful APIs using Go ecosystem",
      ],
      certificate:
        "https://drive.google.com/drive/folders/1C2snLuYudPFXVhq0YRBn9rlEp2Djfyjn?hl=id",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Certified Ethical Hacker & IT Countermeasures Specialist",
      organization: "Course-Net Indonesia",
      location: "Bogor, Indonesia",
      date: "October, 2023",
      details: [
        "Completed 15-hour training in Ethical Hacking and IT Countermeasures, accredited by Prakerja",
        "Acquired advanced skills in Cyber Security, Pentesting, and White Hat Hacking",
        "Mastered critical SOC competencies as per SKKNI No. 391 of 2020",
      ],
      certificate:
        "https://drive.google.com/drive/folders/1Fo9WOU5T87Zcaw2paHmF-TbkWVmHZy3z?hl=id",
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Quality Assurance Automation",
      organization: "SanberCode",
      location: "Bogor, Indonesia",
      date: "October, 2023",
      details: [
        "Successfully completed a comprehensive Quality Assurance Automation course",
        "Enhanced skills in test automation frameworks and API testing methodologies",
        "Implemented automated testing solutions for web applications",
      ],
      certificate:
        "https://sanbercode.com/certificate/em/de734b23-cc42-4e64-b997-cabf84ad98fe",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Web Pentest & Bug Bounty",
      organization: "SanberCode",
      location: "Bogor, Indonesia",
      date: "October, 2023",
      details: [
        "Successfully completed an intensive Web Pentest & Bug Bounty program",
        "Mastered advanced cybersecurity techniques and pentesting tools",
        "Practiced ethical hacking methodologies and vulnerability assessment",
      ],
      certificate:
        "https://sanbercode.com/certificate/in/1ad0d0ff-fa4d-4ad9-a243-ab3e15443789",
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: "Front End Developer",
      organization: "Harisenin.com",
      location: "Bogor, Indonesia",
      date: "February, 2023",
      details: [
        "Received Certificate of Excellence in Front End Development",
        "Mastered HTML, CSS, JavaScript, Git, GitHub, and React JS",
        'Successfully completed the "Staycation Yuk Website" project',
      ],
      certificate:
        "https://drive.google.com/drive/folders/1MQF9nG9orzrz1KRm0Ac2Vb2RyzIxlUga?hl=id",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section id="certifications" className="section-modern scroll-mt-16 py-20">
      <div className="pattern-grid absolute inset-0 opacity-[0.05]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          <h2 className="heading-serif text-4xl gradient-text-primary flex items-center gap-3">
            <Certificate className="w-8 h-8 text-indigo-600" weight="fill" />
            Certifications
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
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
              <div className="modern-card p-8 relative overflow-hidden">
                <div
                  className={`absolute -top-0.5 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.color}`}
                />
                <div
                  className={`absolute -bottom-0.5 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="badge-modern flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" weight="bold" />
                      {cert.organization} | {cert.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="badge-modern flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" weight="bold" />
                      {cert.date}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-4">
                  {cert.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cert.color} flex-shrink-0`}
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {cert.certificate && (
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                  >
                    View Certificate{" "}
                    <ArrowSquareOut className="w-4 h-4" weight="bold" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
