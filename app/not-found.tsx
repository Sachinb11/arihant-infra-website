import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "linear-gradient(135deg,#060A1E,#0D1540)" }}
    >
      <div className="font-display font-black gold-text leading-none mb-4" style={{ fontSize: "8rem" }}>
        404
      </div>
      <h1 className="font-display text-white text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="font-body text-gray-400 text-sm mb-8 max-w-md leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Let us help you find your dream home.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-gold">
          <i className="fa-solid fa-home text-[9px]" /> Back to Home
        </Link>
        <Link href="/projects" className="btn-ghost">
          View Projects
        </Link>
      </div>
    </div>
  );
}
