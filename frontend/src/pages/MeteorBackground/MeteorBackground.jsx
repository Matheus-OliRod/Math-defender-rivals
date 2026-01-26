import { useEffect, useRef } from "react";

export default function MeteorBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const meteors = [];
    const METEOR_COUNT = 40;

    class Meteor {
      constructor() {
        this.reset();
      }

      reset() {
        const fromTop = Math.random() < 0.5;

        if (fromTop) {
            this.x = Math.random() * w;
            this.y = -50; // start above screen
        } else {
            this.x = -50; // start left of screen
            this.y = Math.random() * h;
        }

        this.len = Math.random() * 80 + 20;
        this.speed = Math.random() * 2 + 2;
        this.angle = Math.PI * 0.25; // 45°
        this.opacity = Math.random();
}

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x > w + 100 || this.y > h + 100) this.reset();
      }

      draw() {
        const x2 = this.x - Math.cos(this.angle) * this.len;
        const y2 = this.y - Math.sin(this.angle) * this.len;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(180,200,255,${this.opacity * 0.3})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }

    for (let i = 0; i < METEOR_COUNT; i++) meteors.push(new Meteor());

    function animate() {
      ctx.clearRect(0, 0, w, h);

      meteors.forEach(m => {
        m.update();
        m.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
    ref={canvasRef}
    style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    pointerEvents: "none",
    display: "block"
  }}
/>
  );
}
