import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Syllabus", path: "/syllabus" },
    { label: "Archive", path: "/archive" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-cyber-background/80 backdrop-blur-sm border-b border-cyber-accent/30 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://raw.githubusercontent.com/NCA-Nepal/Static-Assets/refs/heads/main/NCA-Logo/NCA%20Mentorship%20Program.jpeg"
              alt="NCA Logo"
              className="h-8 w-8 rounded"
            />
            <span className="text-cyber-accent font-bold hidden sm:block">
              NCA Mentorship
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-cyber-text hover:text-cyber-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button"
            >
              Apply
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyber-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-cyber-text hover:text-cyber-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block cyber-button text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;