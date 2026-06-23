"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
  const supabase = await createClient();

  const title = formData.get("title") as string;

  const { error } = await supabase.from("projects").insert({
    title,
    slug: title.toLowerCase().replaceAll(" ", "-"),
    client_name: formData.get("client_name"),
    description: formData.get("description"),
    location: formData.get("location"),
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
