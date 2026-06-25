import { getServices } from "@/lib/actions/services";
import { testimonials } from "@/lib/data/company";
import Image from "next/image";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      {/* HERO */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Our Services</h1>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            Professional engineering, technical support, industrial maintenance
            and procurement solutions.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any) => (
              <div
                key={service.id}
                className="bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                {service.image_url && (
                  <Image
                    src={service.image_url}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                )}

                <div className="p-6">
                  <div className="text-3xl mb-4">{service.icon}</div>

                  <h2 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h2>

                  <p className="text-slate-600">{service.short_description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div key={item.name} className="bg-white border rounded-2xl p-8">
                <p className="italic text-slate-600">"{item.quote}"</p>

                <h3 className="font-semibold mt-6">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
