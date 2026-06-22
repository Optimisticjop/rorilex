"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Mail, MessageCircle } from "lucide-react";
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
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Rorilex.png"
            alt={COMPANY.name}
            width={60}
            height={60}
            priority
            className="h-auto"
          />

          <div className="leading-tight">
            <h1 className="text-base font-bold text-slate-900">
              Rorilex Technical Solutions
            </h1>
            <p className="text-xs text-slate-500">
              LASTING SOLUTIONS. RELIABLE SUPPORT. QUALITY PRODUCT
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

        {/* MOBILE MENU */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </button>

        {open && (
          <div className="lg:hidden border-t">
            <nav className="flex flex-col p-4 gap-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
