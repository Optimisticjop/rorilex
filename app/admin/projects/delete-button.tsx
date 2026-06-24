"use client";

import { deleteProject } from "@/lib/actions/projects";

export default function DeleteButton({ id }: { id: string }) {
  async function handleDelete() {
    const confirmed = confirm("Delete this project?");

    if (!confirmed) return;

    await deleteProject(id);

    location.reload();
  }

  return (
    <button onClick={handleDelete} className="text-red-600">
      Delete
    </button>
  );
}
