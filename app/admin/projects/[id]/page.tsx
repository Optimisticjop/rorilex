import { createClient } from "@/lib/supabase/server";
import EditProjectForm from "./project-form";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (!project) {
    return <div>Project not found.</div>;
  }

  return <EditProjectForm project={project} />;
}
