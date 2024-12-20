import { RepresentativeForm } from "./representative-form";
import { Representatives } from "./representatives";

export async function RepresentativePage() {
  return (
    <main className="flex flex-col justify-center items-center p-0">
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        Representatives
      </h1>
      <section className="flex flex-col gap-2 justify-center items-center w-full lg:w-3/6">
        <h2 className="text-2xl font-bold">Add new representative</h2>
        <RepresentativeForm />
      </section>
      <Representatives />
    </main>
  );
}
