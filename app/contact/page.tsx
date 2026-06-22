import { COMPANY } from "@/lib/constants/company";

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>

          <p className="mt-6 text-slate-300">
            Let's discuss your next project.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Details */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

            <div className="space-y-4">
              <p>
                <strong>Phone:</strong> {COMPANY.phones.join(" / ")}
              </p>

              <p>
                <strong>Email:</strong> {COMPANY.email}
              </p>

              <p>
                <strong>Address:</strong> {COMPANY.address}
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <input
              placeholder="Full Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              placeholder="Email"
              className="w-full border rounded-lg p-3"
            />

            <input
              placeholder="Phone"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="w-full border rounded-lg p-3"
            />

            <button className="bg-sky-600 text-white px-6 py-3 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
