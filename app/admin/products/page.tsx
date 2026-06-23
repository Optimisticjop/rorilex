import Link from "next/link";
import { getAllProducts } from "@/lib/actions/products";

export default async function ProductsAdminPage() {
  const products = await getAllProducts();

  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Products Dashboard</h1>

        <Link
          href="/admin/products/new"
          className="bg-sky-600 text-white px-4 py-2 rounded-lg"
        >
          Add Product
        </Link>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3 text-left">Featured</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product: any) => (
            <tr key={product.id} className="border-t">
              <td className="p-3">{product.title}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.stock}</td>
              <td className="p-3">{product.is_featured ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
