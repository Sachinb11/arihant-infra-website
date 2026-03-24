"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

interface Amenity {
  icon: string;
  title: string;
  desc: string;
}

interface Config {
  type: string;
  carpet: string;
  price: string;
}

interface Project {
  slug: string;
  title: string;
  subtitle: string;
  status: "ongoing" | "completed";
  type: string;
  location: string;
  address: string;
  rera?: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  amenities: Amenity[];
  highlights: string[];
  configurations: Config[];
  mapEmbed?: string;
  architect?: string;
  legalAdvisor?: string;
  completionYear: string;
  totalFloors: number;
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [activeImg, setActiveImg] = useState(0);
  const isOngoing = project.status === "ongoing";

  return (
    <div className="min-h-screen bg-cream">
      {/* ── HERO ── */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden bg-royal-950">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Image
            src={project.gallery[activeImg] || project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(175deg,rgba(6,10,30,0.55) 0%,rgba(6,10,30,0.1) 45%,rgba(6,10,30,0.85) 100%)" }}
        />
        {/* Back link */}
        <div className="absolute top-28 left-6 z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-body font-bold tracking-widest uppercase text-white/60 hover:text-gold-400 transition-colors"
          >
            <i className="fa-solid fa-arrow-left text-[10px]" />
            All Projects
          </Link>
        </div>
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase font-body ${
                  isOngoing
                    ? "bg-gold-400/90 text-royal-900"
                    : "bg-white/90 text-royal-800"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${isOngoing ? "bg-royal-900 animate-pulse" : "bg-gray-500"}`}
                />
                {isOngoing ? "Ongoing Project" : "Completed"}
              </span>
              {project.rera && (
                <span className="rera py-1.5 px-3 text-[10px]">
                  <i className="fa-solid fa-certificate text-gold-400 text-[9px]" />
                  RERA: {project.rera}
                </span>
              )}
            </div>
            <h1
              className="font-display text-white font-black leading-tight mb-2"
              style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}
            >
              {project.title}
            </h1>
            <p className="font-display text-gold-400 italic text-lg mb-4">{project.subtitle}</p>
            <p className="font-body text-gray-300 text-sm flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-gold-500 text-xs" />
              {project.address}
            </p>
          </motion.div>
        </div>
        {/* Thumbnail strip */}
        {project.gallery.length > 1 && (
          <div className="absolute bottom-6 right-6 md:right-14 flex gap-2 z-10">
            {project.gallery.slice(0, 5).map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-12 h-9 rounded overflow-hidden border-2 transition-all ${
                  activeImg === i ? "border-gold-400 scale-110" : "border-white/20 hover:border-white/50"
                }`}
              >
                <Image src={img} alt={`Gallery ${i + 1}`} width={48} height={36} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Left — main content */}
          <div className="lg:col-span-2 space-y-14">

            {/* Quick stats */}
            <AnimatedSection>
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-0 rounded-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg,#060A1E,#0D1540)" }}
              >
                {[
                  { label: "Type", value: project.type },
                  { label: "Floors", value: `G+${project.totalFloors}` },
                  { label: "Status", value: isOngoing ? "Ongoing" : "Completed" },
                  { label: "Year", value: project.completionYear },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    className="text-center py-6 px-4"
                    style={{ borderRight: i < 3 ? "1px solid rgba(201,168,76,0.1)" : "none" }}
                  >
                    <div className="font-display font-bold gold-text text-xl leading-none mb-1">{s.value}</div>
                    <div className="text-[9px] font-body tracking-widest text-gray-500 uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* About */}
            <AnimatedSection>
              <div className="section-label mb-4">About This Project</div>
              <h2 className="font-display text-royal-900 font-bold text-2xl mb-2">
                Project <em className="gold-text">Overview</em>
              </h2>
              <div className="ornament ornament-left">
                <i className="fa-solid fa-diamond text-gold-500 text-[8px]" />
              </div>
              <div className="space-y-4">
                {project.description.split("\n\n").map((para, i) => (
                  <p key={i} className="font-body text-gray-600 text-[14.5px] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                {project.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2 bg-white border border-gold-500/10 rounded-lg px-3 py-2 text-xs font-body font-semibold text-royal-800"
                  >
                    <i className="fa-solid fa-check-circle text-gold-500 text-[10px] flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Gallery */}
            <AnimatedSection>
              <div className="section-label mb-4">Photo Gallery</div>
              <h2 className="font-display text-royal-900 font-bold text-2xl mb-6">
                Visual <em className="gold-text">Tour</em>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.gallery.map((img, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative overflow-hidden rounded-xl border-2 transition-all ${
                      activeImg === i ? "border-gold-500 ring-2 ring-gold-500/30" : "border-transparent hover:border-gold-400/50"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    style={{ aspectRatio: "4/3" }}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} gallery ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover"
                    />
                    {activeImg === i && (
                      <div className="absolute inset-0 bg-gold-500/20 flex items-center justify-center">
                        <i className="fa-solid fa-eye text-white text-lg" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </AnimatedSection>

            {/* Configurations */}
            {project.configurations.length > 0 && (
              <AnimatedSection>
                <div className="section-label mb-4">Unit Configurations</div>
                <h2 className="font-display text-royal-900 font-bold text-2xl mb-6">
                  Floor Plan <em className="gold-text">Options</em>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.configurations.map((c) => (
                    <div
                      key={c.type}
                      className="bg-white rounded-2xl p-6 border border-gold-500/15 hover:border-gold-400/40 hover:shadow-gold transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-gold-400"
                          style={{ background: "linear-gradient(135deg,#0D1540,#1A2980)" }}
                        >
                          <i className="fa-solid fa-home text-sm" />
                        </div>
                        <span
                          className={`text-[10px] font-bold font-body px-2.5 py-1 rounded-full tracking-wider uppercase ${
                            c.price === "Sold Out"
                              ? "bg-gray-100 text-gray-500"
                              : "bg-gold-400/10 text-gold-600"
                          }`}
                        >
                          {c.price}
                        </span>
                      </div>
                      <div className="font-display font-bold text-royal-900 text-xl mb-1">{c.type}</div>
                      <div className="text-sm font-body text-gray-500">{c.carpet} carpet area</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Amenities */}
            <AnimatedSection>
              <div className="section-label mb-4">Specifications</div>
              <h2 className="font-display text-royal-900 font-bold text-2xl mb-2">
                Premium <em className="gold-text">Amenities</em>
              </h2>
              <div className="ornament ornament-left">
                <i className="fa-solid fa-diamond text-gold-500 text-[8px]" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.amenities.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group flex items-start gap-4 bg-white rounded-xl p-4 border border-gold-500/10 hover:border-gold-400/35 hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg,#0D1540,#1A2980)" }}
                    >
                      <i className="fa-solid fa-gem text-gold-400 text-xs" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-royal-900 text-sm mb-1">{a.title}</div>
                      <div className="font-body text-gray-500 text-xs leading-relaxed">{a.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Location map */}
            {project.mapEmbed && (
              <AnimatedSection>
                <div className="section-label mb-4">Location</div>
                <h2 className="font-display text-royal-900 font-bold text-2xl mb-2">
                  Prime <em className="gold-text">Location</em>
                </h2>
                <div className="ornament ornament-left">
                  <i className="fa-solid fa-diamond text-gold-500 text-[8px]" />
                </div>
                {/* Address card */}
                <div
                  className="flex items-start gap-4 rounded-xl p-5 mb-5 border"
                  style={{ background: "rgba(10,15,44,0.03)", borderColor: "rgba(201,168,76,0.15)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#0D1540,#1A2980)" }}
                  >
                    <i className="fa-solid fa-location-dot text-gold-400 text-sm" />
                  </div>
                  <div>
                    <div className="text-[9px] font-body text-gray-500 tracking-widest uppercase mb-1">Project Address</div>
                    <p className="font-display text-royal-900 text-sm font-semibold leading-snug">{project.address}</p>
                    <div className="flex flex-wrap gap-3 mt-3 text-xs font-body text-gray-500">
                      {project.architect && (
                        <span><strong className="text-gray-400">Architect:</strong> {project.architect}</span>
                      )}
                      {project.legalAdvisor && (
                        <span><strong className="text-gray-400">Legal:</strong> {project.legalAdvisor}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gold-500/15 shadow-lg" style={{ height: 380 }}>
                  <iframe
                    src={project.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map — ${project.title}`}
                  />
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Right — sticky contact form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <AnimatedSection direction="right">
                <div
                  className="rounded-3xl overflow-hidden shadow-luxury"
                  style={{ background: "linear-gradient(175deg,#0A0F2C,#111C56)" }}
                >
                  {/* Header */}
                  <div className="px-7 pt-8 pb-6 border-b border-white/5">
                    <div className="section-label text-gold-500 mb-3">Book Now</div>
                    <h3 className="font-display text-white font-bold text-2xl leading-tight">
                      Enquire About<br />
                      <em className="gold-text">{project.title}</em>
                    </h3>
                    <p className="font-body text-gray-400 text-xs mt-2 leading-relaxed">
                      Our team will contact you within 24 hours.
                    </p>
                  </div>

                  {/* Form */}
                  <div className="px-7 py-7">
                    <ContactForm projectTitle={project.title} />
                  </div>

                  {/* Quick contact */}
                  <div className="px-7 pb-8 space-y-3">
                    <div className="text-[9px] font-body text-gray-600 tracking-widest uppercase mb-4">
                      Or Reach Us Directly
                    </div>
                    <a
                      href="tel:+91"
                      className="flex items-center gap-3 text-sm font-body text-gray-300 hover:text-gold-400 transition-colors group"
                    >
                      <span className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-gold-500/10 flex items-center justify-center transition-colors">
                        <i className="fa-solid fa-phone text-gold-500 text-xs" />
                      </span>
                      Call for Site Inquiry
                    </a>
                    <a
                      href={`https://wa.me/91?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(project.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-body text-gray-300 hover:text-green-400 transition-colors group"
                    >
                      <span className="w-9 h-9 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 flex items-center justify-center transition-colors">
                        <i className="fa-brands fa-whatsapp text-green-400 text-sm" />
                      </span>
                      WhatsApp Us
                    </a>
                  </div>

                  {/* RERA footer */}
                  {project.rera && (
                    <div className="px-7 pb-7">
                      <div className="rera justify-center">
                        <i className="fa-solid fa-shield-halved text-gold-400 text-xs" />
                        <span className="text-xs font-body text-gray-500">
                          RERA: <span className="text-gold-400 font-semibold">{project.rera}</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Related projects teaser */}
                <div className="mt-6 bg-white rounded-2xl p-5 border border-gold-500/10 shadow-sm">
                  <div className="text-[9px] font-body text-gray-500 tracking-widest uppercase mb-4">Explore More</div>
                  <Link
                    href="/projects"
                    className="flex items-center justify-between text-sm font-body font-bold text-royal-800 hover:text-gold-500 transition-colors group"
                  >
                    <span>View All Projects</span>
                    <i className="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
