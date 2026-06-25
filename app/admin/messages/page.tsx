// import { createClient } from "@/lib/supabase/server";

// export default async function MessagesPage() {
//   const supabase = await createClient();

//   const { data, error } = await supabase
//     .from("contact_messages")
//     .select("*")
//     .order("created_at", {
//       ascending: false,
//     });

//   console.log("MESSAGES:", data);
//   console.log("ERROR:", error);

//   return (
//     <div className="max-w-7xl mx-auto p-10">
//       <h1 className="text-3xl font-bold mb-8">Contact Messages</h1>

//       <h2 className="font-bold">Error:</h2>
//       <pre>{JSON.stringify(error, null, 2)}</pre>

//       <h2 className="font-bold mt-6">Data:</h2>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

import { createClient } from "@/lib/supabase/server";

export default async function MessagesPage() {
  const supabase = await createClient();

  const { data: messages, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Contact Messages</h1>
          <p className="text-slate-500">Manage inquiries from your website</p>
        </div>

        <div className="text-sm text-slate-500">
          Total: {messages?.length || 0}
        </div>
      </div>

      {/* ERROR STATE */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
          <p className="font-semibold">Error loading messages</p>
          <pre className="text-xs mt-2">{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}

      {/* EMPTY STATE */}
      {!messages?.length && !error && (
        <div className="text-center py-20 border rounded-xl bg-slate-50">
          <h2 className="text-xl font-semibold">No messages yet</h2>
          <p className="text-slate-500 mt-2">
            Customer inquiries will appear here
          </p>
        </div>
      )}

      {/* MESSAGE LIST */}
      <div className="grid gap-6">
        {messages?.map((msg: any) => (
          <div
            key={msg.id}
            className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
          >
            {/* TOP ROW */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  {msg.full_name || "No Name"}
                </h2>
                <p className="text-sm text-slate-500">{msg.email}</p>
              </div>

              <span className="text-xs text-slate-400">
                {new Date(msg.created_at).toLocaleString()}
              </span>
            </div>

            {/* SUBJECT */}
            <div className="mt-4">
              <p className="text-sm font-medium text-sky-600">
                {msg.subject || "No Subject"}
              </p>
            </div>

            {/* MESSAGE */}
            <p className="mt-3 text-slate-700 leading-relaxed">{msg.message}</p>

            {/* ACTIONS */}
            <div className="mt-5 flex gap-3">
              <a
                href={`mailto:${msg.email}`}
                className="text-sm px-3 py-1 rounded-md bg-sky-50 text-sky-600 hover:bg-sky-100"
              >
                Reply
              </a>

              <button className="text-sm px-3 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}