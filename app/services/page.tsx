import { getServices } from "@/lib/actions/services";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>

        <p className="text-slate-600">
          Technical support, industrial solutions, engineering services and
          project execution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service: any) => (
          <div
            key={service.id}
            className="border rounded-2xl p-6 bg-white shadow-sm"
          >
            <div className="text-3xl mb-4">{service.icon}</div>

            <h2 className="text-xl font-semibold mb-3">{service.title}</h2>

            <p className="text-slate-600">{service.short_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
