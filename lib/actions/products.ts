"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadImage } from "./upload";

export async function createProduct(formData: FormData) {
  const supabase = await createClient();

  const imageFile = formData.get("image") as File;

  let imageUrl = null;

  if (imageFile && imageFile.size > 0) {
    imageUrl = await uploadImage(imageFile, "products");
  }

  const title = formData.get("title") as string;

  const slug = title
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(/[^\w-]+/g, "");

  const { error } = await supabase.from("products").insert({
    title,
    slug,
    category: formData.get("category"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    stock: Number(formData.get("stock")),
    image_url: imageUrl,
    is_featured: formData.get("is_featured") === "on",
  });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  revalidatePath("/products");
  revalidatePath("/");

  redirect("/admin/products");
}

export async function getAllProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getFeaturedProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_featured", true)
    .limit(4);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function updateProduct(id: string, formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("products")
    .update({
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("description"),
      stock: Number(formData.get("stock")),
      is_featured: formData.get("is_featured") === "on",
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/products");
  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function deleteProduct(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/products");
  revalidatePath("/admin/products");
  redirect("/admin/products");
}