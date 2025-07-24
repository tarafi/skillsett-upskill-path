import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">S</span>
              </div>
              <span className="text-xl font-bold">skillsett.in</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Democratizing access to research and upskilling through quality education,
              mentoring, and community-driven learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                to="/about"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect With Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">skillsett.in@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9605806896</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="text-center text-primary-foreground/60 text-sm">
            <p>&copy; 2025 skillsett.in. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;