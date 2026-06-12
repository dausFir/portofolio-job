import { motion } from "framer-motion";
import { 
  SiSpringboot, SiCodeigniter, SiLaravel, SiNodedotjs, SiGo,
  SiMysql, SiPostgresql, SiMongodb,
  SiDocker, SiGit,
  SiJavascript, SiHtml5, SiBootstrap, SiReact,
  SiGithub, SiOpenai
} from "react-icons/si";
import { Server, Database, Cloud, Layout, Layers, Bot } from "lucide-react";

const TECH_CATEGORIES = [
  {
    title: "Backend & Architecture",
    icon: Server,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    items: [
      { name: "Go (Gin Gonic)", icon: SiGo },
      { name: "Java (Spring Boot)", icon: SiSpringboot },
      { name: "PHP (CodeIgniter)", icon: SiCodeigniter },
      { name: "Laravel", icon: SiLaravel },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Clean Architecture", icon: null },
      { name: "REST API Design", icon: null },
      { name: "OOP & Design Patterns", icon: null },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Oracle", icon: null },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL (schema & indexing)", icon: null },
    ]
  },
  {
    title: "AI & Developer Tools",
    icon: Bot,
    color: "bg-violet-50 text-violet-600 border-violet-100",
    items: [
      { name: "GitHub Copilot", icon: SiGithub },
      { name: "Claude Desktop", icon: null },
      { name: "ChatGPT", icon: SiOpenai },
      { name: "Ollama", icon: null },
      { name: "Prompt Engineering", icon: null },
    ]
  },
  {
    title: "Architecture Patterns",
    icon: Layers,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    items: [
      { name: "Microservices", icon: null },
      { name: "RESTful APIs", icon: null },
      { name: "Event-Driven", icon: null },
      { name: "SOA", icon: null },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "CI/CD", icon: null },
    ]
  },
  {
    title: "Frontend (Basic)",
    icon: Layout,
    color: "bg-rose-50 text-rose-600 border-rose-100",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "HTML/CSS", icon: SiHtml5 },
      { name: "Bootstrap", icon: SiBootstrap },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function TechStack() {
  return (
    <section id="tech" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Tech Stack Ecosystem</h2>
          <div className="w-20 h-1 bg-secondary rounded-full" />
          <p className="mt-4 text-gray-500 max-w-2xl text-lg">
            Tools and technologies I use to build scalable, high-performance enterprise applications.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {TECH_CATEGORIES.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-lg ${category.color}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-100 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:border-secondary/30 hover:text-secondary transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {tech.icon && <tech.icon className="w-4 h-4" />}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}