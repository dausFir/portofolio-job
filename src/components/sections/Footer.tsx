import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-primary mb-1">
              AF<span className="text-secondary">.</span>
            </h3>
            <p className="text-sm text-gray-500 font-medium">
              Achmad Firdaus Olliv Pratama &copy; {currentYear}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="mailto:a.firdausop@gmail.com" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-secondary hover:border-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            {/* Using # for social links since not provided, but structurally complete */}
            <a 
              href="https://www.linkedin.com/in/achmad-firdaus-085bb0134/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-secondary hover:border-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/dausFir?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-secondary hover:border-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}