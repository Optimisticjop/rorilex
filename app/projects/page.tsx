import { getProjects } from "@/lib/actions/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="text-slate-500 mt-2">{project.description}</p>

            <div className="mt-4 text-sm text-slate-400">
              {project.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
