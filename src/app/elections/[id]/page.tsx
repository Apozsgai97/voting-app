import { ClosedElection, OngoingElection, electionFeature, representativeFeature } from "@/features";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  
  const election = await electionFeature.service.getElectionById(id)
  const representatives = await representativeFeature.service.getRepresentativesThatVoted(id)

   if (!election) {
     notFound();
   }


  return (
    <main className="flex flex-col justify-center items-center p-0">
      {election.status === "ongoing" ? (
        <OngoingElection election={election} />
      ) : (
        <ClosedElection election={election} representatives={representatives} />
      )}
    </main>
  );
}
