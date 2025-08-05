import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import skillsettLogo from "@/assets/skillsett-logo.png";
import OfferingsDropdown from "./OfferingsDropdown";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleNavigateToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={skillsettLogo} alt="skillsett.in" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary leading-none">skillsett.in</span>
              <span className="text-xs text-muted-foreground font-medium">set your skills for tomorrow</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleHomeClick}
              className={`font-medium transition-colors hover:text-accent ${
                isActive("/") ? "text-accent" : "text-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigateToSection('mentorship')}
              className="font-medium transition-colors hover:text-accent text-foreground"
            >
              Mentorship
            </button>
            <button
              onClick={() => handleNavigateToSection('courses')}
              className="font-medium transition-colors hover:text-accent text-foreground"
            >
              Courses
            </button>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-accent ${
                isActive("/about") ? "text-accent" : "text-foreground"
              }`}
            >
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <OfferingsDropdown />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleHomeClick();
                }}
                className={`font-medium transition-colors hover:text-accent ${
                  isActive("/") ? "text-accent" : "text-foreground"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavigateToSection('mentorship');
                }}
                className="font-medium transition-colors hover:text-accent text-foreground"
              >
                Mentorship
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavigateToSection('courses');
                }}
                className="font-medium transition-colors hover:text-accent text-foreground"
              >
                Courses
              </button>
              <Link
                to="/about"
                className={`font-medium transition-colors hover:text-accent ${
                  isActive("/about") ? "text-accent" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="w-full">
                <OfferingsDropdown />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;