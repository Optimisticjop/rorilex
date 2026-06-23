import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    {
      name: "Dashboard",
      href: "/admin",
    },
    {
      name: "Quotes",
      href: "/admin/quotes",
    },
    {
      name: "Messages",
      href: "/admin/messages",
    },
    {
      name: "Projects",
      href: "/admin/projects",
    },
    {
      name: "Products",
      href: "/admin/products",
    },
    {
      name: "Services",
      href: "/admin/services",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold">Rorilex CMS</h1>

          <p className="text-sm text-slate-400">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* CONTENT */}
      <div className="flex-1">
        {/* TOPBAR */}
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="font-semibold text-lg">Rorilex Admin</h2>

          <Link href="/" className="text-sky-600 font-medium">
            View Website →
          </Link>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
