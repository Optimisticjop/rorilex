"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { uploadImage } from "./upload";

export async function createProject(formData: FormData) {
  const supabase = await createClient();

  const imageFile = formData.get("image") as File;

  let imageUrl = null;

  if (imageFile && imageFile.size > 0) {
    imageUrl = await uploadImage(imageFile, "projects");
  }

  const title = formData.get("title") as string;

  const { error } = await supabase.from("projects").insert({
    title,
    slug: title.toLowerCase().replaceAll(" ", "-"),
    client_name: formData.get("client_name"),
    description: formData.get("description"),
    location: formData.get("location"),
    image_url: imageUrl,
    is_featured: formData.get("is_featured") === "on",
  });

  if (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/projects");
  revalidatePath("/admin/projects");

  return {
    success: true,
  };
}

export async function getProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function updateProject(id: string, formData: FormData) {
  "use server";

  const supabase = await createClient();

  console.log("TITLE:", formData.get("title"));

  const { error } = await supabase
    .from("projects")
    .update({
      title: formData.get("title"),
      client_name: formData.get("client_name"),
      description: formData.get("description"),
      location: formData.get("location"),
      is_featured: formData.get("is_featured") === "on",
    })
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
}

export async function deleteProject(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}