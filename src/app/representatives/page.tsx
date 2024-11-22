import { RepresentativeForm } from "@/features";
import { Representatives } from "@/features";

export default function Page() {
  return (
    <main>
      <h1 className="text-center text-4xl font-bold my-10">Representatives</h1>
      <section className="flex flex-col gap-2 justify-center items-center">
        <h2 className="text-2xl font-bold">Add new representative</h2>
        <RepresentativeForm />
      </section>
      <Representatives />
    </main>
  );
}
