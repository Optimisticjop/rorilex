"use client";

import { updateProject } from "@/lib/actions/projects";

export default function EditProjectForm({ project }: { project: any }) {
  async function handleSubmit(formData: FormData) {
    await updateProject(project.id, formData);
  }

  <form action={handleSubmit}></form>

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Edit Project</h1>

      <form action={handleSubmit} className="space-y-4">
        <input
          name="title"
          defaultValue={project.title}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="client_name"
          defaultValue={project.client_name}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="location"
          defaultValue={project.location}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="description"
          rows={5}
          defaultValue={project.description}
          className="w-full border rounded-lg p-3"
        />

        <label className="flex gap-2">
          <input
            type="checkbox"
            name="is_featured"
            defaultChecked={project.is_featured}
          />
          Featured
        </label>

        <button
          type="submit"
          className="bg-sky-600 text-white px-6 py-3 rounded-lg"
        >
          Update Project
        </button>
      </form>
    </div>
  );
}
