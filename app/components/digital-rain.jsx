"use client";

import { useRef, useEffect, useState } from "react";

export default function DigitalRain() {
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) {
        setError("Canvas reference is null");
        return;
      }
      
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setError("Could not get canvas context");
        return;
      }

      // Resize canvas to match window dimensions
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const fontSize = 16;
      const columns = Math.floor(canvas.width / fontSize);

      // Create an array of drops with y-positions
      const drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }

      // Characters to use (can be modified to use more readable characters)
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
      
      const rain = () => {
        // Semi-transparent black to create the fade effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Green color for text
        ctx.fillStyle = "#FB0303";
        ctx.font = `${fontSize}px monospace`;
        
        // Loop through drops
        for (let i = 0; i < drops.length; i++) {
          // Get a random character
          const charIndex = Math.floor(Math.random() * characters.length);
          const text = characters[charIndex];
          
          // Draw the character
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          ctx.fillText(text, x, y);
          
          // Reset drop when it goes beyond canvas or randomly
          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          
          // Move the drop down
          drops[i]++;
        }
      };
      
      // Run the animation loop
      const interval = setInterval(rain, 50);
      
      // Clean up
      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', resizeCanvas);
      };
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  }, []);
  
  return (
    <div className="fixed inset-0 bg-black">
      <canvas ref={canvasRef} className="w-full h-full" />
      {error && (
        <div className="absolute top-4 left-4 bg-red-600 text-white p-4 rounded">
          {error}
        </div>
      )}
    </div>
  );
}