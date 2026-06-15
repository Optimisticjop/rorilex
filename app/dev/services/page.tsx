import { createClient } from "@/lib/supabase/server";

export default async function TestPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("services").select("*");

  if (error) {
    return <div className="p-10">Error: {error.message}</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Services</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
