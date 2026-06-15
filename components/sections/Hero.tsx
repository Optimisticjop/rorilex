import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import { COMPANY } from "@/lib/constants/company";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-28 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="space-y-8">
          {/* TAGLINE */}
          <div className="space-y-4">
            <p className="text-sky-400 tracking-[0.25em] uppercase text-xs">
              {COMPANY.slogan}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Industrial Maintenance,
              <span className="text-sky-400"> Engineering &</span>
              <br />
              Technical Solutions
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              Delivering industrial maintenance, engineering, construction,
              software, security and procurement solutions across Ghana and West
              Africa.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600">
              <Link href="/quote">Request Quote</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black"
            >
              <Link href="/services">View Services</Link>
            </Button>

            <a
              href="https://wa.me/233598517590"
              className="flex items-center gap-2 text-green-400 hover:text-green-300"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* TRUST STRIP */}
          <div className="pt-6 flex flex-col sm:flex-row gap-6 text-sm text-slate-300 border-t border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-sky-400" />
              Certified Supply Chain
            </div>

            <div className="flex items-center gap-2">
              <Wrench className="text-sky-400" />
              Expert Engineers
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-sky-400" />
              Fast Response Time
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-sky-400">
              Our Core Services
            </h3>

            <ul className="space-y-4 text-slate-200">
              <li>✔ Industrial Maintenance Services</li>
              <li>✔ Machinery Installation</li>
              <li>✔ Structural Engineering</li>
              <li>✔ CCTV & Security Systems</li>
              <li>✔ Software Development</li>
            </ul>

            <div className="mt-8 p-4 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-300">
              ⚡ Quotation response within 24 hours guaranteed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
