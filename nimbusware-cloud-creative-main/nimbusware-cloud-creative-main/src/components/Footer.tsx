import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Nimbusware</h3>
            <p className="text-primary-foreground/80 mb-4">
              Transforming ideas into digital excellence with innovative solutions that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-glow transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-glow transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-glow transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-glow transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-primary-glow transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-primary-glow transition-colors">App Development</a></li>
              <li><a href="#services" className="hover:text-primary-glow transition-colors">SEO Enhancement</a></li>
              <li><a href="#services" className="hover:text-primary-glow transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-primary-glow transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-glow transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary-glow transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary-glow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">nimbusware2025@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 9324405985</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} Nimbusware. All rights reserved. | Built with passion and innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;