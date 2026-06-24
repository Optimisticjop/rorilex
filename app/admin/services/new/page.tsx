import { createService } from "@/lib/actions/services";

export default function NewServicePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Add Service</h1>

      <form action={createService} className="space-y-4">
        <input
          name="title"
          required
          placeholder="Service Title"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="short_description"
          rows={5}
          placeholder="Short Description"
          className="w-full border rounded-lg p-3"
        />

        <input
          name="icon"
          placeholder="Icon Name (e.g. Wrench)"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full border rounded-lg p-3"
        />

        <label className="flex items-center gap-2">
          <input type="checkbox" name="is_featured" />
          Featured Service
        </label>

        <button
          type="submit"
          className="bg-sky-600 text-white px-6 py-3 rounded-lg"
        >
          Save Service
        </button>
      </form>
    </div>
  );
}
