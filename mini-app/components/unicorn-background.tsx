"use client";

import { useEffect } from "react";

export default function UnicornBackground() {
  useEffect(() => {
    const container = document.getElementById("unicorn-container");
    if (!container) return;
    const colors = [
      "#ff0000",
      "#ff7f00",
      "#ffff00",
      "#00ff00",
      "#0000ff",
      "#4b0082",
      "#9400d3",
    ];
    const createUnicorn = () => {
      const span = document.createElement("span");
      span.textContent = "🦄";
      span.style.position = "absolute";
      span.style.fontSize = "2rem";
      span.style.left = `${Math.random() * 100}%`;
      span.style.top = "-5rem";
      span.style.animation = `fly ${10 + Math.random() * 10}s linear infinite`;
      span.style.animationDelay = `${Math.random() * 10}s`;
      span.style.color = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(span);
      setTimeout(() => container.removeChild(span), 20000);
    };
    const interval = setInterval(createUnicorn, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 overflow-hidden">
      <style jsx>{`
        @keyframes fly {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(120vh) rotate(360deg); }
        }
      `}</style>
      <div id="unicorn-container" className="relative w-full h-full"></div>
    </div>
  );
}
