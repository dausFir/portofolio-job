import { motion } from "framer-motion";
import { ExternalLink, Cpu, Users, Github } from "lucide-react";

const PROJECTS = [
  {
    id: "ai-clipper",
    icon: Cpu,
    tag: "AI / Automation",
    tagColor: "bg-violet-50 text-violet-600 border-violet-100",
    title: "AI Auto-Clipper System",
    description:
      "Engineered automated media processing modules by integrating external APIs and local LLM models (Ollama). Applied prompt engineering and dynamic output parsing to streamline content generation and video editing workflows.",
    impact: "~70% reduction in manual editing time",
    impactColor: "text-violet-600",
    stack: ["Go", "Ollama", "LLM APIs", "Prompt Engineering", "FFmpeg"]
  },
  {
    id: "genealogy",
    icon: Users,
    tag: "Full-Stack",
    tagColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    title: "Family Genealogy Platform",
    description:
      "Architected a scalable data management application with strict adherence to Clean Architecture principles, supporting efficient relational data handling for 300+ family records.",
    impact: "300+ records, Clean Architecture",
    impactColor: "text-emerald-600",
    stack: ["Go (Gin Gonic)", "PostgreSQL", "React", "Clean Architecture"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Independent Projects
          </h2>
          <div className="w-20 h-1 bg-secondary rounded-full" />
          <p className="mt-4 text-gray-500 max-w-2xl text-lg">
            Personal engineering initiatives exploring AI integrations, automation, and scalable architecture.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                data-testid={`card-project-${project.id}`}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-secondary/20 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border ${project.tagColor}`}>
                    <Icon className="w-4 h-4" />
                    {project.tag}
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-secondary transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className={`text-sm font-semibold mb-5 ${project.impactColor}`}>
                  {project.impact}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-md text-xs font-medium text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://github.com/dausFir?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-github-repos"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary/90 shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <Github className="w-4 h-4" />
            View All Repositories on GitHub
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
