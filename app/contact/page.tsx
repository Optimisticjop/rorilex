import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

          <p className="text-slate-600">
            Have a question, partnership inquiry, or need technical assistance?
            Send us a message.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
