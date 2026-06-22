import QuoteForm from "./quote-form";

export default function QuotePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Request a Quote</h1>

      <p className="text-slate-600 mb-10">
        Tell us about your project and we'll get back to you.
      </p>

      <QuoteForm />
    </div>
  );
}
