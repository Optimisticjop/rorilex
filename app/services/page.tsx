import { getAllServices } from "@/lib/actions/services";
import { serviceIcons } from "@/lib/constants/service-icons";
import { Wrench } from "lucide-react";

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <>
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Our Services</h1>

          <p className="mt-6 text-slate-300">
            Comprehensive engineering and technical solutions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon =
                serviceIcons[service.title as keyof typeof serviceIcons] ||
                Wrench;

              return (
                <div key={service.id} className="border rounded-xl p-6">
                  <Icon className="mb-4 text-sky-600" />

                  <h3 className="font-semibold mb-3">{service.title}</h3>

                  <p className="text-slate-600 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
