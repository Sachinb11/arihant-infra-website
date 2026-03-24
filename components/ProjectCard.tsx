"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectConfig {
  type: string;
  carpet: string;
  price: string;
}

interface Project {
  slug: string;
  title: string;
  subtitle: string;
  status: "ongoing" | "completed";
  location: string;
  shortDescription: string;
  image: string;
  configurations?: ProjectConfig[];
  totalFloors: number;
  rera?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
        className="group bg-white rounded-2xl overflow-hidden border border-gold-500/20 shadow-gold hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-2"
      >
        <div className="grid md:grid-cols-2 h-full">
          <div className="relative overflow-hidden" style={{ minHeight: 320 }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5" />
            <div className="absolute top-4 left-4">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase font-body"
                style={{ background: "linear-gradient(135deg,#E8C96A,#A07730)", color: "#060A1E" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-royal-900 animate-pulse" />
                Ongoing — Book Now
              </span>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="section-label mb-2 text-[9px]">
                <span className="h-px w-6 bg-gold-500 inline-block" />
                {project.location}
              </div>
              <h3 className="font-display text-royal-900 font-bold text-2xl mb-1 leading-tight">
                {project.title}
              </h3>
              <p className="font-body text-gold-500 text-xs italic mb-4">{project.subtitle}</p>
              <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">
                {project.shortDescription}
              </p>
              {project.configurations && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.configurations.slice(0, 3).map((c) => (
                    <span key={c.type} className="text-[10px] font-bold font-body text-royal-700 bg-royal-900/5 border border-royal-900/10 px-2.5 py-1 rounded tracking-wider uppercase">
                      {c.type}
                    </span>
                  ))}
                </div>
              )}
              {project.rera && (
                <div className="rera w-fit mb-5">
                  <i className="fa-solid fa-certificate text-gold-500 text-xs" />
                  <span className="text-xs font-body text-gray-600">RERA: <strong className="text-gold-600">{project.rera}</strong></span>
                </div>
              )}
            </div>
            <Link href={`/projects/${project.slug}`} className="btn-gold justify-center">
              Explore Now <i className="fa-solid fa-arrow-right text-[9px]" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group bg-white rounded-2xl overflow-hidden border border-gold-500/10 shadow-sm hover:shadow-luxury transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase font-body ${project.status === "ongoing" ? "bg-gold-400/90 text-royal-900" : "bg-white/90 text-royal-800"}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${project.status === "ongoing" ? "bg-royal-900 animate-pulse" : "bg-gray-500"}`} />
            {project.status === "ongoing" ? "Ongoing" : "Completed"}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 bg-royal-900/80 backdrop-blur-sm text-gold-400 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-full font-body">
            G+{project.totalFloors}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="btn-gold text-[10px] py-3 px-6 shadow-gold-lg">
            View Details <i className="fa-solid fa-arrow-right text-[9px]" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="section-label mb-2 text-[9px]">
          <span className="h-px w-6 bg-gold-500 inline-block" />
          {project.location}
        </div>
        <h3 className="font-display text-royal-900 font-bold text-xl mb-1 leading-snug">{project.title}</h3>
        <p className="font-body text-gold-500 text-xs italic mb-3">{project.subtitle}</p>
        <p className="font-body text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{project.shortDescription}</p>
        {project.configurations && project.configurations.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.configurations.slice(0, 3).map((c) => (
              <span key={c.type} className="text-[10px] font-bold font-body text-royal-700 bg-royal-900/5 border border-royal-900/10 px-2.5 py-1 rounded tracking-wider uppercase">
                {c.type}
              </span>
            ))}
          </div>
        )}
        <Link href={`/projects/${project.slug}`} className="flex items-center justify-between pt-4 border-t border-gray-100 font-body text-xs font-bold tracking-wider uppercase text-royal-700 hover:text-gold-500 transition-colors group/link">
          <span>View Details</span>
          <i className="fa-solid fa-arrow-right text-[10px] transition-transform group-hover/link:translate-x-1.5" />
        </Link>
      </div>
    </motion.div>
  );
}
