import { useEffect, useRef } from "react";

const AA = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const stars = [];
    const STAR_COUNT = 200;

    // создаём звезды
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.5,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random(),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        ctx.beginPath();

        // glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = "white";

        ctx.globalAlpha = star.opacity;
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.globalAlpha = 1;
      });
    };

    const update = () => {
      stars.forEach((star) => {
        star.y += star.speed;

        // если ушла вниз — возвращаем наверх
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }

        // лёгкое мерцание
        star.opacity += (Math.random() - 0.5) * 0.05;
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));
      });
    };

    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };

    animate();

    // адаптив
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
       
      }}
    />
  );
};

export default AA;