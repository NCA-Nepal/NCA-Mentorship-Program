import { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.offsetWidth;
    const columnCount = Math.floor(width / 20);

    container.innerHTML = "";

    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement("div");
      column.className = "matrix-column";
      column.style.left = `${i * 20}px`;
      column.style.animationDelay = `${Math.random() * 20}s`;
      container.appendChild(column);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-background via-cyber-lighter to-cyber-background animate-gradient" />
      <div ref={containerRef} className="matrix-background" />
    </div>
  );
};

export default MatrixBackground;