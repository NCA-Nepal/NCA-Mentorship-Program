import { useEffect, useState } from "react";

const GlitchText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const period = 150; // Typing speed
    let ticker = setInterval(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
        }
      } else {
        const fullText = text;
        setDisplayText((prev) =>
          prev.length < fullText.length
            ? fullText.substring(0, prev.length + 1)
            : prev
        );
        if (displayText === text) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, period);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting, loopNum, text]);

  return (
    <h1 className="text-4xl md:text-5xl font-bold text-gradient">
      {displayText || text}
    </h1>
  );
};

export default GlitchText;