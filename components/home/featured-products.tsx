import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts } from "@/lib/actions/products";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  if (!products?.length) {
    return null; // or a fallback UI
  }

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
              className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="relative w-full h-48 bg-slate-100">
                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                    No image
                  </div>
                )}
              </div>

              {/* TEXT */}
              <div className="p-5">
                <h3 className="font-semibold">{product.title}</h3>

                <p className="text-sm text-slate-500">{product.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
