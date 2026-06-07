import { ShieldCheck, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable Supply Chain",
    desc: "We ensure secure procurement and delivery of quality industrial and commercial products.",
  },
  {
    icon: Clock,
    title: "Fast Response & Delivery",
    desc: "We prioritize speed in quotation, service delivery, and technical support.",
  },
  {
    icon: Users,
    title: "Experienced Technical Team",
    desc: "Our engineers and technicians bring hands-on industrial experience across sectors.",
  },
  {
    icon: Award,
    title: "Proven Industry Expertise",
    desc: "We have successfully delivered solutions for multiple businesses and industries.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sky-600 uppercase tracking-widest text-sm">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Built on Trust, Speed & Technical Excellence
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Rorilex Technical Solutions is committed to delivering reliable
            industrial and procurement services with professionalism and
            integrity.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center mb-4">
                  <Icon className="text-sky-600" />
                </div>

                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* STATS SECTION */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-3xl font-bold text-sky-600">100+</h3>
            <p className="text-slate-500 text-sm mt-1">Projects Delivered</p>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-3xl font-bold text-sky-600">50+</h3>
            <p className="text-slate-500 text-sm mt-1">Business Clients</p>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-3xl font-bold text-sky-600">5+</h3>
            <p className="text-slate-500 text-sm mt-1">Years Experience</p>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-3xl font-bold text-sky-600">24/7</h3>
            <p className="text-slate-500 text-sm mt-1">Support Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
