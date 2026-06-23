import Link from "next/link";
import { getAllProducts } from "@/lib/actions/products";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12">Products</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="border rounded-xl p-5 hover:shadow-lg transition"
          >
            <div className="h-48 bg-slate-100 rounded-lg mb-4" />

            <h3 className="font-semibold">{product.title}</h3>

            <p className="text-sm text-sky-600">{product.category}</p>

            <p className="text-sm text-slate-500 mt-2">{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
