"use client";

import { deleteProduct } from "@/lib/actions/products";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm("Delete this product?");

    if (!confirmed) return;

    await deleteProduct(id);

    router.refresh();
  }

  return (
    <button onClick={handleDelete} className="text-red-600">
      Delete
    </button>
  );
}
