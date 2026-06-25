import { createClient } from "@/lib/supabase/server";
import EditServiceForm from "./service-form";

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: service } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  if (!service) {
    return <div>Service not found.</div>;
  }

  return <EditServiceForm service={service} />;
}
