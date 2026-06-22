import { getProducts } from "@/lib/actions/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Products</h1>

          <p className="mt-6 text-slate-300">
            Industrial and engineering supplies.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {products.length === 0 ? (
            <div className="text-center text-slate-500">
              No products added yet.
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="border rounded-xl p-6">
                  <h3 className="font-semibold">{product.name}</h3>

                  <p className="text-sm text-slate-500 mt-3">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
