"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  title: string;
  subtitle: string;
  rera: string;
  location: string;
}

export default function HeroSection({ project }: { project: Project }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle effect
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const pts: { x: number; y: number; r: number; vx: number; vy: number; a: number }[] = [];

    const resize = () => {
      cv.width = cv.offsetWidth;
      cv.height = cv.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 55; i++) {
      pts.push({
        x: Math.random() * cv.width,
        y: Math.random() * cv.height,
        r: Math.random() * 1.4 + 0.2,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        a: Math.random() * 0.45 + 0.08,
      });
    }

    const draw = () => {
      if (!ctx || !cv) return;
      ctx.clearRect(0, 0, cv.width, cv.height);
      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(((p.x % cv.width) + cv.width) % cv.width, ((p.y % cv.height) + cv.height) % cv.height, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.a})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
      });
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const item = { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] } } };

  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden bg-royal-950"
      style={{ minHeight: "750px" }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        style={{
          background: "linear-gradient(175deg,rgba(6,10,30,0.75) 0%,rgba(6,10,30,0.08) 45%,rgba(6,10,30,0.9) 100%), url('https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=2000&q=85') center/cover no-repeat",
        }}
      />

      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[3] pointer-events-none w-full h-full" />

      {/* Watermark */}
      <motion.div
        className="absolute right-[-3vw] top-1/2 -translate-y-1/2 z-[2] pointer-events-none select-none hidden xl:block"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
        style={{
          fontFamily: "'Playfair Display',serif",
          fontStyle: "italic",
          fontSize: "clamp(8rem,20vw,22rem)",
          fontWeight: 900,
          lineHeight: 1,
          whiteSpace: "nowrap",
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.07)",
        }}
      >
        AI
      </motion.div>

      {/* Sidebar left */}
      <div className="absolute left-8 bottom-1/3 z-10 hidden xl:flex flex-col items-center gap-5">
        <div className="w-px h-16 opacity-40" style={{ background: "linear-gradient(to bottom,transparent,#C9A84C)" }} />
        <span className="text-[9px] font-body text-gray-600 tracking-[0.35em] uppercase" style={{ writingMode: "vertical-rl" }}>
          Palghar · Maharashtra
        </span>
        <div className="w-px h-16 opacity-40" style={{ background: "linear-gradient(to top,transparent,#C9A84C)" }} />
      </div>

      {/* Sidebar right — social */}
      <div className="absolute right-8 bottom-1/3 z-10 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-16 opacity-40" style={{ background: "linear-gradient(to bottom,transparent,#C9A84C)" }} />
        {["instagram", "facebook-f", "youtube"].map((s) => (
          <a key={s} href="#" className="text-gray-600 hover:text-gold-400 transition-colors text-xs">
            <i className={`fa-brands fa-${s}`} />
          </a>
        ))}
        <div className="w-px h-16 opacity-40" style={{ background: "linear-gradient(to top,transparent,#C9A84C)" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-28 pt-32">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={item} className="section-label gap-3 mb-6">
            <span className="h-px w-10 bg-gold-500 inline-block" />
            Arihant Infra presents a new landmark
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-white font-black leading-[1.02] mb-7"
            style={{ fontSize: "clamp(3rem,8vw,6rem)" }}
          >
            <span className="block">Where</span>
            <span className="block">Living is</span>
            <em className="block gold-text">{project.subtitle.split(" ").slice(-1)[0] === "Enjoyment" ? "Enjoyment" : "Excellence"}</em>
          </motion.h1>

          <motion.p variants={item} className="font-body text-gray-400 text-[15px] leading-relaxed mb-10 max-w-lg">
            G+7 Storey Residential Building &nbsp;·&nbsp;{" "}
            <strong className="text-white font-semibold">1BHK &amp; 2BHK</strong> Flats
            <br />
            <span className="text-gold-400">{project.location}</span>
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link href="/projects/radhakrishna-apartments" className="btn-gold">
              Explore Residences <i className="fa-solid fa-arrow-right text-[9px]" />
            </Link>
            <Link href="#contact" className="btn-ghost">
              <i className="fa-solid fa-phone text-[9px]" /> Schedule Visit
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-10 rera w-fit">
            <i className="fa-solid fa-shield-halved text-gold-400 text-xs" />
            <span className="text-xs font-body text-gray-400">
              MahaRERA: <span className="text-gold-400 font-semibold">{project.rera}</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] text-gray-400 font-body tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
