import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const EXPERIENCES = [
  {
    id: "keb-hana",
    role: "Assistant Manager, IT Developer (Backend)",
    company: "PT Bank KEB Hana Indonesia",
    location: "Jakarta Selatan, Indonesia",
    period: "2025 – Present",
    bullets: [
      "Develop and maintain backend services for enterprise-grade core banking applications using Java (Spring Boot) and microservices architecture, supporting 8+ active third-party integrations.",
      "Designed and refined complex banking notification logic to precisely differentiate individual (LB) vs. corporate (Hana) event classifications, reducing misclassified alerts by ~35%.",
      "Optimized SQL queries and system performance for the channeling module, cutting average query latency by ~40% and maintaining 99.9% uptime under high-volume financial transaction loads.",
      "Collaborate closely with PMs, QA, and external vendors across the full development lifecycle; proactively surface blockers and contribute to technical design discussions.",
      "Conduct strict code reviews and mentor junior developers, enforcing coding conventions to maintain clean, readable, and well-tested code."
    ]
  },
  {
    id: "lawencon",
    role: "IT Consultant (Backend)",
    company: "PT Lawencon Internasional",
    location: "Jakarta Selatan — Placement at Bank Mandiri",
    period: "2022 – 2024",
    bullets: [
      "Designed and implemented microservices architecture and REST APIs for Bank Mandiri's enterprise lending platform (KUM/KUR – Mandiri Pintar) using Spring Boot, serving 50,000+ concurrent users.",
      "Optimized database architectures and backend services under high transaction loads (peak 5,000+ TPS), applying OOP principles and industry-standard design patterns.",
      "Collaborated with cross-functional front-end teams (React, Angular) to integrate 20+ features from PRD brief through to production release.",
      "Provided technical consultancy to project stakeholders, ensuring strict compliance with best practices and requirements across the full SDLC."
    ]
  },
  {
    id: "alona",
    role: "IT Officer, Backend Developer",
    company: "PT Alona Indonesia Raya",
    location: "Tangerang Selatan, Indonesia",
    period: "2021 – 2022",
    bullets: [
      "Developed and deployed backend modules for internal web applications using PHP (CodeIgniter) and MySQL across the full Software Development Life Cycle (SDLC).",
      "Enhanced UI functionality and user workflows by integrating Bootstrap and JavaScript (jQuery, GrapeJS), improving key task completion flows for 80+ internal users.",
      "Assisted in debugging and troubleshooting application issues, contributing to improved system reliability and internal knowledge sharing."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-16 md:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Employment Chronology</h2>
          <div className="w-20 h-1 bg-secondary rounded-full md:mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-[27px] md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-sm z-10 transform -translate-x-1/2 mt-6 md:mt-0 transition-transform group-hover:scale-150"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />

                  {/* Left Side (Empty on mobile, Content on desktop if even) */}
                  <div className={`hidden md:block w-[calc(50%-40px)] ${isEven ? 'text-right pr-8' : 'order-last text-left pl-8'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="h-full flex flex-col justify-center"
                    >
                      <h4 className="text-xl font-bold text-primary">{exp.role}</h4>
                      <div className="flex items-center gap-2 mt-1 text-gray-500 justify-end flex-row-reverse">
                        <span className="font-medium text-gray-700">{exp.company}</span>
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">{exp.location}</div>
                      <div className="flex items-center gap-2 mt-2 text-sm text-secondary font-medium justify-end flex-row-reverse">
                        <span>{exp.period}</span>
                        <Calendar className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Side (Content on mobile, Cards on desktop) */}
                  <motion.div 
                    className={`w-full pl-[70px] md:pl-0 md:w-[calc(50%-40px)] ${isEven ? 'md:order-last md:pl-8' : 'md:pr-8'}`}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      {/* Mobile Header (Hidden on Desktop) */}
                      <div className="md:hidden mb-4">
                        <h4 className="text-xl font-bold text-primary">{exp.role}</h4>
                        <div className="font-medium text-gray-700 mt-1">{exp.company}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{exp.location}</div>
                        <div className="text-sm text-secondary font-medium mt-1">{exp.period}</div>
                      </div>

                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + (idx * 0.1) }}
                          >
                            <ChevronRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}