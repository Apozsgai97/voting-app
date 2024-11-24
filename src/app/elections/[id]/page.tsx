import {
  ClosedElection,
  OngoingElection,
  electionFeature,
  representativeFeature,
} from "@/features";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const currentRepresentativeId = "550e8400-e29b-41d4-a716-446655440000";

  const currentRepresentative =
    await representativeFeature.service.getRepresentativeById(
      currentRepresentativeId
    );

  const election = await electionFeature.service.getElectionById(id);
  const representatives =
    await representativeFeature.service.getRepresentativesThatVoted(id);

  if (!election) {
    notFound();
  }

  return (
    <main className="flex flex-col justify-center items-center p-0">
      {election.status === "ongoing" ? (
        <OngoingElection
          election={election}
          currentRepresentative={currentRepresentative!}
        />
      ) : (
        <ClosedElection election={election} representatives={representatives} />
      )}
    </main>
  );
}
