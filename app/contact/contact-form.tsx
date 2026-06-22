"use client";

import { useState } from "react";
import { createContactMessage } from "@/lib/actions/contact";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    const result = await createContactMessage(formData);

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
        className="w-full border rounded-lg p-3"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        className="w-full border rounded-lg p-3"
      />

      <input
        name="subject"
        placeholder="Subject"
        className="w-full border rounded-lg p-3"
      />

      <textarea
        name="message"
        rows={6}
        required
        placeholder="Your Message"
        className="w-full border rounded-lg p-3"
      />

      <button
        type="submit"
        className="bg-sky-600 text-white px-6 py-3 rounded-lg"
      >
        Send Message
      </button>

      {success && (
        <div className="text-green-600">Message sent successfully.</div>
      )}
    </form>
  );
}
