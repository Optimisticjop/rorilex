"use client";

import { useState } from "react";
import { createQuoteRequest } from "@/lib/actions/quotes";

export default function QuoteForm() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    const result = await createQuoteRequest(formData);

    if (result.success) {
      setSuccess(true);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <input
        name="full_name"
        placeholder="Full Name"
        required
        className="w-full border p-3 rounded-lg"
      />

      <input
        name="company_name"
        placeholder="Company Name"
        className="w-full border p-3 rounded-lg"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full border p-3 rounded-lg"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        className="w-full border p-3 rounded-lg"
      />

      <input
        name="service"
        placeholder="Service Required"
        required
        className="w-full border p-3 rounded-lg"
      />

      <textarea
        name="message"
        rows={5}
        placeholder="Project Details"
        className="w-full border p-3 rounded-lg"
      />

      <button
        type="submit"
        className="bg-sky-600 text-white px-6 py-3 rounded-lg"
      >
        Submit Request
      </button>

      {success && (
        <div className="text-green-600">
          Quote request submitted successfully.
        </div>
      )}
    </form>
  );
}
