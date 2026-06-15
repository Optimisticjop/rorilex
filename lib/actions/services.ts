import { createClient } from "@/lib/supabase/server";

export async function getFeaturedServices() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("services")
    .select("*")
    // .eq("is_featured", true)
    // .order("created_at");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getAllServices() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("created_at");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
