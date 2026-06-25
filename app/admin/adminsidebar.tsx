"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Dashboard", href: "/admin" },
    { name: "Quote Requests", href: "/admin/quotes" },
    { name: "Contact Messages", href: "/admin/messages" },
    { name: "Projects", href: "/admin/projects" },
    { name: "Products", href: "/admin/products" },
    { name: "Services", href: "/admin/services" },
  ];

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded-lg border"
      >
        <Menu size={22} />
      </button>

      {/* MOBILE SIDEBAR */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />

          <aside className="fixed left-0 top-0 h-full w-72 bg-slate-900 text-white z-50">
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <div>
                <h1 className="font-bold text-xl">Rorilex CMS</h1>
                <p className="text-sm text-slate-400">Admin Panel</p>
              </div>

              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="p-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-slate-800"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
