import { createClient } from "@/lib/supabase/server";
import EditProductForm from "./product-form";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (!product) {
    return <div>Product not found.</div>;
  }

  return <EditProductForm product={product} />;
}
