"use client";

import { updateProduct } from "@/lib/actions/products";

export default function EditProductForm({ product }: { product: any }) {
  const updateProductWithId = updateProduct.bind(null, product.id);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Edit Product</h1>

      <form action={updateProductWithId} className="space-y-4">
        <input
          name="title"
          defaultValue={product.title}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="short_description"
          defaultValue={product.short_description}
          rows={5}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="icon"
          defaultValue={product.icon}
          className="w-full border rounded-lg p-3"
        />

        <label className="flex gap-2">
          <input
            type="checkbox"
            name="is_featured"
            defaultChecked={product.is_featured}
          />
          Featured
        </label>

        <button
          type="submit"
          className="bg-sky-600 text-white px-6 py-3 rounded-lg"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
