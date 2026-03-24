export default function Loading() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="skeleton h-72 bg-gray-200 mb-16" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="skeleton h-6 w-40 rounded mb-10 bg-gray-200" />
        <div className="skeleton h-64 rounded-2xl mb-16 bg-gray-200" />
        <div className="skeleton h-6 w-40 rounded mb-8 bg-gray-200" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <div className="skeleton h-48 bg-gray-200" />
              <div className="p-6 space-y-3 bg-white">
                <div className="skeleton h-4 w-24 rounded bg-gray-200" />
                <div className="skeleton h-6 w-40 rounded bg-gray-200" />
                <div className="skeleton h-3 w-full rounded bg-gray-200" />
                <div className="skeleton h-3 w-4/5 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
