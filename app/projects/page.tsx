import { getProjects } from "@/lib/actions/projects";
import Image from "next/image";
import { stats, testimonials } from "@/lib/data/company";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      {/* HERO */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Our Projects</h1>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            Delivering engineering excellence, procurement solutions and
            industrial support services across Ghana.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="bg-white border rounded-2xl p-8 text-center shadow-sm"
              >
                <h2 className="text-4xl font-bold text-sky-600">
                  {item.value}
                </h2>

                <p className="mt-2 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Recent Projects</h2>

            <p className="text-slate-600 mt-4">
              Selected projects completed for industrial and commercial clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition"
              >
                <Image
                  src={project.image_url}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="text-slate-600 mt-3">{project.description}</p>

                  <div className="mt-4 text-sm text-sky-600 font-medium">
                    {project.location}
                  </div>
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
            Client Feedback
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.name} className="bg-white border rounded-2xl p-6">
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
