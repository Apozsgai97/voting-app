import { ClosedElection } from "@/features/elections/components/closed-election";
import { OngoingElection } from "@/features/elections/components/ongoing-election";
import { electionFeature } from "@/features/elections/instance";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  
  const election = await electionFeature.service.getElectionById(id)

  return (
    <main className="flex flex-col justify-center items-center p-0">
     <OngoingElection election={election!}/>
     <ClosedElection election={election!}/>
    </main>
  );
}
