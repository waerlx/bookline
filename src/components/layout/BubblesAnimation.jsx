"use client";
// components/BubblesAnimation.js
import React, { useEffect, useRef } from 'react';

const BubblesAnimation = ({ width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const bubbles = [];
    const colors = ['#a356fc'];
    const maxSize = 50;  // Максимальный размер пузырька
    const minSize = 10;  // Минимальный размер пузырька
    const backgroundColor = '#F0F8FF';

    canvas.width = width;
    canvas.height = height;

    const createBubble = () => {
      const size = Math.random() * 30 + 50;
      const x = Math.random() * canvas.width;
      const y = canvas.height - size;
      const speedX = (Math.random() - 0.5) * 2;
      const speedY = -(Math.random() * 2 + 0.5);
      const color = colors[Math.floor(Math.random() * colors.length)];

      bubbles.push({ x, y, size, speedX, speedY, color });
    };

    const updateBubbles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];

        // Update position
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        // Check collision with walls
        if (bubble.x - bubble.size < 0 || bubble.x + bubble.size > canvas.width) {
          bubble.speedX *= -1;
        }
        if (bubble.y - bubble.size < 0 || bubble.y + bubble.size > canvas.height) {
          bubble.speedY *= -1;
        }

        // Draw bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();

        // Smooth separation of bubbles
        if (bubble.size > maxSize) {
          bubble.size -= 0.1; // Decrease size gradually
        }
      }

      // Collision detection between bubbles
for (let i = 0; i < bubbles.length; i++) {
    for (let j = i + 1; j < bubbles.length; j++) {
      const bubble1 = bubbles[i];
      const bubble2 = bubbles[j];
      const dx = bubble1.x - bubble2.x;
      const dy = bubble1.y - bubble2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
  
      if (distance < bubble1.size + bubble2.size) {
        if (bubble1.size < maxSize && bubble2.size < maxSize) {
          // Merge bubbles
          const newSize = Math.sqrt(bubble1.size * bubble1.size + bubble2.size * bubble2.size);
          bubble1.size = newSize;
          bubbles.splice(j, 1); // Remove bubble2
          j--; // Adjust index after removal
        } else if (bubble1.size > minSize && bubble2.size > minSize) {
          // Separate bubbles if they are too large
          const angle = Math.atan2(dy, dx);
          bubble1.speedX = -Math.cos(angle) * 0.5; // Reduce speed
          bubble1.speedY = -Math.sin(angle) * 0.5; // Reduce speed
          bubble2.speedX = Math.cos(angle) * 0.5; // Reduce speed
          bubble2.speedY = Math.sin(angle) * 0.5; // Reduce speed
        }
      }
    }
  }

      if (bubbles.length < 8) {
        createBubble();
      }

      requestAnimationFrame(updateBubbles);
    };

    updateBubbles();

    return () => {
      cancelAnimationFrame(updateBubbles);
    };
  }, [width, height]);

  return <canvas ref={canvasRef} className="bg-purple-400 absolute top-0 left-0 border buble_canva" />;
};

export default BubblesAnimation;
