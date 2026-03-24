import type { Metadata } from "next";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "Explore all residential projects by Arihant Infra in Palghar, Maharashtra — RadhaKrishna Apt. (ongoing), Arihant Residency, Krishna Heights, and Arihant Enclave.",
  openGraph: {
    title: "All Projects | Arihant Infra",
    description: "Explore our portfolio of 4 premium residential projects in Palghar.",
    images: ["https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85"],
  },
};

export default function ProjectsPage() {
  const ongoing = projects.filter((p) => p.status === "ongoing");
  const completed = projects.filter((p) => p.status === "completed");

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      {/* Header */}
      <div
        className="relative py-20 mb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#060A1E,#0D1540,#111C56)" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
          style={{ background: "radial-gradient(circle,#C9A84C,transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none"
          style={{ background: "radial-gradient(circle,#1A2980,transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <div className="section-label text-gold-500 mb-5 justify-center">Our Portfolio</div>
            <h1
              className="font-display text-white font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}
            >
              All <em className="gold-text">Projects</em>
            </h1>
            <div className="ornament ornament-center">
              <i className="fa-solid fa-diamond text-gold-500 text-[7px]" />
            </div>
            <p className="font-body text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
              Four landmark projects, one legacy — built on quality, transparency, and timely delivery across Palghar, Maharashtra.
            </p>
            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              {[
                { num: "4", label: "Total Projects" },
                { num: "1", label: "Ongoing" },
                { num: "3", label: "Completed" },
                { num: "100+", label: "Happy Families" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-bold gold-text text-3xl leading-none mb-1">{s.num}</div>
                  <div className="text-[9px] font-body tracking-widest text-gray-500 uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Ongoing project — featured */}
        <section className="mb-20">
          <AnimatedSection className="flex items-center gap-4 mb-10">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase font-body"
              style={{ background: "linear-gradient(135deg,#E8C96A,#A07730)", color: "#060A1E" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-royal-900 animate-pulse" />
              Currently Ongoing
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,rgba(201,168,76,0.3),transparent)" }} />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {ongoing.map((p, i) => (
              <ProjectCard key={p.slug} project={p as any} index={i} featured />
            ))}
          </div>
        </section>

        {/* Completed projects */}
        <section>
          <AnimatedSection className="flex items-center gap-4 mb-10">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase font-body text-white"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              Completed Projects
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,rgba(201,168,76,0.15),transparent)" }} />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {completed.map((p, i) => (
              <ProjectCard key={p.slug} project={p as any} index={i} />
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <AnimatedSection className="mt-20">
          <div
            className="rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,#060A1E,#0D1540,#111C56)" }}
          >
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%,#C9A84C,transparent 60%)" }}
            />
            <div className="relative z-10">
              <div className="section-label text-gold-500 mb-5 justify-center">Get In Touch</div>
              <h2
                className="font-display text-white font-bold mb-4 leading-tight"
                style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}
              >
                Interested in a <em className="gold-text">Property?</em>
              </h2>
              <p className="font-body text-gray-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
                Our team is ready to guide you through every step — from site visit to possession.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/#contact" className="btn-gold">
                  <i className="fa-solid fa-phone text-[9px]" /> Schedule a Visit
                </a>
                <a
                  href="https://wa.me/91?text=Hi%2C%20I%27m%20interested%20in%20your%20projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-4 rounded-sm font-body text-xs font-bold tracking-widest uppercase text-white transition-all hover:-translate-y-1"
                  style={{ background: "#25D366" }}
                >
                  <i className="fa-brands fa-whatsapp text-sm" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
