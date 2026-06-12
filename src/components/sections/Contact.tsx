import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Let's Build Something Great.
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
              Currently open to new opportunities, challenging architectures, and leadership roles in backend development.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="mailto:a.firdausop@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white transition-colors w-full md:w-auto justify-center group"
            >
              <div className="p-2 bg-secondary/20 rounded-lg group-hover:bg-secondary/40 transition-colors">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <span className="font-medium tracking-wide">a.firdausop@gmail.com</span>
            </a>

            <a 
              href="tel:+6282220278296"
              className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white transition-colors w-full md:w-auto justify-center group"
            >
              <div className="p-2 bg-secondary/20 rounded-lg group-hover:bg-secondary/40 transition-colors">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <span className="font-medium tracking-wide">+62 822 2027 8296</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white border-none h-14 px-8 text-base shadow-lg shadow-secondary/20 group"
              asChild
            >
              <a href="mailto:a.firdausop@gmail.com">
                Send Email
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-base"
              asChild
            >
              <a href="tel:+6282220278296">
                Call Now
              </a>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}