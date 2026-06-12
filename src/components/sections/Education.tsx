import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Education</h2>
            <div className="w-20 h-1 bg-secondary rounded-full mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-primary transform group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <GraduationCap size={120} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium mb-4 border border-gray-100">
                  <Award className="w-4 h-4 text-secondary" />
                  <span>Bachelor's Degree</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Bachelor's Degree (S.Kom)</h3>
                <p className="text-lg text-gray-700 font-medium">Universitas Amikom Yogyakarta</p>
                <p className="text-sm text-gray-500 mt-1">D.I. Yogyakarta, Indonesia</p>
              </div>
              <div className="md:text-right">
                <div className="inline-block bg-primary text-white font-medium px-4 py-2 rounded-lg text-sm mb-2 shadow-sm">
                  Graduated 2021
                </div>
                <div className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary font-semibold px-3 py-1.5 rounded-lg text-sm">
                  GPA: 3.72 / 4.00
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-50">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-700 font-medium">Backend Developer Course</span>
                <span className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-700 font-medium">Junior Web Development Certification</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}