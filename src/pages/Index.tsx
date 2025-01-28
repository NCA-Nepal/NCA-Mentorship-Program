import { useEffect, useState } from "react";

const Index = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    setIsLogoVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-12 max-w-4xl mx-auto">
      <div
        className={`transform transition-all duration-1000 ${
          isLogoVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <img
          src="https://raw.githubusercontent.com/NCA-Nepal/Static-Assets/refs/heads/main/NCA-Logo/NCA%20Mentorship%20Program.jpeg"
          alt="NCA Mentorship Program"
          className="w-48 h-48 rounded-lg shadow-lg hover:animate-glitch"
        />
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient">
          NCA Mentorship Program
        </h1>
        <p className="text-xl text-cyber-accent">
          It is completely free. There is no catch to this.
        </p>
      </div>

      <div className="cyber-container w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-gradient mb-4">
          About the Program
        </h2>
        <p className="text-cyber-text mb-6">
          The NCA Mentorship Program is designed to help aspiring cybersecurity
          professionals develop their skills and knowledge through hands-on
          guidance from experienced mentors.
        </p>
        <div className="text-center">
          <a href="/about" className="cyber-button inline-block">
            Learn More About Our Program
          </a>
        </div>
      </div>

      <div className="cyber-container w-full max-w-2xl text-center">
        <h2 className="text-xl font-bold text-gradient mb-4">
          Want to know about NCA @ Nepal?
        </h2>
        <a
          href="https://ncateam.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-button inline-block"
        >
          Visit Main Site
        </a>
      </div>

      <div className="cyber-container w-full max-w-2xl text-center">
        <h2 className="text-xl font-bold text-gradient mb-4">
          Any questions? Join our Discord server to ask questions to the team!
        </h2>
        <a
          href="https://discord.com/invite/KDuvkJHh3D"
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-button inline-block"
        >
          Join Discord
        </a>
      </div>
    </div>
  );
};

export default Index;