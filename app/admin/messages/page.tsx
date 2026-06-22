import { createClient } from "@/lib/supabase/server";

export default async function MessagesPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  console.log("MESSAGES:", data);
  console.log("ERROR:", error);

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Contact Messages</h1>

      <h2 className="font-bold">Error:</h2>
      <pre>{JSON.stringify(error, null, 2)}</pre>

      <h2 className="font-bold mt-6">Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
