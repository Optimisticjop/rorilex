import { createClient } from "@/lib/supabase/server";
import QuoteActions from "@/components/admin/quote-actions";

export default async function QuotesPage() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("quote_requests")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Quote Requests</h1>
        <p className="text-slate-500">
          Manage and respond to customer requests
        </p>
      </div>

      <div className="overflow-x-auto border rounded-xl bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Contact</th>
              <th className="p-4 text-left">Project</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((quote: any) => (
              <tr key={quote.id} className="border-t hover:bg-slate-50">
                <td className="p-4 font-medium">{quote.full_name}</td>
                <td className="p-4 text-slate-600">{quote.company || "-"}</td>

                <td className="p-4">
                  <div>{quote.email}</div>
                  <div className="text-xs text-slate-500">{quote.phone}</div>
                </td>

                <td className="p-4 max-w-xs truncate">
                  {quote.project_details}
                </td>

                <td className="p-4 text-slate-500">
                  {new Date(quote.created_at).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <QuoteActions quote={quote} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!data?.length && (
        <div className="text-center py-16 text-slate-500">
          No quote requests yet
        </div>
      )}
    </div>
  );
}
