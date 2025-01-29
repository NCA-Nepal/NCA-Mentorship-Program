import { useEffect, useState } from "react";

const GlitchText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    let ticker = setInterval(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        setDelta(100);

        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
          setDelta(150);
        }
      } else {
        const fullText = text;
        setDisplayText((prev) =>
          prev.length < fullText.length
            ? fullText.substring(0, prev.length + 1)
            : prev
        );
        setDelta(150);

        if (displayText === text) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting, loopNum, text, delta]);

  return (
    <h1 className="text-4xl md:text-5xl font-bold text-gradient">
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default GlitchText;