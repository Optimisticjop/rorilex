import { getProjects } from "@/lib/actions/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Projects</h1>

          <p className="mt-6 text-slate-300">
            Selected engineering and technical projects.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {projects.length === 0 ? (
            <div className="text-center text-slate-500">
              No projects added yet.
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border rounded-xl overflow-hidden"
                >
                  <div className="h-52 bg-slate-100" />

                  <div className="p-6">
                    <h3 className="font-semibold text-lg">{project.title}</h3>

                    <p className="text-slate-500 mt-3">{project.description}</p>

                    <p className="mt-4 text-sm text-slate-400">
                      Client: {project.client_name || "N/A"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
