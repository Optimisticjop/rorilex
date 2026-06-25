import ContactForm from "./contact-form";
import { COMPANY } from "@/lib/constants/company";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            Let's discuss your next project, procurement requirements,
            engineering support or industrial maintenance needs.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-8">
                <div>
                  <p className="font-semibold text-sky-600">Email</p>

                  <p className="text-slate-600">{COMPANY.email}</p>
                </div>

                <div>
                  <p className="font-semibold text-sky-600">Phone Numbers</p>

                  {COMPANY.phones.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                </div>

                <div>
                  <p className="font-semibold text-sky-600">Office Location</p>

                  <p>{COMPANY.location}</p>
                </div>

                <div>
                  <p className="font-semibold text-sky-600">Working Hours</p>

                  <p>{COMPANY.hours}</p>
                </div>

                <div>
                  <p className="font-semibold text-sky-600">Postal Address</p>

                  <p>{COMPANY.address}</p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border">
              <h2 className="text-3xl font-bold mb-8">Send Us A Message</h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-600 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>

          <p className="mb-8 text-lg">
            Contact our technical team for engineering, procurement and
            industrial support solutions.
          </p>

          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            className="inline-flex bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
