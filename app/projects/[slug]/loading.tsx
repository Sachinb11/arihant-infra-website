export default function Loading() {
  return (
    <div className="min-h-screen bg-cream pt-0">
      {/* Hero skeleton */}
      <div className="skeleton h-[70vh] min-h-[500px] bg-gray-200" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Stats skeleton */}
            <div className="skeleton h-20 rounded-2xl bg-gray-200" />
            {/* Content blocks */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="skeleton h-4 w-24 rounded bg-gray-200" />
                <div className="skeleton h-6 w-48 rounded bg-gray-200" />
                <div className="skeleton h-4 w-full rounded bg-gray-200" />
                <div className="skeleton h-4 w-5/6 rounded bg-gray-200" />
                <div className="skeleton h-4 w-4/5 rounded bg-gray-200" />
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="skeleton h-[600px] rounded-3xl bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
