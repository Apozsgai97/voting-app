import {
  electionFeature,
  representativeFeature,
  ElectionByIdPage,
} from "@/features";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const currentRepresentativeId = "550e8400-e29b-41d4-a716-446655440000";

  const currentRepresentative =
    await representativeFeature.service.getRepresentativeById(
      currentRepresentativeId
    );
  const election = await electionFeature.service.getElectionById(id);

  const vote = await representativeFeature.service.getVoteByIds(
    election.id,
    currentRepresentativeId
  );

  const votesByElection =
    await representativeFeature.service.getVotesByElections(election.id);

  return (
    <ElectionByIdPage
      election={election}
      vote={vote}
      votesByElection={votesByElection}
      currentRepresentative={currentRepresentative!}
    />
  );
}
