import Link from "next/link";
import { getServices } from "@/lib/actions/services";
import Image from "next/image";

export default async function AdminServicesPage() {
  const services = await getServices();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Services</h1>

        <Link
          href="/admin/services/new"
          className="bg-sky-600 text-white px-5 py-3 rounded-lg"
        >
          Add Service
        </Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl border">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Icon</th>
              <th className="p-4 text-left">Featured</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service: any) => (
              <tr key={service.id} className="border-t">
                <td className="p-4">
                  {service.image_url && (
                    <Image
                      src={service.image_url}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  )}
                </td>

                <td className="p-4">{service.title}</td>

                <td className="p-4">{service.short_description}</td>

                <td className="p-4">{service.icon}</td>

                <td className="p-4">{service.is_featured ? "✅" : "❌"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
