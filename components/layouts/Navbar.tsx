"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants/company";


export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* TOP BAR */}
      <div className="hidden md:block bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>{COMPANY.phones[0]}</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>{COMPANY.email}</span>
            </div>
          </div>

          <div>{COMPANY.hours}</div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* LOGO */}
        {/* <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Rorilex.png"
            alt={COMPANY.name}
            width={100}
            height={100}
            priority
            className="object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-base font-bold text-slate-900">
              Rorilex Technical Solutions
            </h1>
            <p className="text-xs text-slate-500">
              LASTING SOLUTIONS. RELIABLE SUPPORT. QUALITY PRODUCT
            </p>
          </div>
        </Link> */}

        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/Rorilex.png"
            alt={COMPANY.name}
            width={120}
            height={120}
            priority
            className="object-contain"
          />

          <div>
            <h1 className="text-xl lg:text-2xl font-extrabold text-slate-900">
              RORILEX TECHNICAL SOLUTIONS
            </h1>

            <p className="text-sm text-slate-500 font-medium">
              LASTING SOLUTIONS • RELIABLE SUPPORT • QUALITY PRODUCT
            </p>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild>
            <Link href="/quote">Request Quote</Link>
          </Button>

          <Button variant="outline" size="icon">
            <MessageCircle size={18} />
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden ml-auto p-2 rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Slide Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b">
            <h3 className="font-semibold text-slate-900">RORILEX</h3>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col p-5">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/industries", label: "Industries" },
              { href: "/projects", label: "Projects" },
              { href: "/products", label: "Products" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  py-3 px-4
                  rounded-lg
                  text-slate-700
                  font-medium
                  hover:bg-sky-50
                  hover:text-sky-600
                  transition-all duration-200
                "
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-6 pt-6 border-t">
              <Button asChild className="w-full">
                <Link href="/quote" onClick={() => setOpen(false)}>
                  Request Quote
                </Link>
              </Button>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              <p>{COMPANY.phones[0]}</p>
              <p>{COMPANY.email}</p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
