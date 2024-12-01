import {
  Buttons,
  electionFeature,
  getRepresentativeById,
  representativeFeature,
  PreviousVotesStats,
  PublicVotes,
} from "@/features";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const representative = await getRepresentativeById(id);

  const votesByRepresentative = await representativeFeature.service.getVotesByRepresentatives(id)

  const publicUserRepId =
    await representativeFeature.service.getPublicUserRepId();

  const elections = await electionFeature.service.getAllElections();

  return (
    <main className="flex flex-col justify-center items-center p-0">
      <h1 className="text-center text-4xl font-bold my-10 mt-28">
        {representative?.name || "Name"}
      </h1>
      <Buttons repId={id} publicUserRepId={publicUserRepId} />
      <div className="flex w-48 items-center justify-between"></div>
      <PublicVotes representative={representative!} />
      <p>
        <span className="font-bold">Email:</span>{" "}
        {representative?.email || "example@gmail.com"}
      </p>
      <PreviousVotesStats
        elections={elections}
        votesByRepresentative={votesByRepresentative}
      />
    </main>
  );
}
