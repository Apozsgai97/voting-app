import { RepresentativeForm } from "@/features/representative-choice/components/representative-form";
import { Representatives } from "@/features/representative-choice/components/representatives";


export default function Page() {
  return (
    <main>
      <h1>Representatives</h1>
      <Representatives/>
      <section>
       <h2>Add new representative</h2>
       <RepresentativeForm/>
      </section>
    </main>
  );
}
