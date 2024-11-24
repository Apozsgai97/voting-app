import { ClosedElection } from "@/features/elections/components/closed-election";
import { OngoingElection } from "@/features/elections/components/ongoing-election";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  console.log(id)

  return (
    <main className="flex flex-col justify-center items-center p-0">
     <OngoingElection/>
     <ClosedElection/>
    </main>
  );
}
