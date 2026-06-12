import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

const CERTIFICATIONS = [
  {
    name: "Junior Web Developer",
    issuer: "BNSP",
    description: "Nationally recognized professional competency certification for web development",
    year: "Active"
  },
  {
    name: "Backend Developer",
    issuer: "Pintaar",
    description: "Certified backend development skills covering API design, databases, and server-side architecture",
    year: "Active"
  },
  {
    name: "Full-Stack Developer Bootcamp",
    issuer: "Lawencon",
    description: "Intensive full-stack engineering program covering frontend, backend, and enterprise system integration",
    year: "Active"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="mb-16 md:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Certifications & Achievements</h2>
            <div className="w-20 h-1 bg-secondary rounded-full md:mx-auto" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group flex gap-5 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-secondary/30 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-gray-100 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 leading-tight">{cert.name}</h3>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">{cert.issuer}</div>
                  <p className="text-sm text-gray-500 mb-3">{cert.description}</p>
                  <div className="inline-block px-2.5 py-1 bg-gray-100 text-xs font-semibold text-gray-600 rounded">
                    {cert.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}