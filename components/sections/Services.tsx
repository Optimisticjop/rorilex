import {
  Wrench,
  Shield,
  Cpu,
  Boxes,
  Settings,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Wrench,
    title: "Industrial Maintenance",
    desc: "Preventive and corrective maintenance for industrial equipment and systems.",
  },
  {
    icon: Shield,
    title: "CCTV & Security Systems",
    desc: "Installation and configuration of modern security and surveillance systems.",
  },
  {
    icon: Boxes,
    title: "General Merchandise Supply",
    desc: "Supply of office, electrical, mechanical and industrial equipment.",
  },
  {
    icon: Cpu,
    title: "Technical Consultancy",
    desc: "Expert engineering advice and technical project planning support.",
  },
  {
    icon: Settings,
    title: "Equipment Installation",
    desc: "Professional setup and commissioning of industrial equipment.",
  },
  {
    icon: GraduationCap,
    title: "Training Services",
    desc: "Technical training for staff and operational teams.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sky-600 uppercase tracking-widest text-sm">
            Our Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Industrial & Technical Solutions
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We deliver reliable engineering, procurement, and technical services
            tailored for businesses and industries across Ghana.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="group border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300 bg-white"
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center mb-4 group-hover:bg-sky-100 transition">
                  <Icon className="text-sky-600" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href="/quote"
                    className="text-sky-600 font-medium text-sm hover:underline"
                  >
                    Request Service →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center mt-16">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
