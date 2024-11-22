import { RepresentativeForm } from "@/features";
import { Representatives } from "@/features";

export default function Page() {
  return (
    <main>
      <h1>Representatives</h1>
      <Representatives />
      <section>
        <h2>Add new representative</h2>
        <RepresentativeForm />
      </section>
    </main>
  );
}
