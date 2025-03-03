import React, { useEffect, useRef } from 'react';

const FloatingTriangles = ({ 
  color = '#3b82f6', // Default blue color
  secondaryColor = '#1e40af', // Darker blue as secondary color
  density = 15, // Number of triangles
  speed = 0.5, // Animation speed
  opacity = 0.1, // Triangle opacity
  className = '' // Additional classes
}) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let triangles = [];
    let animationFrameId;
    
    // Set canvas to full width/height of parent
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initTriangles();
    };
    
    // Create initial triangles
    const initTriangles = () => {
      triangles = [];
      for (let i = 0; i < density; i++) {
        const size = Math.random() * 70 + 30; // Triangle size between 30-100px
        triangles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: size,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          color: Math.random() > 0.5 ? color : secondaryColor,
          opacity: Math.random() * opacity + opacity / 2,
        });
      }
    };
    
    // Draw a triangle
    const drawTriangle = (x, y, size, rotation, color, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.lineTo(-size / 2, size / 2);
      ctx.lineTo(size / 2, size / 2);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.fill();
      ctx.restore();
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      triangles.forEach(triangle => {
        // Update position
        triangle.x += triangle.speedX;
        triangle.y += triangle.speedY;
        triangle.rotation += triangle.rotationSpeed;
        
        // Bounce off edges
        if (triangle.x < -triangle.size) triangle.x = canvas.width + triangle.size;
        if (triangle.x > canvas.width + triangle.size) triangle.x = -triangle.size;
        if (triangle.y < -triangle.size) triangle.y = canvas.height + triangle.size;
        if (triangle.y > canvas.height + triangle.size) triangle.y = -triangle.size;
        
        // Draw triangle
        drawTriangle(
          triangle.x,
          triangle.y,
          triangle.size,
          triangle.rotation,
          triangle.color,
          triangle.opacity
        );
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, secondaryColor, density, speed, opacity]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </div>
  );
};

export default FloatingTriangles;