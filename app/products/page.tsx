import Link from "next/link";
import { getAllProducts } from "@/lib/actions/products";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <>
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Industrial Products</h1>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            Supplying quality industrial equipment, spare parts and engineering
            materials for businesses across Ghana.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white border rounded-xl p-6 text-center">
              ISO Compliance
            </div>

            <div className="bg-white border rounded-xl p-6 text-center">
              Industrial Standards
            </div>

            <div className="bg-white border rounded-xl p-6 text-center">
              Quality Assurance
            </div>

            <div className="bg-white border rounded-xl p-6 text-center">
              Safety Certified
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product: any) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                {product.image_url && (
                  <Image
                    src={product.image_url}
                    alt={product.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                )}

                <div className="p-5">
                  <h3 className="font-semibold text-lg">{product.title}</h3>

                  <p className="text-sky-600 text-sm mt-2">
                    {product.category}
                  </p>

                  <p className="text-slate-500 text-sm mt-3">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
