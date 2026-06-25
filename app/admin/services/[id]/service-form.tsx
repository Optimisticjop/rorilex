"use client";

import { updateService } from "@/lib/actions/services";

export default function EditServiceForm({ service }: { service: any }) {
  const updateServiceWithId = updateService.bind(null, service.id);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Edit Service</h1>

      <form action={updateServiceWithId} className="space-y-4">
        <input
          name="title"
          defaultValue={service.title}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="short_description"
          defaultValue={service.short_description}
          rows={5}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="icon"
          defaultValue={service.icon}
          className="w-full border rounded-lg p-3"
        />

        <label className="flex gap-2">
          <input
            type="checkbox"
            name="is_featured"
            defaultChecked={service.is_featured}
          />
          Featured
        </label>

        <button
          type="submit"
          className="bg-sky-600 text-white px-6 py-3 rounded-lg"
        >
          Update Service
        </button>
      </form>
    </div>
  );
}
