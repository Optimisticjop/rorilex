import Link from "next/link";
import { getFeaturedProducts } from "@/lib/actions/products";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product: any) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="bg-white border rounded-xl p-5"
            >
              <div className="h-40 bg-slate-100 rounded-lg mb-4" />

              <h3 className="font-semibold">{product.title}</h3>

              <p className="text-sm text-slate-500">{product.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
