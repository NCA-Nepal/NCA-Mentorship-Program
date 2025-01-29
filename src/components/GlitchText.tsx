import { useEffect, useState } from "react";

const GlitchText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

  const generateRandomChar = () => {
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  useEffect(() => {
    const period = 100;
    let ticker = setInterval(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
        }
      } else {
        const fullText = text;
        setDisplayText((prev) => {
          const nextChar = fullText.charAt(prev.length);
          const randomChar = Math.random() < 0.1 ? generateRandomChar() : nextChar;
          return prev.length < fullText.length
            ? prev + randomChar
            : prev;
        });
        if (displayText === text) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }

      // Random glitch effect
      if (Math.random() < 0.1) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 100);
      }
    }, period);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting, loopNum, text]);

  return (
    <h1 
      className={`text-4xl md:text-5xl font-bold text-gradient relative
        ${glitchActive ? 'animate-glitch' : ''}
        before:content-[attr(data-text)] before:absolute before:left-[2px] before:text-cyber-accent/50 before:top-0 before:w-full before:h-full before:animate-glitch
        after:content-[attr(data-text)] after:absolute after:left-[-2px] after:text-cyber-red/50 after:top-0 after:w-full after:h-full after:animate-glitch`}
      data-text={displayText}
    >
      {displayText || text}
    </h1>
  );
};

export default GlitchText;