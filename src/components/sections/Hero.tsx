import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, ChevronRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const TAGLINES = [
  "4+ Years in Banking & Fintech",
  "Go & Java Backend Developer",
  "Clean Architecture Specialist",
  "AI-Augmented Engineering"
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  const name = "ACHMAD FIRDAUS";

  return (
    <section 
      id="top" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
    >
      {/* Background Abstract Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-[100px] mix-blend-multiply"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-1/4 -left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-50/40 blur-[80px] mix-blend-multiply"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary mb-6 border border-secondary/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-xs font-medium tracking-wide uppercase">Available for new opportunities</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-primary leading-[1.1] mb-4"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            {name.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-xl md:text-3xl font-medium text-gray-600 mb-2 font-display">
              SENIOR BACKEND DEVELOPER <span className="text-gray-300">|</span> ASSISTANT MANAGER
            </h2>
            
            <div className="h-8 overflow-hidden mb-10">
              <motion.div
                key={taglineIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-lg md:text-xl text-secondary font-medium"
              >
                {TAGLINES[taglineIndex]}
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-md px-8 py-6 text-base shadow-lg shadow-primary/20 group w-full sm:w-auto"
              onClick={() => scrollToSection("experience")}
              data-testid="button-view-work"
            >
              View My Work
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-gray-200 hover:border-secondary hover:text-secondary rounded-md px-8 py-6 text-base bg-white w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
              data-testid="button-get-in-touch"
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a href="tel:+6282220278296" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-secondary" />
              +62 822 2027 8296
            </a>
            <a href="mailto:a.firdausop@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4 text-secondary" />
              a.firdausop@gmail.com
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-gray-400 hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest font-medium"
        >
          Scroll
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}