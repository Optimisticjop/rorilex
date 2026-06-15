import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { COMPANY } from "@/lib/constants/company";

export default function Footer() {
  return (
    // <footer className="bg-slate-950 text-white">
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* COMPANY */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{COMPANY.name}</h3>

            <p className="text-slate-400">
              Delivering reliable Industrial Maintenance & Engineering Solutions
              across Ghana.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>

            <ul className="space-y-2 text-slate-400">
              <li>CCTV Installation</li>
              <li>Technical Consultancy</li>
              <li>Industrial Maintenance</li>
              <li>Equipment Installation</li>
              <li>Training Services</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>

            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>

            <div className="space-y-4 text-slate-400">
              <div className="flex gap-2">
                <Phone size={16} />
                <span>{COMPANY.phones[0]}</span>
              </div>

              <div className="flex gap-2">
                <Mail size={16} />
                <span>{COMPANY.email[0]}</span>
              </div>

              <div className="flex gap-2">
                <MapPin size={16} />
                <span>{COMPANY.address}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a href={COMPANY.facebook} target="_blank">
                <FaFacebook size={20} />
              </a>

              <a href={COMPANY.linkedin} target="_blank">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
