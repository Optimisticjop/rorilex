"use server";

import { createClient } from "@/lib/supabase/server";

export async function createContactMessage(formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.from("contact_messages").insert({
    full_name: formData.get("full_name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
  };
}
