import { COMPANY } from "@/lib/constants/company";

const values = [
  "Professionalism",
  "Integrity",
  "Safety",
  "Reliability",
  "Innovation",
  "Excellence",
  "Customer Satisfaction",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">About Us</h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-300">
            {COMPANY.name} delivers industrial maintenance, engineering,
            construction, procurement (PPE's) and technical support services across
            Ghana and West Africa.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Company Overview</h2>

          <p className="text-slate-600 leading-8">
            Rorilex Technical Solutions Ltd provides industrial maintenance,
            machinery installation, structural engineering, software
            development, technical consultancy and procurement (PPE's) solutions for
            businesses, industries and institutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mission</h3>

            <p className="text-slate-600">
              To provide high-quality industrial maintenance, engineering,
              construction and technical support services through
              professionalism, innovation, safety and customer satisfaction.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Vision</h3>

            <p className="text-slate-600">
              To become the preferred industrial maintenance, engineering and
              technical solutions provider in Ghana and West Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value}
                className="border rounded-xl p-6 text-center shadow-sm"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
