import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [
    quotesResult,
    messagesResult,
    projectsResult,
    productsResult,
    servicesResult,
  ] = await Promise.all([
    supabase.from("quote_requests").select("*", { count: "exact", head: true }),

    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true }),

    supabase.from("projects").select("*", { count: "exact", head: true }),

    supabase.from("products").select("*", { count: "exact", head: true }),

    supabase.from("services").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    {
      title: "Quote Requests",
      count: quotesResult.count || 0,
      href: "/admin/quotes",
    },
    {
      title: "Contact Messages",
      count: messagesResult.count || 0,
      href: "/admin/messages",
    },
    {
      title: "Projects",
      count: projectsResult.count || 0,
      href: "/admin/projects",
    },
    {
      title: "Products",
      count: productsResult.count || 0,
      href: "/admin/products",
    },
    {
      title: "Services",
      count: servicesResult.count || 0,
      href: "/admin/services",
    },
  ];

  const { data: latestQuotes } = await supabase
    .from("quote_requests")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  const { data: latestMessages } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  const { data: latestProjects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1> */}
      <h1 className="text-3xl md:text-4xl font-bold mb-10">Admin Dashboard</h1>

      <div className="flex flex-wrap gap-4 mb-10">
        <Link
          href="/admin/projects/new"
          className="bg-sky-600 text-white px-5 py-3 rounded-lg"
        >
          + New Project
        </Link>

        <Link
          href="/admin/products/new"
          className="bg-green-600 text-white px-5 py-3 rounded-lg"
        >
          + New Product
        </Link>

        <Link
          href="/admin/services/new"
          className="bg-purple-600 text-white px-5 py-3 rounded-lg"
        >
          + New Service
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="border rounded-xl p-6 bg-white hover:shadow-lg transition"
          >
            <p className="text-slate-500 text-sm">{item.title}</p>

            {/* <h2 className="text-4xl font-bold mt-2">{item.count}</h2> */}

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              {item.count}
            </h2>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-12">
        <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-4">Latest Quotes</h2>

          <div className="space-y-3">
            {latestQuotes?.length ? (
              latestQuotes.map((quote: any) => (
                <div key={quote.id} className="border-b pb-2">
                  <p className="font-medium">{quote.full_name}</p>
                  <p className="text-sm text-slate-500">{quote.company}</p>
                </div>
              ))
            ) : (
              <p className="text-slate-500">No quotes yet.</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-4">Latest Messages</h2>

          <div className="space-y-3">
            {latestMessages?.length ? (
              latestMessages.map((message: any) => (
                <div key={message.id} className="border-b pb-2">
                  <p className="font-medium">{message.full_name}</p>
                  <p className="text-sm text-slate-500">{message.subject}</p>
                </div>
              ))
            ) : (
              <p className="text-slate-500">No messages yet.</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-4">Latest Projects</h2>

          <div className="space-y-3">
            {latestProjects?.length ? (
              latestProjects.map((project: any) => (
                <div key={project.id} className="border-b pb-2">
                  <p className="font-medium">{project.title}</p>

                  <p className="text-sm text-slate-500">
                    {project.client_name}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-slate-500">No projects yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
