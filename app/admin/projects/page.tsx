import Link from "next/link";
import { getProjects } from "@/lib/actions/projects";
import Image from "next/image";
import DeleteButton from "./delete-button";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>

        <Link
          href="/admin/projects/new"
          className="bg-sky-600 text-white px-4 py-2 rounded-lg"
        >
          Add Project
        </Link>
      </div>

      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Image</th>
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Client</th>
              <th className="text-left p-4">Location</th>
              <th className="text-left p-4">Featured</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t">
                <td className="p-4">
                  {project.image_url && (
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  )}
                </td>
                <td className="p-4">{project.title}</td>

                <td className="p-4">{project.client_name}</td>

                <td className="p-4">{project.location}</td>

                <td className="p-4">{project.is_featured ? "✅" : "❌"}</td>

                <td className="p-4">
                  <div className="flex gap-4">
                    <Link
                      href={`/admin/projects/${project.id}`}
                      className="text-sky-600"
                    >
                      Edit
                    </Link>

                    <DeleteButton id={project.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
