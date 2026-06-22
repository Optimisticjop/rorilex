const industries = [
  "Textile Industries",
  "Manufacturing Companies",
  "Processing Plants",
  "Food & Beverage",
  "Pharmaceuticals",
  "Mining",
  "Construction",
  "Hospitals",
  "Government Agencies",
  "Educational Institutions",
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Industries We Serve</h1>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            We provide industrial maintenance, engineering, procurement and
            technical support services to a wide range of industries across
            Ghana.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry) => (
              <div
                key={industry}
                className="border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
