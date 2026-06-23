import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!product) {
    return <div className="p-20">Product not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="h-96 bg-slate-100 rounded-xl" />

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

          <p className="text-sky-600 mb-4">{product.category}</p>

          <p className="text-slate-600 mb-8">{product.description}</p>

          <Link
            href="/quote"
            className="bg-sky-600 text-white px-6 py-3 rounded-lg"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
