"use client";

import { useEffect, useRef, useState } from "react";

interface Pixel {
  x: number;
  y: number;
  opacity: number;
  targetOpacity: number;
  fadeSpeed: number;
}

export function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Defer initialization to avoid blocking paint
    const initTimeout = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(initTimeout);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true // Improve performance
    });
    if (!ctx) return;

    // Set canvas size to match viewport
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for performance

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    resizeCanvas();

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    };
    window.addEventListener("resize", debouncedResize);

    // Grid configuration
    const gridSize = 60;
    const lineWidth = 2;
    const cols = Math.ceil(window.innerWidth / gridSize);
    const rows = Math.ceil(window.innerHeight / gridSize);

    // Create pixel array for animation
    const pixels: Pixel[] = [];
    const maxActivePixels = 15; // Number of pixels that can be lit at once (more sparse)

    // Initialize pixels at grid intersections
    for (let i = 0; i < maxActivePixels; i++) {
      pixels.push({
        x: Math.floor(Math.random() * cols) * gridSize,
        y: Math.floor(Math.random() * rows) * gridSize,
        opacity: 0,
        targetOpacity: 0,
        fadeSpeed: 0.008 + Math.random() * 0.012, // Slower fade
      });
    }

    // Draw static grid lines
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(34, 40, 49, 0.06)'; // Very faint grid lines
      ctx.lineWidth = lineWidth;

      // Draw vertical lines
      for (let x = 0; x <= window.innerWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= window.innerHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
        ctx.stroke();
      }
    };

    // Animation loop
    let animationFrameId: number;
    let lastTime = 0;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw static grid
      drawGrid();

      // Update and draw pixels
      pixels.forEach((pixel) => {
        // Fade towards target
        if (Math.abs(pixel.opacity - pixel.targetOpacity) > 0.01) {
          if (pixel.opacity < pixel.targetOpacity) {
            pixel.opacity = Math.min(pixel.opacity + pixel.fadeSpeed, pixel.targetOpacity);
          } else {
            pixel.opacity = Math.max(pixel.opacity - pixel.fadeSpeed, pixel.targetOpacity);
          }
        }

        // Randomly change target (create organic pulsing)
        if (Math.random() < 0.003) { // 0.3% chance per frame (less frequent)
          if (pixel.targetOpacity === 0) {
            // Light up to barely visible intensity
            pixel.targetOpacity = 0.15 + Math.random() * 0.15; // Very subtle opacity range
            // Pick new random position
            pixel.x = Math.floor(Math.random() * cols) * gridSize;
            pixel.y = Math.floor(Math.random() * rows) * gridSize;
          } else {
            // Fade out
            pixel.targetOpacity = 0;
          }
        }

        // Draw pixel square if visible
        if (pixel.opacity > 0.01) {
          // Fill the actual grid square cell with jet black at very reduced opacity
          ctx.fillStyle = `rgba(34, 40, 49, ${pixel.opacity * 0.3})`; // Primary color (jet black) with 30% intensity
          ctx.fillRect(
            pixel.x,
            pixel.y,
            gridSize,
            gridSize
          );
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, [isReady]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      style={{ willChange: isReady ? 'auto' : 'transform' }}
      aria-hidden="true"
    />
  );
}
