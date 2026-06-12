import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Highlight Stats */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <motion.div 
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden group hover:border-secondary/30 transition-colors"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="relative z-10">
                <span className="text-5xl font-display font-bold text-primary mb-2 block">4+</span>
                <span className="text-lg font-medium text-gray-600 block">Years Experience</span>
                <p className="text-sm text-gray-500 mt-2">Specializing in high-performance enterprise systems.</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="bg-primary text-white rounded-2xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-3xl font-display font-bold mb-1 block">3</span>
                <span className="text-sm text-primary-foreground/80 font-medium">Companies</span>
                <p className="text-xs text-primary-foreground/60 mt-1">Banking & Enterprise</p>
              </motion.div>
              
              <motion.div 
                className="bg-secondary text-white rounded-2xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-3xl font-display font-bold mb-1 block text-white">AI</span>
                <span className="text-sm text-white/90 font-medium">Augmented</span>
                <p className="text-xs text-white/70 mt-1">Dev Workflow</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <motion.div 
            className="md:col-span-7 flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="text-xl leading-relaxed text-gray-800 font-medium mb-6">
                Backend Developer with 4+ years of experience building scalable, enterprise-grade applications and core banking systems.
              </p>
              <p className="mb-6 leading-relaxed">
                Proficient in Java (Spring Boot) and Go (Gin Gonic) with strong expertise in Clean Architecture, RESTful API design, and microservices. I have a proven track record in optimizing PostgreSQL databases, integrating complex enterprise logic, and delivering systems at scale — including platforms serving 50,000+ concurrent users and 5,000+ TPS.
              </p>
              <p className="leading-relaxed">
                I also actively leverage AI-assisted development tools — GitHub Copilot, Claude Desktop, ChatGPT, and Ollama — to accelerate coding, debugging, and testing workflows. Beyond code, I take pride in mentoring junior engineers, conducting rigorous code reviews, and driving technical initiatives that translate business requirements into reliable, production-grade software.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}