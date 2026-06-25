"use client";

export default function QuoteActions({ quote }: any) {
  const handleView = () => {
    alert(`Project Details:\n\n${quote.project_details}`);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {/* VIEW */}
      <button
        onClick={handleView}
        className="px-3 py-1 text-xs rounded-md bg-slate-100 hover:bg-slate-200 transition"
      >
        View
      </button>

      {/* REPLY */}
      <a
        href={`mailto:${quote.email}?subject=Your Quote Request&body=Hello ${quote.full_name},%0D%0A%0D%0AThank you for your request.`}
        className="px-3 py-1 text-xs rounded-md bg-green-100 text-green-700 hover:bg-green-200 transition"
      >
        Reply
      </a>

      {/* CLOSE (UI only for now) */}
      <button className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition">
        Close
      </button>
    </div>
  );
}
