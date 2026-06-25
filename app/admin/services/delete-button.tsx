"use client";

import { deleteService } from "@/lib/actions/services";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <button
      onClick={async () => {
        if (confirm("Delete this service?")) {
          await deleteService(id);
        }
      }}
      className="text-red-600"
    >
      Delete
    </button>
  );
}
