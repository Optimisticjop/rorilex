"use client";

import { useState } from "react";
import { createProject } from "@/lib/actions/projects";

export default function ProjectForm() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    const result = await createProject(formData);

    if (result.success) {
      setSuccess(true);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <input
        name="title"
        required
        placeholder="Project Title"
        className="w-full border rounded-lg p-3"
      />

      <input
        name="client_name"
        placeholder="Client"
        className="w-full border rounded-lg p-3"
      />

      <input
        name="location"
        placeholder="Location"
        className="w-full border rounded-lg p-3"
      />

      <textarea
        name="description"
        rows={5}
        placeholder="Description"
        className="w-full border rounded-lg p-3"
      />

      <label className="flex items-center gap-2">
        <input type="checkbox" name="is_featured" />
        Featured Project
      </label>

      <button
        type="submit"
        className="bg-sky-600 text-white px-6 py-3 rounded-lg"
      >
        Save Project
      </button>

      {success && (
        <p className="text-green-600">Project created successfully.</p>
      )}
    </form>
  );
}
