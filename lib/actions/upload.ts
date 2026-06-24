"use server";

import { createClient } from "@/lib/supabase/server";

export async function uploadImage(file: File, bucket: string) {
  const supabase = await createClient();

  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage.from(bucket).upload(fileName, file);

  if (error) {
    throw new Error(error.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(fileName);

  return publicUrl;
}
