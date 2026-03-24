export default function MarqueeStrip() {
  const items = [
    "Premium 1BHK & 2BHK Flats",
    "G+7 Storey Building",
    "PMC Approved",
    "Earthquake Resistant Structure",
    "Branded Lifts",
    "Major Bank Loans Available",
    "Near Railway Station",
    "MahaRERA: P99000051839",
    "Architect: Pranav Deshmukh",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y"
      style={{
        background: "#0D1540",
        borderColor: "rgba(201,168,76,0.18)",
      }}
    >
      <div className="marquee-track py-0">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-10 py-3.5 text-[10px] font-bold tracking-[0.18em] uppercase whitespace-nowrap font-body"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "#C9A84C" }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
