import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/home/HeroSection";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import StatsSection from "@/components/home/StatsSection";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Premium Real Estate in Palghar, Maharashtra",
  description:
    "Arihant Infra presents RadhaKrishna Apt. — Premium 1BHK & 2BHK homes in Palghar East. RERA registered, PMC approved, earthquake resistant construction.",
  openGraph: {
    title: "Arihant Infra | Premium Real Estate in Palghar, Maharashtra",
    description: "Premium 1BHK & 2BHK homes. RERA: P99000051839. PMC Approved. Near Railway Station.",
    images: ["https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&q=85"],
  },
};

const mainProject = projects.find((p) => p.slug === "radhakrishna-apartments")!;

export default function HomePage() {
  return (
    <>
      <HeroSection project={mainProject} />
      <MarqueeStrip />
      <StatsSection />

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -top-4 -left-4 right-8 bottom-8 border border-gold-500/25 rounded pointer-events-none z-0" />
              <div className="absolute bottom-4 right-4 left-8 -top-8 rounded z-0" style={{ background: "linear-gradient(135deg,#0D1540,#1A2980)" }} />
              <div className="relative z-10 rounded overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                  alt="RadhaKrishna Apt. by Arihant Infra"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 z-20 px-7 py-5 rounded-2xl shadow-luxury"
                style={{ background: "#0A0F2C", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <div className="text-[9px] font-body tracking-widest uppercase text-gray-500 mb-1">Possession</div>
                <div className="font-display text-2xl font-bold gold-text">2025</div>
                <div className="text-xs font-body text-gray-500 mt-0.5">Ready Soon</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.1}>
            <div className="section-label mb-4">About the Project</div>
            <h2 className="font-display text-royal-900 font-bold leading-tight mb-3" style={{ fontSize: "clamp(2.1rem,4vw,3.3rem)" }}>
              Crafted for the<br />
              <em className="gold-text">Discerning Few</em>
            </h2>
            <div className="ornament ornament-left"><i className="fa-solid fa-diamond text-gold-500 text-[8px]" /></div>
            <p className="font-body text-gray-600 leading-relaxed mb-5 text-[14.5px]">
              <strong className="text-royal-900">RadhaKrishna Apt.</strong> by Arihant Infra is a meticulously designed G+7 residential building offering premium 1BHK and 2BHK homes in the heart of Palghar (East). Every specification, every finish — chosen for lasting quality and refined living.
            </p>
            <p className="font-body text-gray-500 leading-relaxed mb-8 text-sm">
              Strategically positioned near the railway station with full Palghar Municipal Council sanction, major bank loan approvals, and RCC earthquake-resistant construction — this is a home that&apos;s built on trust.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "shield-halved", num: "01", title: "Earthquake Resistant", desc: "RCC framed structure to IS seismic standards." },
                { icon: "train", num: "02", title: "Near Railway Station", desc: "Walking distance to Palghar station." },
                { icon: "building-columns", num: "03", title: "Bank Loans Available", desc: "SBI, HDFC, ICICI & all major banks." },
                { icon: "stamp", num: "04", title: "PMC Approved", desc: "Palghar Municipal Council sanctioned." },
              ].map((f) => (
                <div key={f.num} className="relative bg-white border-l-[3px] border-gold-500 rounded-r-xl p-4 shadow-sm hover:shadow-md hover:translate-x-2 transition-all duration-300">
                  <span className="absolute top-0 right-2 font-display text-5xl font-black italic text-gold-500/10 leading-none">{f.num}</span>
                  <div className="w-8 h-8 bg-royal-900 rounded-lg flex items-center justify-center mb-2">
                    <i className={`fa-solid fa-${f.icon} text-gold-400 text-xs`} />
                  </div>
                  <div className="font-display font-semibold text-royal-900 text-[14px] mb-1">{f.title}</div>
                  <div className="text-xs text-gray-500 font-body leading-relaxed">{f.desc}</div>
                </div>
              ))}
            </div>

            <div className="rera">
              <i className="fa-solid fa-certificate text-gold-500 text-sm" />
              <span className="text-sm font-body text-royal-800">
                MahaRERA: <strong>P99000051839</strong>
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-offwhite py-12 border-y border-gold-500/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { icon: "certificate", title: "RERA Registered", sub: "P99000051839" },
            { icon: "hard-hat", title: "Quality Construction", sub: "ISI-grade materials" },
            { icon: "key", title: "Easy Possession", sub: "Transparent process" },
            { icon: "handshake", title: "Trusted Developer", sub: "Arihant Infra" },
          ].map((t, i) => (
            <AnimatedSection key={t.title} delay={i * 0.08} className="text-center py-8 px-4 border-r border-gold-500/10 last:border-0">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ border: "1px solid rgba(201,168,76,0.25)", background: "linear-gradient(135deg,rgba(13,21,64,0.9),rgba(26,41,128,0.4))" }}>
                <i className={`fa-solid fa-${t.icon} text-gold-400 text-xl`} />
              </div>
              <div className="font-display text-royal-900 font-semibold text-sm mb-1">{t.title}</div>
              <div className="text-xs text-gray-500 font-body">{t.sub}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── PARALLAX QUOTE 1 ── */}
      <div className="relative h-[380px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=80"
            alt="Premium living"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5" style={{ background: "linear-gradient(135deg,rgba(6,10,30,0.92),rgba(10,15,44,0.72),rgba(6,10,30,0.9))" }}>
          <div className="section-label text-gold-400 justify-center">Premium Living</div>
          <h3 className="font-display text-white text-center italic font-light px-6" style={{ fontSize: "clamp(1.8rem,4.5vw,3.4rem)", maxWidth: 680, lineHeight: 1.3 }}>
            &ldquo;A space that understands the rhythm of your life&rdquo;
          </h3>
          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-gold-500 opacity-35" />
            <i className="fa-solid fa-diamond text-gold-500 text-[7px]" />
            <div className="h-px w-14 bg-gold-500 opacity-35" />
          </div>
        </div>
      </div>

      {/* ── AMENITIES ── */}
      <section id="amenities" className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="section-label mb-4 justify-center">Premium Specifications</div>
            <h2 className="font-display text-royal-900 font-bold leading-tight mb-2" style={{ fontSize: "clamp(2rem,4vw,3.1rem)" }}>
              World-Class <em className="gold-text">Amenities</em>
            </h2>
            <div className="ornament ornament-center"><i className="fa-solid fa-diamond text-gold-500 text-[7px]" /></div>
            <p className="font-body text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
              Every element curated for quality, durability, and elegance — because you deserve a home that reflects your taste.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainProject.amenities.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.07}>
                <div className="group bg-white border border-gold-500/10 rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-luxury">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg,#060A1E,#111C56)" }} />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center transition-all duration-400 group-hover:rotate-[-6deg] group-hover:scale-110" style={{ background: "linear-gradient(135deg,#0D1540,#1A2980)" }}>
                      <i className="fa-solid fa-gem text-gold-400 text-lg" />
                    </div>
                    <div className="font-display font-semibold text-royal-900 text-[1.1rem] mb-2 group-hover:text-white transition-colors">{a.title}</div>
                    <div className="text-sm text-gray-500 leading-relaxed font-body group-hover:text-white/60 transition-colors">{a.desc}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section id="projects" className="py-28 bg-royal-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none" style={{ background: "radial-gradient(circle,#C9A84C,transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="section-label text-gold-500 mb-4 justify-center">Our Portfolio</div>
            <h2 className="font-display text-white font-bold leading-tight mb-2" style={{ fontSize: "clamp(2rem,4vw,3.1rem)" }}>
              Featured <em className="gold-text">Projects</em>
            </h2>
            <div className="ornament ornament-center"><i className="fa-solid fa-diamond text-gold-500 text-[7px]" /></div>
            <p className="font-body text-gray-400 text-sm max-w-md mx-auto">
              Four landmark projects. One legacy built on quality, trust and timely delivery.
            </p>
          </AnimatedSection>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-0 max-w-lg mx-auto mb-14">
            {[
              { num: "4", label: "Total Projects" },
              { num: "1", label: "Ongoing" },
              { num: "3", label: "Completed" },
            ].map((s, i) => (
              <div key={s.label} className={`text-center py-5 ${i < 2 ? "border-r border-white/10" : ""}`}>
                <div className="font-display font-bold gold-text text-4xl leading-none mb-1">{s.num}</div>
                <div className="text-[9px] font-body tracking-widest text-gray-500 uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p as any} index={i} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects" className="btn-ghost">
              View All Projects <i className="fa-solid fa-arrow-right text-[9px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PARALLAX QUOTE 2 ── */}
      <div className="relative h-[340px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1800&q=80"
            alt="Floor plans"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5" style={{ background: "linear-gradient(135deg,rgba(6,10,30,0.92),rgba(10,15,44,0.72),rgba(6,10,30,0.9))" }}>
          <div className="section-label text-gold-400 justify-center">Why Choose Us</div>
          <h3 className="font-display text-white text-center italic font-light px-6" style={{ fontSize: "clamp(1.6rem,4vw,3rem)", maxWidth: 640, lineHeight: 1.3 }}>
            &ldquo;Spaces designed to breathe, to live, to grow&rdquo;
          </h3>
          <div className="flex gap-4 mt-2">
            <Link href="/projects/radhakrishna-apartments" className="btn-gold text-[10px] py-3">
              Explore RadhaKrishna Apt. <i className="fa-solid fa-arrow-right text-[9px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="section-label mb-4 justify-center">Book Your Home</div>
            <h2 className="font-display text-royal-900 font-bold leading-tight mb-2" style={{ fontSize: "clamp(2rem,4vw,3.1rem)" }}>
              Connect with <em className="gold-text">Our Team</em>
            </h2>
            <div className="ornament ornament-center"><i className="fa-solid fa-diamond text-gold-500 text-[7px]" /></div>
            <p className="font-body text-gray-500 text-sm max-w-md mx-auto">
              Talk to our experts, schedule a site visit, or simply reach out — we&apos;re here to guide you home.
            </p>
          </AnimatedSection>

          {/* Contact person cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { initials: "HG", name: "Harilal J. Gala", role: "Principal Developer" },
              { initials: "JG", name: "Jeet H. Gala", role: "Sales & Customer Relations" },
            ].map((person) => (
              <AnimatedSection key={person.initials}>
                <div className="bg-white rounded-2xl p-8 border border-gold-500/15 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-5 mb-7">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-gold-400 text-2xl" style={{ background: "linear-gradient(135deg,#0D1540,#1A2980)" }}>
                        {person.initials}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-royal-900 text-xl font-bold">{person.name}</div>
                      <div className="text-[9px] font-body tracking-widest uppercase text-gray-400 mt-1">{person.role}</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a href="tel:+91" className="flex items-center gap-3 text-sm font-body text-gray-600 hover:text-royal-800 transition-colors group">
                      <span className="w-9 h-9 rounded-lg bg-royal-900/5 group-hover:bg-royal-900/10 flex items-center justify-center transition-colors">
                        <i className="fa-solid fa-phone text-gold-500 text-xs" />
                      </span>
                      Call for {person.role.includes("Sales") ? "Booking" : "Site Inquiry"}
                    </a>
                    <a href="https://wa.me/91" className="flex items-center gap-3 text-sm font-body text-gray-600 hover:text-green-600 transition-colors group">
                      <span className="w-9 h-9 rounded-lg bg-green-50 group-hover:bg-green-100 flex items-center justify-center transition-colors">
                        <i className="fa-brands fa-whatsapp text-green-500" />
                      </span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Form */}
          <AnimatedSection>
            <div className="bg-royal-900 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 p-10 lg:p-14 flex flex-col justify-between" style={{ background: "linear-gradient(135deg,#060A1E,#111C56)" }}>
                  <div>
                    <div className="section-label mb-4 text-gold-400">Express Interest</div>
                    <h3 className="font-display text-white text-3xl font-bold mb-5 leading-tight">
                      Request a<br />
                      <em className="gold-text">Callback</em>
                    </h3>
                    <p className="font-body text-gray-400 text-sm leading-relaxed mb-8">
                      Fill in your details and our team will call you back within 24 hours for a personalised consultation.
                    </p>
                    <div className="space-y-3 text-sm font-body text-gray-400">
                      {["No obligation, free consultation", "Site visit can be arranged", "Loan assistance available"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <i className="fa-solid fa-check-circle text-gold-500 text-xs flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-10">
                    <div className="rera">
                      <i className="fa-solid fa-shield-halved text-gold-400 text-xs" />
                      <span className="text-xs font-body text-gray-400">
                        RERA: <span className="text-gold-400 font-semibold">P99000051839</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 p-10 lg:p-14">
                  <ContactForm projectTitle="General Inquiry" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
