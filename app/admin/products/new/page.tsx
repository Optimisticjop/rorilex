import { createProduct } from "@/lib/actions/products";

export default function NewProductPage() {
  return (
    <div className="max-w-3xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8">Add Product</h1>

      <form action={createProduct} className="space-y-4">
        <input
          name="title"
          placeholder="Product Title"
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          name="category"
          placeholder="Category"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="description"
          placeholder="Description"
          rows={5}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full border rounded-lg p-3"
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock Quantity"
          className="w-full border rounded-lg p-3"
        />

        <label className="flex gap-2">
          <input type="checkbox" name="is_featured" />
          Featured Product
        </label>

        <button
          type="submit"
          className="bg-sky-600 text-white px-6 py-3 rounded-lg"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}
