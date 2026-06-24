import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("ADMIN USER:", user);

  if (!user) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("admin_users")
    .select("*")
    .eq("email", user.email)
    .single();

  console.log("ADMIN RECORD:", data);
  console.log("ADMIN ERROR:", error);

  if (!data) {
    redirect("/");
  }

  return user;
}
