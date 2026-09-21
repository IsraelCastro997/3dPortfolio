import { useEffect, useRef } from "react";

const StarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 18000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random() * 0.6 + 0.15,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        context.beginPath();
        context.fillStyle = `rgba(210, 200, 255, ${star.a})`;
        context.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        context.fill();
        if (!prefersReducedMotion) {
          star.y += 0.05;
          if (star.y > canvas.height) star.y = 0;
        }
      });
      if (!prefersReducedMotion) {
        frame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  );
};

export default StarsBackground;
