import {
  Factory,
  Building2,
  Hospital,
  School,
  Pickaxe,
  Wheat,
} from "lucide-react";

const industries = [
  {
    title: "Textile Industries",
    icon: Factory,
  },
  {
    title: "Manufacturing Companies",
    icon: Building2,
  },
  {
    title: "Processing Plants",
    icon: Factory,
  },
  {
    title: "Food & Beverage",
    icon: Wheat,
  },
  {
    title: "Pharmaceutical Industries",
    icon: Hospital,
  },
  {
    title: "Mining Companies",
    icon: Pickaxe,
  },
  {
    title: "Construction Companies",
    icon: Building2,
  },
  {
    title: "Hospitals",
    icon: Hospital,
  },
  {
    title: "Government Agencies",
    icon: Building2,
  },
  {
    title: "Educational Institutions",
    icon: School,
  },
];

export default function Industries() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <p className="text-sky-600 uppercase tracking-widest text-sm">
            Industries We Serve
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Supporting Diverse Industries Across Ghana
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We provide engineering, maintenance and technical solutions to
            organizations across multiple sectors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-xl border p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-sky-50 flex items-center justify-center mb-4">
                  <Icon className="text-sky-600" />
                </div>

                <h3 className="font-semibold">{industry.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
