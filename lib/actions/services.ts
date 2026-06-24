"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadImage } from "./upload";

export async function createService(formData: FormData) {
  const supabase = await createClient();

  const imageFile = formData.get("image") as File;

  let imageUrl = null;

  if (imageFile && imageFile.size > 0) {
    imageUrl = await uploadImage(imageFile, "services");
  }

  const { error } = await supabase.from("services").insert({
    title: formData.get("title"),
    short_description: formData.get("short_description"),
    icon: formData.get("icon"),
    image_url: imageUrl,
    is_featured: formData.get("is_featured") === "on",
  });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  revalidatePath("/services");
  revalidatePath("/admin/services");

  redirect("/admin/services");
}

export async function getServices() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("services")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  return data || [];
}

export async function getFeaturedServices() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("services")
    .select("*")
    .eq("is_featured", true)
    .limit(6);

  return data || [];
}
