"use server";

import { createClient } from "@/lib/supabase/server";

export async function createQuoteRequest(formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.from("quote_requests").insert({
    full_name: formData.get("full_name"),
    company_name: formData.get("company_name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
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
