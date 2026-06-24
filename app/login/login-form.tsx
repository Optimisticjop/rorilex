"use client";

import { useState } from "react";
import { login } from "@/lib/actions/auth";

export default function LoginForm() {
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await login(formData);

    if (result?.success === false) {
      setError(result.message);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="w-full border rounded-lg p-3"
      />

      <button
        type="submit"
        className="w-full bg-sky-600 text-white py-3 rounded-lg"
      >
        Login
      </button>

      {error && <div className="text-red-600 text-sm">{error}</div>}
    </form>
  );
}
