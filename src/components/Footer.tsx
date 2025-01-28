import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto py-6 bg-cyber-background/80 backdrop-blur-sm border-t border-cyber-accent/30">
      <div className="container text-center">
        <p className="flex items-center justify-center text-cyber-text">
          Made with <Heart className="mx-1 text-cyber-red" size={16} /> by NCA
        </p>
      </div>
    </footer>
  );
};

export default Footer;