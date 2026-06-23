import ProjectForm from "./project-form";

export default function NewProjectPage() {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Add New Project</h1>

      <ProjectForm />
    </div>
  );
}
