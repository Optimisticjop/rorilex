"use client";

import { deleteProject } from "@/lib/actions/projects";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm("Delete this project?");

    if (!confirmed) return;

    await deleteProject(id);

    router.refresh();
  }

  return (
    <button onClick={handleDelete} className="text-red-600">
      Delete
    </button>
  );
}
