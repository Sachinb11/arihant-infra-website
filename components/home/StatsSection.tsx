"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + increment, target);
      setValue(Math.round(current));
      if (current >= target) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-royal-900">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
        {[
          { display: <CountUp target={7} />, label: "Total Floors", gold: true },
          { display: <span>2 <span className="text-xl font-body text-gray-500">BHK</span></span>, label: "Unit Options", gold: false },
          { display: <CountUp target={6} suffix="+" />, label: "Amenities", gold: true },
          { display: <span style={{ fontSize: "2.3rem" }}>PMC</span>, label: "Council Approved", gold: false },
        ].map((stat, i) => (
          <div
            key={i}
            className="relative text-center py-7 px-4"
            style={{
              borderRight: i < 3 ? "1px solid rgba(201,168,76,0.12)" : "none",
            }}
          >
            <div
              className={`font-display font-bold leading-none ${stat.gold ? "gold-text" : "text-white"}`}
              style={{ fontSize: "2.8rem" }}
            >
              {stat.display}
            </div>
            <div className="text-[9px] font-body tracking-[0.22em] uppercase text-gray-600 mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
