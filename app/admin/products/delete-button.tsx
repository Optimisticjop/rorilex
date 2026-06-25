"use client";

import { deleteProduct } from "@/lib/actions/products";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <button
      onClick={async () => {
        if (confirm("Delete this product?")) {
          await deleteProduct(id);
        }
      }}
      className="text-red-600"
    >
      Delete
    </button>
  );
}
