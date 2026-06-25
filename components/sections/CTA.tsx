import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-24">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Need Reliable Industrial & Technical Solutions?
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-slate-300 text-lg leading-relaxed">
          Get fast quotations, expert support, and dependable procurement
          services tailored to your business needs.
        </p>

        {/* URGENCY BADGE */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm">
          ⚡ Response within 24 hours guaranteed
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600">
            <Link href="/quote">Request Quote</Link>
          </Button>

          <a
            href="https://wa.me/233598517590"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>

          <a
            href="tel:+233598517590"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white hover:text-black transition"
          >
            <PhoneCall size={18} />
            Call Now
          </a>
        </div>

        {/* SUPPORT LINE */}
        <div className="mt-12">
          <p className="text-xl font-semibold text-white">Business Hours</p>

          <p className="text-lg text-slate-300 mt-2">Monday – Friday</p>

          <p className="text-2xl font-bold text-sky-400">8:00 AM – 4:00 PM</p>
        </div>
      </div>
    </section>
  );
}
