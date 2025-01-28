import { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.offsetWidth;
    const columnCount = Math.floor(width / 20); // One column every 20px

    // Clear existing columns
    container.innerHTML = "";

    // Create columns
    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement("div");
      column.className = "matrix-column";
      column.style.left = `${i * 20}px`;
      column.style.animationDelay = `${Math.random() * 20}s`;
      container.appendChild(column);
    }
  }, []);

  return <div ref={containerRef} className="matrix-background" />;
};

export default MatrixBackground;