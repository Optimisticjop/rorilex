"use client";

import { deleteService } from "@/lib/actions/services";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm("Delete this service?");

    if (!confirmed) return;

    await deleteService(id);

    router.refresh();
  }

  return (
    <button onClick={handleDelete} className="text-red-600">
      Delete
    </button>
  );
}
